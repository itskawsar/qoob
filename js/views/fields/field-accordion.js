var Fields = Fields || {};
Fields.accordion = Backbone.View.extend(
        /** @lends Fields.accordion.prototype */{
            className: "settings-item",
            uniqueId: null,
            tpl: null,
            classNameItem: "",
            events: {
                'click .add-block': 'addNewItem',
                'drop': 'changePosition'
            },
            /**
             * View field accordion
             * @class Fields.accordion
             * @augments Backbone.View
             * @constructs
             */
            initialize: function (options) {
                this.model = options.model;
                this.settings = options.settings;
                this.storage = options.storage;
                this.controller = options.controller;
                this.tpl = _.template(this.storage.builderTemplates['field-accordion']);
            },
            /**
             * Change position blocks accordion
             * @param {Object} event
             * @param {integer} position
             */
            changePosition: function (event, position) {
                var self = this,
                        values = this.getValue(),
                        blocks = this.$el.find('#' + this.getUniqueId()).children('.settings-accordion');

                blocks.each(function (index, listItem) {
                    var dataId = self.$(listItem).data('model-id'),
                            model = values.get(dataId);
                    model.set('order', self.$(listItem).index() - 1);
                });
            },
            /**
             * Get value field accordion
             * @returns {String}
             */
            getValue: function () {
                return this.model.get(this.settings.name) || this.settings.default;
            },
            /**
             * Get unique id
             * @returns {String}
             */
            getUniqueId: function () {
                return this.uniqueId = this.uniqueId || _.uniqueId('accordion-');
            },
            /**
             * Add new item to accordion
             * @param {Object} e
             */
            addNewItem: function (e) {
                e.preventDefault();

                var self = this,
                        values = this.getValue(),
                        settings = this.settigns.settings,
                        settingsParams = [],
                        data = [];

                for (var i in settings) {
                    settingsParams.push({'name': settings[i].name, 'default': settings[i].default});
                }

                for (var i = 0; i < settingsParams.length; i++) {
                    data[settingsParams[i].name] = settingsParams[i].default;
                }

                values.add(BuilderUtils.createModel(data));
                var item = new Fields[this.classNameItem]({
                    model: BuilderUtils.createModel(data),
                    settings: this.settings,
                    storage: this.storage,
                    controller: this.controller
                });

                this.model.listenTo(item.model, "change", function () {
                    this.trigger('change');
                    self.changePosition();
                });

                item.model.set('order', (values.models ? values.models.length - 1 : 0));

                this.$el.find("#" + this.getUniqueId()).append(item.render().el);
                this.$el.find("#" + this.getUniqueId()).accordion("refresh");
                values.trigger('change');
            },
            /**
             * Render filed accordion
             * @returns {Object}
             */
            render: function () {
                var values = this.getValue(),
                        settings = this.settings.settings,
                        items = [],
                        valueModels = values.models;
                // sort accordion settings
                valueModels = _.sortBy(valueModels, function (model) {
                    return model.get('order');
                });
                this.classNameItem = (this.settings.viewType === undefined || this.settings.viewType === "expand") ? 'accordion_item_expand' : 'accordion_item_flip';

                for (var i = 0; i < valueModels.length; i++) {
                    var item = new Fields[this.classNameItem]({
                        model: valueModels[i],
                        settings: this.settings,
                        storage: this.storage,
                        controller: this.controller
                    });
                    
                    this.model.listenTo(item.model, "change", function () {
                        this.trigger('change');
                        this.changePosition();
                    });
                    
                    items.push(item.render().el);
                }

                var htmldata = {
                    "label": this.settings.label,
                    "uniqueId": this.getUniqueId(),
                    "settings": settings
                };

                if (typeof (this.settings.show) == "undefined" || this.settings.show(this.model)) {
                    this.$el.html(this.accordionTpl(htmldata)).find('#' + this.getUniqueId()).append(items);
                }
                return this;
            }
        });