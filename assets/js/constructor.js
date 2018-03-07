"use strict";
jQuery(document).ready(function ($) {

    // Append includes (header, footer, navigation etc.)
    $.get("header.html", function(data){
        $('#header').append(data);
    });

    $.get("nav-categories.html", function(data){
        $('#nav-categories').append(data);
    });

    $.get("nav-pages.html", function(data){
        $('#nav-pages').append(data);
    });

    $.get("sidebar.html", function(data){
        $('#sidebar').append(data);
    });

    $.get("footer.html", function(data){
        $('#footer').append(data);
    });

    $.get("copyright.html", function(data){
        $('#copyright').append(data);
    });
});