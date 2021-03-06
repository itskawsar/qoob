/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2013 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);;
/*!
 * bootstrap-progressbar v0.9.0 by @minddust
 * Copyright (c) 2012-2015 Stephan Groß
 *
 * http://www.minddust.com/project/bootstrap-progressbar/
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function($) {

    'use strict';

    // PROGRESSBAR CLASS DEFINITION
    // ============================

    var Progressbar = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Progressbar.defaults, options);
    };

    Progressbar.defaults = {
        transition_delay: 300,
        refresh_speed: 50,
        display_text: 'none',
        use_percentage: true,
        percent_format: function(percent) { return percent + '%'; },
        amount_format: function(amount_part, amount_max, amount_min) { return amount_part + ' / ' + amount_max; },
        update: $.noop,
        done: $.noop,
        fail: $.noop
    };

    Progressbar.prototype.transition = function() {
        var $this = this.$element;
        var $parent = $this.parent();
        var $back_text = this.$back_text;
        var $front_text = this.$front_text;
        var options = this.options;
        var data_transitiongoal = parseInt($this.attr('data-transitiongoal'));
        var aria_valuemin = parseInt($this.attr('aria-valuemin')) || 0;
        var aria_valuemax = parseInt($this.attr('aria-valuemax')) || 100;
        var is_vertical = $parent.hasClass('vertical');
        var update = options.update && typeof options.update === 'function' ? options.update : Progressbar.defaults.update;
        var done = options.done && typeof options.done === 'function' ? options.done : Progressbar.defaults.done;
        var fail = options.fail && typeof options.fail === 'function' ? options.fail : Progressbar.defaults.fail;

        if (isNaN(data_transitiongoal)) {
            fail('data-transitiongoal not set');
            return;
        }
        var percentage = Math.round(100 * (data_transitiongoal - aria_valuemin) / (aria_valuemax - aria_valuemin));

        if (options.display_text === 'center' && !$back_text && !$front_text) {
            this.$back_text = $back_text = $('<span>').addClass('progressbar-back-text').prependTo($parent);
            this.$front_text = $front_text = $('<span>').addClass('progressbar-front-text').prependTo($this);

            var parent_size;

            if (is_vertical) {
                parent_size = $parent.css('height');
                $back_text.css({height: parent_size, 'line-height': parent_size});
                $front_text.css({height: parent_size, 'line-height': parent_size});

                $(window).resize(function() {
                    parent_size = $parent.css('height');
                    $back_text.css({height: parent_size, 'line-height': parent_size});
                    $front_text.css({height: parent_size, 'line-height': parent_size});
                }); // normal resizing would brick the structure because width is in px
            }
            else {
                parent_size = $parent.css('width');
                $front_text.css({width: parent_size});

                $(window).resize(function() {
                    parent_size = $parent.css('width');
                    $front_text.css({width: parent_size});
                }); // normal resizing would brick the structure because width is in px
            }
        }

        setTimeout(function() {
            var current_percentage;
            var current_value;
            var this_size;
            var parent_size;
            var text;

            if (is_vertical) {
                $this.css('height', percentage + '%');
            }
            else {
                $this.css('width', percentage + '%');
            }

            var progress = setInterval(function() {
                if (is_vertical) {
                    this_size = $this.height();
                    parent_size = $parent.height();
                }
                else {
                    this_size = $this.width();
                    parent_size = $parent.width();
                }

                current_percentage = Math.round(100 * this_size / parent_size);
                current_value = Math.round(aria_valuemin + this_size / parent_size * (aria_valuemax - aria_valuemin));

                if (current_percentage >= percentage) {
                    current_percentage = percentage;
                    current_value = data_transitiongoal;
                    done($this);
                    clearInterval(progress);
                }

                if (options.display_text !== 'none') {
                    text = options.use_percentage ? options.percent_format(current_percentage) : options.amount_format(current_value, aria_valuemax, aria_valuemin);

                    if (options.display_text === 'fill') {
                        $this.text(text);
                    }
                    else if (options.display_text === 'center') {
                        $back_text.text(text);
                        $front_text.text(text);
                    }
                }
                $this.attr('aria-valuenow', current_value);

                update(current_percentage, $this);
            }, options.refresh_speed);
        }, options.transition_delay);
    };


    // PROGRESSBAR PLUGIN DEFINITION
    // =============================

    var old = $.fn.progressbar;

    $.fn.progressbar = function(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.progressbar');
            var options = typeof option === 'object' && option;

            if (data && options) {
                $.extend(data.options, options);
            }

            if (!data) {
                $this.data('bs.progressbar', (data = new Progressbar(this, options)));
            }
            data.transition();
        });
    };

    $.fn.progressbar.Constructor = Progressbar;


    // PROGRESSBAR NO CONFLICT
    // =======================

    $.fn.progressbar.noConflict = function () {
        $.fn.progressbar = old;
        return this;
    };

})(window.jQuery);
;
/*!
 * Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a){"use strict";function b(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b.replace(this.re,this.ch)}),b}function c(a){var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c="(?:"+Object.keys(b).join("|")+")",d=new RegExp(c),e=new RegExp(c,"g"),f=null==a?"":""+a;return d.test(f)?f.replace(e,function(a){return b[a]}):f}function d(b,c){var d=arguments,f=b,g=c;[].shift.apply(d);var h,i=this.each(function(){var b=a(this);if(b.is("select")){var c=b.data("selectpicker"),i="object"==typeof f&&f;if(c){if(i)for(var j in i)i.hasOwnProperty(j)&&(c.options[j]=i[j])}else{var k=a.extend({},e.DEFAULTS,a.fn.selectpicker.defaults||{},b.data(),i);k.template=a.extend({},e.DEFAULTS.template,a.fn.selectpicker.defaults?a.fn.selectpicker.defaults.template:{},b.data().template,i.template),b.data("selectpicker",c=new e(this,k,g))}"string"==typeof f&&(h=c[f]instanceof Function?c[f].apply(c,d):c.options[f])}});return"undefined"!=typeof h?h:i}String.prototype.includes||!function(){var a={}.toString,b=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),c="".indexOf,d=function(b){if(null==this)throw new TypeError;var d=String(this);if(b&&"[object RegExp]"==a.call(b))throw new TypeError;var e=d.length,f=String(b),g=f.length,h=arguments.length>1?arguments[1]:void 0,i=h?Number(h):0;i!=i&&(i=0);var j=Math.min(Math.max(i,0),e);return g+j>e?!1:-1!=c.call(d,f,i)};b?b(String.prototype,"includes",{value:d,configurable:!0,writable:!0}):String.prototype.includes=d}(),String.prototype.startsWith||!function(){var a=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),b={}.toString,c=function(a){if(null==this)throw new TypeError;var c=String(this);if(a&&"[object RegExp]"==b.call(a))throw new TypeError;var d=c.length,e=String(a),f=e.length,g=arguments.length>1?arguments[1]:void 0,h=g?Number(g):0;h!=h&&(h=0);var i=Math.min(Math.max(h,0),d);if(f+i>d)return!1;for(var j=-1;++j<f;)if(c.charCodeAt(i+j)!=e.charCodeAt(j))return!1;return!0};a?a(String.prototype,"startsWith",{value:c,configurable:!0,writable:!0}):String.prototype.startsWith=c}(),Object.keys||(Object.keys=function(a,b,c){c=[];for(b in a)c.hasOwnProperty.call(a,b)&&c.push(b);return c}),a.fn.triggerNative=function(a){var b,c=this[0];c.dispatchEvent?("function"==typeof Event?b=new Event(a,{bubbles:!0}):(b=document.createEvent("Event"),b.initEvent(a,!0,!1)),c.dispatchEvent(b)):(c.fireEvent&&(b=document.createEventObject(),b.eventType=a,c.fireEvent("on"+a,b)),this.trigger(a))},a.expr[":"].icontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.includes(d[3].toUpperCase())},a.expr[":"].ibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())},a.expr[":"].aicontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.includes(d[3].toUpperCase())},a.expr[":"].aibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())};var e=function(b,c,d){d&&(d.stopPropagation(),d.preventDefault()),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=e.prototype.val,this.render=e.prototype.render,this.refresh=e.prototype.refresh,this.setStyle=e.prototype.setStyle,this.selectAll=e.prototype.selectAll,this.deselectAll=e.prototype.deselectAll,this.destroy=e.prototype.destroy,this.remove=e.prototype.remove,this.show=e.prototype.show,this.hide=e.prototype.hide,this.init()};e.VERSION="1.10.0",e.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(a,b){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){return[1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1},e.prototype={constructor:e,init:function(){var b=this,c=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(a){b.$element.trigger("hide.bs.select",a)},"hidden.bs.dropdown":function(a){b.$element.trigger("hidden.bs.select",a)},"show.bs.dropdown":function(a){b.$element.trigger("show.bs.select",a)},"shown.bs.dropdown":function(a){b.$element.trigger("shown.bs.select",a)}}),b.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){b.$button.addClass("bs-invalid").focus(),b.$element.on({"focus.bs.select":function(){b.$button.focus(),b.$element.off("focus.bs.select")},"shown.bs.select":function(){b.$element.val(b.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&b.$button.removeClass("bs-invalid"),b.$element.off("rendered.bs.select")}})}),setTimeout(function(){b.$element.trigger("loaded.bs.select")})},createDropdown:function(){var b=this.multiple||this.options.showTick?" show-tick":"",d=this.$element.parent().hasClass("input-group")?" input-group-btn":"",e=this.autofocus?" autofocus":"",f=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",g=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+c(this.options.liveSearchPlaceholder)+'"')+"></div>":"",h=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",i=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",j='<div class="btn-group bootstrap-select'+b+d+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+e+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+f+g+h+'<ul class="dropdown-menu inner" role="menu"></ul>'+i+"</div></div>";return a(j)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul")[0].innerHTML=b,a},reloadLi:function(){this.destroyLi();var a=this.createLi();this.$menuInner[0].innerHTML=a},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var d=this,e=[],f=0,g=document.createElement("option"),h=-1,i=function(a,b,c,d){return"<li"+("undefined"!=typeof c&""!==c?' class="'+c+'"':"")+("undefined"!=typeof b&null!==b?' data-original-index="'+b+'"':"")+("undefined"!=typeof d&null!==d?'data-optgroup="'+d+'"':"")+">"+a+"</li>"},j=function(a,e,f,g){return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+("undefined"!=typeof f?' style="'+f+'"':"")+(d.options.liveSearchNormalize?' data-normalized-text="'+b(c(a))+'"':"")+("undefined"!=typeof g||null!==g?' data-tokens="'+g+'"':"")+">"+a+'<span class="'+d.options.iconBase+" "+d.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(h--,!this.$element.find(".bs-title-option").length)){var k=this.$element[0];g.className="bs-title-option",g.appendChild(document.createTextNode(this.options.title)),g.value="",k.insertBefore(g,k.firstChild),void 0===a(k.options[k.selectedIndex]).attr("selected")&&(g.selected=!0)}return this.$element.find("option").each(function(b){var c=a(this);if(h++,!c.hasClass("bs-title-option")){var g=this.className||"",k=this.style.cssText,l=c.data("content")?c.data("content"):c.html(),m=c.data("tokens")?c.data("tokens"):null,n="undefined"!=typeof c.data("subtext")?'<small class="text-muted">'+c.data("subtext")+"</small>":"",o="undefined"!=typeof c.data("icon")?'<span class="'+d.options.iconBase+" "+c.data("icon")+'"></span> ':"",p="OPTGROUP"===this.parentNode.tagName,q=this.disabled||p&&this.parentNode.disabled;if(""!==o&&q&&(o="<span>"+o+"</span>"),d.options.hideDisabled&&q&&!p)return void h--;if(c.data("content")||(l=o+'<span class="text">'+l+n+"</span>"),p&&c.data("divider")!==!0){var r=" "+this.parentNode.className||"";if(0===c.index()){f+=1;var s=this.parentNode.label,t="undefined"!=typeof c.parent().data("subtext")?'<small class="text-muted">'+c.parent().data("subtext")+"</small>":"",u=c.parent().data("icon")?'<span class="'+d.options.iconBase+" "+c.parent().data("icon")+'"></span> ':"";s=u+'<span class="text">'+s+t+"</span>",0!==b&&e.length>0&&(h++,e.push(i("",null,"divider",f+"div"))),h++,e.push(i(s,null,"dropdown-header"+r,f))}if(d.options.hideDisabled&&q)return void h--;e.push(i(j(l,"opt "+g+r,k,m),b,"",f))}else c.data("divider")===!0?e.push(i("",b,"divider")):c.data("hidden")===!0?e.push(i(j(l,g,k,m),b,"hidden is-hidden")):(this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName&&(h++,e.push(i("",null,"divider",f+"div"))),e.push(i(j(l,g,k,m),b)));d.liObj[b]=h}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),e.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c,d=this;b!==!1&&this.$element.find("option").each(function(a){var b=d.findLis().eq(d.liObj[a]);d.setDisabled(a,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,b),d.setSelected(a,this.selected,b)}),this.tabIndex();var e=this.$element.find("option").map(function(){if(this.selected){if(d.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var b,c=a(this),e=c.data("icon")&&d.options.showIcon?'<i class="'+d.options.iconBase+" "+c.data("icon")+'"></i> ':"";return b=d.options.showSubtext&&c.data("subtext")&&!d.multiple?' <small class="text-muted">'+c.data("subtext")+"</small>":"","undefined"!=typeof c.attr("title")?c.attr("title"):c.data("content")&&d.options.showContent?c.data("content"):e+c.html()+b}}).toArray(),f=this.multiple?e.join(this.options.multipleSeparator):e[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var g=this.options.selectedTextFormat.split(">");if(g.length>1&&e.length>g[1]||1==g.length&&e.length>=2){c=this.options.hideDisabled?", [disabled]":"";var h=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+c).length,i="function"==typeof this.options.countSelectedText?this.options.countSelectedText(e.length,h):this.options.countSelectedText;f=i.replace("{0}",e.length.toString()).replace("{1}",h.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(f=this.options.title),f||(f="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",a.trim(f.replace(/<[^>]*>?/g,""))),this.$button.children(".filter-option").html(f),this.$element.trigger("rendered.bs.select")},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(b){if(b||this.options.size!==!1&&!this.sizeInfo){var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("ul"),f=document.createElement("li"),g=document.createElement("li"),h=document.createElement("a"),i=document.createElement("span"),j=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,k=this.options.liveSearch?document.createElement("div"):null,l=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,m=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(i.className="text",c.className=this.$menu[0].parentNode.className+" open",d.className="dropdown-menu open",e.className="dropdown-menu inner",f.className="divider",i.appendChild(document.createTextNode("Inner text")),h.appendChild(i),g.appendChild(h),e.appendChild(g),e.appendChild(f),j&&d.appendChild(j),k){var n=document.createElement("span");k.className="bs-searchbox",n.className="form-control",k.appendChild(n),d.appendChild(k)}l&&d.appendChild(l),d.appendChild(e),m&&d.appendChild(m),c.appendChild(d),document.body.appendChild(c);var o=h.offsetHeight,p=j?j.offsetHeight:0,q=k?k.offsetHeight:0,r=l?l.offsetHeight:0,s=m?m.offsetHeight:0,t=a(f).outerHeight(!0),u="function"==typeof getComputedStyle?getComputedStyle(d):!1,v=u?null:a(d),w=parseInt(u?u.paddingTop:v.css("paddingTop"))+parseInt(u?u.paddingBottom:v.css("paddingBottom"))+parseInt(u?u.borderTopWidth:v.css("borderTopWidth"))+parseInt(u?u.borderBottomWidth:v.css("borderBottomWidth")),x=w+parseInt(u?u.marginTop:v.css("marginTop"))+parseInt(u?u.marginBottom:v.css("marginBottom"))+2;document.body.removeChild(c),this.sizeInfo={liHeight:o,headerHeight:p,searchHeight:q,actionsHeight:r,doneButtonHeight:s,dividerHeight:t,menuPadding:w,menuExtras:x}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),this.options.size!==!1){var b,c,d,e,f=this,g=this.$menu,h=this.$menuInner,i=a(window),j=this.$newElement[0].offsetHeight,k=this.sizeInfo.liHeight,l=this.sizeInfo.headerHeight,m=this.sizeInfo.searchHeight,n=this.sizeInfo.actionsHeight,o=this.sizeInfo.doneButtonHeight,p=this.sizeInfo.dividerHeight,q=this.sizeInfo.menuPadding,r=this.sizeInfo.menuExtras,s=this.options.hideDisabled?".disabled":"",t=function(){d=f.$newElement.offset().top-i.scrollTop(),e=i.height()-d-j};if(t(),"auto"===this.options.size){var u=function(){var i,j=function(b,c){return function(d){return c?d.classList?d.classList.contains(b):a(d).hasClass(b):!(d.classList?d.classList.contains(b):a(d).hasClass(b))}},p=f.$menuInner[0].getElementsByTagName("li"),s=Array.prototype.filter?Array.prototype.filter.call(p,j("hidden",!1)):f.$lis.not(".hidden"),u=Array.prototype.filter?Array.prototype.filter.call(s,j("dropdown-header",!0)):s.filter(".dropdown-header");t(),b=e-r,f.options.container?(g.data("height")||g.data("height",g.height()),c=g.data("height")):c=g.height(),f.options.dropupAuto&&f.$newElement.toggleClass("dropup",d>e&&c>b-r),f.$newElement.hasClass("dropup")&&(b=d-r),i=s.length+u.length>3?3*k+r-2:0,g.css({"max-height":b+"px",overflow:"hidden","min-height":i+l+m+n+o+"px"}),h.css({"max-height":b-l-m-n-o-q+"px","overflow-y":"auto","min-height":Math.max(i-q,0)+"px"})};u(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",u),i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",u)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(s).length>this.options.size){var v=this.$lis.not(".divider").not(s).children().slice(0,this.options.size).last().parent().index(),w=this.$lis.slice(0,v+1).filter(".divider").length;b=k*this.options.size+w*p+q,f.options.container?(g.data("height")||g.data("height",g.height()),c=g.data("height")):c=g.height(),f.options.dropupAuto&&this.$newElement.toggleClass("dropup",d>e&&c>b-r),g.css({"max-height":b+l+m+n+o+"px",overflow:"hidden","min-height":""}),h.css({"max-height":b-q+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var a=this.$menu.parent().clone().appendTo("body"),b=this.options.container?this.$newElement.clone().appendTo("body"):a,c=a.children(".dropdown-menu").outerWidth(),d=b.css("width","auto").children("button").outerWidth();a.remove(),b.remove(),this.$newElement.css("width",Math.max(c,d)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=a('<div class="bs-container" />');var b,c,d=this,e=function(a){d.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),c=a.hasClass("dropup")?0:a[0].offsetHeight,d.$bsContainer.css({top:b.top+c,left:b.left,width:a[0].offsetWidth})};this.$button.on("click",function(){var b=a(this);d.isDisabled()||(e(d.$newElement),d.$bsContainer.appendTo(d.options.container).toggleClass("open",!b.hasClass("open")).append(d.$menu))}),a(window).on("resize scroll",function(){e(d.$newElement)}),this.$element.on("hide.bs.select",function(){d.$menu.data("height",d.$menu.height()),d.$bsContainer.detach()})},setSelected:function(a,b,c){c||(c=this.findLis().eq(this.liObj[a])),c.toggleClass("selected",b)},setDisabled:function(a,b,c){c||(c=this.findLis().eq(this.liObj[a])),b?c.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1):c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var a=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled")),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!a.isDisabled()})},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var b=this,c=a(document);this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation()}),c.data("spaceSelect",!1),this.$button.on("keyup",function(a){/(32)/.test(a.keyCode.toString(10))&&c.data("spaceSelect")&&(a.preventDefault(),c.data("spaceSelect",!1))}),this.$button.on("click",function(){b.setSize()}),this.$element.on("shown.bs.select",function(){if(b.options.liveSearch||b.multiple){if(!b.multiple){var a=b.liObj[b.$element[0].selectedIndex];if("number"!=typeof a||b.options.size===!1)return;var c=b.$lis.eq(a)[0].offsetTop-b.$menuInner[0].offsetTop;c=c-b.$menuInner[0].offsetHeight/2+b.sizeInfo.liHeight/2,b.$menuInner[0].scrollTop=c}}else b.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(c){var d=a(this),e=d.parent().data("originalIndex"),f=b.$element.val(),g=b.$element.prop("selectedIndex");if(b.multiple&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var h=b.$element.find("option"),i=h.eq(e),j=i.prop("selected"),k=i.parent("optgroup"),l=b.options.maxOptions,m=k.data("maxOptions")||!1;if(b.multiple){if(i.prop("selected",!j),b.setSelected(e,!j),d.blur(),l!==!1||m!==!1){var n=l<h.filter(":selected").length,o=m<k.find("option:selected").length;if(l&&n||m&&o)if(l&&1==l)h.prop("selected",!1),i.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(e,!0);else if(m&&1==m){k.find("option:selected").prop("selected",!1),i.prop("selected",!0);var p=d.parent().data("optgroup");b.$menuInner.find('[data-optgroup="'+p+'"]').removeClass("selected"),b.setSelected(e,!0)}else{var q="function"==typeof b.options.maxOptionsText?b.options.maxOptionsText(l,m):b.options.maxOptionsText,r=q[0].replace("{n}",l),s=q[1].replace("{n}",m),t=a('<div class="notify"></div>');q[2]&&(r=r.replace("{var}",q[2][l>1?0:1]),s=s.replace("{var}",q[2][m>1?0:1])),i.prop("selected",!1),b.$menu.append(t),l&&n&&(t.append(a("<div>"+r+"</div>")),b.$element.trigger("maxReached.bs.select")),m&&o&&(t.append(a("<div>"+s+"</div>")),b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(e,!1)},10),t.delay(750).fadeOut(300,function(){a(this).remove()})}}}else h.prop("selected",!1),i.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(e,!0);b.multiple?b.options.liveSearch&&b.$searchbox.focus():b.$button.focus(),(f!=b.$element.val()&&b.multiple||g!=b.$element.prop("selectedIndex")&&!b.multiple)&&b.$element.trigger("changed.bs.select",[e,i.prop("selected"),j]).triggerNative("change")}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(c){c.currentTarget==this&&(c.preventDefault(),c.stopPropagation(),b.options.liveSearch&&!a(c.target).hasClass("close")?b.$searchbox.focus():b.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.click()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).hasClass("bs-select-all")?b.selectAll():b.deselectAll()}),this.$element.change(function(){b.render(!1)})},liveSearchListener:function(){var d=this,e=a('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){d.$menuInner.find(".active").removeClass("active"),d.$searchbox.val()&&(d.$searchbox.val(""),d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove()),d.multiple||d.$menuInner.find(".selected").addClass("active"),setTimeout(function(){d.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(d.$searchbox.val()){var f=d.$lis.not(".is-hidden").removeClass("hidden").children("a");f=d.options.liveSearchNormalize?f.not(":a"+d._searchStyle()+'("'+b(d.$searchbox.val())+'")'):f.not(":"+d._searchStyle()+'("'+d.$searchbox.val()+'")'),f.parent().addClass("hidden"),d.$lis.filter(".dropdown-header").each(function(){var b=a(this),c=b.data("optgroup");0===d.$lis.filter("[data-optgroup="+c+"]").not(b).not(".hidden").length&&(b.addClass("hidden"),d.$lis.filter("[data-optgroup="+c+"div]").addClass("hidden"))});var g=d.$lis.not(".hidden");g.each(function(b){var c=a(this);c.hasClass("divider")&&(c.index()===g.first().index()||c.index()===g.last().index()||g.eq(b+1).hasClass("divider"))&&c.addClass("hidden")}),d.$lis.not(".hidden, .no-results").length?e.parent().length&&e.remove():(e.parent().length&&e.remove(),e.html(d.options.noneResultsText.replace("{0}",'"'+c(d.$searchbox.val())+'"')).show(),d.$menuInner.append(e))}else d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove();d.$lis.filter(".active").removeClass("active"),d.$searchbox.val()&&d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),a(this).focus()})},_searchStyle:function(){var a={begins:"ibegins",startsWith:"ibegins"};return a[this.options.liveSearchStyle]||"icontains"},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},changeAll:function(b){"undefined"==typeof b&&(b=!0),this.findLis();for(var c=this.$element.find("option"),d=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",b),e=d.length,f=[],g=0;e>g;g++){var h=d[g].getAttribute("data-original-index");f[f.length]=c.eq(h)[0]}a(f).prop("selected",b),this.render(!1),this.$element.trigger("changed.bs.select").triggerNative("change")},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(a){a=a||window.event,a&&a.stopPropagation(),this.$button.trigger("click")},keydown:function(c){var d,e,f,g,h,i,j,k,l,m=a(this),n=m.is("input")?m.parent().parent():m.parent(),o=n.data("this"),p=":not(.disabled, .hidden, .dropdown-header, .divider)",q={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(o.options.liveSearch&&(n=m.parent().parent()),o.options.container&&(n=o.$menu),d=a("[role=menu] li",n),l=o.$newElement.hasClass("open"),!l&&(c.keyCode>=48&&c.keyCode<=57||c.keyCode>=96&&c.keyCode<=105||c.keyCode>=65&&c.keyCode<=90)&&(o.options.container?o.$button.trigger("click"):(o.setSize(),o.$menu.parent().addClass("open"),l=!0),o.$searchbox.focus()),o.options.liveSearch&&(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&0===o.$menu.find(".active").length&&(c.preventDefault(),o.$menu.parent().removeClass("open"),o.options.container&&o.$newElement.removeClass("open"),o.$button.focus()),d=a("[role=menu] li"+p,n),m.val()||/(38|40)/.test(c.keyCode.toString(10))||0===d.filter(".active").length&&(d=o.$menuInner.find("li"),d=o.options.liveSearchNormalize?d.filter(":a"+o._searchStyle()+"("+b(q[c.keyCode])+")"):d.filter(":"+o._searchStyle()+"("+q[c.keyCode]+")"))),d.length){if(/(38|40)/.test(c.keyCode.toString(10)))e=d.index(d.find("a").filter(":focus").parent()),g=d.filter(p).first().index(),h=d.filter(p).last().index(),f=d.eq(e).nextAll(p).eq(0).index(),i=d.eq(e).prevAll(p).eq(0).index(),j=d.eq(f).prevAll(p).eq(0).index(),o.options.liveSearch&&(d.each(function(b){a(this).hasClass("disabled")||a(this).data("index",b)}),e=d.index(d.filter(".active")),g=d.first().data("index"),h=d.last().data("index"),f=d.eq(e).nextAll().eq(0).data("index"),i=d.eq(e).prevAll().eq(0).data("index"),j=d.eq(f).prevAll().eq(0).data("index")),k=m.data("prevIndex"),38==c.keyCode?(o.options.liveSearch&&e--,e!=j&&e>i&&(e=i),g>e&&(e=g),e==k&&(e=h)):40==c.keyCode&&(o.options.liveSearch&&e++,-1==e&&(e=0),e!=j&&f>e&&(e=f),e>h&&(e=h),e==k&&(e=g)),m.data("prevIndex",e),o.options.liveSearch?(c.preventDefault(),m.hasClass("dropdown-toggle")||(d.removeClass("active").eq(e).addClass("active").children("a").focus(),m.focus())):d.eq(e).children("a").focus();else if(!m.is("input")){var r,s,t=[];d.each(function(){a(this).hasClass("disabled")||a.trim(a(this).children("a").text().toLowerCase()).substring(0,1)==q[c.keyCode]&&t.push(a(this).index())}),r=a(document).data("keycount"),r++,a(document).data("keycount",r),s=a.trim(a(":focus").text().toLowerCase()).substring(0,1),s!=q[c.keyCode]?(r=1,a(document).data("keycount",r)):r>=t.length&&(a(document).data("keycount",0),r>t.length&&(r=1)),d.eq(t[r-1]).children("a").focus()}if((/(13|32)/.test(c.keyCode.toString(10))||/(^9$)/.test(c.keyCode.toString(10))&&o.options.selectOnTab)&&l){if(/(32)/.test(c.keyCode.toString(10))||c.preventDefault(),o.options.liveSearch)/(32)/.test(c.keyCode.toString(10))||(o.$menuInner.find(".active a").click(),m.focus());else{var u=a(":focus");u.click(),u.focus(),c.preventDefault(),a(document).data("spaceSelect",!0)}a(document).data("keycount",0)}(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&(o.multiple||o.options.liveSearch)||/(27)/.test(c.keyCode.toString(10))&&!l)&&(o.$menu.parent().removeClass("open"),o.options.container&&o.$newElement.removeClass("open"),o.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var f=a.fn.selectpicker;a.fn.selectpicker=d,a.fn.selectpicker.Constructor=e,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=f,this},a(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',e.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);d.call(b,b.data())})})}(a)});
//# sourceMappingURL=bootstrap-select.js.map;
/*!

 handlebars v4.0.3

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(1);

	// Compiler imports

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	var _handlebarsCompilerAst = __webpack_require__(2);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(3);

	var _handlebarsCompilerCompiler = __webpack_require__(4);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(5);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(6);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(7);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(9)['default'];

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(10);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var base = _interopRequireWildcard(_handlebarsBase);

	var _handlebarsSafeString = __webpack_require__(11);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(12);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(13);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(14);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(7);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	var _interopRequireWildcard = __webpack_require__(9)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(15);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(16);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(17);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(13);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(13);

	var _ast = __webpack_require__(2);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(10);

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(13);

	var _codeGen = __webpack_require__(18);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var index = this.matchExistingProgram(child);

	      if (index == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	      } else {
	        child.index = index;
	        child.name = 'program' + index;

	        this.useDepths = this.useDepths || child.useDepths;
	        this.useBlockParams = this.useBlockParams || child.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return i;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(13);

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(19);

	var _decorators = __webpack_require__(20);

	var _logger = __webpack_require__(21);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.3';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	exports.toString = toString;
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.isArray = isArray;

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(9)['default'];

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(13);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(10);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* istanbul ignore next */
	/* Jison generated parser */
	"use strict";

	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
	        /**/) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
	        /**/) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports.__esModule = true;
	exports['default'] = handlebars;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(6);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(22);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(23);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(24);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(25);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(26);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(27);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(28);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(29);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;;
'use strict';

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * Sorts array by a given key
 * @function each_with_sort
 * @memberof Handlebars.helpers
 * @param {array} array - The data to sort.
 * @param {key} key - The key to sort by.
 * @returns {array}
 */
Handlebars.registerHelper('each_with_sort', function(array, key, opts) {
    var s = '';
    array = array.sort(function(a, b) {
        a = a[key];
        b = b[key];
        if (a > b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
    });

    for (var i = 0; i < array.length; i++) {
        array[i].index = i;
        array[i].first = (i == 0) ? true : false;
        array[i].last = (i == (array.length - 1)) ? true : false;
        s += opts.fn(array[i]);
    }
    return s;
});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * Sorts some count arrays by a given key and makes one of the arrays
 * @function each_with_sort_arrays
 * @memberof Handlebars.helpers
 * @param {array} array - The data to sort.
 * @param {array} array2 - The data to sort.
 * @param {key} key - The key to sort by.
 * @returns {array}
 */
Handlebars.registerHelper('each_with_sort_arrays', function(key, opts) {
    var s = '';
    var arr = [];
    var tempArr = opts.hash;

    for (i in tempArr) {
        tempArr[i].sort(function(a, b) {
            a = a[key];
            b = b[key];
            if (a > b) {
                return 1;
            }
            if (a === b) {
                return 0;
            }
            if (a < b) {
                return -1;
            }
        });

        arr.push.apply(arr, tempArr[i]);
    }

    for (var i = 0; i < arr.length; i++) {
        arr[i].order = i;
        s += opts.fn(arr[i]);
    }
    return s;
});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * Each group by array with sorts
 * @function each_by_group_with_sort
 * @memberof Handlebars.helpers
 * @returns {array}
 */
Handlebars.registerHelper('each_by_group', function(opts) {
    var s = '',
        arr = [],
        tempArr = opts.hash.array,
        group = opts.hash.group;

    var arr = _.chain(tempArr)
        .groupBy(function(obj) {
            return obj[group];
        })
        .sortBy(function(v, k) {
            return k;
        })
        .value();

    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = {
            group: arr[i],
            index: i,
            type_name: arr[i][0]['type_name'],
            last: arr.length - 1
        };
        s += opts.fn(result[i]);
    }
    return s;

});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * Sorts some count arrays by a given key and makes one of the arrays
 * @function each_with_sort_arr
 * @memberof Handlebars.helpers
 * @param {key} key - The key to sort by.
 * @param {array} opts - The data to sort.
 * @returns {array}
 */
Handlebars.registerHelper('each_with_sort_arr', function(key, opts) {
    var s = '';
    var arr = [];
    var tempArr = opts.hash;

    for (i in tempArr) {
        tempArr[i].sort(function(a, b) {
            a = a[key];
            b = b[key];
            if (a > b) {
                return 1;
            }
            if (a === b) {
                return 0;
            }
            if (a < b) {
                return -1;
            }
        });
        arr.push(tempArr[i]);
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i].order = i;
        s += opts.fn(arr[i]);
    }
    return s;
});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * each with index and modulo
 * @param {object} options
 * @function ifIsNthItem
 * @memberof Handlebars.helpers
 * @returns {unresolved}
 */
Handlebars.registerHelper('ifIsNthItem', function(options) {
    var index = this.index + 1,
        nth = options.hash.nth;

    if (index % nth === 0) {
        return options.fn(this);
    }
});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * @function splitString
 * @param {context} string
 * @param {object} options
 * @memberof Handlebars.helpers
 * @returns {Array}
 */
Handlebars.registerHelper("splitString", function(context, options) {
    if (context) {
        var ret = "";
        var tempArr = context.trim().split(options.hash["delimiter"]);
        for (var i = 0; i < tempArr.length; i++) {
            ret = ret + options.fn(tempArr[i]);
        }
        return ret;
    }
});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * @function videoUrl
 * @param {url} string
 * @param {full} param full page
 * @memberof Handlebars.helpers
 * @returns {String}
 */
Handlebars.registerHelper("videoUrl", function(url, full) {
    if (url) {
        var url_split = url.split(/[/]/);
        var id_video = url.substr(url.indexOf('=') + 1, url.length);

        var type_video = "";
        if (url_split[2] == 'youtu.be') {
            type_video = "//www.youtube.com/embed/" + url_split[url_split.length - 1];

            if (full) {
                type_video = type_video + "?controls=0&disablekb=1&fs=0&showinfo=0&vq=hd1080&wmode=opaque";
            } else {
                type_video = type_video + "?controls=1&disablekb=1&fs=0&showinfo=0&vq=hd1080&wmode=opaque";
            }
        } else if (url_split[2] == 'www.youtube.com') {
            type_video = "//www.youtube.com/embed/" + id_video;

            if (full) {
                type_video = type_video + "?controls=0&disablekb=1&fs=0&showinfo=0&vq=hd1080&wmode=opaque";
            } else {
                type_video = type_video + "?controls=1&disablekb=1&fs=0&showinfo=0&vq=hd1080&wmode=opaque";
            }
        } else {
            type_video = "//player.vimeo.com/video/" + url_split[url_split.length - 1];
            type_video = type_video + "?color=ffffff&title=0&portrait=0";
        }

        return type_video;
    }

    return url;
});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * @function for
 * @param {n} string
 * @param {object} options
 * @memberof Handlebars.helpers
 * @returns {Array}
 */
Handlebars.registerHelper('for', function(n, options) {
    var accum = '';
    for (var i = 0; i < n; ++i)
        accum += options.fn(i);
    return accum;
});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * If block helper ifCond
 * @param {string} v1
 * @param {string} operator
 * @param {string} v2
 * @param {object} options
 * @function ifCond
 * @memberof Handlebars.helpers
 * @returns {unresolved}
 */
Handlebars.registerHelper('ifCond', function(v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case "!=":
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * Sorts array by a given key and return every count
 * @function everyNth
 * @memberof Handlebars.helpers
 * @param {array} context - The data to sort.
 * @param {key} every - The key to sort by.
 * @returns {array}
 */
Handlebars.registerHelper('everyNth', function(context, every, options) {

    if (options.hash.sort == 'sort') {
        var key = options.hash.key;
        context = context.sort(function(a, b) {
            var x = a[key],
                y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    var fn = options.fn,
        inverse = options.inverse;
    var ret = "";
    if (context && context.length > 0) {
        var counter = 0;
        for (var i = 0, j = context.length; i < j; i++) {
            var modZero = i % every === 0;
            ret = ret + fn(_.extend({}, context[i], {
                isModZero: modZero,
                isModZeroNotFirst: modZero && i > 0,
                isLast: i === context.length - 1,
                itteration: counter
            }));
            if (modZero) {
                counter++;
            }
        }
    } else {
        ret = inverse(this);
    }

    return ret;
});

/**
 * Handlebars helpers.
 * @namespace Handlebars.helpers
 * Return global variable by name
 * @function everyNth
 * @memberof Handlebars.helpers
 * @param {array} context - The data to sort.
 * @param {key} every - The key to sort by.
 * @returns {array}
 */
Handlebars.registerHelper('globalVar', function(varName) {
    return window.ajax[varName];
});;
/*
 * jQuery ui dropppable Plugin
 * https://github.com/maxazan/jquery-ui-droppable-iframe
 *
 * Copyright 2015, Pomazan Maksym
 * Licensed under the MIT licenses.
 */

(function ($) {
    //Save native prepareOffsets method from ddmanager
    var nativePrepareOffsets = $.ui.ddmanager.prepareOffsets;

    //Overrided prepareOffsets method
    $.ui.ddmanager.prepareOffsets = function (t, event) {
        //Call parent method
        nativePrepareOffsets.apply(this, arguments);

        var m = $.ui.ddmanager.droppables[t.options.scope] || [];

        for (i = 0; i < m.length; i++) {

            //Iframe fixes        
            if ((doc = m[i].document[0]) !== document) {
                var iframe = $((doc.defaultView || doc.parentWindow).frameElement);
                var iframeOffset = iframe.offset();
                var el = m[i].element;

                //Check our droppable element is in the viewport of out iframe
                var viewport = {
                    top: iframe.contents().scrollTop(),
                    left: iframe.contents().scrollLeft()
                };
                viewport.right = viewport.left + iframe.width();
                viewport.bottom = viewport.top + iframe.height();

                var bounds = el.offset();
                bounds.right = bounds.left + el.outerWidth();
                bounds.bottom = bounds.top + el.outerHeight();
                if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
                    //In view port
                    var ytop = bounds.top - iframe.contents().scrollTop();
                    ytop = ytop < 0 ? 0 : ytop;
                    var xtop = bounds.left - iframe.contents().scrollLeft();
                    xtop = xtop < 0 ? 0 : xtop;
                    var ybottom = bounds.top + el.height() - iframe.contents().scrollTop();
                    ybottom = ybottom > iframe.height() ? iframe.height() : ybottom;
                    var xbottom = bounds.left + el.width() - iframe.contents().scrollLeft();
                    xbottom = xbottom > iframe.width() ? iframe.width() : xbottom;
                    m[i].offset.top = iframeOffset.top + ytop;
                    m[i].offset.left = iframeOffset.left + xtop;
                    m[i].proportions({
                        width: xbottom - xtop,
                        height: ybottom - ytop,
                    });

                } else {
                    //Out of view port - skip
                    m[i].proportions().height = 0;
                    continue;
                }

            }

        }
    };

    $.ui.plugin.add("draggable", "iframeScroll", {
        drag: function (event, ui, i) {

            var o = i.options;
            var selector = o.iframeFix === true ? "iframe" : o.iframeFix;

            //check if mouse in scroll zone
            i.document.find(selector).each(function () {

                var scrolled = false;
                var iframeDocument;
                var iframe = $(this);
                var offset = iframe.offset();
                offset.width = iframe.width();
                offset.height = iframe.height();
                //Check scroll top
                if (offset.left < event.pageX && event.pageX < offset.left + offset.width) {
                    if (offset.top < event.pageY && event.pageY < offset.top + o.scrollSensitivity) {
                        iframeDocument = iframe.contents();
                        scrolled = iframeDocument.scrollTop(iframeDocument.scrollTop() - o.scrollSpeed);
                    }
                }
                //Check scroll down
                if (offset.left < event.pageX && event.pageX < offset.left + offset.width) {
                    if ((offset.top + offset.height - o.scrollSensitivity) < event.pageY && event.pageY < offset.top + offset.height) {
                        iframeDocument = iframe.contents();
                        scrolled = iframeDocument.scrollTop(iframeDocument.scrollTop() + o.scrollSpeed);
                    }
                }
                //Check scroll left
                if (offset.left < event.pageX && event.pageX < offset.left + o.scrollSensitivity) {
                    if (offset.top < event.pageY && event.pageY < offset.top + offset.height) {
                        iframeDocument = iframe.contents();
                        scrolled = iframeDocument.scrollLeft(iframeDocument.scrollLeft() - o.scrollSpeed);
                    }
                }
                //Check scroll right
                if ((offset.left + offset.width - o.scrollSensitivity) < event.pageX && event.pageX < offset.left + offset.width) {
                    if (offset.top < event.pageY && event.pageY < offset.top + offset.height) {
                        iframeDocument = iframe.contents();
                        scrolled = iframeDocument.scrollLeft(iframeDocument.scrollLeft() + o.scrollSpeed);
                    }
                }

                if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                    $.ui.ddmanager.prepareOffsets(i, event);
                }

                clearTimeout(i.scrollTimer);
                if (i._mouseStarted) {
                    i.scrollTimer = setTimeout(function () {
                        //call drag trigger
                        i._trigger("drag", event);
                        //update offsets
                        if ($.ui.ddmanager) {
                            $.ui.ddmanager.drag(i, event);
                        }
                    }, 10);
                }


            });
        },
        stop: function (event, ui, i) {
            clearInterval(i.scrollTimer);
        }
    });
})(window.jQuery);;
/**
 * jQuery Wheel Color Picker
 * 
 * http://www.jar2.net/projects/jquery-wheelcolorpicker
 * 
 * Author : Fajar Chandra
 * Date   : 2016.01.28
 * 
 * Copyright © 2011-2016 Fajar Chandra. All rights reserved.
 * Released under MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
	
	/**
	 * Function: wheelColorPicker
	 * 
	 * The wheelColorPicker plugin wrapper. Firing all functions and 
	 * setting/getting all options in this plugin should be called via 
	 * this function.
	 * 
	 * Before that, if wheelColorPicker instance is not yet initialized, 
	 * this will initialize ColorPicker widget.
	 * 
	 * This function will look for the options parameter passed in, and 
	 * try to do something as specified in this order:
	 * 1. If no argument is passed, then initialize the plugin or do nothing
	 * 2. If object is passed, then call setOptions()
	 * 3. If string is passed, then try to fire a method with that name
	 * 4. If string is passed and no method matches the name, then try 
	 *    to set/get an option with that name. If a setter/getter method 
	 *    available (i.e. setSomething), it will set/get that option via that method.
	 */
	$.fn.wheelColorPicker = function() {
		var returnValue = this; // Allows method chaining
		
		// Separate first argument and the rest..
		// First argument is used to determine function/option name
		// e.g. wheelColorPicker('setColor', { r: 0, g: 0, b: 1 })
		if(arguments.length > 0) {
			var shift = [].shift;
			var firstArg = shift.apply(arguments);
			var firstArgUc = (typeof firstArg === "string") ? firstArg.charAt(0).toUpperCase() + firstArg.slice(1) : firstArg;
		} 
		else {
			var firstArg = undefined;
			var firstArgUc = undefined;
		}
		var args = arguments;
		
		
		this.each(function() {
			
			// Grab ColorPicker object instance
			var instance = $(this).data('jQWCP.instance');
			
			// Initialize if not yet created
			if(instance == undefined || instance == null) {
				// Get init options
				var options = {};
				if(typeof firstArg === "object") {
					options = firstArg;
				}
				
				instance = new WCP.ColorPicker(this, options);
				$(this).data('jQWCP.instance', instance);
			}
			
			/// What to do? ///
			
			// No arguments provided, do nothing
			// wheelColorPicker()
			if(firstArg === undefined || typeof firstArg === "object") {
			}
			
			// Call a method
			// wheelColorPicker('show')
			else if(typeof instance[firstArg] === "function") {
				//console.log('method');
				var ret = instance[firstArg].apply(instance, args);
				
				// If instance is not returned, no method chaining
				if(ret !== instance) {
					returnValue = ret;
					return false;
				}
			}
			
			// Try option setter
			// wheelColorPicker('color', '#ff00aa')
			else if(typeof instance['set'+firstArgUc] === "function" && args.length > 0) {
				//console.log('setter');
				var ret = instance['set'+firstArgUc].apply(instance, args);
				
				// If instance is not returned, no method chaining
				if(ret !== instance) {
					returnValue = ret;
					return false;
				}
			}
			
			// Try option getter
			// wheelColorPicker('color')
			else if(typeof instance['get'+firstArgUc] === "function") {
				//console.log('getter');
				var ret = instance['get'+firstArgUc].apply(instance, args);
				
				// If instance is not returned, no method chaining
				if(ret !== instance) {
					returnValue = ret;
					return false;
				}
			}
			
			// Set option value
			// wheelColorPicker('format', 'hex')
			else if(instance.options[firstArg] !== undefined && args.length > 0) {
				//console.log('set option');
				instance.options[firstArg] = args[0];
			}
			
			// Get option value
			// wheelColorPicker('format')
			else if(instance.options[firstArg] !== undefined) {
				//console.log('get option');
				returnValue = instance.options[firstArg];
				return false;
			}
			
			// Nothing matches, throw error
			else {
				$.error( 'Method/option named ' +  firstArg + ' does not exist on jQuery.wheelColorPicker' );
			}
			
		});
		
		return returnValue;
	};



	/******************************************************************/

	/////////////////////////////////////////
	// Shorthand for $.fn.wheelColorPicker //
	/////////////////////////////////////////
	var WCP = $.fn.wheelColorPicker;
	/////////////////////////////////////////

	/**
	 * Object: defaults
	 * 
	 * Contains default options for the wheelColorPicker plugin.
	 * 
	 * Member properties:
	 * 
	 *   format        - String Color naming style. See colorToRgb for all 
	 *                   available formats.
	 *   live          - Boolean Enable dynamic slider gradients.
	 *   preview       - Boolean Enable live color preview on input field
	 *   userinput     - (Deprecated) Boolean Enable picking color by typing directly
	 *   validate      - (Deprecated) Boolean When userinput is enabled, always convert 
	 *                   the input value to a specified format. This option is 
	 *                   deprecated. use autoConvert instead.
     *   autoResize    - Boolean Automatically resize container width.
     *                   If set to false, you could manually adjust size with CSS.
	 *   autoConvert   - Boolean Automatically convert inputted value to 
	 *                   specified format.
	 *   color         - Mixed Initial value in any of supported color 
	 *                   value format or as an object. Setting this value will 
	 *                   override the current input value.
	 *   alpha         - (Deprecated) Boolean Force the color picker to use alpha value 
	 *                   despite its selected color format. This option is 
	 *                   deprecated. Use sliders = "a" instead.
	 *   inverseLabel  - (deprecated) Boolean use inverse color for 
	 *                   input label instead of black/white color.
	 *   preserveWheel - Boolean preserve color wheel shade when slider 
	 *                   position changes. If set to true, changing 
	 *                   color wheel from black will reset selectedColor.val 
	 *                   (shade) to 1.
	 *   interactive   - Boolean enable interactive sliders where slider bar
	 *                   gradients change dynamically as user drag a slider 
	 *                   handle. Set to false if this affect performance.
	 *                   See also 'quality' option if you wish to keep 
	 *                   interactive slider but with reduced quality.
	 *   cssClass      - Object CSS Classes to be added to the color picker.
	 *   layout        - String [block|popup] Layout mode.
	 *   animDuration  - Number Duration for transitions such as fade-in 
	 *                   and fade-out.
	 *   quality       - Rendering details quality. The normal quality is 1. 
	 *                   Setting less than 0.1 may make the sliders ugly, 
	 *                   while setting the value too high might affect performance.
	 *   sliders       - String combination of sliders. If null then the color 
	 *                   picker will show default values, which is "wvp" for 
	 *                   normal color or "wvap" for color with alpha value. 
	 *                   Possible combinations are "whsvrgbap". 
     *                   Order of letters will affect slider positions.
	 *   sliderLabel   - Boolean Show labels for each slider.
	 *   sliderValue   - Boolean Show numeric value of each slider.
	 *   hideKeyboard  - Boolean Keep input blurred to avoid on screen keyboard appearing. 
	 *                   If this is set to true, avoid assigning handler to blur event.
	 *   rounding      - Round the alpha value to N decimal digits. Default is 2.
	 *                   Set -1 to disable rounding.
	 *   mobile        - Display mobile-friendly layout when opened in mobile device.
     *   mobileWidth   - Max screen width to use mobile layout instead of default one.
	 *   mobileAutoScroll - Automatically scroll the page if focused input element 
	 *                      gets obstructed by color picker dialog.
	 *   htmlOptions   - Load options from HTML attributes. 
	 *                   To set options using HTML attributes, 
	 *                   prefix these options with 'data-wcp-' as attribute names.
     *   snap          - Snap color wheel and slider on 0, 0.5, and 1.0
     *   snapTolerance - Snap if slider position falls within defined 
     *                   tolerance value.
	 */
	WCP.defaults = {
		format: 'hex', /* 1.x */
		preview: false, /* 1.x */
		live: true, /* 2.0 */
		userinput: true, /* DEPRECATED 1.x */
		validate: false, /* DEPRECATED 1.x */ /* See autoConvert */
		autoResize: true, /* 3.0 */
		autoConvert: true, /* 2.0 */ /* NOT IMPLEMENTED */
		//color: null, /* DEPRECATED 1.x */ /* OBSOLETE 3.0 */ /* Init-time only */
		//alpha: null, /* DEPRECATED 1.x */ /* OBSOLETE 3.0 */ /* See methods.alpha */
		preserveWheel: null, /* DEPRECATED 1.x */ /* Use live */
		cssClass: '', /* 2.0 */
		layout: 'popup', /* 2.0 */ /* Init-time only */
		animDuration: 200, /* 2.0 */
		quality: 1, /* 2.0 */
		sliders: null, /* 2.0 */
		sliderLabel: true, /* 2.0 */
		sliderValue: false, /* 2.0 */
		rounding: 2, /* 2.3 */
		mobile: true, /* 3.0 */
        mobileWidth: 480, /* 3.0 */
		hideKeyboard: false, /* 2.4 */
		htmlOptions: true, /* 2.3 */
        snap: false, /* 2.5 */
		snapTolerance: 0.05 /* 2.5 */
	};



	/******************************************************************/

	//////////////////////////////
	// STATIC OBJECTS AND FLAGS //
	//////////////////////////////

	/* 
	 * Note: To determine input position (top and left), use the following:
	 * WCP.ORIGIN.top + this.input.getBoundingClientRect().top
	 * instead of using $(this.input).offset().top because on mobile browsers 
	 * (chrome) jQuery's offset() function returns wrong value.
	 */

	/// Top left of the page is not on (0,0), making window.scrollX/Y and offset() useless
	/// See WCP.ORIGIN
	WCP.BUG_RELATIVE_PAGE_ORIGIN = false;

	/// Coordinate of the top left page (mobile chrome workaround)
	WCP.ORIGIN = { left: 0, top: 0 };


	/******************************************************************/

	//////////////////////
	// HELPER FUNCTIONS //
	//////////////////////

	/**
	 * Function: colorToStr
	 * 
	 * Since 2.0
	 * 
	 * Convert color object to string in specified format
	 * 
	 * Available formats:
	 * - hex
	 * - css
	 * - rgb
	 * - rgb%
	 * - rgba
	 * - rgba%
	 * - hsv
	 * - hsv%
	 * - hsva
	 * - hsva%
	 * - hsb
	 * - hsb%
	 * - hsba
	 * - hsba%
	 */
	WCP.colorToStr = function( color, format ) {
		var result = "";
		switch( format ) {
			case 'css':
				result = "#";
			case 'hex': 
				var r = Math.round(color.r * 255).toString(16);
				if( r.length == 1) {
					r = "0" + r;
				}
				var g = Math.round(color.g * 255).toString(16);
				if( g.length == 1) {
					g = "0" + g;
				}
				var b = Math.round(color.b * 255).toString(16);
				if( b.length == 1) {
					b = "0" + b;
				}
				result += r + g + b;
				break;
				
			case 'rgb':
				result = "rgb(" + 
					Math.round(color.r * 255) + "," + 
					Math.round(color.g * 255) + "," + 
					Math.round(color.b * 255) + ")";
				break;
				
			case 'rgb%':
				result = "rgb(" + 
					(color.r * 100) + "%," + 
					(color.g * 100) + "%," + 
					(color.b * 100) + "%)";
				break;
				
			case 'rgba':
				result = "rgba(" + 
					Math.round(color.r * 255) + "," + 
					Math.round(color.g * 255) + "," + 
					Math.round(color.b * 255) + "," + 
					color.a + ")";
				break;
				
			case 'rgba%':
				result = "rgba(" + 
					(color.r * 100) + "%," + 
					(color.g * 100) + "%," + 
					(color.b * 100) + "%," + 
					(color.a * 100) + "%)";
				break;
				
			case 'hsv':
				result = "hsv(" + 
					(color.h * 360) + "," + 
					color.s + "," + 
					color.v + ")";
				break;
				
			case 'hsv%':
				result = "hsv(" + 
					(color.h * 100) + "%," + 
					(color.s * 100) + "%," + 
					(color.v * 100) + "%)";
				break;
				
			case 'hsva':
				result = "hsva(" + 
					(color.h * 360) + "," + 
					color.s + "," + 
					color.v + "," + 
					color.a + ")";
				break;
				
			case 'hsva%':
				result = "hsva(" + 
					(color.h * 100) + "%," + 
					(color.s * 100) + "%," + 
					(color.v * 100) + "%," + 
					(color.a * 100) + "%)";
				break;
				
				
			case 'hsb':
				result = "hsb(" + 
					color.h + "," + 
					color.s + "," + 
					color.v + ")";
				break;
				
			case 'hsb%':
				result = "hsb(" + 
					(color.h * 100) + "%," + 
					(color.s * 100) + "%," + 
					(color.v * 100) + "%)";
				break;
				
			case 'hsba':
				result = "hsba(" + 
					color.h + "," + 
					color.s + "," + 
					color.v + "," + 
					color.a + ")";
				break;
				
			case 'hsba%':
				result = "hsba(" + 
					(color.h * 100) + "%," + 
					(color.s * 100) + "%," + 
					(color.v * 100) + "%," + 
					(color.a * 100) + "%)";
				break;
				
		}
		return result;
	};


	/**
	 * Function: strToColor
	 * 
	 * Since 2.0
	 * 
	 * Convert string to color object.
	 * Please note that if RGB color is supplied, the returned value 
	 * will only contain RGB.
	 * 
	 * If invalid string is supplied, FALSE will be returned.
	 */
	WCP.strToColor = function( val ) {
		var color = { a: 1 };
		var tmp;
		var hasAlpha;
		
		// #ffffff
		if(val.match(/^#[0-9a-f]{6}$/i) != null) {
			if( isNaN( color.r = parseInt(val.substr(1, 2), 16) / 255 ) ) {
				return false;
			}
			if( isNaN( color.g = parseInt(val.substr(3, 2), 16) / 255 ) ) {
				return false;	
			}
			if( isNaN( color.b = parseInt(val.substr(5, 2), 16) / 255 ) ) {
				return false;
			}
		}
		
		// ffffff
		else if(val.match(/^[0-9a-f]{6}$/i) != null) {
			if( isNaN( color.r = parseInt(val.substr(0, 2), 16) / 255 ) ) {
				return false;
			}
			if( isNaN( color.g = parseInt(val.substr(2, 2), 16) / 255 ) ) {
				return false;
			}
			if( isNaN( color.b = parseInt(val.substr(4, 2), 16) / 255 ) ) {
				return false;
			}
		}
		
		// rgb(100%,100%,100%)
		// rgba(100%,100%,100%,100%)
		// rgba(255,255,255,1)
		// rgba(100%,1, 0.5,.2)
		else if(
			val.match(/^rgba\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null ||
			val.match(/^rgb\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null 
		) {
			if(val.match(/a/i) != null) {
				hasAlpha = true;
			}
			else {
				hasAlpha = false;
			}
			
			tmp = val.substring(val.indexOf('(')+1, val.indexOf(','));
			if( tmp.charAt( tmp.length-1 ) == '%') {
				if( isNaN( color.r = parseFloat(tmp) / 100 ) ) {
					return false;
				}
			}
			else {
				if( isNaN( color.r = parseInt(tmp) / 255 ) ) {
					return false;
				}
			}
			
			tmp = val.substring(val.indexOf(',')+1, val.indexOf(',', val.indexOf(',')+1));
			if( tmp.charAt( tmp.length-1 ) == '%') {
				if( isNaN( color.g = parseFloat(tmp) / 100 ) ) {
					return false;
				}
			}
			else {
				if( isNaN( color.g = parseInt(tmp) / 255 ) ) {
					return false;
				}
			}
			
			if(hasAlpha) {
				tmp = val.substring(val.indexOf(',', val.indexOf(',')+1)+1, val.lastIndexOf(','));
			}
			else {
				tmp = val.substring(val.lastIndexOf(',')+1, val.lastIndexOf(')'));
			}
			if( tmp.charAt( tmp.length-1 ) == '%') {
				if( isNaN( color.b = parseFloat(tmp) / 100 ) ) {
					return false;
				}
			}
			else {
				if( isNaN( color.b = parseInt(tmp) / 255 ) ) {
					return false;
				}
			}
			
			if(hasAlpha) {
				tmp = val.substring(val.lastIndexOf(',')+1, val.lastIndexOf(')'));
				if( tmp.charAt( tmp.length-1 ) == '%') {
					if( isNaN( color.a = parseFloat(tmp) / 100 ) ) {
						return false;
					}
				}
				else {
					if( isNaN( color.a = parseFloat(tmp) ) ) {
						return false;
					}
				}
			}
		}
		
		// hsv(100%,100%,100%)
		// hsva(100%,100%,100%,100%)
		// hsv(360,1,1,1)
		// hsva(360,1, 0.5,.2)
		// hsb(100%,100%,100%)
		// hsba(100%,100%,100%,100%)
		// hsb(360,1,1,1)
		// hsba(360,1, 0.5,.2)
		else if(
			val.match(/^hsva\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null ||
			val.match(/^hsv\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null ||
			val.match(/^hsba\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null ||
			val.match(/^hsb\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null 
		) {
			if(val.match(/a/i) != null) {
				hasAlpha = true;
			}
			else {
				hasAlpha = false;
			}
			
			tmp = val.substring(val.indexOf('(')+1, val.indexOf(','));
			if( tmp.charAt( tmp.length-1 ) == '%') {
				if( isNaN( color.h = parseFloat(tmp) / 100 ) ) {
					return false;
				}
			}
			else {
				if( isNaN( color.h = parseFloat(tmp) / 360 ) ) {
					return false;
				}
			}
			
			tmp = val.substring(val.indexOf(',')+1, val.indexOf(',', val.indexOf(',')+1));
			if( tmp.charAt( tmp.length-1 ) == '%') {
				if( isNaN( color.s = parseFloat(tmp) / 100 ) ) {
					return false;
				}
			}
			else {
				if( isNaN( color.s = parseFloat(tmp) ) ) {
					return false;
				}
			}
			
			if(hasAlpha) {
				tmp = val.substring(val.indexOf(',', val.indexOf(',')+1)+1, val.lastIndexOf(','));
			}
			else {
				tmp = val.substring(val.lastIndexOf(',')+1, val.lastIndexOf(')'));
			}
			if( tmp.charAt( tmp.length-1 ) == '%') {
				if( isNaN( color.v = parseFloat(tmp) / 100 ) ) {
					return false;
				}
			}
			else {
				if( isNaN( color.v = parseFloat(tmp) ) ) {
					return false;
				}
			}
			
			if(hasAlpha) {
				tmp = val.substring(val.lastIndexOf(',')+1, val.lastIndexOf(')'));
				if( tmp.charAt( tmp.length-1 ) == '%') {
					if( isNaN( color.a = parseFloat(tmp) / 100 ) ) {
						return false;
					}
				}
				else {
					if( isNaN( color.a = parseFloat(tmp) ) ) {
						return false;
					}
				}
			}
		}
		
		else {
			return false;
		}
		
		return color;
	};


	/**
	 * Function: hsvToRgb
	 * 
	 * Since 2.0
	 * 
	 * Perform HSV to RGB conversion
	 */
	WCP.hsvToRgb = function( h, s, v ) {
		
		// Calculate RGB from hue (1st phase)
		var cr = (h <= (1/6) || h >= (5/6)) ? 1
			: (h < (1/3) ? 1 - ((h - (1/6)) * 6)
			: (h > (4/6) ? (h - (4/6)) * 6
			: 0));
		var cg = (h >= (1/6) && h <= (3/6)) ? 1
			: (h < (1/6) ? h * 6
			: (h < (4/6) ? 1 - ((h - (3/6)) * 6)
			: 0));
		var cb = (h >= (3/6) && h <= (5/6)) ? 1
			: (h > (2/6) && h < (3/6) ? (h - (2/6)) * 6
			: (h > (5/6) ? 1 - ((h - (5/6)) * 6)
			: 0));
			
		//~ console.log(cr + ' ' + cg + ' ' + cb);
		
		// Calculate RGB with saturation & value applied
		var r = (cr + (1-cr)*(1-s)) * v;
		var g = (cg + (1-cg)*(1-s)) * v;
		var b = (cb + (1-cb)*(1-s)) * v;
		
		//~ console.log(r + ' ' + g + ' ' + b + ' ' + v);
		
		return { r: r, g: g, b: b };
	};


	/**
	 * Function: rgbToHsv
	 * 
	 * Since 2.0
	 * 
	 * Perform RGB to HSV conversion
	 */
	WCP.rgbToHsv = function( r, g, b ) {
		
		var h;
		var s;
		var v;

		var maxColor = Math.max(r, g, b);
		var minColor = Math.min(r, g, b);
		var delta = maxColor - minColor;
		
		// Calculate saturation
		if(maxColor != 0) {
			s = delta / maxColor;
		}
		else {
			s = 0;
		}
		
		// Calculate hue
		// To simplify the formula, we use 0-6 range.
		if(delta == 0) {
			h = 0;
		}
		else if(r == maxColor) {
			h = (6 + (g - b) / delta) % 6;
		}
		else if(g == maxColor) {
			h = 2 + (b - r) / delta;
		}
		else if(b == maxColor) {
			h = 4 + (r - g) / delta;
		}
		else {
			h = 0;
		}
		// Then adjust the range to be 0-1
		h = h/6;
		
		// Calculate value
		v = maxColor;
		
		//~ console.log(h + ' ' + s + ' ' + v);
		
		return { h: h, s: s, v: v };
	};



	/******************************************************************/

	////////////////////////
	// COLOR PICKER CLASS //
	////////////////////////

	/**
	 * Class: ColorPicker
	 * 
	 * Since 3.0
	 */
	WCP.ColorPicker = function ( elm, options ) {
		
		// Assign reference to input DOM element
		this.input = elm;
		
		// Setup selected color in the following priority:
		// 1. options.color
		// 2. input.value
		// 3. default
		this.color = { h: 0, s: 0, v: 1, r: 1, g: 1, b: 1, a: 1 };
		this.setValue(this.input.value);
		
		// Set options
		this.options = $.extend(true, {}, WCP.defaults);
		this.setOptions(options);
		
		// Check sliders option, if not defined, set default sliders
		if(this.options.sliders == null)
			this.options.sliders = 'wvp' + (this.options.format.indexOf('a') >= 0 ? 'a' : '');
		
		this.init();
	};


	////////////////////
	// Static members //
	////////////////////


	/**
	 * Static Property: ColorPicker.widget
	 * 
	 * Reference to global color picker widget (popup)
	 */
	WCP.ColorPicker.widget = null;


	/**
	 * Property: ColorPicker.overlay
	 * 
	 * Reference to overlay DOM element (overlay for global popup)
	 */
	WCP.ColorPicker.overlay = null;


	/**
	 * Function: init
	 * 
	 * Since 3.0
	 * 2.0 was methods.staticInit
	 * 
	 * Initialize wheel color picker globally.
	 */
	WCP.ColorPicker.init = function() {
		// Only perform initialization once
		if(WCP.ColorPicker.init.hasInit == true)
			return;
		WCP.ColorPicker.init.hasInit = true;
			
		// Insert overlay element to handle popup closing
		// when hideKeyboard is true, hence input is always blurred
		var $overlay = $('<div class="jQWCP-overlay" style="display: none;"></div>');
		$overlay.on('click', WCP.Handler.overlay_click);
		WCP.ColorPicker.overlay = $overlay.get(0);
		$('body').append($overlay);
        
        // Insert CSS for color wheel
        var wheelImage = WCP.ColorPicker.getWheelDataUrl(200);
        $('head').append(
            '<style type="text/css">' + 
                '.jQWCP-wWheel {' + 
                    'background: url(' + wheelImage + ') no-repeat center center;' +
                '}' +
            '</style>'
        );
		
		// Attach events
		$('html').on('mouseup.wheelColorPicker', WCP.Handler.html_mouseup);
		$('html').on('touchend.wheelColorPicker', WCP.Handler.html_mouseup);
		$('html').on('mousemove.wheelColorPicker', WCP.Handler.html_mousemove);
		$('html').on('touchmove.wheelColorPicker', WCP.Handler.html_mousemove);
        $(window).on('resize.wheelColorPicker', WCP.Handler.window_resize);
	};


	/**
	 * Function: createWidget
	 * 
	 * Since 3.0
	 * 2.5 was private.initWidget
	 * 
	 * Create color picker widget.
	 */
	WCP.ColorPicker.createWidget = function() {
		/// WIDGET ///
		// Notice: We won't use canvas to draw the color wheel since 
		// it may takes time and cause performance issue.
		var $widget = $(
			"<div class='jQWCP-wWidget'>" + 
				"<div class='jQWCP-wWheel'>" + 
					"<div class='jQWCP-wWheelOverlay'></div>" +
					"<span class='jQWCP-wWheelCursor'></span>" +
				"</div>" +
				"<div class='jQWCP-wHue jQWCP-slider-wrapper'>" +
					"<canvas class='jQWCP-wHueSlider jQWCP-slider' width='1' height='50' title='Hue'></canvas>" +
					"<span class='jQWCP-wHueCursor jQWCP-scursor'></span>" +
				"</div>" +
				"<div class='jQWCP-wSat jQWCP-slider-wrapper'>" +
					"<canvas class='jQWCP-wSatSlider jQWCP-slider' width='1' height='50' title='Saturation'></canvas>" +
					"<span class='jQWCP-wSatCursor jQWCP-scursor'></span>" +
				"</div>" +
				"<div class='jQWCP-wVal jQWCP-slider-wrapper'>" +
					"<canvas class='jQWCP-wValSlider jQWCP-slider' width='1' height='50' title='Value'></canvas>" +
					"<span class='jQWCP-wValCursor jQWCP-scursor'></span>" +
				"</div>" +
				"<div class='jQWCP-wRed jQWCP-slider-wrapper'>" +
					"<canvas class='jQWCP-wRedSlider jQWCP-slider' width='1' height='50' title='Red'></canvas>" +
					"<span class='jQWCP-wRedCursor jQWCP-scursor'></span>" +
				"</div>" +
				"<div class='jQWCP-wGreen jQWCP-slider-wrapper'>" +
					"<canvas class='jQWCP-wGreenSlider jQWCP-slider' width='1' height='50' title='Green'></canvas>" +
					"<span class='jQWCP-wGreenCursor jQWCP-scursor'></span>" +
				"</div>" +
				"<div class='jQWCP-wBlue jQWCP-slider-wrapper'>" +
					"<canvas class='jQWCP-wBlueSlider jQWCP-slider' width='1' height='50' title='Blue'></canvas>" +
					"<span class='jQWCP-wBlueCursor jQWCP-scursor'></span>" +
				"</div>" +
				"<div class='jQWCP-wAlpha jQWCP-slider-wrapper'>" +
					"<canvas class='jQWCP-wAlphaSlider jQWCP-slider' width='1' height='50' title='Alpha'></canvas>" +
					"<span class='jQWCP-wAlphaCursor jQWCP-scursor'></span>" +
				"</div>" +
				"<div class='jQWCP-wPreview'>" +
					"<canvas class='jQWCP-wPreviewBox' width='1' height='1' title='Selected Color'></canvas>" +
				"</div>" +
			"</div>"
		);
			
		// Small UI fix to disable highlighting the widget
		// Also UI fix to disable touch context menu 
		$widget.find('.jQWCP-wWheel, .jQWCP-slider-wrapper, .jQWCP-scursor, .jQWCP-slider')
			.attr('unselectable', 'on')
			.css('-moz-user-select', 'none')
			.css('-webkit-user-select', 'none')
			.css('user-select', 'none')
			.css('-webkit-touch-callout', 'none');
			
		// Disable context menu on sliders
		// Workaround for touch browsers
		$widget.on('contextmenu.wheelColorPicker', function() { return false; });
			
		// Bind widget events
		$widget.on('mousedown.wheelColorPicker', '.jQWCP-wWheel', WCP.Handler.wheel_mousedown);
		$widget.on('touchstart.wheelColorPicker', '.jQWCP-wWheel', WCP.Handler.wheel_mousedown);
		$widget.on('mousedown.wheelColorPicker', '.jQWCP-wWheelCursor', WCP.Handler.wheelCursor_mousedown);
		$widget.on('touchstart.wheelColorPicker', '.jQWCP-wWheelCursor', WCP.Handler.wheelCursor_mousedown);
		$widget.on('mousedown.wheelColorPicker', '.jQWCP-slider', WCP.Handler.slider_mousedown);
		$widget.on('touchstart.wheelColorPicker', '.jQWCP-slider', WCP.Handler.slider_mousedown);
		$widget.on('mousedown.wheelColorPicker', '.jQWCP-scursor', WCP.Handler.sliderCursor_mousedown);
		$widget.on('touchstart.wheelColorPicker', '.jQWCP-scursor', WCP.Handler.sliderCursor_mousedown);
		
		return $widget.get(0);
	};
    
    
    /**
     * Function: getWheelDataUrl
     * 
     * Create color wheel image and return as base64 encoded data url.
     */
    WCP.ColorPicker.getWheelDataUrl = function( size ) {
        var r = size / 2; // radius
        var center = r;
        var canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        var context = canvas.getContext('2d');
        
        // Fill the wheel with colors
        for(var y = 0; y < size; y++) {
            for(var x = 0; x < size; x++) {
                // Get the offset from central position
                var offset = Math.sqrt(Math.pow(x - center, 2) + Math.pow(y - center, 2));
                
                // Skip pixels outside picture area (plus 2 pixels)
                if(offset > r + 2) {
                    continue;
                }
                
                // Get the position in degree (hue)
                var deg = (
                    (x - center == 0 
                        ? (y < center ? 90 : 270)
                        : (Math.atan((center - y) / (x - center)) / Math.PI * 180)
                    )
                    + (x < center ? 180 : 0)
                    + 360
                ) % 360;
                
                // Relative offset (sat)
                var sat = offset / r;
                
                // Value is always 1
                var val = 1;
                
                // Calculate color
                var cr = (Math.abs(deg + 360) + 60) % 360 < 120 ? 1
                    : (deg > 240 ? (120 - Math.abs(deg - 360)) / 60
                    : (deg < 120 ? (120 - deg) / 60
                    : 0));
                var cg = Math.abs(deg - 120) < 60 ? 1
                    : (Math.abs(deg - 120) < 120 ? (120 - Math.abs(deg - 120)) / 60
                    : 0);
                
                var cb = Math.abs(deg - 240) < 60 ? 1
                    : (Math.abs(deg - 240) < 120 ? (120 - Math.abs(deg - 240)) / 60
                    : 0);
                var pr = Math.round((cr + (1 - cr) * (1 - sat)) * 255);
                var pg = Math.round((cg + (1 - cg) * (1 - sat)) * 255);
                var pb = Math.round((cb + (1 - cb) * (1 - sat)) * 255);
                
                context.fillStyle = 'rgb(' + pr + ',' + pg + ',' + pb + ')';
                context.fillRect(x, y, 1, 1);
            }
        }
        
        return canvas.toDataURL();
    };


	/////////////
	// Members //
	/////////////


	/**
	 * Property: ColorPicker.options
	 * 
	 * Plugin options for the color picker instance, extended from WCP.defaults.
	 */
	WCP.ColorPicker.prototype.options = null;


	/**
	 * Property: ColorPicker.input
	 * 
	 * Reference to input DOM element
	 */
	WCP.ColorPicker.prototype.input = null;


	/** 
	 * Property: ColorPicker.widget
	 * 
	 * Reference to widget DOM element (global popup or private inline widget)
	 */
	WCP.ColorPicker.prototype.widget = null;


	/**
	 * Property: ColorPicker.color
	 * 
	 * Selected color object.
	 */
	WCP.ColorPicker.prototype.color = null;


	/**
	 * Property: ColorPicker.lastValue
	 * 
	 * Store last input value
	 */
	WCP.ColorPicker.prototype.lastValue = null;


	/**
	 * Function: ColorPicker.setOptions
	 * 
	 * Since 3.0
	 * 
	 * Set options to the color picker. If htmlOptions is set to true, 
	 * options set via html attributes are also reloaded. If both html 
	 * attribute and argument exists, option set via options argument 
	 * gets priority.
	 */
	WCP.ColorPicker.prototype.setOptions = function( options ) {
		
		// options should be a separate object (passed by value)
		// Make a copy of options
		options = $.extend(true, {}, options);
		
		// Load options from HTML attributes
		if(this.options.htmlOptions) {
			for(var key in WCP.defaults) {
				// Only if option key is valid and not set via function argument
				if(this.input.hasAttribute('data-wcp-'+key) && options[key] === undefined) {
					options[key] = this.input.getAttribute('data-wcp-'+key);
					// Change true/false string to boolean
					if(options[key] == 'true') {
						options[key] = true;
					}
					else if(options[key] == 'false') {
						options[key] = false;
					}
				}
			}
		}
		
		// Set options
		for(var key in options) {
			// Skip undefined option key
			if(this.options[key] === undefined)
				continue;
			
			var keyUc = key.charAt(0).toUpperCase() + key.slice(1);
			
			// If setter is available, try setting it via setter
			if(typeof this['set'+keyUc] === "function") {
				this['set'+keyUc](options[key]);
			}
			// Otherwise directly update options
			else {
				this.options[key] = options[key];
			}
		}
		
		return this; // Allow chaining
	};


	/**
	 * Function: ColorPicker.init
	 * 
	 * Initialize wheel color picker widget
	 */
	WCP.ColorPicker.prototype.init = function() {
		WCP.ColorPicker.init();

		// Initialization must only occur once
		if(this.hasInit == true)
			return;
		this.hasInit = true;
		
		var instance = this;
		var $input = $(this.input);
		var $widget = null;
		
		/// LAYOUT & BINDINGS ///
		// Setup block mode layout
		if( this.options.layout == 'block' ) {
			// Create widget
			this.widget = WCP.ColorPicker.createWidget();
			$widget = $(this.widget);
			
			// Store object instance reference
			$widget.data('jQWCP.instance', this);
			
			// Wrap widget around the input elm and put the input 
			// elm inside widget
			$widget.insertAfter(this.input);
			// Retain display CSS property
			if($input.css('display') == "inline") {
				$widget.css('display', "inline-block");
			}
			else {
				$widget.css('display', $input.css('display'));
			}
			$widget.append(this.input);
			$input.hide();
			
			// Add tabindex attribute to make the widget focusable
			if($input.attr('tabindex') != undefined) {
				$widget.attr('tabindex', $input.attr('tabindex'));
			}
			else {
				$widget.attr('tabindex', 0);
			}
			
			// Further widget adjustments based on options
			this.refreshWidget();
			
			// Draw shading
			this.redrawSliders(true);
			this.updateSliders();
			
			// Bind widget element events
			$widget.on('focus.wheelColorPicker', WCP.Handler.widget_focus_block);
			$widget.on('blur.wheelColorPicker', WCP.Handler.widget_blur_block);
		}
		
		// Setup popup mode layout
		else {
			// Only need to create one widget, used globally
			if(WCP.ColorPicker.widget == null) {
				WCP.ColorPicker.widget = WCP.ColorPicker.createWidget();
				$widget = $(WCP.ColorPicker.widget);
				
				// Assign widget to global
				$widget.hide();
				$('body').append($widget);
				
				// Bind popup events
				$widget.on('mousedown.wheelColorPicker', WCP.Handler.widget_mousedown_popup);
				//$widget.on('mouseup.wheelColorPicker', WCP.Handler.widget_mouseup_popup);
				
			}
			this.widget = WCP.ColorPicker.widget;
			
			// Bind input element events
			$input.on('focus.wheelColorPicker', WCP.Handler.input_focus_popup);
			$input.on('blur.wheelColorPicker', WCP.Handler.input_blur_popup);
		}
		
		// Bind input events
		$input.on('keyup.wheelColorPicker', WCP.Handler.input_change);
		//$input.on('change.wheelColorPicker', WCP.Handler.input_change);
		
		// Set color value
		// DEPRECATED by 3.0
		if(typeof this.options.color == "object") {
			this.setColor(this.options.color);
			this.options.color = undefined;
		}
		else if(typeof this.options.color == "string") {
			this.setValue(this.options.color);
			this.options.color = undefined;
		}
		
		// Set readonly mode
		/* DEPRECATED */
		if(this.options.userinput) {
			$input.removeAttr('readonly');
		}
		else {
			$input.attr('readonly', true);
		}
	};


	/**
	 * Function: destroy
	 * 
	 * Destroy the color picker and return it to normal element.
	 */
	WCP.ColorPicker.prototype.destroy = function() {
		var $widget = $(this.widget);
		var $input = $(this.input);
		
		// Reset layout
		// No need to delete global popup
		if(this.options.layout == 'block') {
			$widget.before(this.input);
			$widget.remove();
			$input.show();
		}
		
		// Unbind events
		$input.off('focus.wheelColorPicker');
		$input.off('blur.wheelColorPicker');
		$input.off('keyup.wheelColorPicker');
		$input.off('change.wheelColorPicker');
		
		// Remove data
		$input.data('jQWCP.instance', null);
		
		// remove self
		delete this;
	};


	/**
	 * Function: refreshWidget
	 * 
	 * Since 3.0
	 * 2.5 was private.adjustWidget
	 * 
	 * Update widget to match current option values.
	 */
	WCP.ColorPicker.prototype.refreshWidget = function() {
		var $widget = $(this.widget);
		var options = this.options;
        var mobileLayout = false;
		
		// Set CSS classes
		$widget.attr('class', 'jQWCP-wWidget');
		if(options.layout == 'block') {
			$widget.addClass('jQWCP-block');
		}
		$widget.addClass(options.cssClass);
		//$widget.addClass(this.input.getAttribute('class'));
        
        // Check whether to use mobile layout
        if(window.innerWidth <= options.mobileWidth && options.layout != 'block') {
            mobileLayout = true;
            $widget.addClass('jQWCP-mobile');
        }
		
		// Rearrange sliders
		$widget.find('.jQWCP-wWheel, .jQWCP-slider-wrapper, .jQWCP-wPreview')
			.hide()
			.addClass('hidden');
			
		for(var i in options.sliders) {
			var $slider = null;
			switch(this.options.sliders[i]) {
				case 'w':
					$slider = $widget.find('.jQWCP-wWheel'); break;
				case 'h':
					$slider = $widget.find('.jQWCP-wHue'); break;
				case 's':
					$slider = $widget.find('.jQWCP-wSat'); break;
				case 'v':
					$slider = $widget.find('.jQWCP-wVal'); break;
				case 'r':
					$slider = $widget.find('.jQWCP-wRed'); break;
				case 'g':
					$slider = $widget.find('.jQWCP-wGreen'); break;
				case 'b':
					$slider = $widget.find('.jQWCP-wBlue'); break;
				case 'a':
					$slider = $widget.find('.jQWCP-wAlpha'); break;
				case 'p':
					$slider = $widget.find('.jQWCP-wPreview'); break;
			}
			
			if($slider != null) {
				$slider.appendTo(this.widget);
				$slider.show().removeClass('hidden');
			}
		}
		
		// If widget is hidden, show it first so we can calculate dimensions correctly
		//var widgetIsHidden = false;
		//if($widget.is(':hidden')) {
			//widgetIsHidden = true;
			//$widget.css({ opacity: '0' }).show();
		//}
		
		// Adjust sliders height based on quality
		var sliderHeight = options.quality * 50;
		$widget.find('.jQWCP-slider').attr('height', sliderHeight);
		
		var $visElms = $widget.find('.jQWCP-wWheel, .jQWCP-slider-wrapper, .jQWCP-wPreview').not('.hidden');
			
		// Adjust container and sliders width
        // Only if not on mobile layout (force fixed on mobile)
		if(options.autoResize && !mobileLayout) {
			// Auto resize
			var width = 0
			
			// Set slider size first, then adjust container
			$visElms.css({ width: '', height: '' });
			
			$visElms.each(function(index, item) {
				var $item = $(item);
				width += parseFloat($item.css('margin-left').replace('px', '')) + parseFloat($item.css('margin-right').replace('px', '')) + $item.outerWidth();
			});
			$widget.css({ width: width + 'px' });
		}
		else {
			// Fixed size
			
			// Set container size first, then adjust sliders
			$widget.css({ width: '' });
			
			var $visWheel = $widget.find('.jQWCP-wWheel').not('.hidden');
			var $visSliders = $widget.find('.jQWCP-slider-wrapper, .jQWCP-wPreview').not('.hidden');
			$visWheel.css({ height: $widget.height() + 'px', width: $widget.height() });
			if($visWheel.length > 0) {
				var horzSpace = $widget.width() - $visWheel.outerWidth() - parseFloat($visWheel.css('margin-left').replace('px', '')) - parseFloat($visWheel.css('margin-right').replace('px', ''));
			}
			else {
				var horzSpace = $widget.width();
			}
			if($visSliders.length > 0) {
				var sliderMargins = parseFloat($visSliders.css('margin-left').replace('px', '')) + parseFloat($visSliders.css('margin-right').replace('px', ''));
				$visSliders.css({ height: $widget.height() + 'px', width: (horzSpace - ($visSliders.length - 1) * sliderMargins) / $visSliders.length + 'px' });
			}
		}
		
		// Reset visibility
		//if(widgetIsHidden) {
			//$widget.css({ opacity: '' }).hide();
		//}
		
		return this; // Allows method chaining
	};


	/**
	 * Function: redrawSliders
	 * 
	 * Introduced in 2.0
	 * 
	 * Redraw slider gradients. Hidden sliders are not redrawn as to 
	 * improve performance. If options.live is FALSE, sliders are not redrawn.
	 * 
	 * Parameter:
	 *   force   - Boolean force redraw all sliders.
	 */
	WCP.ColorPicker.prototype.redrawSliders = function( force ) {
		
		// Skip if widget not yet initialized
		if(this.widget == null) 
			return this;
		
		var $widget = $(this.widget);
		
		// DEPRECATED 3.0
		// In 2.0, parameters are ( sliders, force )
		if(typeof arguments[0] === "string") {
			force = arguments[1];
		}
		
		// No need to redraw sliders on global popup widget if not 
		// attached to the input elm in current iteration
		if(this != $widget.data('jQWCP.instance'))
			return this;
			
		var options = this.options;
		var color = this.color;
			
		var w = 1;
		var h = options.quality * 50;
		
		var A = 1;
		var R = 0;
		var G = 0;
		var B = 0;
		var H = 0;
		var S = 0;
		var V = 1;
		
		// Dynamic colors
		if(options.live) {
			A = color.a;
			R = Math.round(color.r * 255);
			G = Math.round(color.g * 255);
			B = Math.round(color.b * 255);
			H = color.h;
			S = color.s;
			V = color.v;
		}
		
		/// PREVIEW ///
		// Preview box must always be redrawn, if not hidden
		var $previewBox = $widget.find('.jQWCP-wPreviewBox');
		if(!$previewBox.hasClass('hidden')) {
			var previewBoxCtx = $previewBox.get(0).getContext('2d');
			previewBoxCtx.fillStyle = "rgba(" + R + "," + G + "," + B + "," + A + ")";
			previewBoxCtx.clearRect(0, 0, 1, 1);
			previewBoxCtx.fillRect(0, 0, 1, 1);
		}
		
		/// SLIDERS ///
		if(!this.options.live && !force)
			return this;
		
		/// ALPHA ///
		// The top color is (R, G, B, 1)
		// The bottom color is (R, G, B, 0)
		var $alphaSlider = $widget.find('.jQWCP-wAlphaSlider');
		if(!$alphaSlider.hasClass('hidden') || force) {
			var alphaSliderCtx = $alphaSlider.get(0).getContext('2d');
			var alphaGradient = alphaSliderCtx.createLinearGradient(0, 0, 0, h);
			alphaGradient.addColorStop(0, "rgba("+R+","+G+","+B+",1)");
			alphaGradient.addColorStop(1, "rgba("+R+","+G+","+B+",0)");
			alphaSliderCtx.fillStyle = alphaGradient;
			alphaSliderCtx.clearRect(0, 0, w, h);
			alphaSliderCtx.fillRect(0, 0, w, h);
		}
		
		/// RED ///
		// The top color is (255, G, B)
		// The bottom color is (0, G, B)
		var $redSlider = $widget.find('.jQWCP-wRedSlider');
		if(!$redSlider.hasClass('hidden') || force) {
			var redSliderCtx = $redSlider.get(0).getContext('2d');
			var redGradient = redSliderCtx.createLinearGradient(0, 0, 0, h);
			redGradient.addColorStop(0, "rgb(255,"+G+","+B+")");
			redGradient.addColorStop(1, "rgb(0,"+G+","+B+")");
			redSliderCtx.fillStyle = redGradient;
			redSliderCtx.fillRect(0, 0, w, h);
		}
		
		/// GREEN ///
		// The top color is (R, 255, B)
		// The bottom color is (R, 0, B)
		var $greenSlider = $widget.find('.jQWCP-wGreenSlider');
		if(!$greenSlider.hasClass('hidden') || force) {
			var greenSliderCtx = $greenSlider.get(0).getContext('2d');
			var greenGradient = greenSliderCtx.createLinearGradient(0, 0, 0, h);
			greenGradient.addColorStop(0, "rgb("+R+",255,"+B+")");
			greenGradient.addColorStop(1, "rgb("+R+",0,"+B+")");
			greenSliderCtx.fillStyle = greenGradient;
			greenSliderCtx.fillRect(0, 0, w, h);
		}
		
		/// BLUE ///
		// The top color is (R, G, 255)
		// The bottom color is (R, G, 0)
		var $blueSlider = $widget.find('.jQWCP-wBlueSlider');
		if(!$blueSlider.hasClass('hidden') || force) {
			var blueSliderCtx = $blueSlider.get(0).getContext('2d');
			var blueGradient = blueSliderCtx.createLinearGradient(0, 0, 0, h);
			blueGradient.addColorStop(0, "rgb("+R+","+G+",255)");
			blueGradient.addColorStop(1, "rgb("+R+","+G+",0)");
			blueSliderCtx.fillStyle = blueGradient;
			blueSliderCtx.fillRect(0, 0, w, h);
		}
		
		/// HUE ///
		// The hue slider is static.
		var $hueSlider = $widget.find('.jQWCP-wHueSlider');
		if(!$hueSlider.hasClass('hidden') || force) {
			var hueSliderCtx = $hueSlider.get(0).getContext('2d');
			var hueGradient = hueSliderCtx.createLinearGradient(0, 0, 0, h);
			hueGradient.addColorStop(0, "#f00");
			hueGradient.addColorStop(0.166666667, "#ff0");
			hueGradient.addColorStop(0.333333333, "#0f0");
			hueGradient.addColorStop(0.5, "#0ff");
			hueGradient.addColorStop(0.666666667, "#00f");
			hueGradient.addColorStop(0.833333333, "#f0f");
			hueGradient.addColorStop(1, "#f00");
			hueSliderCtx.fillStyle = hueGradient;
			hueSliderCtx.fillRect(0, 0, w, h);
		}
		
		/// SAT ///
		// The top color is hsv(h, 1, v)
		// The bottom color is hsv(0, 0, v)
		var $satSlider = $widget.find('.jQWCP-wSatSlider');
		if(!$satSlider.hasClass('hidden') || force) {
			var satTopRgb = $.fn.wheelColorPicker.hsvToRgb(H, 1, V);
			satTopRgb.r = Math.round(satTopRgb.r * 255);
			satTopRgb.g = Math.round(satTopRgb.g * 255);
			satTopRgb.b = Math.round(satTopRgb.b * 255);
			var satSliderCtx = $satSlider.get(0).getContext('2d');
			var satGradient = satSliderCtx.createLinearGradient(0, 0, 0, h);
			satGradient.addColorStop(0, "rgb("+satTopRgb.r+","+satTopRgb.g+","+satTopRgb.b+")");
			satGradient.addColorStop(1, "rgb("+Math.round(V*255)+","+Math.round(V*255)+","+Math.round(V*255)+")");
			satSliderCtx.fillStyle = satGradient;
			satSliderCtx.fillRect(0, 0, w, h);
		}
		
		/// VAL ///
		// The top color is hsv(h, s, 1)
		// The bottom color is always black.
		var $valSlider = $widget.find('.jQWCP-wValSlider');
		if(!$valSlider.hasClass('hidden') || force) {
			var valTopRgb = $.fn.wheelColorPicker.hsvToRgb(H, S, 1);
			valTopRgb.r = Math.round(valTopRgb.r * 255);
			valTopRgb.g = Math.round(valTopRgb.g * 255);
			valTopRgb.b = Math.round(valTopRgb.b * 255);
			var valSliderCtx = $valSlider.get(0).getContext('2d');
			var valGradient = valSliderCtx.createLinearGradient(0, 0, 0, h);
			valGradient.addColorStop(0, "rgb("+valTopRgb.r+","+valTopRgb.g+","+valTopRgb.b+")");
			valGradient.addColorStop(1, "#000");
			valSliderCtx.fillStyle = valGradient;
			valSliderCtx.fillRect(0, 0, w, h);
		}
			
		return this; // Allows method chaining
	};


	/**
	 * Function: updateSliders
	 * 
	 * Introduced in 2.0
	 * 
	 * Update slider cursor positions based on this.color value. 
	 * Only displayed sliders are updated.
	 */
	WCP.ColorPicker.prototype.updateSliders = function() {
		
		// Skip if not yet initialized
		if(this.widget == null)
			return this;
			
		var $widget = $(this.widget);
		var color = this.color;
		
		// No need to redraw sliders on global popup widget if not 
		// attached to the input elm in current iteration
		if(this != $widget.data('jQWCP.instance'))
			return this;
			
		// Wheel
		var $wheel = $widget.find('.jQWCP-wWheel');
		if(!$wheel.hasClass('hidden')) {
			var $wheelCursor = $widget.find('.jQWCP-wWheelCursor');
			var $wheelOverlay = $widget.find('.jQWCP-wWheelOverlay');
			var wheelX = Math.cos(2 * Math.PI * color.h) * color.s;
			var wheelY = Math.sin(2 * Math.PI * color.h) * color.s;
			var wheelOffsetX = $wheel.width() / 2;
			var wheelOffsetY = $wheel.height() / 2;
			$wheelCursor.css('left', (wheelOffsetX + (wheelX * $wheel.width() / 2)) + 'px');
			$wheelCursor.css('top', (wheelOffsetY - (wheelY * $wheel.height() / 2)) + 'px');
			// Keep shading to 1 if preserveWheel is true (DEPRECATED) or live is true
			if(this.options.preserveWheel == true || (this.options.preserveWheel == null && this.options.live == false)) {
				$wheelOverlay.css('opacity', 0);
			}
			else {
				$wheelOverlay.css('opacity', 1 - (color.v < 0.2 ? 0.2 : color.v));
			}
		}
		
		// Hue
		var $hueSlider = $widget.find('.jQWCP-wHueSlider');
		if(!$hueSlider.hasClass('hidden')) {
			var $hueCursor = $widget.find('.jQWCP-wHueCursor');
			$hueCursor.css('top', (color.h * $hueSlider.height()) + 'px');
		}
		
		// Saturation
		var $satSlider = $widget.find('.jQWCP-wSatSlider');
		if(!$satSlider.hasClass('hidden')) {
			var $satCursor = $widget.find('.jQWCP-wSatCursor');
			$satCursor.css('top', ((1 - color.s) * $satSlider.height()) + 'px');
		}
		
		// Value
		var $valSlider = $widget.find('.jQWCP-wValSlider');
		if(!$valSlider.hasClass('hidden')) {
			var $valCursor = $widget.find('.jQWCP-wValCursor');
			$valCursor.css('top', ((1 - color.v) * $valSlider.height()) + 'px');
		}
		
		// Red
		var $redSlider = $widget.find('.jQWCP-wRedSlider');
		if(!$redSlider.hasClass('hidden')) {
			var $redCursor = $widget.find('.jQWCP-wRedCursor');
			$redCursor.css('top', ((1 - color.r) * $redSlider.height()) + 'px');
		}
		
		// Green
		var $greenSlider = $widget.find('.jQWCP-wGreenSlider');
		if(!$greenSlider.hasClass('hidden')) {
			var $greenCursor = $widget.find('.jQWCP-wGreenCursor');
			$greenCursor.css('top', ((1 - color.g) * $greenSlider.height()) + 'px');
		}
		
		// Blue
		var $blueSlider = $widget.find('.jQWCP-wBlueSlider');
		if(!$blueSlider.hasClass('hidden')) {
			var $blueCursor = $widget.find('.jQWCP-wBlueCursor');
			$blueCursor.css('top', ((1 - color.b) * $blueSlider.height()) + 'px');
		}
		
		// Alpha
		var $alphaSlider = $widget.find('.jQWCP-wAlphaSlider');
		if(!$alphaSlider.hasClass('hidden')) {
			var $alphaCursor = $widget.find('.jQWCP-wAlphaCursor');
			$alphaCursor.css('top', ((1 - color.a) * $alphaSlider.height()) + 'px');
		}
			
		return this; // Allows method chaining
	};


	/**
	 * Function: updateSelection
	 * 
	 * DEPRECATED by 2.0
	 * 
	 * Update color dialog selection to match current selectedColor value.
	 */
	WCP.ColorPicker.prototype.updateSelection = function() {
		this.redrawSliders();
		this.updateSliders();
		return this;
	};


	/**
	 * Function: updateInput
	 * 
	 * Since 3.0
	 * 
	 * Update input value and background color (if preview is on)
	 */
	WCP.ColorPicker.prototype.updateInput = function() {
		// Skip if not yet initialized
		if(this.widget == null)
			return this;
			
		var $input = $(this.input);
		
		this.input.value = this.getValue();
		
		if( this.options.preview ) {
			$input.css('background', WCP.colorToStr( this.color, 'rgba' ));
			if( this.color.v > .5 ) {
				$input.css('color', 'black');
			}
			else {
				$input.css('color', 'white');
			}
		}
	};


	/**
	 * Function: updateActiveControl
	 * 
	 * Move the active control.
	 */
	WCP.ColorPicker.prototype.updateActiveControl = function( e ) {
		var $control = $( $('body').data('jQWCP.activeControl') ); // Refers to slider wrapper
		
		if($control.length == 0)
			return;
		
		var $input = $(this.input);
		var options = this.options;
		var color = this.color;
		
		// pageX and pageY wrapper for touches
		if(e.pageX == undefined && e.originalEvent.touches.length > 0) {
			e.pageX = e.originalEvent.touches[0].pageX;
			e.pageY = e.originalEvent.touches[0].pageY;
		}
		//$('#log').html(e.pageX + '/' + e.pageY);
		
		/// WHEEL CONTROL ///
		if($control.hasClass('jQWCP-wWheel')) {
			var $cursor = $control.find('.jQWCP-wWheelCursor');
			var $overlay = $control.find('.jQWCP-wWheelOverlay');
			
			var relX = (e.pageX - $control.offset().left - ($control.width() / 2)) / ($control.width() / 2);
			var relY = - (e.pageY - $control.offset().top - ($control.height() / 2)) / ($control.height() / 2);
			
			// BUG_RELATIVE_PAGE_ORIGIN workaround
			if(WCP.BUG_RELATIVE_PAGE_ORIGIN) {
				var relX = (e.pageX - ($control.get(0).getBoundingClientRect().left - WCP.ORIGIN.left) - ($control.width() / 2)) / ($control.width() / 2);
				var relY = - (e.pageY - ($control.get(0).getBoundingClientRect().top - WCP.ORIGIN.top) - ($control.height() / 2)) / ($control.height() / 2);
			}
			
			//console.log(relX + ' ' + relY);
			
			// Sat value is calculated from the distance of the cursor from the central point
			var sat = Math.sqrt(Math.pow(relX, 2) + Math.pow(relY, 2));
			// If distance is out of bound, reset to the upper bound
			if(sat > 1) {
				sat = 1;
			}
			
			// Snap to 0,0
			if(options.snap && sat < options.snapTolerance) {
				sat = 0;
			}
			
			// Hue is calculated from the angle of the cursor. 0deg is set to the right, and increase counter-clockwise.
			var hue = (relX == 0 && relY == 0) ? 0 : Math.atan( relY / relX ) / ( 2 * Math.PI );
			// If hue is negative, then fix the angle value (meaning angle is in either Q2 or Q4)
			if( hue < 0 ) {
				hue += 0.5;
			}
			// If y is negative, then fix the angle value (meaning angle is in either Q3 or Q4)
			if( relY < 0 ) {
				hue += 0.5;
			}
			
			this.setHsv(hue, sat, color.v);
		}
		
		/// SLIDER CONTROL ///
		else if($control.hasClass('jQWCP-slider-wrapper')) {
			var $cursor = $control.find('.jQWCP-scursor');
			
			var relY = (e.pageY - $control.offset().top) / $control.height();
			
			// BUG_RELATIVE_PAGE_ORIGIN workaround
			if(WCP.BUG_RELATIVE_PAGE_ORIGIN) {
				var relY = (e.pageY - ($control.get(0).getBoundingClientRect().top - WCP.ORIGIN.top)) / $control.height();
			}
			
			var value = relY < 0 ? 0 : relY > 1 ? 1 : relY;
			
			// Snap to 0.0, 0.5, and 1.0
			//console.log(value);
			if(options.snap && value < options.snapTolerance) {
				value = 0;
			}
			else if(options.snap && value > 1-options.snapTolerance) {
				value = 1;
			}
			if(options.snap && value > 0.5-options.snapTolerance && value < 0.5+options.snapTolerance) {
				value = 0.5;
			}
			
			$cursor.css('top', (value * $control.height()) + 'px');
			
			/// Update color value ///
			// Red
			if($control.hasClass('jQWCP-wRed')) {
				this.setRgb(1-value, color.g, color.b);
			}
			// Green
			if($control.hasClass('jQWCP-wGreen')) {
				this.setRgb(color.r, 1-value, color.b);
			}
			// Blue
			if($control.hasClass('jQWCP-wBlue')) {
				this.setRgb(color.r, color.g, 1-value);
			}
			// Hue
			if($control.hasClass('jQWCP-wHue')) {
				this.setHsv(value, color.s, color.v);
			}
			// Saturation
			if($control.hasClass('jQWCP-wSat')) {
				this.setHsv(color.h, 1-value, color.v);
			}
			// Value
			if($control.hasClass('jQWCP-wVal')) {
				this.setHsv(color.h, color.s, 1-value);
			}
			// Alpha
			if($control.hasClass('jQWCP-wAlpha')) {
				this.setAlpha(1-value);
			}
		}
	};


	/**
	 * Function: getColor
	 * 
	 * Since 2.0
	 * 
	 * Return color components as an object. The object consists of:
	 * { 
	 *   r: red
	 *   g: green
	 *   b: blue
	 *   h: hue
	 *   s: saturation
	 *   v: value
	 *   a: alpha
	 * }
	 */
	WCP.ColorPicker.prototype.getColor = function() {
		return this.color;
	};


	/**
	 * Function: getValue
	 * 
	 * Get the color value as string.
	 */
	WCP.ColorPicker.prototype.getValue = function( format ) {
		var options = this.options;
		
		if( format == null ) {
			format = options.format;
		}
			
		// If settings.rounding is TRUE, round alpha value to N decimal digits
		if(options.rounding >= 0) {
			this.color.a = Math.round(this.color.a * Math.pow(10, options.rounding)) / Math.pow(10, options.rounding);
		}
		return WCP.colorToStr( this.color, format );
	};


	/**
	 * Function: setValue
	 * 
	 * Set the color value as string.
	 */
	WCP.ColorPicker.prototype.setValue = function( value ) {
		var color = WCP.strToColor(value);
		if(!color)
			return this;
			
		return this.setColor(color);
	}


	/**
	 * Function: setColor
	 * 
	 * Introduced in 2.0
	 * 
	 * Set color by passing an object consisting of:
	 * { r, g, b, a } or
	 * { h, s, v, a }
	 * 
	 * For consistency with options.color value, this function also 
	 * accepts string value.
	 */
	WCP.ColorPicker.prototype.setColor = function( color ) {
		if(typeof color === "string") {
			return this.setValue(color);
		}
		else if(color.r != null) {
			return this.setRgba(color.r, color.g, color.b, color.a);
		}
		else if(color.h != null) {
			return this.setHsva(color.h, color.s, color.v, color.a);
		}
		else if(color.a != null) {
			return this.setAlpha(color.a);
		}
		return this;
	};


	/**
	 * Function: setRgba
	 * 
	 * Introduced in 2.0
	 * 
	 * Set color using RGBA combination.
	 */
	WCP.ColorPicker.prototype.setRgba = function( r, g, b, a ) {
		var color = this.color;
		color.r = r;
		color.g = g;
		color.b = b;
		
		if(a != null) {
			color.a = a;
		}
		
		var hsv = WCP.rgbToHsv(r, g, b);
		color.h = hsv.h;
		color.s = hsv.s;
		color.v = hsv.v;
		//~ console.log(color);

		this.updateSliders();
		this.redrawSliders();
		this.updateInput();
		return this;
	};


	/**
	 * Function: setRgb
	 * 
	 * Introduced in 2.0
	 * 
	 * Set color using RGB combination.
	 */
	WCP.ColorPicker.prototype.setRgb = function( r, g, b ) {
		return this.setRgba(r, g, b, null);
	};


	/**
	 * Function: setHsva
	 * 
	 * Introduced in 2.0
	 * 
	 * Set color using HSVA combination.
	 */
	WCP.ColorPicker.prototype.setHsva = function( h, s, v, a ) {
		var color = this.color;
		color.h = h;
		color.s = s;
		color.v = v;
		
		if(a != null) {
			color.a = a;
		}
		
		var rgb = WCP.hsvToRgb(h, s, v);
		color.r = rgb.r;
		color.g = rgb.g;
		color.b = rgb.b;
		//~ console.log(color);
		
		this.updateSliders();
		this.redrawSliders();
		this.updateInput();
		return this;
	};


	/**
	 * Function: setHsv
	 * 
	 * Introduced in 2.0
	 * 
	 * Set color using HSV combination.
	 */
	WCP.ColorPicker.prototype.setHsv = function( h, s, v ) {
		return this.setHsva(h, s, v, null);
	};


	/**
	 * Function: setAlpha
	 * 
	 * Introduced in 2.0
	 * 
	 * Set alpha value.
	 */
	WCP.ColorPicker.prototype.setAlpha = function( value ) {
		this.color.a = value;
		
		this.updateSliders();
		this.redrawSliders();
		this.updateInput();
		return this;
	};


	/**
	 * Function: show
	 * 
	 * Show the color picker dialog. This function is only applicable to 
	 * popup mode color picker layout.
	 */
	WCP.ColorPicker.prototype.show = function() {
		var input = this.input;
		var $input = $(input); // Refers to input elm
		var $widget = $(this.widget);
		var options = this.options;
		
		// Don't do anything if not using popup layout
		if( options.layout != "popup" )
			return;
			
		// Don't do anything if the popup is already shown and attached 
		// to the correct input elm
		//if( this == $widget.data('jQWCP.instance') )
			//return;
			
		// Attach instance to widget (because popup widget is global)
		$widget.data('jQWCP.instance', this);
		
		// Terminate ongoing transitions
		$widget.stop( true, true );
		
		// Reposition the popup window
		$widget.css({
			top: (input.getBoundingClientRect().top - WCP.ORIGIN.top + $input.outerHeight()) + 'px',
			left: (input.getBoundingClientRect().left - WCP.ORIGIN.left) + 'px'
		});
		
		// Refresh widget with this instance's options
		this.refreshWidget();
		
		// Redraw sliders
		this.redrawSliders();
		this.updateSliders();
		
		// Store last textfield value (to determine whether to trigger onchange event later)
		this.lastValue = input.value;
		
		$widget.fadeIn( options.animDuration );
		
		// If hideKeyboard is true, force to hide soft keyboard
		if(options.hideKeyboard) {
			$input.blur();
			$(WCP.ColorPicker.overlay).show();
		}
        
        // On mobile layout, autoscroll page to keep input visible
        if($widget.hasClass('jQWCP-mobile')) {
            var scrollTop = $('html').scrollTop();
            var inputTop = input.getBoundingClientRect().top - WCP.ORIGIN.top;
            
            // If input is way too top
            if(inputTop < scrollTop) {
                $('html').animate({ scrollTop: inputTop});
            }
            
            // If input is way too bottom
            else if(inputTop + $input.outerHeight() > scrollTop + window.innerHeight - $widget.outerHeight()) {
                $('html').animate({ scrollTop: inputTop + $input.outerHeight() - window.innerHeight + $widget.outerHeight()});
            }
        }
	};



	/**
	 * Function: hide
	 * 
	 * Hide the color picker dialog. This function is only applicable to 
	 * popup mode color picker layout.
	 */
	WCP.ColorPicker.prototype.hide = function() {
		var $widget = $(this.widget);
		
		// Only hide if popup belongs to this instance
		if(this != $widget.data('jQWCP.instance'))
			return;
		
		$widget.fadeOut( this.options.animDuration );
		$(WCP.ColorPicker.overlay).hide();
	};



	////////////////////
	// Event Handlers //
	////////////////////

	WCP.Handler = {};

	/**
	 * input.onFocus.popup
	 */
	WCP.Handler.input_focus_popup = function( e ) {
		var instance = $(this).data('jQWCP.instance');
		instance.show();
	};


	/**
	 * input.onBlur.popup
	 * 
	 * onBlur event handler for popup layout.
	 */
	WCP.Handler.input_blur_popup = function( e ) {
		var instance = $(this).data('jQWCP.instance');
		
		// If keyboard is hidden, input is always blurred so 
		// no point in hiding
		if(instance.options.hideKeyboard)
			return;
			
		instance.hide();
		
		// Trigger 'change' event only when it was modified by widget
		// because user typing on the textfield will automatically
		// trigger 'change' event on blur.
		if(instance.lastValue != this.value) {
			$(this).trigger('change');
		}
	};


	/**
	 * input.onChange
	 * 
	 * Update the color picker when input is changed.
	 */
	WCP.Handler.input_change = function( e ) {
		var instance = $(this).data('jQWCP.instance');
		var color = WCP.strToColor(this.value);
		if(color) {
			instance.setColor(color);
		}
	};


	/**
	 * widget.onFocus.block
	 * 
	 * Prepare runtime widget data
	 */
	WCP.Handler.widget_focus_block = function( e ) {
		var instance = $(this).data('jQWCP.instance');
		var $input = $(instance.input);
		
		// Store last textfield value
		instance.lastValue = instance.input.value;
		
		// Trigger focus event
		$input.triggerHandler('focus');
	};


	/**
	 * widget.onMouseDown.popup
	 * 
	 * Prevent loss focus of the input causing the dialog to be hidden
	 * because of input blur event.
	 */
	WCP.Handler.widget_mousedown_popup = function( e ) {
		var instance = $(this).data('jQWCP.instance');
		var $input = $(instance.input);
		
		// Temporarily unbind blur and focus event until mouse is released
		$input.off('focus.wheelColorPicker');
		$input.off('blur.wheelColorPicker');
		
		// Temporarily unbind all blur events until mouse is released
		// data('events') is deprecated since jquery 1.8
		if($input.data('events') != undefined) {
			var blurEvents = $input.data('events').blur;
		}
		else {
			var blurEvents = undefined;
		}
		var suspendedEvents = { blur: [] };
		//suspendedEvents.blur = blurEvents;
		//$input.off('blur');
		if(blurEvents != undefined) {
			for(var i = 0; i < blurEvents.length; i++) {
				suspendedEvents.blur.push(blurEvents[i]);
				//suspendedEvents.blur['blur' + (blurEvents[i].namespace != '' ? blurEvents[i].namespace : '')] = blurEvents[i].handler;
			}
		}
		$input.data('jQWCP.suspendedEvents', suspendedEvents);
		//console.log(blurEvents);
		//console.log($input.data('jQWCP.suspendedEvents'));
	};

	/**
	 * widget.onMouseUp
	 * 
	 * Re-bind events that was unbound by widget_mousedown_popup.
	 */
	/*WCP.Handler.widget_mouseup_popup = function( e ) {
		var instance = $(this).data('jQWCP.instance');
		var $input = $(instance.input);
		
		 //Input elm must always be focused, unless hideKeyboard is set to true
		if(!instance.options.hideKeyboard) {
			$input.trigger('focus.jQWCP_DONT_TRIGGER_EVENTS'); // This allow input to be focused without triggering events
		}
		
		 //Rebind blur & focusevent
		$input.on('focus.wheelColorPicker', WCP.Handler.input_focus_popup);
		$input.on('blur.wheelColorPicker', WCP.Handler.input_blur_popup);
		
	};*/



	/**
	 * widget.onBlur
	 * 
	 * Try to trigger onChange event if value has been changed.
	 */
	WCP.Handler.widget_blur_block = function( e ) {
		var instance = $(this).data('jQWCP.instance');
		var $input = $(instance.input);
		
		// Trigger 'change' event only when it was modified by widget
		// because user typing on the textfield will automatically
		// trigger 'change' event on blur.
		if(instance.lastValue != instance.input.value) {
			$input.trigger('change');
		}
		
		// Trigger blur event
		$input.triggerHandler('blur');
	};


	/**
	 * wheelCursor.onMouseDown
	 * 
	 * Begin clicking the wheel down. This will allow user to move 
	 * the crosshair although the mouse is outside the wheel.
	 */
	WCP.Handler.wheelCursor_mousedown = function( e ) {
		var $this = $(this); // Refers to cursor
		var $widget = $this.closest('.jQWCP-wWidget');
		var instance = $widget.data('jQWCP.instance');
		var $input = $(instance.input);
		
		$('body').data('jQWCP.activeControl', $this.parent().get(0));
		
		// Trigger sliderdown event
		$input.trigger('sliderdown');
	};


	/**
	 * wheel.onMouseDown
	 * 
	 * Begin clicking the wheel down. This will allow user to move 
	 * the crosshair although the mouse is outside the wheel.
	 * 
	 * Basically this is the same as wheelCursor_mousedown handler
	 */
	WCP.Handler.wheel_mousedown = function( e ) {
		var $this = $(this); // Refers to wheel
		var $widget = $this.closest('.jQWCP-wWidget');
		var instance = $widget.data('jQWCP.instance');
		var $input = $(instance.input);
		
		$('body').data('jQWCP.activeControl', $this.get(0));
		
		// Trigger sliderdown event
		$input.trigger('sliderdown');
	};


	/**
	 * slider.onMouseDown
	 * 
	 * Begin clicking the slider down. This will allow user to move 
	 * the slider although the mouse is outside the slider.
	 */
	WCP.Handler.slider_mousedown = function( e ) {
		var $this = $(this); // Refers to slider
		var $widget = $this.closest('.jQWCP-wWidget');
		var instance = $widget.data('jQWCP.instance');
		var $input = $(instance.input);
		
		$('body').data('jQWCP.activeControl', $this.parent().get(0));
		
		// Trigger sliderdown event
		$input.trigger('sliderdown');
	};

	/**
	 * sliderCursor.onMouseDown
	 * 
	 * Begin clicking the slider down. This will allow user to move 
	 * the slider although the mouse is outside the slider.
	 */
	WCP.Handler.sliderCursor_mousedown = function( e ) {
		var $this = $(this); // Refers to slider cursor
		var $widget = $this.closest('.jQWCP-wWidget');
		var instance = $widget.data('jQWCP.instance');
		var $input = $(instance.input);
		
		$('body').data('jQWCP.activeControl', $this.parent().get(0));
		
		// Trigger sliderdown event
		$input.trigger('sliderdown');
	};



	/**
	 * html.onMouseUp
	 * 
	 * Clear active control reference.
	 * Also do cleanups after widget.onMouseDown.popup
	 * 
	 * Note: This event handler is also applied to touchend
	 */
	WCP.Handler.html_mouseup = function( e ) {
		var $control = $( $('body').data('jQWCP.activeControl') ); // Refers to slider wrapper or wheel
		
		// Do stuffs when there's active control
		if($control.length == 0)
			return;
			
		var $widget = $control.closest('.jQWCP-wWidget');
		var instance = $widget.data('jQWCP.instance');
		var $input = $(instance.input);
		
		
		// Rebind blur and focus event to input elm which was 
		// temporarily released when popup dialog is shown
		if(instance.options.layout == 'popup') {
			// Focus first before binding event so it wont get fired
			// Input elm must always be focused, unless hideKeyboard is set to true
			if(!instance.options.hideKeyboard) {
				$input.trigger('focus.jQWCP_DONT_TRIGGER_EVENTS'); // This allow input to be focused without triggering events
			}
			
			// Rebind blur & focusevent
			$input.on('focus.wheelColorPicker', WCP.Handler.input_focus_popup);
			$input.on('blur.wheelColorPicker', WCP.Handler.input_blur_popup);
			
			// Rebind suspended events
			var suspendedEvents = $input.data('jQWCP.suspendedEvents');
			if(suspendedEvents != undefined) {
				var blurEvents = suspendedEvents.blur;
				for(var i = 0; i < blurEvents.length; i++) {
					$input.on('blur' + (blurEvents[i].namespace == '' ? '' : '.' + blurEvents[i].namespace), blurEvents[i].handler);
				}
			}
		}
		
		
		// Update active control
		if($control.length != 0) {
			// Last time update active control before clearing
			// Only call this function if mouse position is known
			// On touch action, touch point is not available
			if(e.pageX != undefined) {
				instance.updateActiveControl( e );
			}
			
			// Clear active control reference
			$('body').data('jQWCP.activeControl', null);
			
			// Trigger sliderup event
			$input.trigger('sliderup');
		}
	};


	/**
	 * html.onMouseMove
	 * 
	 * Move the active slider (when mouse click is down).
	 * 
	 * Note: This event handler is also applied to touchmove
	 */
	WCP.Handler.html_mousemove = function( e ) {
		var $control = $( $('body').data('jQWCP.activeControl') ); // Refers to slider wrapper or wheel
		
		// Do stuffs when there's active control
		if($control.length == 0)
			return;
			
		// If active, prevent default
		e.preventDefault();
		
		var $widget = $control.closest('.jQWCP-wWidget');
		var instance = $widget.data('jQWCP.instance');
		var $input = $(instance.input);
		
		instance.updateActiveControl( e );
		
		// Trigger slidermove event
		$input.trigger('slidermove');
		
		return false;
	};


	/**
	 * window.onResize
	 * 
	 * Adjust block widgets
	 */
	WCP.Handler.window_resize = function( e ) {
        var $widgets = $('body .jQWCP-wWidget.jQWCP-block');
        
        $widgets.each(function() {
            var instance = $(this).data('jQWCP.instance');
            instance.refreshWidget();
            instance.redrawSliders();
        });
	};


	/**
	 * overlay.onClick
	 * 
	 * Hide colorpicker popup dialog if overlay is clicked.
	 * This has the same effect as blurring input element if hideKeyboard = false.
	 */
	WCP.Handler.overlay_click = function( e ) {
		if(WCP.ColorPicker.widget == null)
			return;
		
		var $widget = $(WCP.ColorPicker.widget);
		var instance = $widget.data('jQWCP.instance');
		
		// If no instance set, do nothing
		if(instance != null) {
			var $input = $(instance.input);
			
			// Trigger 'change' event only when it was modified by widget
			// because user typing on the textfield will automatically
			// trigger 'change' event on blur.
			if(instance.lastValue != instance.input.value) {
				$input.trigger('change');
			}
			
			instance.hide();
		}
	};

	/******************************************************************/

	////////////////////////////////////////////////////////
	// Automatically initialize color picker on page load //
	// for elements with data-wheelcolorpicker attribute. //
	////////////////////////////////////////////////////////

	$(document).ready(function() {
		$('[data-wheelcolorpicker]').wheelColorPicker({ htmlOptions: true });
	});



	/******************************************************************/

	//////////////////////////////////
	// Browser specific workarounds //
	//////////////////////////////////

	(function() {
		// MOZILLA //
		
		// Force low resolution slider canvases to improve performance
		// Note: Do not rely on $.browser since it's obsolete by jQuery 2.x
		if($.browser != undefined && $.browser.mozilla) {
			$.fn.wheelColorPicker.defaults.quality = 0.2;
		}
		
		// MOBILE CHROME //
		
		// BUG_RELATIVE_PAGE_ORIGIN
		// Calibrate the coordinate of top left point of the page
		// On mobile chrome, the top left of the page is not always set at (0,0)
		// making window.scrollX/Y and $.offset() useless
		$(document).ready(function() {
			$('body').append(
				'<div id="jQWCP-PageOrigin" style="position: absolute; top: 0; left: 0; height: 0; width: 0;"></div>'
			);
			
			var origin = document.getElementById('jQWCP-PageOrigin').getBoundingClientRect();
			WCP.ORIGIN = origin;
		
			$(window).on('scroll.jQWCP_RelativePageOriginBugFix', function() {
				var origin = document.getElementById('jQWCP-PageOrigin').getBoundingClientRect();
				WCP.ORIGIN = origin;
				if(origin.left != 0 || origin.top != 0) {
					WCP.BUG_RELATIVE_PAGE_ORIGIN = true;
				}
			});
		});
		
	})();

}) (jQuery);
;
var BlockModel = Backbone.Model.extend({
    toJSON: function () {
        var data = Backbone.Model.prototype.toJSON.apply(this, arguments);
        for (var i in data) {
            if (data[i] instanceof Backbone.Collection) {
                data[i] = JSON.parse(JSON.stringify(data[i]));
            }
        }
        return data;
    }
});
;
var PageModel = Backbone.Model.extend({
    initialize: function () {
        //FIXME: add page id
        this.set('blocks', new Backbone.Collection());
    },
    addBlock: function (model, beforeBlockId) {
        beforeBlockId = beforeBlockId || null;

        if (beforeBlockId) {
            var beforeModel = this.get('blocks').get(beforeBlockId);
            var index = this.get('blocks').indexOf(beforeModel);
            this.get('blocks').add(model, {at: index});
        } else {
            this.get('blocks').add(model, {at: this.get('blocks').length + 1});
        }

        this.trigger('block_add', model, beforeBlockId);
    },
    deleteBlock: function (model) {
        this.trigger('block_delete', model.id);
        this.get('blocks').remove(model);
    },
    load: function (blocks) {
        for (var i = 0; i < blocks.length; i++) {
            var model = QoobUtils.createModel(blocks[i]);
            this.addBlock(model);
        }
    },
    moveUp: function (model) {
        var index = this.get('blocks').indexOf(model);

        if (index > 0) {
            this.swap(index, index - 1);
            this.trigger('block_moveup', model.id);
        }
    },
    moveDown: function (model) {
        var index = this.get('blocks').indexOf(model);

        if (index < this.get('blocks').models.length) {
            this.swap(index, index + 1);
            this.trigger('block_movedown', model.id);
        }
    },
    swap: function (indexA, indexB) {
        this.get('blocks').models[indexA] = this.get('blocks').models.splice(indexB, 1, this.get('blocks').models[indexA])[0];
    }
});;
/**
 * Create view for block
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobBlockView = Backbone.View.extend({
    tagName: "div",
    className: "content-block-inner",
    /**
     * Saved HTML template before it was added to DOM
     * @type {String}
     */
    renderedTemplate: null,
    /**
     * @param  {Object}
     * @return {[type]}
     */
    initialize: function(options) {
        this.storage = options.storage;
        this.controller = options.controller;
        this.listenTo(this.model, 'change', this.render);
    },
    render: function(event) {
        var self = this,
            params = {name: self.model.get('template'), lib: self.model.get('lib')}

        //Start loading template for block
        this.storage.getBlockTemplate(params, function(err, template){
            var config = self.storage.getBlockConfig(self.model.get('template'));
            var tplAdapterType = config.blockTemplateAdapter || self.storage.getDefaultTemplateAdapter();
            var tplAdapter = QoobExtensions.templating[tplAdapterType];
            self.renderedTemplate = tplAdapter(template)(self.model.toJSON());
            self.controller.layout.viewPort.getWindowIframe().jQuery(self.el).html(self.renderedTemplate);
            self.trigger('loaded');
            self.controller.triggerIframe();
        });
        return self;
    },
    /**
     * Remove view
     */
    dispose: function() {
        // same as this.$el.remove();
        this.remove();

        // unbind events that are
        // set on this view
        this.off();

        // remove all models bindings
        // made by this view
        this.model.off(null, null, this);
    }
});
;
/**
 * Create view for block
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobBlockWrapperView = Backbone.View.extend({
    tagName: "div",
//    className: "content-block-outer",
    events: {
        'click .overlay': 'clickStartEditBlock'
    },
    attributes: function () {
        return {
            'id': 'outer-block-' + this.model.id
        };
    },
    initialize: function (options) {
        this.storage = options.storage;
        this.controller = options.controller;
        this.innerBlock = new QoobBlockView({model: this.model, storage: this.storage, controller: this.controller});
    },
    render: function () {
        var self = this;
        
        this.innerBlock.once('loaded', function () {

            var droppable = _.template(self.storage.qoobTemplates['block-droppable-preview'])({"blockId": self.model.id, "text": this.storage.__('block_droppable_preview', 'Drag here to creative new block')});
            var overlay = _.template(self.storage.qoobTemplates['block-overlay-preview'])({"blockId": self.model.id});
            self.controller.layout.viewPort.getWindowIframe().jQuery(self.el).html([droppable, overlay, self.innerBlock.el]);
            self.$el.addClass('content-show content-block-outer');
            self.droppable();

            self.trigger('loaded');

            // set focus on iframe
            self.controller.layout.viewPort.getWindowIframe().focus();
        });
        //Add 'please wait' template while loading
        self.$el.html(_.template(this.storage.getQoobTemplate('block-pleasewait-preview'))({"text": this.storage.__('block_pleasewait_preview', 'Please wait')}));

        this.innerBlock.render();
        return this;
    },
    clickStartEditBlock: function (evt) {
        this.controller.navigate('edit/' + this.model.id, {trigger: true});
    },
    droppable: function () {
        var self = this;
        this.$el.find('#droppable-' + self.model.id).droppable({
            activeClass: "ui-droppable-active",
            hoverClass: "ui-droppable-hover",
            tolerance: "pointer",
            drop: function (event, ui) {
                var dropElement = jQuery(this);
                //get block name
                var blockName = ui.draggable.attr("id").replace("preview-block-", "");
                //get after id
                var beforeId = dropElement.attr("id").replace("droppable-", "");
                // get lib
                var blockLib = ui.draggable.data('lib');
                // add new block
                self.controller.addNewBlock({name: blockName, lib: blockLib}, beforeId);
            }
        });
    },
    /**
     * Remove view
     */
    dispose: function () {
        var self = this;

        // add animation when remove block
        var animationEnd = 'animationend AnimationEnd';
        this.$el.addClass('content-hide').one(animationEnd, function () {
            // Removes a view from the DOM
            self.$el.remove();

            // unbind events that are
            // set on this view
            self.off();

            // remove all models bindings
            // made by this view
            self.model.off(null, null, self);
        });
    }
});
;
/**
 * Create view for toolbar in qoob layout
 *
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobEditModeButtonView = Backbone.View.extend({
    tagName:'button',
    className:'edit-mode-button',
    events: {
        'click': 'clickEditMode'
    },
    /**
     * View QoobEditModeButton
     * @class QoobEditModeButtonView
     * @augments Backbone.View
     * @constructs
     */
    initialize: function(options) {
        this.storage = options.storage;
        this.controller = options.controller;
        // builder.on('set_preview_mode', this.onPreviewMode.bind(this));
        // builder.on('set_edit_mode', this.onEditMode.bind(this));
    },
    /**
     * Render toolbar
     * @returns {Object}
     */
    // render: function() {
    //     this.$el.html(_.template(this.storage.builderTemplates['builder-edit-mode-button'])());
    //     return this;
    // },
    clickEditMode: function() {
        this.controller.setEditMode();
    },
            setPreviewMode:function(){
                this.$el.fadeIn(300);  
            },
            setEditMode:function(){
                this.$el.fadeOut(300);  
            },

    /**
     * Resize toolbar
     */
    resize: function() {
        //edit-mode-button
        // this.$el.css({
        //     right: jQuery(window).width()-70+'px'
        // });
    },
    /**
     * Show toolbar
     */
    show: function() {
        this.$el.show();
    },
    /**
     * Hide toolbar
     */
    hide: function() {
        this.$el.hide();
    },
    /**
     * If visible toolbar
     */
    isVisible: function() {
        return this.$el.is(":visible");
    }

});
;
/**
 * Create view settings for block
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobFieldView = Backbone.View.extend({
    className: "settings-item",
    initialize: function (options) {
        this.model = options.model;
        this.storage = options.storage;
        this.settings = options.settings;
        this.defaults = options.defaults;
        this.controller = options.controller;
    },
    /**
     * Get value field text
     * @returns {String}
     */
    getValue: function () {
        if (typeof (this.model.get(this.settings.name)) === "undefined") {
            var defaultVal = _.isArray(this.defaults) ? QoobUtils.createCollection(this.defaults) : this.defaults;
            this.model.set(this.settings.name, defaultVal);
        }
        return this.model.get(this.settings.name);
    }
});



;
/**
 * Create view fields for block's settings 
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobFieldsView = Backbone.View.extend(
/** @lends QoobFieldsView.prototype */{
    tagName: "div",
    className: "settings-block",
    /**
     * View settings
     * @class SettingsView
     * @augments Backbone.View
     * @constructs
     */
    initialize: function (options) {
        this.storage = options.storage;
        this.settings = options.settings;
        this.defaults = options.defaults;
        this.controller = options.controller;
        this.parentId = options.parentId;
    },
    /**
     * Render settings
     * @returns {Object}
     */
    render: function () {
        var res = [];
        for (var i = 0; i < this.settings.length; i++) {
            var input = new Fields[this.settings[i].type]({model: this.model, storage: this.storage, settings: this.settings[i], defaults: this.defaults[this.settings[i].name], controller: this.controller, parentId: this.parentId});
            res.push(input.render().el);
        }
        this.$el.html(res);
        
        return this;
    }
});;
/**
 * Create qoob view
 *
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobLayout = Backbone.View.extend(
    /** @lends QoobLayout.prototype */
    {
        tagName: 'div',
        id: 'qoob',
        /**
         * View qoob
         * @class QoobLayout
         * @augments Backbone.View
         * @constructs
         */
        initialize: function(options) {
            this.storage = options.storage;
            this.controller = options.controller;
            this.menu = new QoobMenuView({
                "model": this.model,
                "storage": this.storage,
                "controller": this.controller
            });
            this.toolbar = new QoobToolbarView({
                "model": this.model,
                "storage": this.storage,
                "controller": this.controller
            });
            this.editModeButton = new QoobEditModeButtonView({
                "model": this.model,
                "storage": this.storage,
                "controller": this.controller
            });
            this.viewPort = new QoobViewportView({
                "model": this.model,
                "storage": this.storage,
                "controller": this.controller
            });
        },
        /**
         * Render qoob view
         * @returns {Object}
         */
        render: function() {
            //FIXME: this.storage => this.model
            this.$el.html([this.toolbar.render().el, this.editModeButton.render().el, this.menu.render().el, this.viewPort.render().el]);
            this.editModeButton.hide();
            // this.$el.find('#builder').append(this.toolbar.render().el);
            // this.$el.find('#builder').append(this.editModeButton.render().el);
            
            // this.$el.find('#builder').append(this.menu.render().el);
            // this.$el.find('#builder-content').append(this.viewPort.render().el);

            return this;
        },
        resize: function() {
            this.toolbar.resize();
            this.editModeButton.resize();
            this.menu.resize();
            this.viewPort.resize();
        },
        setPreviewMode: function() {
            this.toolbar.setPreviewMode();
            this.editModeButton.setPreviewMode();
            this.menu.setPreviewMode();
            this.viewPort.setPreviewMode();
            this.resize();
        },
        setEditMode: function() {
            this.toolbar.setEditMode();
            this.editModeButton.setEditMode();
            this.menu.setEditMode();
            this.viewPort.setEditMode();
            this.resize();
        },
        setDeviceMode: function(mode) {
            this.toolbar.setDeviceMode(mode);
            this.viewPort.setDeviceMode(mode);
            //            this.resize();
        },
        startEditBlock: function(blockId){
            this.toolbar.startEditBlock(blockId);
            this.menu.startEditBlock(blockId);
            this.viewPort.startEditBlock(blockId);
        },
        stopEditBlock: function(){
            this.viewPort.stopEditBlock();
        }
    });
;
/**
 * Create view block's preview
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobMenuBlocksPreviewView = Backbone.View.extend(
    /** @lends QoobMenuGroupsView.prototype */
    {
        className: 'catalog-templates menu-block',
        events:{
            'click .preview-block': 'clickPreviewBlock'
        },
        clickPreviewBlock: function(evt){
            var name = evt.currentTarget.id.replace('preview-block-',''),
                lib = this.$(evt.currentTarget).data('lib');

            this.controller.addNewBlock({name: name, lib: lib});
        },

        /**
         * View menu groups
         * @class QoobMenuGroupsView
         * @augments Backbone.View
         * @constructs
         */
        initialize: function(options) {
            this.controller = options.controller;
            this.storage = options.storage;
            this.group = options.group;
        },

        /**
         * Render menu groups
         * @returns {Object}
         */
        render: function() {
            var data = {
                "group": this.group,
                "items": this.storage.getBlocksByGroup(this.group.id)  //FIXME: moveto utils
            };

            this.$el.html(_.template(this.storage.qoobTemplates['menu-blocks-preview'])(data));

            return this;
        }
    });
;
/**
 * Create view settings for block
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobMenuGroupsView = Backbone.View.extend(
/** @lends QoobMenuGroupsView.prototype */{
    tagName: "ul",
    className: "catalog-list",
    id:"catalog-groups",
    /**
     * View menu groups
     * @class QoobMenuGroupsView
     * @augments Backbone.View
     * @constructs
     */
    initialize: function (options) {
        this.storage = options.storage;
        this.groups = options.groups;
        this.controller = options.controller;
    },
    /**
     * Render menu groups
     * @returns {Object}
     */
    render: function () {
      var data = {
        "groups_arr" : _.sortBy(this.groups, 'position')
      };

      this.$el.html(_.template(this.storage.qoobTemplates['menu-groups-preview'])(data));

      return this;
    }
});;
/**
 * Create view for menu in qoob layout
 *
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobMenuView = Backbone.View.extend({
    id: "qoob-menu",
    currentId: 'catalog-groups',
    menuViews: [],
    /**
     * View menu
     * @class QoobMenuView
     * @augments Backbone.View
     * @constructs
     */
    initialize: function(options) {
        this.controller = options.controller;
        this.storage = options.storage;
        this.model.on("block_add", this.addSettings.bind(this));
        this.model.on("block_delete", this.deleteSettings.bind(this));
    },
    addSettings: function(model) {
        var item = this.storage.getBlock(model.get('template'), model.get('lib'));
        this.addView(new QoobMenuSettingsView({ "model": model, "config": item, "storage":this.storage, controller:this.controller }), 270);
    },
    /**
     * Render menu
     * @returns {Object}
     */
    render: function() {
        this.$el.html(_.template(this.storage.qoobTemplates['qoob-menu-preview'])());
        var groups = this.storage.getGroups();
        this.addView(new QoobMenuGroupsView({ storage: this.storage, groups: groups, controller: this.controller }), 0);
        for (var i = 0; i < groups.length; i++) {
            this.addView(new QoobMenuBlocksPreviewView({
                id: 'group-' + groups[i].id,
                storage: this.storage,
                controller: this.controller,
                group: groups[i]
            }), 90);
        }
        this.draggable();

        return this;
    },

    draggable: function() {
        var self = this;
        this.$el.find('.preview-block').draggable({
            appendTo: "body",
            helper: "clone",
            iframeFix: true,
            iframeScroll: true,
            scrollSensitivity: 100,
            scrollSpeed: 15,
            containment:'body',
            start: function(event, ui) {
                jQuery('.droppable').show();
                self.controller.layout.viewPort.getIframeContents().find(".qoob-drag-hide").hide();

            },
            stop: function(event, ui) {
                jQuery('.droppable').hide();
                self.controller.layout.viewPort.getIframeContents().find(".qoob-drag-hide").show();
            }
        });
    },

    setPreviewMode: function() {
        this.$el.fadeOut(300);
    },
    setEditMode: function() {
        this.$el.fadeIn(300);
    },
    showGroup: function(group) {
        this.rotate('group-' + group);
    },
    showIndex: function() {
        this.rotate('catalog-groups');
    },
    startEditBlock: function(blockId) {
        this.rotate('settings-block-' + blockId);
    },

    /**
     * Resize menu
     */
        resize: function() {
        this.$el.css({
            height: jQuery(window).height() - 70,
            top: 70
        });
    },
    /**
     * Add view to side qoob
     * @param {Object} BackboneView  View from render
     * @param {String} side Side qoob
     */
    addView: function(view, side) {
        this.menuViews.push(view);
        this.$el.find('#side-' + side).append(view.render().el);
    },
    /**
     * Get SettingsView by id
     * @param {Number} id modelId
     */
    getSettingsView: function(id) {
        for (var i = 0; i < this.menuViews.length; i++) {
            if (this.menuViews[i].model && this.menuViews[i].model.id == id) {
                return this.menuViews[i];
            }
        };
    },
    /**
     * Menu rotation
     * @param {Integer} id
     * @param {Boolean} back Rotate back
     */
    rotate: function(id) {
        if (this.currentId == id)
            return;

        // current block for id
        var currentElement = this.$el.find('#' + this.currentId);
        var newElement = this.$el.find('#' + id);

        // get block side
        var currentSide = currentElement.closest('div[id^="side-"]');
        var newSide = newElement.closest('div[id^="side-"]');
        var addedClass = newSide.prop('id');

        if(this.$el.find('.card-main').hasClass('side-full-rotation')) {
            this.$el.find('.card-main').removeClass('side-full-rotation');
        }else{
            if (currentSide.prop('id') == newSide.prop('id')) {
                addedClass += ' side-full-rotation';
            }
        }

        // hide all blocks side
        this.$el.find('.menu-block').hide();

        // show current block menu
        currentElement.hide();
        newElement.show();

        // rotate qoob menu
        this.$el.find('.card-main')
            .removeClass(function(index, css) {
                return (css.match(/\bside-\S+/g) || []).join(' ');
            }).removeClass('side-full-rotation')
            .addClass(addedClass)
            .children()
            .removeClass('active');

        // add active class
        newSide.addClass('active');

        // set current rotate id
        this.currentId = id;

    },
    onEditStart: function(blockId) {
        this.rotate('settings-block-' + blockId);
    },
    onEditStop: function() {
        this.rotate('catalog-groups');
    },

    onEditMode: function() {
        this.$el.fadeIn(300);
    },

    /**
     * Rotate menu back
     * Not used
     */
    back: function() {
        var tmp = this.backSide;

        // rotate qoob menu
        this.$el.find('.card-main')
            .removeClass(function(index, css) {
                return (css.match(/\bside-\S+/g) || []).join(' ');
            })
            .addClass(this.backSide);

        // Set back side
        this.backSide = this.currentSide;

        // Set current side
        this.currentSide = tmp;
    },
    /**
     * Delete view from settingsViewStorage
     * @param {String} view id
     */
    delView: function(id) {
        if(this.settingsViewStorage && this.settingsViewStorage[id]) {
            this.settingsViewStorage[id].dispose();
        }   
    },
    deleteSettings: function(modelId) {
        this.controller.stopEditBlock();
        
        var settings = this.getSettingsView(modelId);
        settings.dispose();
    },
    /**
     * Hide groups and blocks in menu those are not contained in selected lib.
     * @param  {String} libName Lib name for which not to hide groups and blocks
     */
    hideLibsExcept: function(libName) {
        var self = this,
            groups = this.$el.find('#catalog-groups li'),
            blocks = this.$el.find('.preview-block');
        
        groups.hide();
        blocks.hide();

        if (libName !== 'all') {
            groups = groups.filter(function(index) {
                return self.$(groups[index]).hasClass(libName);
            });
            blocks = blocks.filter(function(index) {
                return self.$(blocks[index]).hasClass(libName);
            }); 
        }

        groups.show();
        blocks.show();
    }
});
;
/**
 * Create view settings for block
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobMenuSettingsView = Backbone.View.extend(
    /** @lends QoobMenuSettingsView.prototype */
    {
        tagName: "div",
        className: "settings menu-block",
        config: null,
        events: {
            'click .back': 'clickBack',
            'click .delete-block': 'clickDelete',
            'click .movedown': 'clickMoveDown',
            'click .moveup': 'clickMoveUp'
        },
        /**
         * Set setting's id
         * @class SettingsView
         * @augments Backbone.View
         * @constructs
         */
        attributes: function() {
            return {
                id: "settings-block-" + this.model.id
            };
        },
        /**
         * View settings
         * @class QoobMenuSettingsView
         * @augments Backbone.View
         * @constructs
         */
        initialize: function(options) {
            this.config = options.config;
            this.storage = options.storage;
            this.controller = options.controller;
        },
        /**
         * Render settings
         * @returns {Object}
         */
        render: function() {
            var settingsBlock = new QoobFieldsView({
                model: this.model,
                storage: this.storage,
                settings: this.config.settings,
                defaults: this.config.defaults,
                controller: this.controller,
                className: 'settings-block'
            });
            
            this.$el.html(_.template(this.storage.qoobTemplates['menu-settings-preview'])({config: this.config, 'back': this.storage.__('back', 'Back'), 'move': this.storage.__('move', 'Move')})).find('.settings-blocks').prepend(settingsBlock.render().el);
            
            return this;
        },
        clickBack: function(){
            this.controller.stopEditBlock();
        },
        /**
         * Click button remove block
         * @returns {Boolean}
         */
        clickDelete: function() {
            var alert = confirm(this.storage.__('confirm_delete_block', 'Are you sure you want to delete the block?'));
            if (!alert) {
                return false;
            }
            
            this.controller.deleteBlock(this.model);
        },
        /**
         * Click move block down
         */
        clickMoveDown: function() {
            this.controller.moveDownBlock(this.model);
        },
        /**
         * Click move block up
         */
        clickMoveUp: function() {
            this.controller.moveUpBlock(this.model);
        },
        dispose: function() {
            // same as this.$el.remove();
            this.$el.remove();

            // unbind events that are
            // set on this view
            this.off();

            // remove all models bindings
            // made by this view
            this.model.off(null, null, this);
        }
    });
;
/**
 * Create view for toolbar in qoob layout
 *
 * @type @exp;Backbone@pro;View@call;extend
 */

var QoobToolbarView = Backbone.View.extend({
    /** @lends QoobToolbarView.prototype */
    tagName: 'div',
    events: {
        'click .preview-mode-button': 'clickPreviewMode',
        'click .device-mode-button': 'clickDeviceMode',
        'click .exit-button': 'clickExit',
        'click .save-button': 'clickSave',
        'click .autosave-checkbox': 'clickAutosave',
        'change #lib-select': 'changeLib',
    },
    attributes: function() {
        return {
            id: "qoob-toolbar"
        };
    },
    /**
     * View toolbar
     * @class QoobToolbarView
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
        var data = {
            "autosave": this.storage.__('autosave', 'Autosave'),
            "save": this.storage.__('save', 'Save'),
            "exit": this.storage.__('exit', 'Exit'),
            "libs": this.storage.qoobData.libs,
            "curLib": this.storage.currentLib
        };
        this.$el.html(_.template(this.storage.getQoobTemplate('qoob-toolbar-preview'))(data));
        return this;
    },
    /**
     * Resize toolbar
     */
    resize: function() {
        this.$el.css({
            width: window.innerWidth
        });
        return this;
    },
    /**
     * Logo rotation
     * @param {Integer} side
     */
    logoRotation: function(side) {
        this.$el.find('.logo')
            .removeClass(function(index, css) {
                return (css.match(/\bside-\S+/g) || []).join(' ');
            })
            .addClass(side);
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
    startEditBlock: function(blockId) {
        this.logoRotation('side-270');
    },
    /**
     * Show loader autosave
     */
    showSaveLoader: function() {
        this.$el.find('.save-button span.text').hide();
        this.$el.find('.save-button .clock').css('display', 'block');
    },
    /**
     * Hide loader autosave
     */
    hideSaveLoader: function() {
        this.$el.find('.save-button .clock').css('display', '');
        this.$el.find('.save-button span.text').show();
    },

    //EVENTS
    clickPreviewMode: function() {
        this.controller.setPreviewMode();
    },
    clickDeviceMode: function(evt) {
        this.controller.setDeviceMode(evt.target.name);
    },
    clickExit: function() {
        this.controller.exit();
    },
    clickSave: function() {
        this.controller.save();
    },
    clickAutosave: function(evt) {
        this.controller.setAutoSave(evt.target.checked);
    },
    changeLib: function () {
        this.controller.changeLib(this.$el.find('#lib-select').val());
    }
});
;
/**
 * Create view for viewport in qoob layout
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var QoobViewportView = Backbone.View.extend(
    /** @lends QoobViewportView.prototype */
    {
        id: "qoob-viewport",
        deviceMode: "pc",
        previewMode: false,
        blocksCounter: 0,
        blockViews: [],
        /**
         * View menu
         * @class QoobViewportView
         * @augments Backbone.View
         * @constructs
         */
        initialize: function(options) {
            this.controller = options.controller;
            this.storage = options.storage;
            this.model.on("block_add", this.addBlock.bind(this));
            this.model.on("block_delete", this.delBlockView.bind(this));
            this.model.on("block_moveup", this.moveUpBlockView.bind(this));
            this.model.on("block_movedown", this.moveDownBlockView.bind(this));
        },
        /**
         * Render menu
         * @returns {Object}
         */
        render: function() {
            // Getting driver page id for iframe
            var url = this.storage.driver.getIframePageUrl(this.storage.pageId);

            this.$el.html(_.template(this.storage.qoobTemplates['qoob-viewport-preview'])({ "url": url }));
            this.$el.find('#qoob-iframe').on('load', this.iframeLoaded.bind(this));
            return this;
        },
        iframeLoaded: function() {
            this.triggerIframe();
            this.trigger('iframe_loaded');
        },
        /**
         * Shows edit buttons, shadowing other blocks
         * @param {integer} blockId
         */
        startEditBlock: function(blockId) {
            var iframe = this.getWindowIframe();
            iframe.jQuery('.overlay').removeClass('active').addClass('no-active');
            iframe.jQuery('#outer-block-' + blockId).find('.overlay').removeClass('no-active').addClass('active');
        },
        stopEditBlock: function(blockId) {
            var iframe = this.getWindowIframe();
            iframe.jQuery('.overlay').removeClass('active').removeClass('no-active');
        },
        setPreviewMode: function() {
            this.previewMode = true;
            this.getIframeContents().find('#qoob-blocks').addClass('preview');
        },
        setEditMode: function() {
            this.previewMode = false;
            this.getIframeContents().find('#qoob-blocks').removeClass('preview');
        },
        setDeviceMode: function(mode) {
            var self = this;
            this.deviceMode = mode;
            var size = {
                'pc': {
                    'width': '100%'
                },
                'tablet-vertical': {
                    'width': '768px'
                },
                'phone-vertical': {
                    'width': '375px'
                },
                'tablet-horizontal': {
                    'width': '1024px'
                },
                'phone-horizontal': {
                    'width': '667px'
                }
            };
            this.getIframe().stop().animate(size[mode], 500, function(){
                currentRoute = self.controller.current();
                if (currentRoute.route == 'startEditBlock') {
                    self.controller.scrollTo(currentRoute.params[0]);
                }
            });
        },
        /**
         * Resize qoob content
         */
        resize: function() {
            var size = {
                'height': (this.previewMode ? 0 : 70),
                'width': (this.previewMode ? 0 : 258)
            };

            this.$el.stop().animate({
                height: jQuery(window).height() - size.height,
                top: size.height,
                width: jQuery(window).width() - size.width,
                left: size.width
            });

            //Iframe resize
            this.getIframe().height(jQuery(window).height() - size.height);
            if (this.deviceMode == "pc") {
                this.getIframe().width("100%");
            }
        },
        scrollTo: function(blockId) {           
            //Scroll to new block
            this.getWindowIframe().jQuery('html, body').animate({
                scrollTop: this.getBlockView(blockId).$el.offset().top
            }, 1000);
        },
        /**
         * Get BlockView by id
         * @param {Number} id modelId
         */
        getBlockView: function(id) {
            for (var i = 0; i < this.blockViews.length; i++) {
                if (this.blockViews[i].model.id == id) {
                    return this.blockViews[i];
                }
            }
        },
        /**
         * Remove BlockView by id
         * @param {Number} id modelId
         */
        delBlockView: function(id) {
            for (var i = 0; i < this.blockViews.length; i++) {
                if (this.blockViews[i].model.id == id) {
                    this.blockViews[i].dispose();
                    this.blockViews.splice(i, 1);
                }
            }
        },
        /**
         * Add block
         * 
         * @param {Object} block
         * @param {integer} afterBlockId
         */
        addBlock: function(model, beforeBlockId) {
            var self = this;
            var iframe = this.getWindowIframe();

            var blockWrapper = new QoobBlockWrapperView({
                model: model,
                storage: this.storage,
                controller: this.controller
            });
            
            //document fix 
            blockWrapper.setElement(self.controller.layout.viewPort.getWindowIframe().jQuery('<div id="outer-block-' + model.id+'">'));

            this.blockViews.push(blockWrapper);

            //If event 'blocks_loaded' have not been triggered
            if (this.blocksCounter !== null) {
                this.blocksCounter++;
                blockWrapper.once('loaded', function() {
                    self.blocksCounter--;
                    if (self.blocksCounter === 0) {
                        self.trigger('blocks_loaded');
                        self.blocksCounter = null;
                    }
                });
            }
            //Attach element to DOM
            if (beforeBlockId > 0) {
                iframe.jQuery('#outer-block-' + beforeBlockId).before(blockWrapper.render().el);
            } else {
                iframe.jQuery('#qoob-blocks').append(blockWrapper.render().el);
            }
            
            // hide block blank when add block
            if (iframe.jQuery('#qoob-blocks').find('.block-blank:visible').length > 0) {
                iframe.jQuery('#qoob-blocks').find('.block-blank').hide();
            }
            this.triggerIframe();
        },
        /**
         * Create event change for iframe
         * @returns {Event} change
         */
        triggerIframe: function() {
            // Trigger change qoob blocks for theme
            var iframe = this.getWindowIframe();
            iframe.jQuery('#qoob-blocks').trigger('change');
            iframe.jQuery('a, .btn, input[type="submit"]').attr('onclick', 'return false;');
        },
        getIframe: function() {
            return this.$el.find('#qoob-iframe');
        },
        /**
         * Get iframe contents
         * @returns {DOMElement}
         */
        getIframeContents: function() {
            return this.getIframe().contents();
        },
        /**
         * Get iframe documnet
         * @returns {DOMElement}
         */
        getWindowIframe: function() {
            return window.frames["qoob-iframe"];
        },
        moveUpBlockView: function (modelId) {
            var currrentView = this.getBlockView(modelId);
            currrentView.$el.after(currrentView.$el.prev());
            this.scrollTo(modelId);
        },
        moveDownBlockView: function (modelId) {
            var currrentView = this.getBlockView(modelId);
            currrentView.$el.before(currrentView.$el.next());
            this.scrollTo(modelId);
        },
        /**
         * First block if pageData is empty
         */
        createBlankBlock: function() {
            var iframe = this.getWindowIframe();
            iframe.jQuery('#qoob-blocks').append(_.template(this.storage.qoobTemplates['block-default-blank'])({"text": this.storage.__('block_default_blank', 'First of all you need add block')}));
        }
    });
;
var Fields = Fields || {};
Fields.accordion_item_expand = Backbone.View.extend(
/** @lends Fields.accordion_item.prototype */{
    className: "settings-item settings-accordion",
    events: {
        'click .cross-delete': 'deleteModel'
    },
    /**
     * View field accordion item
     * needed for field accordion
     * @class Fields.image
     * @augments Backbone.View
     * @constructs
     */
    initialize: function (options) {
        QoobFieldView.prototype.initialize.call(this, options);
        this.$el.attr('data-model-id', this.model.id);
        this.tpl = _.template(this.storage.qoobTemplates['field-accordion-item-expand-preview']);
    },
    /**
     * Render filed accordion_item
     * @returns {Object}
     */
    render: function () {
        var items = [],
                settingsView = new QoobFieldsView({
                    model: this.model,
                    settings: this.settings,
                    defaults: this.defaults,
                    storage: this.storage,
                    controller: this.controller,
                    parentId: this.model.owner_id
                }),
                htmldata = {
                    "image": settingsView.model.get('image'),
                    "title": settingsView.model.get('title')
                };
        this.listenTo(this.model, 'change', function () {
            this.$el.find("h3 span.text").first().html(this.model.get('title'));
            this.$el.find("h3 span.preview_img img").first().prop('src', this.model.get('image'));
        });

        items.push(this.tpl(htmldata));
        items.push(settingsView.render().$el.append('<div class="cross-delete expand"></div>'));

        if (typeof (this.settings.show) == "undefined" || this.settings.show(this.model)) {
            this.$el.html(items);
        }
        return this;
    },
    /**
     * Removes the view from the DOM and unbinds all events.
     * @param {Object} e
     */
    deleteModel: function () {
        this.model.stopListening();
        this.model.trigger('destroy', this.model, this.model.collection);
        this.remove();
        this.model.trigger('remove_item');
    }
});;
/**
 * Create accordion item flip view 
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var AccordionFlipView = QoobFieldView.extend(
        /** @lends AccordionFlipView.prototype */{
            className: "settings menu-block accordion-item",
            parentId: null,
            /**
             * Set setting's id
             * @class SettingsView
             * @augments Backbone.View
             * @constructs
             */
            attributes: function () {
                return {
                    id: "settings-block-" + this.model.id
                };
            },
            events: {
                'click .backward-accordion': 'backward',
                'click .delete-item-accordion': 'deleteInnerSettings'
            },
            /**
             * View accordion item flip
             * @class AccordionFlipView
             * @augments Backbone.View
             * @constructs
             */
            initialize: function (options) {
                QoobFieldView.prototype.initialize.call(this, options);
                this.tpl = _.template(this.storage.qoobTemplates['field-accordion-item-flip-view-preview']);
                this.parentId = options.parentId;
            },
            /**
             * Render accordion item flip view
             * @returns {Object}
             */
            render: function () {
                var settingsView = new QoobFieldsView({
                    model: this.model,
                    settings: this.settings,
                    defaults: this.defaults,
                    storage: this.storage,
                    controller: this.controller,
                    parentId: this.model.id
                });
                this.$el.html(this.tpl({id: "settings-block-" + this.parentId, currentId: "settings-block-" + this.model.id, 'back': this.storage.__('back', 'Back')}));
                this.$el.find('.settings-blocks').prepend(settingsView.render().$el);
                return this;
            },
            deleteInnerSettings: function () {
                var name = this.$el.prop('id');
                this.backward();
                this.model.trigger('delete_model', this);
                this.controller.deleteInnerSettingsView(name);
            },
            /**
             * Remove view
             */
            dispose: function () {
                // same as this.$el.remove();
                this.$el.remove();
                // unbind events that are
                // set on this view
                this.off();
                // remove all models bindings
                // made by this view
                this.model.off(null, null, this);
            },
            backward: function (e) {
                e.preventDefault();
                this.controller.layout.menu.rotate("settings-block-" + this.parentId);
            }
        });

;
var Fields = Fields || {};
Fields.accordion_item_flip = QoobFieldView.extend(
        /** @lends Fields.accordion_item_front.prototype */{
            className: "settings-item settings-accordion",
            events: {
                // 'click .cross-delete': 'deleteModel',
                'click .title_accordion.inner-settings-flip': 'showSettings',
            },
            /**
             * View field accordion item
             * needed for field accordion
             * @class Fields.image
             * @augments Backbone.View
             * @constructs
             */
            initialize: function (options) {
                QoobFieldView.prototype.initialize.call(this, options);
                this.$el.attr('data-model-id', this.model.id);
                this.tpl = _.template(this.storage.qoobTemplates['field-accordion-item-flip-preview']);
                this.parentId = options.parentId || this.model.owner_id;
                this.model.on("delete_model", this.deleteModel.bind(this));
            },
            /**
             * Show accordion item's settings
             * @returns {Object}
             */
            showSettings: function (evt) {
                var flipView = new AccordionFlipView({
                    model: this.model,
                    settings: this.settings,
                    defaults: this.defaults,
                    storage: this.storage,
                    controller: this.controller,
                    parentId: this.parentId
                });
                this.controller.setInnerSettingsView(flipView);
            },
            /**
             * Render filed accordion_item
             * @returns {Object}
             */
            render: function () {
                var items = [],
                        settingsView = new QoobFieldsView({
                            model: this.model,
                            settings: this.settings,
                            defaults: this.defaults,
                            storage: this.storage,
                            controller: this.controller
                        }),
                        htmldata = {
                            "image": settingsView.model.get('image'),
                            "title": settingsView.model.get('title'),
                        };
                // change preview accordion item
                this.listenTo(settingsView.model, 'change', function () {
                    this.$el.find("h3 span.text").html(this.model.get('title'));
                    this.$el.find("h3 span.preview_img img").prop('src', this.model.get('image'));
                });

                items.push(this.tpl(htmldata));

                if (typeof (this.settings.show) == "undefined" || this.settings.show(this.model)) {
                    this.$el.html(items);
                }
                return this;
            },
            /**
             * Removes the view from the DOM and unbinds all events.
             * @param {Object} e
             */
            deleteModel: function () {
                this.model.stopListening();
                this.model.trigger('destroy', this.model, this.model.collection);
                this.remove();
                this.model.trigger('remove_item');
            }
        });

;
var Fields = Fields || {};
Fields.accordion = QoobFieldView.extend(
    /** @lends Fields.accordion.prototype */
    {
        uniqueId: null,
        classNameItem: "",
        accordionMenuViews: [],
        events: {
            'drop .accordion': 'changePosition'
        },
        /**
         * View field accordion
         * @class Fields.accordion
         * @augments Backbone.View
         * @constructs
         */
        initialize: function(options) {
            QoobFieldView.prototype.initialize.call(this, options);
            this.tpl = _.template(this.storage.qoobTemplates['field-accordion-preview']);
        },
        /**
         * On accordion remove deleting binded events 
         * and triggering basic remove funcction
         * 
         */
        remove: function() {
            this.$el.find('#' + this.uniqueId).next('.add-block').off("click", this.addNewItem);
            Backbone.View.prototype.remove.apply(this, arguments);
        },
        removeItem: function() {
            var values = this.getValue();
            values.trigger('change');
            this.changePosition();
        },
        /**
         * Change position blocks accordion
         * @param {Object} event
         * @param {integer} position
         */
        changePosition: function(event, position) {
            var self = this,
                values = this.getValue(),
                blocks = this.$el.find('#' + this.getUniqueId()).children('.settings-accordion');

            blocks.each(function(index, listItem) {
                var dataId = self.$(listItem).data('model-id'),
                    model = values.get(dataId);

                if (model) {
                    model.set('order', self.$(listItem).index() - 1);
                }
            });
        },
        /**
         * Get unique id
         * @returns {String}
         */
        getUniqueId: function() {
            return this.uniqueId = this.uniqueId || _.uniqueId('accordion-');
        },
        /**
         * Add new item to accordion
         * @param {Object} e
         */
        addNewItem: function(e) {
            e.preventDefault();
            var values = this.getValue(),
                settings = this.settings.settings,
                defaults = this.defaults[0],
                settingsParams = [],
                data = [],
                newModel;

            for (var i in settings) {
                settingsParams.push({ 'name': settings[i].name, 'default': defaults[settings[i].name] });
            }

            for (var i = 0; i < settingsParams.length; i++) {
                data[settingsParams[i].name] = settingsParams[i].default;
            }

            newModel = QoobUtils.createModel(data);
            newModel.owner_id = this.model.id;
            values.add(newModel);
            values.listenTo(newModel, 'change', function() {
                this.trigger('change', this);
            });
            newModel.on("remove_item", this.removeItem.bind(this));
            var item = new Fields[this.classNameItem]({
                model: newModel,
                settings: settings,
                storage: this.storage,
                defaults: defaults,
                controller: this.controller,
                parentId: this.model.id
            });
            item.model.set('order', (values.models ? values.models.length - 1 : 0));

            this.accordionMenuViews.push(item);

            this.$el.find("#" + this.getUniqueId()).append(item.render().el);
            this.$el.find("#" + this.getUniqueId()).accordion("refresh");
            values.trigger('change');
        },
        /**
         * Render filed accordion
         * @returns {Object}
         */
        render: function() {
            var values = this.getValue(),
                settings = this.settings.settings,
                items = [];
            // sort accordion settings
            values.models = _.sortBy(values.models, function(model) {
                return model.get('order');
            });

            this.classNameItem = (this.settings.viewType === undefined || this.settings.viewType === "expand") ? 'accordion_item_expand' : 'accordion_item_flip';
            if (values.length && values.length > 0) {
                for (var i = 0; i < values.models.length; i++) {
                    var item = new Fields[this.classNameItem]({
                        model: values.models[i],
                        settings: settings,
                        defaults: this.defaults[i] || this.defaults[0],
                        storage: this.storage,
                        controller: this.controller
                    });

                    this.accordionMenuViews.push(item);

                    items.push(item.render().el);

                    // listen trigger when remove item
                    values.models[i].on("remove_item", this.removeItem.bind(this));
                }
            }

            var htmldata = {
                "label": this.settings.label,
                "uniqueId": this.getUniqueId(),
                "settings": settings,
                'add_component': this.storage.__('add_component', 'Add component'),
                'drag_to_delete': this.storage.__('drag_to_delete', 'Drag to delete')
            };

            if (typeof(this.settings.show) == "undefined" || this.settings.show(this.model)) {
                this.$el.html(this.tpl(htmldata)).find('#' + this.getUniqueId()).append(items);
                this.sortableInit();
            }
            // AddNewItem func on clicking button
            // we added this handler dynamiclly to prevent bubbling it to inner accordions
            this.$el.find('#' + this.uniqueId).next('.add-block').on('click', this.addNewItem.bind(this));

            return this;
        },
        sortableInit: function() {
            var self = this,
                id = this.getUniqueId();

            this.$el.find("#" + id).accordion({
                header: "> div > h3.inner-settings-expand",
                animate: 500,
                collapsible: true,
                active: false,
                heightStyle: 'content'
            }).sortable({
                items: ".settings-accordion",
                revert: false,
                axis: "y",
                helper: 'clone',
                handle: ".drag-elem",
                connectWith: "#drop-" + id,
                //scroll: true,
                start: function(event, ui) {
                    self.controller.layout.viewPort.getIframeContents().find(".droppable").css("visibility", "hidden");
                    jQuery(this).addClass('is-droppable');
                },
                stop: function(event, ui) {
                    jQuery(this).removeClass('is-droppable');
                    ui.item.trigger("drop", ui.item.index());
                    // IE doesn't register the blur when sorting
                    // so trigger focusout handlers to remove .ui-state-focus
                    ui.item.children("h3").triggerHandler("focusout");
                    // Refresh accordion to handle new order
                    self.$(this).accordion("refresh");
                    self.controller.layout.viewPort.getIframeContents().find(".droppable").removeAttr("style");

                    // Refresh tinyMCE
                    if (self.$(this).find(".textarea_html").length) {
                        self.$(this).find(".textarea_html").each(function() {
                            try {
                                tinymce.execCommand("mceRemoveEditor", false, self.$(this).attr("id"));
                                tinymce.execCommand("mceAddEditor", true, self.$(this).attr("id"));
                            } catch (e) {}
                        });
                    }
                }
            });

            this.$el.find("#drop-" + id).droppable({
                hoverClass: "ui-state-hover",
                drop: function(event, ui) {
                    var modelId = ui.draggable.data('model-id');
                    var model = self.getAccordionMenuViews(modelId);
                    model.deleteModel();
                }
            });
        },
        /**
         * Get sccordionMenuViews by id
         * @param {Number} id modelId
         */
        getAccordionMenuViews: function(id) {
            for (var i = 0; i < this.accordionMenuViews.length; i++) {
                if (this.accordionMenuViews[i].model && this.accordionMenuViews[i].model.id == id) {
                    return this.accordionMenuViews[i];
                }
            }
        }
    });
;
var Fields = Fields || {};
Fields.checkbox_switch = QoobFieldView.extend(
/** @lends Fields.checkbox.prototype */{
    events: {
        'change input': 'changeSwitch'
    },
    /**
     * Event change input
     * @param {Object} evt
     */
    changeSwitch: function (evt) {
        var target = jQuery(evt.target);
        this.model.set(target.attr('name'), (target[0].checked == false ? 0 : 1));
    },
    /**
     * Get boolean value
     * @param {String} val
     * @returns {Boolean}
     */
    getBool: function (val){ 
        if(val == undefined) {
            return false;
        }
        var num = +val;
        return !isNaN(num) ? !!num : !!String(val).toLowerCase().replace(!!0,'');
    },
    /**
     * Get checked
     * @returns {String}
     */
    checked: function () {        
        if (this.model.get(this.settings.name)) {
            return this.getBool(this.model.get(this.settings.name));
        } else {
            return this.getBool(this.settings.default);
        }
    },
    /**
     * Get unique id
     * @returns {String}
     */
    getUniqueId: function () {
        return this.uniqueId = this.uniqueId || _.uniqueId('checkbox-switch-');
    },
    /**
     * Render filed checkbox
     * @returns {Object}
     */
    render: function () {
        var htmldata = {
            "label" : this.settings.label,
            "name" : this.settings.name,
            "uniqueId" : this.getUniqueId(),
            "checked" : (this.checked()  ? "checked" : "")
        };
        this.$el.html(_.template(this.storage.qoobTemplates['field-checkbox-switch-preview'])(htmldata));
        return this;
    }
});
;
var Fields = Fields || {};
Fields.checkbox = QoobFieldView.extend(
/** @lends Fields.checkbox.prototype */{
    events: {
        'change input': 'changeInput'
    },
    /**
     * Event change input
     * @param {Object} evt
     */
    changeInput: function (evt) {
        var target = jQuery(evt.target);
        this.model.set(target.attr('name'), (target[0].checked == false ? 0 : 1));

        var elem = target.parents('.checkbox-switcher').next('.status').find('span');
        elem.toggleClass('status-on');
    },
    /**
     * Get boolean value
     * @param {String} val
     * @returns {Boolean}
     */
    getBool: function (val){
        if(val == undefined) {
            return false;
        } 
        var num = +val;
        return !isNaN(num) ? !!num : !!String(val).toLowerCase().replace(!!0,'');
    },
    /**
     * Get checked
     * @returns {String}
     */
    checked: function () {        
        if (this.model.get(this.settings.name)) {
            return this.getBool(this.model.get(this.settings.name));
        } else {
            return this.getBool(this.settings.default);
        }
    },
    /**
     * Render filed checkbox
     * @returns {Object}
     */
    render: function () {
        var htmldata = {
            "label" : this.settings.label,
            "name" : this.settings.name,
            "status" : (this.checked() ? "status-on" : ""),
            "checked" : (this.checked()  ? "checked" : "")
        };
        
        this.$el.html(_.template(this.storage.qoobTemplates['field-checkbox-preview'])(htmldata));
        return this;
    }
});
;
var Fields = Fields || {};
Fields.colorpicker = QoobFieldView.extend(
/** @lends Fields.colorpicker.prototype */{
    events: {
        'change input': 'changeInput',
        'click .theme-colors': 'changeColor',
        'click .change-color': 'changeColorPicker'
    },
    /**
     * Event change colorpicker
     * @param {Object} evt
     */
    changeInput: function (evt) {
        var target = jQuery(evt.target);
        this.model.set(target.attr('name'), target.parent().find('.active').css('background-color'));
    },
    /**
     * Change color with colorpicker
     * @param {Object} evt
     */
    changeColorPicker: function (evt) {
        var elem = jQuery(evt.currentTarget),
            name = elem.closest('.settings-item').find('input').prop('name'),
            model = this.model;
        this.$el.find('.other-color').removeClass('active');
        elem.addClass('active');
        if ((elem.css('background-color') != 'transparent') && (elem.css('background-color') != 'rgba(0, 0, 0, 0)')) {
            model.set(name, elem.css('background-color'));
        }
        elem.on('slidermove', function () {
            elem.addClass('active');
            model.set(name, elem.css('background-color'));
        });
    },
    /**
     * Change other image
     * @param {Object} evt
     */
    changeColor: function (evt) {
        var elem = jQuery(evt.currentTarget);
        this.$el.find('.other-color').removeClass('active');
        elem.addClass('active');
        this.$el.find('input').trigger("change");
    },
    /**
     * Render filed colorpicker
     * @returns {Object}
     */
    render: function () {
        var htmldata = {
            "label" : this.settings.label,
            "name" : this.settings.name,
            "value" : this.getValue(),
            "arr_colors" : jQuery.inArray(this.getValue(), this.settings.colors),
            "colors" : this.settings.colors
        };

        this.$el.html(_.template(this.storage.qoobTemplates['field-colorpicker-preview'])(htmldata));
        return this;
    }
});;
var Fields = Fields || {};

/**
 * View field icon
 */
Fields.icon = QoobFieldView.extend(
        /** @lends Fields.icon.prototype */{
            events: {
                'change input': 'changeInput',
                'click .edit-icon-preview': 'iconUpload',
                'click .other-icon': 'changeIcon'
            },
            /**
             * View field icon
             * @class Fields.icon
             * @augments Backbone.View
             * @constructs
             */
            initialize: function (options) {
                QoobFieldView.prototype.initialize.call(this, options);
                this.parentId = options.parentId;
                
                var assets = this.storage.getAssets(),
                        icons = [];

                //Get all icons from assets
                for (var i = 0, asLen = assets.length; i < asLen; i++) {
                    for (var j = 0, aLen = assets[i].length; j < aLen; j++) {
                        if (assets[i][j].type === 'icon') {
                            icons.push({
                                classes: assets[i][j].classes,
                                tags: assets[i][j].tags
                            });
                        }
                    }
                }
                
                this.icons = icons;
                this.tpl = _.template(this.storage.qoobTemplates['field-icon-preview']);         
            },
            /**
             * Event change input
             * @param {Object} evt
             */
            changeInput: function (evt) {
                this.model.set(this.$(evt.target).attr('name'), this.$el.find('.edit-icon-preview span').attr('class'));
            },
            /**
             * Image upload
             * @param {Object} evt
             */
            iconUpload: function (evt) {

                window.selectFieldIcon = function (classes, tags) {
                    if (classes) {
                        this.$el.find('.edit-icon-preview span').attr({'class': classes, 'data-icon-tags': (!!tags ? tags : '')});
                        if (classes === 'empty') {
                            this.$el.find('.edit-icon-preview').addClass('empty');
                        } else {
                            this.$el.find('.edit-icon-preview').removeClass('empty');
                        }
                        this.$el.find('input').trigger("change");
                        if (this.$el.find('.other-icons').length) {
                            this.$el.find('.other-icon').removeClass('active');
                        }
                    }
                }.bind(this);

                var iconCenter = new IconCenterView({
                    model: this.model,
                    controller: this.controller,
                    parentId: this.parentId,
                    storage: this.storage,
                    icon: {classes: this.$el.find('.edit-icon-preview span').attr('class'), tags: this.$el.find('.edit-icon-preview span').attr('data-icon-tags')},
                    icons: this.icons
                });
                
                this.controller.setInnerSettingsView(iconCenter);

                return false;
            },
            /**
             * Change other icon
             * @param {Object} evt
             */
            changeIcon: function (evt) {
                var elem = this.$(evt.currentTarget);
                this.$el.find('.other-icon').removeClass('active');
                elem.addClass('active');
                this.$el.find('.edit-icon-preview span').attr({'class': elem.find('span').attr('class'), 'data-icon-tags': elem.find('span').attr('data-icon-tags')});
                this.$el.find('.edit-icon-preview').removeClass('empty');
                this.$el.find('input').trigger("change");
            },
            /**
             * Render filed icon
             * @returns {Object}
             */
            render: function () {
                var htmldata = {
                    label: this.settings.label,
                    name: this.settings.name,
                    icons: _.map(this.settings.presets, function (val) {
                        return this.findByClasses(val);
                    }.bind(this)),
                    icon: this.findByClasses(this.getValue()) || this.getValue()
                };

                if (typeof (this.settings.show) == "undefined" || this.settings.show(this.model)) {
                    this.$el.html(this.tpl(htmldata));
                }

                return this;
            },
            /**
             * Return icon object from icon's storage with needed classes
             * @param {string} classes
             * @returns {Object} Iconobject
             */
            findByClasses: function(classes) {
                return _.findWhere(this.icons, {"classes": classes});
            }
        });
;
var Fields = Fields || {};

/**
 * View field image
 */
Fields.image = QoobFieldView.extend(
        /** @lends Fields.image.prototype */{
            events: {
                'change input': 'changeInput',
                'click .edit-image': 'imageUpload',
                'click .other-photo': 'changeImage'
            },
            /**
             * View field image
             * @class Fields.image
             * @augments Backbone.View
             * @constructs
             */
            initialize: function (options) {
                QoobFieldView.prototype.initialize.call(this, options);
                this.parentId = options.parentId;
                this.tags = options.settings.tags || null;

                this.tpl = _.template(this.storage.qoobTemplates['field-image-preview']);
            },
            /**
             * Event change input
             * @param {Object} evt
             */
            changeInput: function (evt) {
                this.model.set(this.$(evt.target).attr('name'), this.$('.edit-image img').attr('src'));
            },
            /**
             * Image upload
             * @param {Object} evt
             */
            imageUpload: function (evt) {

                window.selectFieldImage = function (src) {
                    this.$el.find('.edit-image').removeClass('empty');
                    if (!src) {
                        this.$el.find('.edit-image').addClass('empty');
                    }
                    this.$el.find('.edit-image').find('img').attr('src', src);
                    this.$el.find('input').trigger("change");
                    if (this.$el.find('.other-photos').length) {
                        this.$el.find('.other-photo').removeClass('active');
                    }
                }.bind(this);

                var mediaCenter = new ImageCenterView({
                    model: this.model,
                    controller: this.controller,
                    parentId: this.parentId,
                    storage: this.storage,
                    curSrc: this.$el.find('.edit-image').find('img').attr('src'),
                    assets: this.storage.getAssets(),
                    tags: this.tags ? this.tags.join(', ') : '',
                    hideDeleteButton: this.settings.hideDeleteButton
                });

                this.controller.setInnerSettingsView(mediaCenter);

                return false;
            },
            /**
             * Change other image
             * @param {Object} evt
             */
            changeImage: function (evt) {
                var elem = this.$(evt.currentTarget);
                this.$el.find('.other-photo').removeClass('active');
                elem.addClass('active');
                this.$el.find('.edit-image img').attr('src', elem.find('img').attr('src'));
                this.$el.find('input').trigger("change");
            },
            /**
             * Render filed image
             * @returns {Object}
             */
            render: function () {
                var htmldata = {
                    "label": this.settings.label,
                    "name": this.settings.name,
                    "images": this.settings.presets,
                    "value": this.getValue(),
                    'media_center': this.storage.__('media_center', 'Media Center')
                };

                if (typeof (this.settings.show) == "undefined" || this.settings.show(this.model)) {
                    this.$el.html(this.tpl(htmldata));
                }
                return this;
            }
        });
;
var Fields = Fields || {};
Fields.select = QoobFieldView.extend(
/** @lends Fields.select.prototype */{
    events: {
        'change select': 'changeSelect',
        'change input': 'changeInput',
        'click .theme-colors': 'changeColor',
    },
    /**
     * Event change colorpicker
     * @param {Object} evt
     */
    changeInput: function(evt) {
        var target = jQuery(evt.target);
        this.model.set(target.attr('name'), target.parent().find('.active').attr("id"));
    },
    /**
     * Event change select
     * @param {Object} evt
     */
    changeSelect: function(evt) {
        var target = jQuery(evt.target);
        this.model.set(target.attr('name'), target.val());
    },
    /**
     * Change other image
     * @param {Object} evt
     */
    changeColor: function(evt) {
        var elem = jQuery(evt.currentTarget);
        this.$el.find('.other-color').removeClass('active');
        elem.addClass('active');
        this.$el.find('input').trigger("change");
    },

    /**
     * Render filed select
     * @returns {Object}
     */
    render: function() {
        var htmldata = {
            "label": this.settings.label,
            "name": this.settings.name,
            "current": this.model.get(this.settings.name) || this.settings.default,
            "options": this.settings.options,
            "visible_color": this.settings.visible_color
        };

        this.$el.html(_.template(this.storage.qoobTemplates['field-select-preview'])(htmldata));
        return this;
    }
});
;
var Fields = Fields || {};
Fields.slider = QoobFieldView.extend(
/** @lends Fields.slider.prototype */{
    events: {
        'change input': 'changeInput'
    },
    /**
     * Event change input
     * @param {Object} evt
     */
    changeInput: function (evt) {
        var target = jQuery(evt.target);
        this.model.set(target.attr('name'), target.val());
    },
    /**
     * Render filed slider
     * @returns {Object}
     */
    render: function () {
        var htmldata = {
            "sliderId" : _.uniqueId('slider'),
            "sizeId" : _.uniqueId('size'),
            "label" : this.settings.label,
            "name" : this.settings.name,
            "value" : this.getValue()
        };
        
        this.$el.html(_.template(this.storage.qoobTemplates['field-slider-preview'])(htmldata));
        return this;
    }
});;
var Fields = Fields || {};
Fields.text_autocomplete = QoobFieldView.extend(
/** @lends Fields.text_autocomplete.prototype */{
    uniqueId: null,
    events: {
        'keyup input': 'changeInput'
    },
    /**
     * Event change input
     * @param {Object} evt
     */
    changeInput: function (evt) {
        var target = jQuery(evt.target);
        this.model.set(target.attr('name'), target.val());
    },
    /**
     * Get unique id
     * @returns {String}
     */
    getUniqueId: function () {
        return this.uniqueId = this.uniqueId || _.uniqueId('text-');
    },
    /**
     * Render filed text
     * @returns {Object}
     */
    render: function () {
        var htmldata = {
            "label" : this.settings.label,
            "name" : this.settings.name,
            "value" : this.getValue(),
            "placeholder" : this.settings.placeholder,
            "uniqueId" : this.getUniqueId()
        };
        this.$el.html(_.template(this.storage.qoobTemplates['field-text-autocomplete-preview'])(htmldata));
        return this;
    }
});;
var Fields = Fields || {};
Fields.text = QoobFieldView.extend(
/** @lends Fields.text.prototype */{
    events: {
        'keyup input': 'changeInput'
    },
    /**
     * Event change input
     * @param {Object} evt
     */
    changeInput: function (evt) {
        var target = jQuery(evt.target);
        this.model.set(target.attr('name'), target.val());
    },
    /**
     * Render filed text
     * @returns {Object}
     */
    render: function () {
        var htmldata = {
            "label" : this.settings.label,
            "name" : this.settings.name,
            "value" : this.getValue(),
            "placeholder" : this.settings.placeholder
        };
        this.$el.html(_.template(this.storage.qoobTemplates['field-text-preview'])(htmldata));
        return this;
    }
});;
var Fields = Fields || {};
Fields.textarea = QoobFieldView.extend(
/** @lends Fields.textarea.prototype */{
    events: {
        'change textarea': 'changeTextarea'
    },
    /**
     * Event change textarea
     * @param {Object} evt
     */
    changeTextarea: function (evt) {
        var target = jQuery(evt.target);
        this.model.set(target.attr('name'), target.val());
    },
    /**
     * Render filed textarea
     * @returns {Object}
     */
    render: function () {
        var htmldata = {
            "label" : this.settings.label,
            "name" : this.settings.name,
            "value" : this.getValue(),
            "textareaId" : _.uniqueId('textarea')
        };
        this.$el.html(_.template(this.storage.qoobTemplates['field-textarea-preview'])(htmldata));
        return this;
    }
});;
var Fields = Fields || {};

/**
 * View field video
 */
Fields.video = QoobFieldView.extend(
        /** @lends Fields.video.prototype */{
            events: {
                'change input': 'changeInput',
                'click .edit-video': 'videoUpload',
                'click .other-video': 'changeVideo'
            },
            /**
             * View field image
             * @class Fields.image
             * @augments Backbone.View
             * @constructs
             */
            initialize: function (options) {
                QoobFieldView.prototype.initialize.call(this, options);
                this.parentId = options.parentId;
                this.tags = options.settings.tags || null;
                this.tpl = _.template(this.storage.qoobTemplates['field-video-preview']);
            },
            /**
             * Event change input
             * @param {Object} evt
             */
            changeInput: function (evt) {
                this.model.set(this.$(evt.target).attr('name'), this.$el.find('.edit-video').attr('data-src'));
            },
            /**
             * Image upload
             * @param {Object} evt
             */
            videoUpload: function (evt) {
                var assets = this.storage.getAssets();

                window.selectFieldVideo = function (src) {
                    if (src) {
                        if (src === 'empty') {
                            this.$el.find('.edit-video').addClass(src);
                        } else {
                            this.$el.find('.edit-video').removeClass('empty');
                        }
                        this.$el.find('.edit-video').attr('data-src', src);
                        this.$el.find('input').trigger("change");
                        if (this.$el.find('.other-videos').length) {
                            this.$el.find('.other-video').removeClass('active');
                        }
                    }
                }.bind(this);

                var videoCenter = new VideoCenterView({
                    model: this.model,
                    controller: this.controller,
                    parentId: this.model.owner_id,
                    storage: this.storage,
                    curSrc: this.$el.find('.edit-video').attr('data-src'),
                    assets: assets,
                    tags: this.tags
                });
                
                this.controller.setInnerSettingsView(videoCenter);

                return false;
            },
            /**
             * Change other video
             * @param {Object} evt
             */
            changeVideo: function (evt) {
                var elem = this.$(evt.currentTarget);
                this.$el.find('.other-video').removeClass('active');
                elem.addClass('active');
                this.$el.find('.edit-video').attr('data-src', elem.attr('data-src'));
                this.$el.find('.edit-video').removeClass('empty');
                this.$el.find('input').trigger("change");
            },
            /**
             * Render filed image
             * @returns {Object}
             */
            render: function () {
                var htmldata = {
                    label: this.settings.label,
                    name: this.settings.name,
                    videos: this.settings.presets,
                    value: this.getValue()
                };

                if (typeof (this.settings.show) == "undefined" || this.settings.show(this.model)) {
                    this.$el.html(this.tpl(htmldata));
                }
                
                return this;
            }
        });
;
/**
 * Create IconCenterView view 
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var IconCenterView = Backbone.View.extend(
        /** @lends IconCenterView.prototype */{
            className: "settings menu-block",
            parentId: null,
            events: {
                'click .backward-icon': 'backward',
                'click #inner-settings-icon .ajax-icon': 'selectIcon',
                'click #inner-settings-icon .ajax-icon.chosen': 'unselectIcon',
                'keyup #inner-settings-icon .icon-search': 'searchFilter',
                'change #inner-settings-icon .pack-icon': 'categoryChange',
                'click .delete-icon': 'deleteIcon'
            },
            /**
             * Set setting's id
             * @class SettingsView
             * @augments Backbone.View
             * @constructs
             */
            attributes: function () {
                return {
                    id: "settings-block-media"
                };
            },
            /**
             * View IconCenter
             * @class IconCenterView
             * @augments Backbone.View
             * @constructs
             */
            initialize: function (options) {
                this.storage = options.storage;
                this.controller = options.controller;
                this.tpl = _.template(this.storage.qoobTemplates['field-icon-setting-preview']);
                this.parentId = options.parentId;
                this.backId = (options.parentId === undefined) ? "settings-block-" + this.model.id : "settings-block-" + options.parentId;
                this.icons = options.icons;
                this.icon = options.icon;
            },
            /**
             * Render IconCenter view
             * @returns {Object}
             */
            render: function () {
                //Creating layout
                this.$el.html(this.tpl({
                    back: this.storage.__('back', 'Back'),
                    all: this.storage.__('all', 'all'),
                    tags: this.storage.__('tags', 'Tags'),
                    icons: this.icons
                }));

                this.afterRender();

                return this;
            },
            /**
             * Actions to do after element is rendered 
             *
             */
            afterRender: function () {
                var packs = [];

                for (var i in this.icons) {
                    var pack = this.icons[i].classes.split(' ')[0] || 'all';
                    if (!_.contains(packs, pack)) {
                        packs.push(pack);
                        this.$el.find('.pack-icon').append('<option value="' + pack + '">' + pack + '</option>');
                    }
                }
                //Inserting tags if such existed
                if (!!this.icon.tags) {
                    this.$el.find('.icon-search').val(this.icon.tags);
                    this.$el.find('.icon-search').trigger('keyup');
                }
                //Initialize select picker
                this.$('.pack-icon').selectpicker();
            },
            /**
             * Remove view
             */
            dispose: function () {
                // same as this.$el.remove();
                this.$el.remove();
                // unbind events that are
                // set on this view
                this.off();
            },
            /**
             * Returning to main block settings on clicking back button
             * @returns {undefined}
             */
            backward: function (e) {
                e.preventDefault();
                this.controller.layout.menu.rotate(this.backId);
            },
            /**
             * Setting an icon by clicking it
             * @param {type} evt
             * @returns {undefined}
             */
            selectIcon: function (evt) {
                this.$el.find('.ajax-icon').removeClass('chosen');
                evt.currentTarget.classList.add('chosen');
                window.selectFieldIcon(this.$(evt.currentTarget).find('span').attr('class'), this.$(evt.currentTarget).find('span').attr('data-icon-tags'));
            },
            /**
             * Unset the chosen icon and returning to the default one
             */
            unselectIcon: function (evt) {
                this.$el.find('.ajax-icon').removeClass('chosen');
                evt.currentTarget.classList.remove('chosen');
                window.selectFieldIcon(this.icon.classes, this.icon.tags);
            },
            /**
             * Delete icon
             * @param {type} evt
             */
            deleteIcon: function (evt) {
                window.selectFieldIcon('empty');
                this.controller.layout.menu.rotate(this.backId);
            },
            /**
             * Keyup event for filtering icons by tags in search input
             * @param {type} evt
             */
            searchFilter: function (evt) {
                var self = this,
                        filteredWords = evt.target.value.split(','),
                        iconsToFilter = this.$el.find('.ajax-icon');

                iconsToFilter.css('display', 'inline-block');

                if (filteredWords.length <= 1 && filteredWords[0] === '') {
                    iconsToFilter.css('display', 'inline-block');
                } else {
                    iconsToFilter.each(function () {
                        var filtered = false;
                        for (var i = 0; i < filteredWords.length; i++) {
                            var regEx = new RegExp(filteredWords[i].replace(/ /g, ' *'));
                            if (filteredWords[i] !== '' && self.$(this).find('span').attr('data-icon-tags').match(regEx)) {
                                filtered = true;
                                self.$(this).css('display', 'inline-block');
                                break;
                            }
                        }
                        if (!filtered) {
                            self.$(this).hide();
                            //Question: first time fadeOut() doesn't work, but hide() dose
                        }
                    });
                }
            },
            /**
             * Filtering icons by category select controller
             * @param {type} evt
             * @returns {undefined}
             */
            categoryChange: function (evt) {
                var pack = evt.target.value,
                        iconsToFilter = this.$el.find('.ajax-icon');

                iconsToFilter.removeClass('not-in-pack');

                if (pack !== 'all') {
                    iconsToFilter.each(function () {
                        if (pack !== this.getAttribute('data-pack-icon')) {
                            this.classList.add('not-in-pack');
                        }
                    });
                }

                this.$el.find('.icon-search').trigger('keyup');
            }
        });;
/**
 * Create buidler view 
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var ImageCenterView = Backbone.View.extend(
        /** @lends ImageCenterView.prototype */{
            className: "settings menu-block",
            parentId: null,
            events: {
                'click .backward-image': 'backward',
                'click #inner-settings-image .ajax-image': 'selectImage',
                'click #inner-settings-image .ajax-image.chosen': 'unselectImage',
                'keyup #inner-settings-image .img-search': 'searchFilter',
                'change #inner-settings-image .img-pack': 'categoryChange',
                'click .delete-image': 'deleteImage',
                'click .img-url-select': 'imgUrlUpload',
                'change .img-url': 'imgUrlChange'
            },
            /**
             * Set setting's id
             * @class SettingsView
             * @augments Backbone.View
             * @constructs
             */
            attributes: function () {
                return {
                    id: "settings-block-media"
                };
            },
            /**
             * View ImageCenter
             * @class ImageCenterView
             * @augments Backbone.View
             * @constructs
             */
            initialize: function (options) {
                this.storage = options.storage;
                this.controller = options.controller;
                this.tpl = _.template(this.storage.qoobTemplates['field-image-setting-preview']);
                this.parentId = options.parentId;
                this.backId = (options.parentId === undefined) ? "settings-block-" + this.model.id : "settings-block-" + options.parentId;
                this.curSrc = options.curSrc;
                this.assets = options.assets;
                this.tags = options.tags;
                this.hideDeleteButton = options.hideDeleteButton;
            },
            /**
             * Render ImageCenter view
             * @returns {Object}
             */
            render: function () {
                //Creating layout
                this.$el.html(this.tpl({
                    curSrc: this.curSrc,
                    assets: this.assets,
                    hideDeleteButton: this.hideDeleteButton,
                    back: this.storage.__('back', 'Back'),
                    all: this.storage.__('all', 'all'),
                    tags: this.storage.__('tags', 'Tags'),
                    image_url: this.storage.__('image_url', 'Image url')
                }));

                this.afterRender();

                return this;
            },
            /**
             * Actions to do after element is rendered 
             *
             */
            afterRender: function () {
                var assets = this.assets,
                        packs = [];

                for (var i = 0; i < assets.length; i++) {
                    for (var j = 0, asset = assets[i]; j < asset.length; j++) {
                        if (asset[j].type === 'image') {
                            //Getting packs
                            var pack = asset[j].pack || 'default';
                            if (!_.contains(packs, pack)) {
                                packs.push(pack);
                                this.$el.find('.img-pack').append('<option value="' + pack + '">' + pack + '</option>');
                            }
                        }
                    }
                }
                //Inserting tags if such existed
                if (!!this.tags) {
                    this.$el.find('.img-search').val(this.tags);
                    this.$el.find('.img-search').trigger('keyup');
                }
                //Initialize select picker
                this.$('.img-pack').selectpicker();
            },
            /**
             * Remove view
             */
            dispose: function () {
                // same as this.$el.remove();
                this.$el.remove();
                // unbind events that are
                // set on this view
                this.off();
            },
            /**
             * Returning to main block settings on clicking back button
             * @returns {undefined}
             */
            backward: function (e) {
                e.preventDefault();
                this.controller.layout.menu.rotate(this.backId);
            },
            /**
             * Setting an image by clicking it
             * @param {type} evt
             * @returns {undefined}
             */
            selectImage: function (evt) {
                this.$el.find('.ajax-image').removeClass('chosen');
                evt.currentTarget.classList.add('chosen');
                window.selectFieldImage(evt.target.getAttribute('src'));
            },
            /**
             * Unset the chosen image and returning to the default one
             */
            unselectImage: function (evt) {
                this.$el.find('.ajax-image').removeClass('chosen');
                evt.currentTarget.classList.remove('chosen');
                window.selectFieldImage(this.curSrc);
            },
            /**
             * Delete image
             * @param {type} evt
             */
            deleteImage: function (evt) {
                window.selectFieldImage('');
                this.controller.layout.menu.rotate(this.backId);
            },
            /**
             * Keyup event for filtering images by tags in search input
             * @param {type} evt
             */
            searchFilter: function (evt) {
                var self = this,
                        filteredWords = evt.target.value.split(','),
                        imagesToFilter = this.$el.find('.ajax-image');

                imagesToFilter.stop(true, true).fadeIn();

                if (filteredWords.length <= 1 && filteredWords[0] === '') {
                    imagesToFilter.stop(true, true).fadeIn();
                } else {
                    imagesToFilter.each(function () {
                        var filtered = false;
                        for (var i = 0; i < filteredWords.length; i++) {
                            var regEx = new RegExp(filteredWords[i].replace(/ /g, ' *'));
                            if (filteredWords[i] !== '' && this.getAttribute('data-image-tags').match(regEx)) {
                                filtered = true;
                                self.$(this).stop(true, true).fadeIn();
                                break;
                            }
                        }
                        if (!filtered) {
                            //Question: first time fadeOut() doesn't work, but hide() dose
                            self.$(this).stop(true, true).fadeOut().hide();
                        }
                    });
                }
            },
            /**
             * Filtering images by category select controller
             * @param {type} evt
             * @returns {undefined}
             */
            categoryChange: function (evt) {
                var pack = evt.target.value,
                        imagesToFilter = this.$el.find('.ajax-image');

                imagesToFilter.removeClass('not-in-pack');

                if (pack !== 'all') {
                    imagesToFilter.each(function () {
                        if (pack !== this.getAttribute('data-image-pack')) {
                            this.classList.add('not-in-pack');
                        }
                    });
                }

                this.$el.find('.img-search').trigger('keyup');
            },
            /**
             * Insert inputed url into the model and trigger change
             * 
             */
            imgUrlUpload: function () {
                //Create media upload frame
                var mcFrame = wp.media({
                    title: this.storage.__('media_title' ,'Select or Upload Media Of Your Chosen Persuasion'),
                    button: {
                        text: this.storage.__('media_text_button' ,'Use this media')
                    },
                    multiple: false  // Set to true to allow multiple files to be selected  
                });
                //On submit - save submitted url
                mcFrame.on('select', function () {
                    // Get media attachment details from the frame state
                    var attachment = mcFrame.state().get('selection').first().toJSON();         
                    this.$el.find('.img-url').val(attachment.url || '').trigger('change');
                }.bind(this));
                //Open media frame
                mcFrame.open();
            },
            /**
             * Check if input is not empty and update model.
             * Use default src if it's empty. 
             *
             */
            imgUrlChange: function () {
                window.selectFieldImage(this.$el.find('.img-url').val() || this.curSrc);
                this.$el.find('.ajax-image').removeClass('chosen');
            }
        });;
/**
 * Create buidler view 
 * 
 * @type @exp;Backbone@pro;View@call;extend
 */
var VideoCenterView = Backbone.View.extend(
    /** @lends VideoCenterView.prototype */
    {
        className: "settings menu-block",
        parentId: null,
        events: {
            'click .backward-image': 'backward',
            'click #inner-settings-video .ajax-video': 'selectVideo',
            'click #inner-settings-video .ajax-video.chosen': 'unselectVideo',
            'keyup #inner-settings-video .video-search': 'searchFilter',
            'change #inner-settings-video .video-pack': 'categoryChange',
            'click .delete-video': 'deleteVideo',
            'click .video-url-select': 'selectCustomVideo',
            'click .video-url-select': 'videoUrlUpload',
            'change .video-url': 'videoUrlChange'
        },
        /**
         * Set setting's id
         * @class SettingsView
         * @augments Backbone.View
         * @constructs
         */
        attributes: function() {
            return {
                id: "settings-block-media"
            };
        },
        /**
         * View VideoCenter
         * @class VideoCenterView
         * @augments Backbone.View
         * @constructs
         */
        initialize: function(options) {
            this.storage = options.storage;
            this.controller = options.controller;
            this.tpl = _.template(this.storage.qoobTemplates['field-video-setting-preview']);
            this.parentId = options.parentId;
            this.backId = (options.parentId === undefined) ? "settings-block-" + this.model.id : "settings-block-" + options.parentId;
            this.curSrc = options.curSrc;
            this.assets = options.assets;
            this.tags = options.tags;
        },
        /**
         * Render VideoCenter view
         * @returns {Object}
         */
        render: function() {
            var assets = this.assets,
                videos = [];
            //Getting info about all video assets
            for (var i = 0; i < assets.length; i++) {
                for (var j = 0; j < assets[i].length; j++) {
                    if (assets[i][j].type === 'video') {
                        videos.push({
                            value: assets[i][j].src,
                            pack: assets[i][j].pack,
                            tags: assets[i][j].tags,
                            title: assets[i][j].title ? assets[i][j].title : '',
                            preview: assets[i][j].preview ? assets[i][j].preview : ''
                        });
                    }
                }
            }
            //Cashing videos
            this.videos = videos;
            //Creating layout
            this.$el.html(this.tpl({
                back: this.storage.__('back' ,'Back'),
                all: this.storage.__('all' ,'all'),
                tags: this.storage.__('tags' ,'Tags'),
                video_url: this.storage.__('video_url' ,'Video url'),
                videos: this.videos
            }));

            this.afterRender();

            return this;
        },
        /**
         * Actions to do after element is rendered 
         *
         */
        afterRender: function() {
            var videos = this.videos,
                packs = [];

            for (var i = 0; i < videos.length; i++) {
                //Getting packs
                var pack = videos[i].pack || 'default';
                if (!_.contains(packs, pack)) {
                    packs.push(pack);
                    this.$el.find('.video-pack').append('<option value="' + pack + '">' + pack + '</option>');
                }
            }
            //Inserting tags if such existed
            if (!!this.tags) {
                this.$el.find('.video-search').val(this.tags);
                this.$el.find('.video-search').trigger('keyup');
            }
            //Initialize select picker
            this.$('.video-pack').selectpicker();
        },
        /**
         * Remove view
         */
        dispose: function() {
            // same as this.$el.remove();
            this.$el.remove();
            // unbind events that are
            // set on this view
            this.off();
        },
        /**
         * Returning to main block settings on clicking back button
         * @returns {undefined}
         */
        backward: function(e) {
            e.preventDefault();
            this.controller.layout.menu.rotate(this.backId);
        },
        /**
         * Setting an image by clicking it
         * @param {type} evt
         * @returns {undefined}
         */
        selectVideo: function(evt) {
            this.$el.find('.ajax-video').removeClass('chosen');
            evt.currentTarget.classList.add('chosen');
            window.selectFieldVideo(this.$(evt.currentTarget).attr('data-src'));
        },
        /**
         * Unset the chosen image and returning to the default one
         */
        unselectVideo: function(evt) {
            this.$el.find('.ajax-video').removeClass('chosen');
            evt.currentTarget.classList.remove('chosen');
            window.selectFieldVideo(this.curSrc);
        },
        /**
         * Delete image
         * @param {type} evt
         */
        deleteVideo: function(evt) {
            window.selectFieldVideo('empty');
            this.controller.layout.menu.rotate(this.backId);
        },
        /**
         * Keyup event for filtering images by tags in search input
         * @param {type} evt
         */
        searchFilter: function(evt) {
            var self = this,
                filteredWords = evt.target.value.split(','),
                videosToFilter = this.$el.find('.ajax-video');

            videosToFilter.stop(true, true).fadeIn();

            if (filteredWords.length <= 1 && filteredWords[0] === '') {
                videosToFilter.stop(true, true).fadeIn();
            } else {
                videosToFilter.each(function() {
                    var filtered = false;
                    for (var i = 0; i < filteredWords.length; i++) {
                        var regEx = new RegExp(filteredWords[i].replace(/ /g, ' *'));
                        if (filteredWords[i] !== '' && this.getAttribute('data-video-tags').match(regEx)) {
                            filtered = true;
                            self.$(this).stop(true, true).fadeIn();
                            break;
                        }
                    }
                    if (!filtered) {
                        //Question: first time fadeOut() doesn't work, but hide() dose
                        self.$(this).stop(true, true).fadeOut().hide();
                    }
                });
            }
        },
        /**
         * Filtering videos by category select controller
         * @param {type} evt
         * @returns {undefined}
         */
        categoryChange: function(evt) {
            var pack = evt.target.value,
                videosToFilter = this.$el.find('.ajax-video');

            videosToFilter.removeClass('not-in-pack');

            if (pack !== 'all') {
                videosToFilter.each(function() {
                    if (pack !== this.getAttribute('data-video-pack')) {
                        this.classList.add('not-in-pack');
                    }
                });
            }

            this.$el.find('.video-search').trigger('keyup');
        },
        /**
         * Upload video by inserted link
         * @param {type} evt
         * @returns {undefined}
         */
        selectCustomVideo: function(evt) {
            this.$el.find('.ajax-video chosen').removeClass('chosen');
            window.selectFieldVideo(this.$(evt.currentTarget).siblings()[0].value || this.curSrc);
        },
        /**
         * Insert inputed url into the model and trigger change
         * 
         */
        videoUrlUpload: function() {
            //Create media upload frame
            var mcFrame = wp.media({
                title: this.storage.__('media_title' ,'Select or Upload Media Of Your Chosen Persuasion'),
                button: {
                    text: this.storage.__('media_text_button' ,'Use this media')
                },
                multiple: false // Set to true to allow multiple files to be selected  
            });
            //On submit - save submitted url
            mcFrame.on('select', function() {
                // Get media attachment details from the frame state
                var attachment = mcFrame.state().get('selection').first().toJSON();
                if (attachment.url) {
                    var url = attachment.url,
                        format = url.substring(url.lastIndexOf('.') + 1, url.length);

                    if (format === 'mp4' || format === 'ogv'|| format === 'webm') {
                        this.$el.find('.video-url').val(url).trigger('change');
                    } else {
                        alert(this.storage.__('alert_error_format_file' ,'This file is not supposed to have correct format. Try another one.'));
                    }
                }
            }.bind(this));
            //Open media frame
            mcFrame.open();
        },
        /**
         * Check if input is not empty and update model.
         * Use default src if it's empty. 
         *
         */
        videoUrlChange: function() {
            window.selectFieldVideo(this.$el.find('.video-url').val() || this.curSrc);
            this.$el.find('.ajax-video').removeClass('chosen');
        }
    });
;
var QoobExtensions = QoobExtensions || {};
QoobExtensions.templating = QoobExtensions.templating || [];

QoobExtensions.templating['handlebars'] = QoobExtensions.templating['hbs'] = function(template) {
    var compiledTemplate = Handlebars.compile(template);
    return function(data) {
        return compiledTemplate(data);
    };
};
;
var QoobExtensions = QoobExtensions || {};
QoobExtensions.templating = QoobExtensions.templating || [];

QoobExtensions.templating['underscore'] = function(template) {
    var compiledTemplate = _.template(template);
    return function(data) {
        return compiledTemplate(data);
    };
};;
var QoobController = Backbone.Router.extend({
    routes: {
        "index": "index",
        "groups/:group": "showGroup", // #groups/name
        "edit/:blockId": "startEditBlock", // #groups/name
    },
    index: function () {
        this.layout.menu.showIndex();
        this.layout.toolbar.logoRotation('side-0');
    },
    showGroup: function (group) {
        this.layout.menu.showGroup(group);
        this.layout.toolbar.logoRotation('side-90');
    },
    setLayout: function (layout) {
        this.layout = layout;
    },
    setPageModel: function (model) {
        this.pageModel = model;
    },
    setStorage: function (storage) {
        this.storage = storage;
    },
    setPreviewMode: function () {
        this.layout.setPreviewMode();
    },
    setEditMode: function () {
        this.layout.setEditMode();
    },
    setDeviceMode: function (mode) {
        this.layout.setDeviceMode(mode);
    },
    /**
     * Autosave page data for interval
     * @param {Boolean} autosave
     */
    setAutoSave: function (autosave) {
        this.autosave = autosave;

        var self = this;
        if (this.autosave) {
            var intervalId = setInterval(function () {
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
    save: function (cb) {
        var self = this;

        // show clock autosave
        this.layout.toolbar.showSaveLoader();

        var json = JSON.parse(JSON.stringify(this.pageModel.toJSON()));
        var html = '';
        var blocks = this.pageModel.get('blocks').models;
        for (var i = 0; i < blocks.length; i++) {
            var blockModel = blocks[i];
            var blockView = this.layout.viewPort.getBlockView(blockModel.id);
            html += blockView.innerBlock.renderedTemplate;
        }

        this.storage.save(json, html, function (err, status) {
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
    exit: function () {
        var self = this;
        if (this.autosave) {
            this.save(function (err, status) {
                self.storage.driver.exit(self.storage.pageId);
            });
        } else {
            this.storage.driver.exit(this.storage.pageId);
        }
    },
    addNewBlock: function (blockParams, afterId) {
        var block = this.storage.getBlock(blockParams.name, blockParams.lib),
            params = QoobUtils.getDefaultSettings(block, block.name);
        
        params.lib = blockParams.lib;

        this.addBlock(params, afterId);
    },
    addBlock: function (values, afterId) {
        var model = QoobUtils.createModel(values);

        this.pageModel.addBlock(model, afterId);
        this.scrollTo(model.id);

        // Remove empty div for mobile
        if (jQuery('#qoob-viewport').find('div').length > 0) {
            jQuery('#qoob-viewport').find('div').remove();
        }
    },
    startEditBlock: function (blockId) {
        this.layout.startEditBlock(blockId);
        this.scrollTo(blockId);
    },
    stopEditBlock: function () {
        this.layout.stopEditBlock();
        this.navigate('index', {trigger: true});
    },
    load: function (blocks) {
        this.pageModel.load(blocks);
    },
    setInnerSettingsView: function (view) {
        //Creating storage for views
        this.layout.menu.settingsViewStorage = this.layout.menu.settingsViewStorage || [];
        var name = view.$el.prop('id');
        //Add view to the qoob side
        if (!!this.layout.menu.settingsViewStorage[name]) {
            this.deleteInnerSettingsView(name);
        }
        this.layout.menu.addView(view, 270);
        this.layout.menu.rotate(name);
        this.layout.menu.settingsViewStorage[name] = view;
    },
    deleteInnerSettingsView: function (name) {
        this.layout.menu.delView(name);
        delete this.layout.menu.settingsViewStorage[name];
    },
    deleteBlock: function (model) {
        this.pageModel.deleteBlock(model);
        this.triggerIframe();
    },
    moveDownBlock: function (model) {
        this.pageModel.moveDown(model);
    },
    moveUpBlock: function (model) {
        this.pageModel.moveUp(model);
    },
    triggerIframe: function () {
        this.layout.viewPort.triggerIframe();
    },
    changeLib: function (name) {
        this.storage.currentLib = name;
        this.layout.menu.hideLibsExcept(name);
    },
    /**
     * Scroll to block
     */
    scrollTo: function (modelId) {
        this.layout.viewPort.scrollTo(modelId);
    },
    /**
     * Get current params from Backbone.history.fragment
     */
    current : function() {
        var Router = this,
        fragment = Backbone.history.fragment,
        routes = _.pairs(Router.routes),
        route = null, params = null, matched;

        matched = _.find(routes, function(handler) {
            route = _.isRegExp(handler[0]) ? handler[0] : Router._routeToRegExp(handler[0]);
            return route.test(fragment);
        });

        if(matched) {
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
    }
});
;
/*global jQuery*/
'use strict';

/**
 * The class responsible for the loader qoob
 *  
 * @version 0.0.1
 * @class  QoobLoader
 */

function QoobLoader(qoob) {
    this.qoob = qoob;
    this.left = 0;
    this.shown = false;
    this.$elem = jQuery('#loader-wrapper');
    this.precents = 0;
    this.tips = [];
}

/**
 * Actions on preloading start.
 * Add random tip for users about qoob
 * 
 */
QoobLoader.prototype.init = function () {
    this.tips = [
        this.qoob.storage.__('add_block_both_by_dragging', 'You can add block both by dragging preview picture or by clicking on it.'),
        this.qoob.storage.__('view_page_in_the_preview_mode', 'You can view page in the preview mode by clicking the up-arrow in the up right corner of the screen.'),
        this.qoob.storage.__('preview_mode_cant_reach_block_editting', "While you are in preview mode - you can't reach block editting."),
        this.qoob.storage.__('activate_autosave', "You can activate autosave of edited page by clicking 'Autosave' button in the toolbar in the top of your screen.")
    ];

    var rand = Math.random() * (this.tips.length - 1),
            rand = rand.toFixed(),
            rand = parseInt(rand);

    this.$elem.find('.tip-content').text(this.tips[rand]);
};

/**
 * Add count steps
 * @param {Integer} count
 */
QoobLoader.prototype.addStep = function (count) {
    this.total = count;
    this.left = this.left + (count || 1);
    if (this.left > 0 && !this.shown) {
        this.show();
    }
};

/**
 * Animating preloader progressbar, depending on step
 * 
 */
QoobLoader.prototype.progressBarAnimate = function () {
    var loadingEl = this.$elem.find('.precent'),
            toPrecent = this.precents;
    
    loadingEl.text(toPrecent);
    this.$elem.find('.progress-bar').animate({width: toPrecent + '%'}, 500);
};

/**
 * Counter loading qoob
 * @param {Integer} count
 */
QoobLoader.prototype.step = function (count) {
    if (this.left == this.total) {
        this.init();
    }

    if (this.precents < 100) {
        this.precents += 25;
        this.progressBarAnimate();
    }

    this.left = this.left - (count || 1);

    if (this.left === 0 && this.shown) {
        this.hide();
    }
};

/**
 * Start loading
 * @param {Integer} count
 */
QoobLoader.prototype.show = function (count) {
    this.shown = true;
};

/**
 * Loading complete
 * @param {Integer} count
 */
QoobLoader.prototype.hide = function (count) {
    this.$elem.delay(350).fadeOut('slow');
    this.shown = false;
};

/**
 * Block added 
 */
QoobLoader.prototype.hideWaitBlock = function () {
    var iframe = this.qoob.qoobLayout.viewPort.getIframeContents();

    iframe.find('.droppable').removeClass('active-wait');
    // remove animation
    setTimeout(function () {
        iframe.find('.content-block').removeClass('content-fade');
    }, 1000);

};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = QoobLoader;
};
/**
 * Initialize qoob storage
 *
 * @param {Object} options
 * @version 0.0.1
 * @class  QoobStorage
 */
function QoobStorage(options) {
    this.pageId = options.pageId || null;
    this.qoobTemplates = null;
    this.qoobData = {};
    this.pageData = null;
    this.blockSettingsViewData = [];
    this.templates = [];
    this.driver = options.driver || new LocalDriver();
    this.currentLib = 'all';
}

/**
 * Load qoob templates
 * @param {loadQoobTemplatesCallback} cb
 */
QoobStorage.prototype.loadQoobTemplates = function (cb) {
    if (this.qoobTemplates) {
        cb(null, this.qoobTemplates);
    } else {
        var self = this;
        self.driver.loadQoobTemplates(function (err, qoobTemplates) {
            if (!err) {
                self.qoobTemplates = qoobTemplates;
            }
            cb(err, self.qoobTemplates);
        });
    }
};

/**
 * Unmask urls of blocks and gather block's data by these urls. Then join these data into one array and put it into storage.
 * @param  {Array}   libsJson Array of lib.json files, previously gatherd.
 * @param  {Function} cb  Callback function.
 */
QoobStorage.prototype.addLibs = function (libsJson, cb) {
    var self = this,
        totalBlocksCount = 0,
        currentBlocksCount = 0;

    libsJson.map(function(blocks) {
        if (blocks.blocks)
            totalBlocksCount += blocks.blocks.length;
    });

    var success = function(i, j, data) {
        data.url = libsJson[i].blocks[j].url;
        var blockData = QoobStorage.parseBlockConfigMask(data, libsJson[i].blocks);
        blockData.name = libsJson[i].blocks[j].name;
        libsJson[i].blocks[j] = blockData;
        currentBlocksCount++;
        if (currentBlocksCount === totalBlocksCount) {
            // Callback after all done
            self.qoobData.libs = libsJson;
            cb(null, libsJson);
        }
    };

    var fail = function(i, j, error) {
        console.log(error);
        currentBlocksCount++;
        if (currentBlocksCount === totalBlocksCount) {
            // Callback after all done
            self.qoobData.libs = libsJson;
            cb(null, libsJson);
        }
    };
    //Config url
    for (var i = 0; i < libsJson.length; i++)
        for (var j = 0; j < libsJson[i].blocks.length; j++)
            if (!!libsJson[i].blocks[j].config_url) {
                jQuery.getJSON(libsJson[i].blocks[j].config_url, success.bind(null, i, j)).fail(fail.bind(null, i, j));
            } else {
                jQuery.getJSON(libsJson[i].blocks[j].url + 'config.json', success.bind(null, i, j)).fail(fail.bind(null, i, j));
            }
};

/**
 * Parsing config file of specified block and replacing masks
 * @param  {Object} block  Block object to parse
 * @param  {Array} blocks Array of all blocks
 * @return {Object}        Parsed block config
 */
QoobStorage.parseBlockConfigMask = function (block, blocks) {
    block = JSON.stringify(block).replace(/%theme_url%|%block_url%\/|%block_url%|%block_url\([^\)]+\)%\/|%block_url\([^\)]+\)%/g, function(substr) {
        var mask = '';
        
        switch(substr) {
            case '%theme_url%': mask = ajax.theme_url;
                break;
            case '%block_url%/': mask = block.url;
                break;
            case '%block_url%': mask = block.url;
                break;
            default:
                var blockName = substr.replace(/%block_url\(|\)%\/|%block_url\(|\)%/g, '');
                if (mask = _.findWhere(blocks, {name: blockName}))
                    mask = mask.url;
                break;
        }

        return mask;
    });

    return JSON.parse(block);
};

/**
 * Return all groups array or array of specified groups.
 * @param  {Array} libNames Names of needed groups.
 * @return {Array}          Specified groups.
 */
QoobStorage.prototype.getGroups = function (libNames) {
    var result = [],
        data = this.qoobData.libs;

    if (!!libNames) {
        data = data.filter(function (lib) {
            return libNames.indexOf(lib.name) !== -1;
        });
    }

    for (var i = 0; i < data.length; i++) {
        data[i].groups.map(function(group) {
            var index = _.findIndex(result, {id: group.id}); 
            if(index === -1) {
                group.libs = [data[i].name];
                result.push(group);
            } else {
                result[index].libs.push(data[i].name);
            }
        });
    }

    return result;
};

/**
 * 
 * @param  {String} group   Group name for which to find blocks.
 * @param  {Array} libNames Names of needed groups.
 * @return {Array}          Blocks array with blocks of specified group and libs.
 */
QoobStorage.prototype.getBlocksByGroup = function (group, libNames) {
    var result = [],
        data = this.qoobData.libs;

    if (!!libNames) {
        data = data.filter(function (lib) {
            return libNames.indexOf(lib.name) !== -1;
        });
    }

    for (var i = 0; i < data.length; i++) {
        result = result.concat(data[i].blocks.filter(function(block) {
            block.lib = data[i].name;
            return (!!group) ? (!!block.settings && block.groups === group) : (!!block.settings);
        }));
    } 
    
    return result;
};

/**
 * Get block or blocks array by specified params
 * 
 */
QoobStorage.prototype.getBlock = function (name, lib) {
    var block,
        blocks = [];

    this.qoobData.libs.map(function(data) {
        blocks = blocks.concat(data.blocks);
    });

    if (!name)
        return blocks;

    var searchObj = {name: name};

    if (!!lib) 
        searchObj.lib = lib;

    block = _.findWhere(blocks, searchObj);

    return block;
};

/**
 * Get page data from storage models
 * @param {getPageDataCallback} cb - A callback to run.
 */
QoobStorage.prototype.loadPageData = function (cb) {
    if (this.pageData) {
        cb(null, this.pageData);
    } else {
        var self = this;
        this.driver.loadPageData(this.pageId, function (err, pageData) {
            if (!err) {
                self.pageData = pageData;
            }
            cb(err, self.pageData);
        });
    }
};

/**
 * 
 * @param {type} templateName
 * @returns {String} QoobStorage.qoobTemplates
 */
QoobStorage.prototype.getQoobTemplate = function (templateName) {
    return this.qoobTemplates[templateName];
};

QoobStorage.prototype.getDefaultTemplateAdapter = function () {
    return 'hbs';
};

QoobStorage.prototype.getBlockConfig = function (templateId) {
    return _.findWhere(this.getBlocksByGroup(), {name: templateId});
};

/**
 * Get template by name
 * 
 * @param {String} name Block's name.
 * @param {Function} cb A callback to run.
 */
QoobStorage.prototype.loadTemplate = function(params, cb) {
    var curBlock = this.getBlock(params.name, (!!params.lib ? params.lib : null)),
        urlTemplate = curBlock.url + curBlock.template;

    jQuery(document).ready(function($) {
        if (ajax.logged_in && ajax.qoob == true) {
            $.ajax({
                url: urlTemplate,
                type: 'GET',
                cache: false,
                dataType: 'html',
                success: function(template) {
                    if (template != '') {
                        cb(null, template);
                    } else {
                        cb(false);
                    }
                }
            });
        }
    });
};

/**
 * Get block template by itemId
 * @param {Number} itemId
 * @param {getTemplateCallback} cb - A callback to run.
 */
QoobStorage.prototype.getBlockTemplate = function (params, cb) {
    var self = this,
        searchObj = {name: params.name};
    if (!!params.lib) {
        searchObj.lib = params.lib;
    }
    //FIXME
    if (this.templates.length > 0 && _.findWhere(this.templates, searchObj)) {
        cb(null, _.findWhere(this.templates, searchObj).template);
    } else {
        this.loadTemplate(params, function (err, template) {
            self.templates.push({
                id: params.name,
                lib: params.lib,
                template: template
            });
            cb(null, template);
        });
    }
};

/**
 * Save qoob
 * @param {Object} json PageData
 * @param {Sring} html DOM blocks
 * @param {saveCallback} cb - A callback to run.
 */
QoobStorage.prototype.save = function (json, html, cb) {
    var data = {
        data: json,
        html: html
    };
    this.driver.savePageData(this.pageId, data, function (err, state) {
        cb(err, state);
    });
};

/**
 * Getting all assets from storage
 * @returns Array of assets
 */
QoobStorage.prototype.getAssets = function (libNames) {
    var assets = [],
        data = this.qoobData.libs;

    if (!!libNames) {
        data = data.filter(function (lib) {
            return libNames.indexOf(lib.name) !== -1;
        });
    }

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].blocks.length; j++) {
            if (!!data[i].blocks[j].assets)
                assets.push(data[i].blocks[j].assets);
        }
    }

    return assets;
};

/**
 * Add translations to qoobData
 * @param  {Object} translations
 */
QoobStorage.prototype.addTranslations = function(translations) {
    if (!translations)
        return;

    this.qoobData.translations = translations;

    return;
};

/**
 * Get translation object from qoobData
 * @return {Object} Translations
 */
QoobStorage.prototype.getTranslations = function() {
    if(!this.qoobData.translations)
        return;

    return this.qoobData.translations;
}; 

QoobStorage.prototype.__ = function(title, defaultStr) {
    if(!title)
        return;

    return (this.getTranslations()[title] || defaultStr);
};;
/**
 * Utils for qoob
 *
 * @version 0.0.1
 * @class  QoobUtils
 */
var QoobUtils = {
    /**
     * Find items for params
     * @param {Array} data
     * @param {Object} args filter params
     * @returns {Object}
     */
    findItems: function(data, args) {
        var result;
        return result;
    },
    /**
     * Create Backbone.Model for settings
     *
     * @param {Object} settings
     * @returns {Backbone.Model|QoobUtils.prototype.createModel.model}
     */
    createModel: function(settings) {
        settings.id = parseInt(_.uniqueId());
        var model = new BlockModel();

        var newSettings = {};
        for (var i in settings) {
            if (_.isArray(settings[i])) {
                newSettings[i] = this.createCollection(settings[i]);
                model.listenTo(newSettings[i], "change", function() {
                    this.trigger('change', this);
                });

                newSettings[i].forEach(function(model, index) {
                    model.owner_id = settings.id;
                });
            } else {
                newSettings[i] = settings[i];
            }
            model.set(i, newSettings[i]);
        }

        return model;
    },
    /**
     * Create collection when nested field is array
     *
     * @param {Object} settings
     * @returns {QoobUtils.prototype.createCollection.collection|Backbone.Collection}
     */
    createCollection: function(settings) {
        var collection = new Backbone.Collection();

        for (var i = 0; i < settings.length; i++) {
            var model = this.createModel(settings[i]);
            collection.add(model);
            collection.listenTo(model, 'change', function() {
                this.trigger('change', this);
            });
        }
        return collection;
    },
    /**
     * Get default settings
     *
     * @param {String} blockName
     */
    getDefaultSettings: function(items, blockName) {
        // get config from storage qoobData
        //qoob.storage.qoobData.items
        var values = {},
            settings = {},
            defaults = {};

        if(Array.isArray(items)) {
            settings = _.findWhere(items, { name: blockName }).settings;
            defaults = _.findWhere(items, { name: blockName }).defaults;
        } else {
            settings = items.settings;
            defaults = items.defaults;
        }
        
        for (var i = 0; i < settings.length; i++) {
            values[settings[i].name] = defaults[settings[i].name];
        }
        
        values.template = blockName;

        return values;
    }
};
;
/**
 * Initialize page qoob
 *
 * @version 0.0.1
 * @class  Qoob
 * @param {Object} options [current page id and {Object} data]
 */
//module.exports.Qoob = Qoob;
function Qoob(options) {

    this.storage = options.storage;

    this.loader = new QoobLoader(this);

    this.options = {
        blockTemplateAdapter: 'hbs',
        blockPreviewUrl: "preview.png"
    };
    _.extend(this.options, options);

    this.controller = new QoobController();

    this.pageModel = new PageModel();

    this.layout = new QoobLayout({
        "model": this.pageModel,
        "storage": this.storage,
        "controller": this.controller
    });

    this.controller.setLayout(this.layout);
    this.controller.setPageModel(this.pageModel);
    this.controller.setStorage(this.storage);
}

/**
 * Activate page qoob
 */
Qoob.prototype.activate = function() {

    var self = this;
    this.loader.addStep(4);
    //Creating and appending qoob layout
    jQuery(window).resize(function() {
        self.layout.resize();
    });
    //Start loading data
    this.storage.loadQoobTemplates(function(err, qoobTemplates) {
        self.storage.driver.loadQoobData(function(err, qoobData) {
            self.storage.addTranslations(qoobData.translations);
            self.loader.step();
            self.storage.addLibs(qoobData.libs, function (err, qoobLibs) {
                self.loader.step();
                self.storage.loadPageData(function(err, pageData) {
                    self.loader.step();

                    //If blocks loaded to viewPort
                    self.layout.viewPort.once('blocks_loaded', function() {
                        self.controller.triggerIframe();
                        Backbone.history.start({ pushState: false });
                        self.loader.step();
                    });

                    //If iframe ready to load blocks
                    self.layout.viewPort.once('iframe_loaded', function() {
                        self.layout.viewPort.getWindowIframe().onbeforeunload = function(){return false;};
                        //Start loading blocks
                        if (pageData && pageData.blocks.length > 0) {
                            self.controller.load(pageData.blocks);
                        } else {
                            Backbone.history.start({ pushState: false });
                            //Skip counter for blocks
                            self.layout.viewPort.blocksCounter = null;
                            self.loader.step();
                            
                            // if first start page
                            self.layout.viewPort.createBlankBlock();
                        }
                        jQuery('#lib-select').selectpicker();

                    });
                    //Render layout
                    jQuery('body').prepend(self.layout.render().el);
                    self.layout.resize();

                }); 
            });
        });
        
    });
};