/**
 * Create view for block
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var BlockView = Backbone.View.extend({
    tagName: "div",
    className: "content-block-inner",
    initialize: function () {
//        this.$el.attr('data-model-id', this.model.id);
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        var data = this.model.toJSON();
        for (var i in data) {
            if (data[i] instanceof Backbone.Collection) {
                data[i] = data[i].toJSON();
            }
        }

        this.$el.html(this.template(data));
        this.afterRender();
        this.trigger('afterRender');
        return this;
    },
    /**
     * Trigger change builder blocks after render
     */
    afterRender: function () {
        builder.viewPort.triggerBuilderBlock();
    }
});

    