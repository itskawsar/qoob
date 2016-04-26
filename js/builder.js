/**
 * Initialize page builder
 *
 * @version 0.0.1
 * @class  Builder
 * @param {Object} options [current page id and {Object} data]
 */
//module.exports.Builder = Builder;
function Builder(options) {
    this.options = {
        blockTemplateAdapter: 'hbs',
        blockPreviewUrl: "preview.png"
    };
    _.extend(this.options, options);
    delete this.options.storage;
    this.storage = options.storage;
    this.loader = new BuilderLoader(this);        
}

/*
 * Getting driver page id for iframe
 * @param integer pageId id of the page
 * @returns string URL
 */
Builder.prototype.getIframePageUrl = function (pageId) {
    return this.driver.getIframePageUrl(pageId);
};


/**
 * Out of the Builder
 */
Builder.prototype.exit = function () {
    this.storage.driver.exit(this.storage.pageId);
};

/**
 * Autosave page data for interval
 */
Builder.prototype.autosavePageData = function () {
    var self = this;
    if (jQuery('.checkbox-sb input').prop("checked")) {
        var intervalId = setInterval(function () {
            if (!jQuery('.checkbox-sb input').prop("checked")) {
                clearInterval(intervalId);
            } else {
                self.save();
            }
        }, 60000);
    }
};

/**
 * Make layout size
 */
Builder.prototype.makeLayoutSize = function () {
    this.toolbar.resize();
    this.menu.resize();
    this.viewPort.resize();
    this.viewPort.resizeIframe();
};

/**
 * Activate page builder
 */
Builder.prototype.activate = function () {
    var self = this;
    self.loader.add(4);
    //Creating and appending builder layout
    self.builderLayout = new BuilderLayout(self);
    jQuery('body').prepend(self.builderLayout.el);
    self.loader.sub();
    
    self.loader.sub();
    jQuery(window).resize(function () {
        self.makeLayoutSize();
    });
    self.viewPort.onLoad(function () {
        self.storage.getBuilderData(function (err, builderData) {
            self.menu.create();
            self.loader.sub();
            // Autosave
            self.autosavePageData();
            self.storage.getPageData(function (err, pageData) {
                if (pageData.length > 0) {
                    self.loader.add(pageData.length);
                }
                self.viewPort.create(pageData);
                self.loader.sub();
                self.makeLayoutSize();
            });

        });
    });
    
};
