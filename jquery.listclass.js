(function ( $ ) { 
  $.fn.listclass = function(options) {
    // Setting up default options
    var settings = $.extend({
        // These are the defaults.
        item_limit:       "4",
        class_name:       "multi-column"
    }, options );

    return this.each(function() {
      var $this = $(this);
      list_size = $this.find("li").length;
      if(list_size >= settings.item_limit) {
        $this.addClass(settings.class_name);
      }
    });
  };
}( jQuery ));