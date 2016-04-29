/**
 * Create view for menu in builder layout
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var BuilderMenuView = Backbone.View.extend({
    id: "builder-menu",
    tpl: '',
    builder: null,
    currentSide: 'side-0',
    backSide: null,
    currentRotateId: null,
    settingsViewStorage: {},

    /**
     * View menu
     * @class BuilderMenuView
     * @augments Backbone.View
     * @constructs
     */
    initialize: function (builder) {
        var self = this;
        self.builder = builder;
    },
    /**
     * Render menu
     * @returns {Object}
     */
    render: function () {
        var self = this;
        this.builder.storage.getBuilderTemplate('builder-menu', function (err, data) {
            self.tpl = _.template(data);
            self.$el.html(self.tpl());
        });

        return this;
    },
    /**
     * Create menu (blocks, settings)
     */
    create: function () {
        this.createGroups();
        this.createBlocks();
    },
    /**
     * Create groups blocks
     */
    createGroups: function () {
        var menuGroupsView = new BuilderMenuGroupsView();
        this.addView(menuGroupsView, 0);
    },
    /**
     * Create blocks menu
     */
    createBlocks: function () {
        var blocksPreviewView = new BuilderMenuBlocksPreviewView();
        this.addView(blocksPreviewView, 90);
    },
    /**
     * Resize menu
     */
    resize: function () {
        this.$el.css({
            height: jQuery(window).height() - 70,
            top: 70
        });
    },
    /**
     * Menu rotation
     * @param {Integer} id
     * @param {Boolean} back Rotate back
     */
    rotate: function (id, back) {
        if (this.currentRotateId == id)
            return;
        
        // set current rotate id
        this.currentRotateId = id;
        
        // if rotate back
        back = typeof back !== 'undefined' ? back : false;

        // current block for id
        var element = jQuery('#' + id);

        // get block side
        var side = element.closest('div[id^="side-"]');
        var sideId = element.closest('div[id^="side-"]').prop('id');

        // Set back side
        this.backSide = this.currentSide;
        
        if (this.currentSide == sideId) {
            sideId += ' side-full-rotation';
        }

        // Set current side
        this.currentSide = sideId;

        // hide all blocks side
        side.find('.menu-block').hide();

        // show current block menu
        element.show();

        // rotate cube menu
        this.$el.find('.card-main')
                .removeClass(function (index, css) {
                    return (css.match(/\bside-\S+/g) || []).join(' ');
                })
                .addClass(this.currentSide)
                .children()
                .removeClass('active');
        
        // add active class
        side.addClass('active');

        this.builder.builderLayout.toolbar.logoRotation(this.currentSide);
        Backbone.trigger('rotate');
    },
    /**
     * Rotate menu back
     * Not used
     */
    back: function () {
        var tmp = this.backSide;

        // rotate cube menu
        this.$el.find('.card-main')
                .removeClass(function (index, css) {
                    return (css.match(/\bside-\S+/g) || []).join(' ');
                })
                .addClass(this.backSide);

        // Set back side
        this.backSide = this.currentSide;

        // Set current side
        this.currentSide = tmp;
    },
    /**
     * Add view to side cube
     * @param {Object} BackboneView  View from render
     * @param {String} side Side cube
     */
    addView: function (BackboneView, side) {
        jQuery('#side-' + side).append(BackboneView.el);
    },
    
    /**
     * Delete view from settingsViewStorage
     * @param {String} view id
     */
    delView: function (id) {
        this.settingsViewStorage[id].dispose();
    }
});

