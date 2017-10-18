$(document).ready(function () {
    //navbar 
    var $activeLi = $('.nav').find(".active");
  
    var $attr = $activeLi.find('a').attr('aria-label');
    console.log($attr);

    
    var $submenu = $('.sub').find('.' + $attr);
    $submenu.css("display", "block");


    //nabar dropdown
    //var $dropdown = $(".dropdown-toggle");

    //$dropdown.hover(function () {
    //    console.log($(this).parent(".dropdown").find(".dropdown-menu"));
    //    var $dropmenu = $(this).parent(".dropdown");
    //    $dropmenu.toggleClass("open");
    //    $dropmenu.find(".dropdown-toggle").attr("aria-expanded","true")
    //    })
    //navbar dropdwon
    //nabar
});

$(".menu>li").each(function () {
    var navItem = $(this);
    if (navItem.find('a').attr('href') == location.pathname) {
        console.log("inside if");
        $(this).addClass("active");
    }

})

