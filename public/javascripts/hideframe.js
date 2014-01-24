(function($){


var emptyFn = function(){
 return false;
};

/**
 * LightBox Defaults
 */
var lightBoxDefaults = {
 fixedNavigation: true,
 imageLoading: Site.info.url+'images/lightbox/lightbox-ico-loading.gif',
 imageBtnPrev: Site.info.url+'images/lightbox/lightbox-btn-prev.gif',
 imageBtnNext: Site.info.url+'images/lightbox/lightbox-btn-next.gif',
 imageBtnClose: Site.info.url+'images/lightbox/lightbox-btn-close.gif',
 imageBlank: Site.info.url+'images/lightbox/lightbox-blank.gif'
};

/**
 * Slides the sidebar to the Left
 * @param handler jQuery The handler to be binded
 * @param sidebar jQuery The sidebar to be animated
 */
var toggleSidebar = function(handler, sidebar){
 handler.click(function(){
 var left = sidebar.css('left');
 var width = sidebar.css('width');
 var animated = sidebar.is(':animated');

 // If it's been animated return false
 if (animated)
 return false;

 // Animate left or right depending in the current status
 if (parseInt(left) == 0)
 sidebar.animate({ left: '-'+width }, 'fast');
 else
 sidebar.animate({ left: 0 }, 'fast');
 });
};

/**
 * Toggle tooltips
 * @param handler jQuery The handler to be binded
 * @param sidebar jQuery The tooltip to be animated
 */
var toggleTooltip = function(handler, tooltip){
 // flag to determine if we have to add a new hiding animation, so we don't have a long queue
 var isVisible = false;
 handler.bind('mouseenter', function(){
 // If it's been animated return false
 if (tooltip.is(':animated'))
 return false;

 // upgrade the z-index
 handler.css('z-index', 2).siblings().css('z-index', 1).end();

 // remove the display:none property in the tooltip so it can be animated again
 tooltip.show();

 // Animate the tooltip and activate the flag
 tooltip.animate({ top: '+25px', opacity: 1 }, 'fast');
 isVisible = true;
 });

 handler.bind('mouseleave', function(){
 // if tooltip is visible then animate it and then hide it
 if (isVisible) {
 tooltip.animate({ top: '-25px', opacity: 0 }, 'fast', function(){
 // hide the tooltip with display:none so the it's not triggered while it's invisible
 tooltip.hide();
 });
 isVisible = false;
 }
 });
};


/**
 * Trigger scripts on Dom ready
 * @param fn function The Whole script
 */
Site.init = function(){
 // Debug Mode: skips hrefs temporarily
//$('a[rel=external]').click(emptyFn);

 // Bind the Lightbox script
 //$('a.lightbox').lightBox(lightBoxDefaults);

 // Sidebar animation
 $('#sidebar').each(function(){
 var sidebar = $(this);
 var handler = $('<div id="sidebar-handler"></div>').appendTo(sidebar);
 toggleSidebar(handler, sidebar);
 });

 // Tooltip animation
 //$('span.tooltip').each(function(){
 // var tooltip = $(this);
 // var link = tooltip.parent();
 // toggleTooltip(link, tooltip);
 //});

 $('#top-content select').bind('change', function(){
 this.form.submit();
 });
}

})(jQuery);