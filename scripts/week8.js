/*the lines below are to prevent false errors from jslint or eslint in Brackets*/

/*eslint-disable no-unused-vars*/
/*global $, document, alert, window*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: week8.js
Date: 02/29/2020
Programmer: Richard Brown
*/

// The line below is to test your link to the .js file. Please comment it out when it works.
//alert("the link to the .js file is correct!");

// The line below is to test your link to the jquery.min.js file. Please comment it out when it works.
//if (window.jQuery) {
//    //    alert("the link to the jQuery file is correct!");
//}

// Enter your jQuery code below this line (put a blank line first).

$(document).ready(function () {

    //    if (window.jQuery) {
    //        alert("JQuery is running!");
    //    }

    var imagesFolder = "images/";

    var imageSource;

    var photoCaption;

    $(".cross").hide();

    $(".menu").hide();

    $(".hamburger").show();

    $("h1").text("jQuery Photo Gallery and Menu");

    $("h2").text("Richard Brown");

    $("#bigPhoto").attr("src", imagesFolder + "Agua_Azul.jpg");

    var thumbNames = ["Agua_Azul_small.jpg", "Burney_Falls_small.jpg",
                      "Deer_Leap_Falls_small.jpg", "Fulmer_Falls_small.jpg",
                      "Hopetown_Falls_small.jpg", "Jonathans_Run_small.jpg",
                      "Manavgat_small.jpg", "Niagara_Falls_small.jpg"];

    //    $.each(thumbNames, function (i) {
    //
    //        alert(thumbNames[i]);
    //    });

    $(".thumbnail-inner").each(function (i) {

        this.src = imagesFolder + thumbNames[i];
    });

    $(".thumbnail-inner").on("click", function () {

        //        alert("You clicked this image!");

        $("img").css("opacity", "1");

        $(this).css("opacity", ".5");

        var imageSource = $(this).attr("src");

        //        alert(imageSource);

        imageSource = imageSource.replace("_small", "");

        $("#bigPhoto").attr("src", imageSource);

        photoCaption = imageSource.replace(".jpg", "");

        photoCaption = photoCaption.replace("images/", "");

        $("#caption").text(photoCaption);

    });

    $(".hamburger").on("click", function () {

        $(".menu").slideToggle("slow");
        $(".hamburger").hide();
        $(".cross").show();
    });

    $(".cross").on("click", function () {

        $(".menu").slideToggle("slow");
        $(".hamburger").show();
        $(".cross").hide();
    });

});
