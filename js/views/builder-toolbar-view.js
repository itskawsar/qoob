/**
 * Create view for toolbar in builder layout
 *
 * @type @exp;Backbone@pro;View@call;extend
 */
var BuilderToolbarView = Backbone.View.extend(
    /** @lends BuilderMenuGroupsView.prototype */
    {
        tagName: 'div',
        attributes: function() {
            return {
                id: "builder-toolbar"
            };
        },
        events: {
            'click .preview-mode-button': 'clickPreviewMode',
            'click .device-mode-button': 'clickDeviceMode',
            'click .exit-button': 'clickExit',
            'click .save-button': 'clickSave',
            'click .autosave-checkbox': 'clickAutosave'
        },
        /**
         * View toolbar
         * @class BuilderToolbarView
         * @augments Backbone.View
         * @constructs
         */
        initialize: function(options) {
            this.storage = options.storage;
            this.controller = options.controller;
        },
        /**
         * Render toolbar
         * @returns {Object}
         */
        render: function() {
            this.$el.html(_.template(this.storage.builderTemplates['builder-toolbar'])());
            return this;
        },
        setPreviewMode: function() {
            this.$el.fadeOut(300);
        },
        setEditMode: function() {
            this.$el.fadeIn(300);
        },
        setDeviceMode: function(mode) {
            this.$el.find('.device-mode-button').removeClass('active');
            this.$el.find('.device-mode-button[name=' + mode + ']').addClass('active');
        },

        /**
         * Resize toolbar
         */
        resize: function() {
            this.$el.css({
                width: jQuery(window).width()
            });
        },
        //EVENTS
        clickPreviewMode: function() {
            this.controller.setPreviewMode();
        },
        clickDeviceMode: function(evt){
            this.controller.setDeviceMode(evt.target.name);
        },
        clickExit:function(){
        	this.controller.exit();
        },
        clickSave:function(){
			this.controller.save();
        },
        clickAutosave: function(evt){
        	this.controller.setAutoSave(evt.target.checked);
        },

        /**
         * Logo rotation
         * @param {Integer} side
         */
        logoRotation: function(side) {
            // rotate cube logo
            this.$el.find('.logo')
                .removeClass(function(index, css) {
                    return (css.match(/\bside-\S+/g) || []).join(' ');
                })
                .addClass(side);
        },

    });
