(function ( $ ) { 
  $.fn.listclass = function(options) {
    // Setting up default options
    var settings = $.extend({
        // These are the defaults.
        item_limit:       "4",
        class_name:       "multi-column",
        apply_on_parents: false
    }, options );

    return this.each(function() {
      var $this = $(this);
      list_size = $this.find("li").length;
      // if there's another <ul> inside our selector:
      if($this.has('ul')) {
        has_children = true;
      }

      if(!has_children || settings.apply_on_parents) {
        if(list_size >= settings.item_limit) {
          $this.addClass(settings.class_name);
        }
      }
    });
  };
}( jQuery ));