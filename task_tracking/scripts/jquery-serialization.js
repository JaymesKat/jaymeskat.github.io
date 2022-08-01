(function ($) {
    $.fn.extend({
      toObject: function () {
        var result = this.serializeArray().reduce((obj, elem) => {
          obj[elem.name] = elem.value;
          return obj
        }, {})
        return result;
      },
      fromObject: function (obj) {
        $.each(this.find(":input"), function (i, v) {
          var name = $(v).attr("name");
          if (obj[name]) {
            $(v).val(obj[name]);
          } else {
            $(v).val("");
          }
        });
      },
    });
})(jQuery);