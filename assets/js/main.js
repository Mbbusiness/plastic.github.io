/*************************************************
 1. Load Functions
 2. Events binding
 3. Height constructors
 4. Audio player
 5. Video play function
 6. Validation of the contact forms
 7. Sliders and carousels
 8. Tooltips initialization
 *************************************************/


"use strict";
jQuery(document).ready(function($){
    /*------------------------------------------------
     * 1. Load Functions
     ------------------------------------------------*/
    playVideo();

    contactFormValidation();

    sliderConstructor();

    tooltipActivator();

    /*------------------------------------------------
     * 2. Events binding
     ------------------------------------------------*/
    $('body').on('click', function (e) {
        if (e.target && e.target.matches(".eks")) {
            $('.search-wrap').toggleClass('open');
        }

        if (e.target && e.target.matches(".dps-btn-scroll")) {
            e.preventDefault();
            var id = $(e.target).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 2000);
        }

        if (e.target && e.target.matches(".about-menu-item")) {
            e.preventDefault();
            var id = $(e.target).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        }

        if (e.target && e.target.matches(".description-box") || e.target.matches(".description-box p")) {
            e.preventDefault();
            $('.description-box').not($(this)).removeClass('active');
            $(e.target).closest( '.description-box' ).addClass('active');
            var targetId = $(e.target).closest( '.description-box' ).attr( 'data-target' );
            var targetImg = $(e.target).closest( '.images-tab' ).find( '.' + targetId );
            if ( !targetImg.hasClass( 'active' )) {
                targetImg.addClass( 'active' ).siblings().removeClass( 'active' );
            }
        }

        if (e.target && e.target.matches("#appointmentRequestButton") || e.target.matches("#appointmentRequestButton .button-helper")) {
            $('#appointmentRequest').modal('toggle');
        }
    });


    $('body').on('transitionend webkitTransitionEnd oTransitionEnd', function (e) {
        if (e.target && e.target.matches(".search-field")) {
            if ($(".search-wrap").hasClass('open')) {
                $(".search-field").focus();
            } else {
                return;
            }
        }
    });


    /*------------------------------------------------
     * 3. Height constructors
     ------------------------------------------------*/
    /*About-us-photo-wrapper height constructor*/
    $('.about-us-photo-wrapper').height(function() {
        var aboutHeight = $('.about-us .row').height();
        return aboutHeight;
    });

    /*Contact-photo-wrapper height constructor*/
    $('.contact-photo-wrapper').height(function() {
        var contactHeight = $('.contact .row').height();
        return contactHeight;
    });

    /*Advantages-photo-wrapper height constructor*/
    $('.advantages-photo-wrapper').height(function() {
        var advantagesHeight = $('.advantages .row').height();
        return advantagesHeight;
    });


    /*------------------------------------------------
     * 4. Audio player
     ------------------------------------------------*/
    if ($("#jquery_jplayer_1").length > 0) {
        $("#jquery_jplayer_1").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: "assets/audio/SampleAudio_0.5mb.mp3",
                    wav: "assets/audio/SampleAudio_0_5mb.wav"
                });
            },
            swfPath: "assets/js",
            supplied: "mp3, wav"
        });
    }
});

/*------------------------------------------------
 * 5. Video play function
 ------------------------------------------------*/
function playVideo() {
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-pause");
    var buttonHoverBg = document.getElementById("video-button-hover-bg");
    $('body').on('click', '.video__placeholder, #play-pause', function() {
        if ( !$('#video-player').length ) {
            var video = '<iframe id="video-player" src="' + $('.video__placeholder').attr('data-video') + '" frameborder="0" allowfullscreen wmode="opaque" autoplay></iframe>';
            $(video).insertAfter( $('.video__placeholder') );
            playButton.style.display = 'none';
            $('#video-button-hover-bg').hide();
        } else {
            playButton.style.display = 'block';
            buttonHoverBg.style.display = 'block';
            $('#video-player').remove();
        }
    });

    var video2 = document.getElementById("video2");
    var playButton2 = document.getElementById("play-pause2");
    var vpc = document.getElementById("video-placeholder-controls");
    $('body').on('click', '.video__placeholder2, #play-pause2', function() {
        if ( !$('#video-player2').length ) {
            var video2 = '<iframe id="video-player2" src="https://www.youtube.com/embed/jFZKeafg35E?autoplay=1" frameborder="0" allowfullscreen autoplay></iframe>';
            $(video2).insertAfter( $('.video__placeholder2') );
            playButton2.style.display = 'none';
            vpc.style.display = 'none';
        } else {
            playButton2.style.display = 'block';
            vpc.style.display = 'block';
            $('#video-player2').remove();
        }
    });
}

/*------------------------------------------------
 * 6. Validation of the contact forms
 ------------------------------------------------*/
function contactFormValidation() {
    var nameRegex = /[A-Za-zЄ-ЯҐа-їґ]{2,50}$/;
    var phoneNumberRegex = /\+\d{12}$/;
    var emailRegex = /^(([^<>()[\]\\,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    $('body').on('click', '#contact-button', function validateRegistration() {
        var firstName = document.getElementsByName("your-name")[0];
        var email = document.getElementsByName("your-email")[0];
        var mobilePhone = document.getElementsByName("your-tel")[0];
        var arr = form.getElementsByTagName('input');

        for(var i = 0; i < arr.length; i++) {
            if ((!nameRegex.test(firstName.value)) || (mobilePhone.value == '' || mobilePhone.value == ' ' || isNaN(mobilePhone.value) || !phoneNumberRegex.test(mobilePhone.value)) || (!emailRegex.test(email.value))) {
                if (!nameRegex.test(firstName.value)) {
                    firstName.style.boxShadow = '2px 2px 25px 0px rgba(175,32,20,0.35)';
                } else {
                    firstName.style.boxShadow = 'none';
                }
                if (mobilePhone.value == '' || mobilePhone.value == ' ' || isNaN(mobilePhone.value) || !phoneNumberRegex.test(mobilePhone.value)) {
                    mobilePhone.style.boxShadow = '2px 2px 25px 0px rgba(175,32,20,0.35)';
                } else {
                    mobilePhone.style.boxShadow = 'none';
                }
                if (!emailRegex.test(email.value)) {
                    email.style.boxShadow = '2px 2px 25px 0px rgba(175,32,20,0.35)';
                } else {
                    email.style.boxShadow = 'none';
                }
                return false;
            }
            else {
                firstName.style.boxShadow = 'none';
                mobilePhone.style.boxShadow = 'none';
                email.style.boxShadow = 'none';
                return true;
            }
        }
    });
}

/*------------------------------------------------
 * 7. Sliders and carousels
 ------------------------------------------------*/
function sliderConstructor() {
    function teamSlider() {
        var owl = $('.team-slider-container'),
            owlOptions = {
                loop: true,
                nav:true,
                items: 4,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                smartSpeed: 650,
                responsive: {
                    0 : {
                        items: 1
                    },
                    641 : {
                        items: 2
                    },
                    890 : {
                        items: 3
                    },
                    1280 : {
                        items: 4
                    }
                }
            };
        if ( $(window).width() > 640 && $(".team-slider-container").length > 0 ) {
            var owlActive = owl.owlCarousel(owlOptions);
            owl.removeClass('off');
        } else {
            owl.addClass('off');
        }

        $(window).resize(function() {
            if ( $(window).width() >= 640 ) {
                if ( $('.team-slider-container').hasClass('off') ) {
                    var owlActive = owl.owlCarousel(owlOptions);
                    owl.removeClass('off');
                }
            } else {
                if ( !$('.team-slider-container').hasClass('off') && $(".team-slider-container").length > 0 ) {
                    $('.team-slider-container').owlCarousel('destroy').owlCarousel({
                        items	: 1
                    });

                }
            }
        });
    }
    $(document).ready(teamSlider);
    $(window).resize(teamSlider);


    function mainPageSlider() {
        if ($(".main-page-slider").length > 0 ) {
            $('.main-page-slider').owlCarousel({
                loop: true,
                autoplay: true,
                nav: false,
                dots: true,
                items: 1,
                center: true,
                smartSpeed: 650
            });
        }
    }
    $(document).ready(mainPageSlider);


    if ($(".testimonials-carousel").length > 0 ) {
        $('.testimonials-carousel').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            center: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            smartSpeed: 650
        });
    }

    if ($(".bgws-photo-wrapper").length > 0 ) {
        $('.bgws-photo-wrapper').owlCarousel({
            center: true,
            items: 1,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            smartSpeed: 650
        });
    }

    function singlePostSlider() {
        if ($(".slide-cont").length > 0) {
            $(".single-post-carousel").owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                smartSpeed: 650,
                responsive: {
                    0: {
                        dots: false
                    },
                    768: {
                        dots: true
                    }
                }
            });
// the following to the end is whats needed for the thumbnails.
// 1) ASSIGN EACH 'DOT' A NUMBER
            var dotcount = 1;
            $('.owl-dot').each(function () {
                $(this).addClass('dotnumber' + dotcount);
                $(this).attr('data-info', dotcount);
                dotcount = dotcount + 1;
            });

// 2) ASSIGN EACH 'SLIDE' A NUMBER
            var slidecount = 1;
            $('.owl-item').not('.cloned').each(function () {
                $(this).addClass('slidenumber' + slidecount);
                slidecount = slidecount + 1;
            });

// SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
            $('.owl-dot').each(function () {
                var grab = $(this).data('info');
                var slidegrab = $('.slidenumber' + grab + ' img').attr('src');
                $(this).css("background-image", "url(" + slidegrab + ")");

            });
        };
    }
    $(document).ready(singlePostSlider);
    $(window).resize(singlePostSlider);
}

/*------------------------------------------------
 * 8. Tooltips initialization
 ------------------------------------------------*/
function tooltipActivator() {
    $('[data-toggle="tooltip"]').tooltip()
}