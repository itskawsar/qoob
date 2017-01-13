var QoobController = Backbone.Router.extend({
    routes: {
        "index": "index",
        "": "index", // Empty hash-tag
        "groups/:group": "showGroup", // #groups/name
        "edit/:blockId": "startEditBlock", // #groups/name
        "more": "showMore",
        "manage-libs": "showManageLibs"
    },
    index: function() {
        this.layout.menu.showIndex();
        this.layout.stopEditBlock();
        this.layout.toolbar.logoRotation('side-0');
    },
    showGroup: function(group) {
        this.layout.menu.showGroup(group);
        this.layout.toolbar.logoRotation('side-90');
    },
    setLayout: function(layout) {
        this.layout = layout;
    },
    setPageModel: function(model) {
        this.pageModel = model;
    },
    setStorage: function(storage) {
        this.storage = storage;
    },
    setPreviewMode: function() {
        this.layout.setPreviewMode();
    },
    setEditMode: function() {
        this.layout.setEditMode();
    },
    setDeviceMode: function(mode) {
        this.layout.setDeviceMode(mode);
    },
    /**
     * Autosave page data for interval
     * @param {Boolean} autosave
     */
    setAutoSave: function(autosave) {
        this.autosave = autosave;

        var self = this;
        if (this.autosave) {
            var intervalId = setInterval(function() {
                if (self.autosave) {
                    self.save();
                } else {
                    clearInterval(intervalId);
                }
            }, 60000);
        }
    },
    /**
     * Save page data
     * @param {createBlockCallback} cb - A callback to run.
     */
    save: function(cb) {
        var self = this;

        // show clock autosave
        this.layout.toolbar.showSaveLoader();

        var json = JSON.parse(JSON.stringify(this.pageModel.toJSON()));
        json.version = window.QoobVersion;
        var html = '';
        var blocks = this.pageModel.get('blocks').models;
        for (var i = 0; i < blocks.length; i++) {
            var blockModel = blocks[i];
            var blockView = this.layout.viewPort.getBlockView(blockModel.id);
            html += blockView.innerBlock.renderedTemplate;
        }

        this.storage.save(json, html, function(err, status) {
            // hide clock autosave
            self.layout.toolbar.hideSaveLoader();
            // Make sure the callback is a function​
            if (typeof cb === "function") {
                // Call it, since we have confirmed it is callable​
                cb(err, status);
            }
        });
    },
    /**
     * Out of the Qoob
     */
    exit: function() {
        var self = this;
        if (this.autosave) {
            this.save(function(err, status) {
                self.storage.driver.exit(self.storage.pageId);
            });
        } else {
            this.storage.driver.exit(this.storage.pageId);
        }
    },
    showMore: function() {
        this.layout.menu.rotateForward('save-template');
        this.layout.toolbar.logoRotation('side-90');
        this.layout.stopEditBlock();
    },
    showManageLibs: function() {
        this.navigate('manage-libs');
        this.layout.menu.rotateForward('manage-libs');
        this.layout.toolbar.logoRotation('side-90');
    },
    addNewBlock: function(lib, block, afterId) {
        var blockConfig = this.storage.getBlockConfig(lib, block);

        this.addBlock(QoobUtils.getDefaultSettings(blockConfig, blockConfig.name), afterId);
    },
    addBlock: function(values, afterId, scroll) {
        scroll = (scroll == undefined) ? true : scroll;

        var model = QoobUtils.createModel(values);

        this.pageModel.addBlock(model, afterId);
        this.layout.viewPort.addBlock(model, afterId);
        this.layout.menu.addSettings(model, afterId);
        if (scroll) {
            this.scrollTo(model.id);
        }

        // Remove empty div for mobile
        if (jQuery('#qoob-viewport').find('div').length > 0) {
            jQuery('#qoob-viewport').find('div').remove();
        }
    },
    startEditBlock: function(blockId) {
        this.layout.startEditBlock(blockId);
        this.scrollTo(blockId);
    },
    stopEditBlock: function() {
        this.layout.stopEditBlock();
        this.navigate('index', {
            trigger: true
        });
    },
    load: function(blocks) {
        if (blocks.length == 0) {
            this.layout.viewPort.trigger('blocks_loaded');
        } else {
            for (var i = 0; i < blocks.length; i++) {
                this.addBlock(blocks[i], null, false);
            }
        }
    },
    setInnerSettingsView: function(view) {
        //Creating storage for views
        this.layout.menu.settingsViewStorage = this.layout.menu.settingsViewStorage || [];
        var name = view.$el.data('side-id');
        //Add view to the qoob side
        if (!!this.layout.menu.settingsViewStorage[name]) {
            this.deleteInnerSettingsView(name);
        }
        this.layout.menu.addView(view, 270);
        this.layout.menu.rotateForward(name);
        this.layout.menu.settingsViewStorage[name] = view;
    },
    deleteInnerSettingsView: function(name) {
        this.layout.menu.delView(name);
        delete this.layout.menu.settingsViewStorage[name];
    },
    deleteBlock: function(model) {
        this.pageModel.deleteBlock(model);
        this.layout.viewPort.delBlockView(model);
        this.layout.menu.deleteSettings(model);
        this.triggerIframe();
    },
    moveDownBlock: function(model) {
        this.pageModel.moveDown(model);
    },
    moveUpBlock: function(model) {
        this.pageModel.moveUp(model);
    },
    triggerIframe: function() {
        this.layout.viewPort.triggerIframe();
    },
    changeLib: function(name) {
        this.storage.currentLib = name;
        this.layout.menu.hideLibsExcept(name);
    },
    /**
     * Add new library
     * @param url {String}
     * @param {Function} cb A callback to run.
     */
    addLibrary: function(url, cb) {
        var self = this;
        this.storage.getLibraryByUrl(url, function(error, dataLib) {
            if (!error && _.isArray(dataLib)) {
                var jsonLib = _.first(dataLib);
                if (jsonLib.name.length > 0) {
                    self.storage.driver.loadLibrariesData(function(error, libraries) {
                        libraries.push(jsonLib);
                        self.storage.driver.saveLibrariesData(libraries, function(error, state) {
                            cb(error, state);
                        });
                    });
                }
            }
        });
    },
    /**
     * Update library
     * @param name {String} name library
     * @param url {String} url library
     * @param {Function} cb A callback to run.
     */
    updateLibrary: function(name, url, cb) {
        var self = this;
        this.storage.getLibraryByUrl(url, function(error, dataLib) {
            if (!error && _.isArray(dataLib)) {
                var jsonLib = _.first(dataLib);
                if (jsonLib.name.length > 0) {
                    self.storage.driver.loadLibrariesData(function(error, libraries) {
                        libraries = _.without(libraries, _.findWhere(libraries, {
                          name: name
                        }));

                        libraries.push(jsonLib);

                        self.storage.driver.saveLibrariesData(libraries, function(error, state) {
                            cb(error, state);
                        });
                    });
                }
            }
        });
    },
    /**
     * Remove library
     * @param name {String} name library
     * @param {Function} cb A callback to run.
     */
    removeLibrary: function(name, cb) {
        var self = this;

        this.storage.driver.loadLibrariesData(function(error, libraries) {
            libraries = _.without(libraries, _.findWhere(libraries, {
              name: name
            }));

            self.storage.driver.saveLibrariesData(libraries, function(error, state) {
                cb(error, state);
            });
        });
    },
    /**
     * Scroll to block
     */
    scrollTo: function(modelId) {
        this.layout.viewPort.scrollTo(modelId);
    },
    /**
     * Get current params from Backbone.history.fragment
     */
    current: function() {
        var Router = this,
            fragment = Backbone.history.fragment,
            routes = _.pairs(Router.routes),
            route = null,
            params = null,
            matched;

        matched = _.find(routes, function(handler) {
            route = _.isRegExp(handler[0]) ? handler[0] : Router._routeToRegExp(handler[0]);
            return route.test(fragment);
        });

        if (matched) {
            // NEW: Extracts the params using the internal
            // function _extractParameters 
            params = Router._extractParameters(route, fragment);
            route = matched[1];
        }

        return {
            route: route,
            fragment: fragment,
            params: params
        };
    },
    /**
     * Create template
     */
    createTemplate: function(templateInfo, cb) {
        var self = this;
        var dataPage = JSON.parse(JSON.stringify(this.pageModel.toJSON()));
        var newTemplate = _.extend(templateInfo, dataPage);

        if (dataPage.blocks.length > 0) {
            this.showMenuOverlay();
            this.storage.createTemplate(newTemplate, function(error, state){
                cb(error, status);
            });
        }
    },
    /**
     * Remove template
     */
    removeTemplateBlock: function(id) {
        this.storage.removeTemplate(id);
    },
    /**
     * Change default blank viewport when blocks is null
     */
    changeDefaultPage: function(event) {
        this.layout.viewPort.changeDefaultPage(event);
    },
    /**
     * Show overlay on qoob menu
     */
    showMenuOverlay: function() {
        this.layout.menu.showOverlay();
    },
    /**
     * Hide overlay on qoob menu
     */
    hideMenuOverlay: function() {
        this.layout.menu.hideOverlay();
    }
});