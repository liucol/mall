var $goodslist = $("#goodslist"),
    $goodswp = $(".goodswp");

waterfull();
$(window).resize(function() {
    waterfull();
})

function waterfull() {
    var contain_num = parseInt($goodslist.width() / ($goodswp.width() + 23)),
        modelhheightarray = [];

    for (var i = 0; i < contain_num; i++) {
        modelhheightarray[i] = 0;
    }

    $goodswp.each(function() {
        var modelhheightarray_min = Math.min.apply(null, modelhheightarray),
            modelhheightarray_max,
            minindex = modelhheightarray.indexOf(modelhheightarray_min);

        $(this).css({
            "top": modelhheightarray_min,
            "left": minindex * $goodswp.outerWidth(true)
        })
        modelhheightarray[minindex] = modelhheightarray_min + $(this).outerHeight(true);
        modelhheightarray_max = Math.max.apply(null, modelhheightarray);
        $goodslist.css({ "height": modelhheightarray_max })
    })
}