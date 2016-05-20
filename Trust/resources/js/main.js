$(document).on('ready', function () {

// Google - WebFont start
  WebFontConfig = {
    google: { families: [ 'Roboto:400,300,100:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
// Google - WebFont ends


    var sliderCount = $('.carousel-inner > .item').length;
    if (sliderCount === 1) {
        $('.carousel-indicators').hide();
        $('.left.carousel-control').hide();
        $('.right.carousel-control').hide();
    }

    //Hero Carousel Configure - Speed(ms) or on/off(true/false)
    var configureHero = false;

    if (configureHero === false) {
        $('#myCarousel').carousel({
            interval: configureHero
        });
    } else {
        $('#myCarousel').carousel({
            interval: configureHero
        });
    }
    // Hero-carousel Swipe
    $("#myCarousel").swiperight(function () {
        $(this).carousel('prev');
    });
    $("#myCarousel").swipeleft(function () {
        $(this).carousel('next');
    });

    //Configurable Headers and SubHeaders - Alight to Right
    // For 4 Slides we have set the alignment & display values
    var headerCTAPlayButtonConfiguration = [{
        headerRight: false,
        headerCenter: false,
        play: true,
        cta: false
    }, {
        headerRight: true,
        headerCenter: false,
        play: false,
        cta: true
    }, {
        headerRight: false,
        headerCenter: true,
        play: true,
        cta: true
    }, {
        headerRight: true,
        headerCenter: false,
        play: false,
        cta: false
    }];

    function alignHeaderSubHeaderPlayBtnCTABtn(headerCTAPlayButtonConfiguration) {
        for (var i = 0; i < headerCTAPlayButtonConfiguration.length; i++) {
            if (headerCTAPlayButtonConfiguration[i].headerRight === true || headerCTAPlayButtonConfiguration[i].headerCenter === true) {
                if (headerCTAPlayButtonConfiguration[i].headerRight === true) {
                    var header = $('.trustSlider-caption-header')[i];
                    var subHeader = $('.trustSlider-caption-info')[i];
                    var ctaHero = $('.trustSlider-HeroCta')[i];
                    var caption = $('.trustSlider-carousel-caption')[i];
                    $(caption).addClass('trustSlider-configureRight');
                    // $(header).addClass('trustSlider-configurableHeader');
                    // $(subHeader).addClass('trustSlider-configurableSubHeader');
                    // $(ctaHero).addClass('trustSlider-configurableCtaToRight');
                } else {
                    var header1 = $('.trustSlider-caption-header')[i];
                    var subHeader1 = $('.trustSlider-caption-info')[i];
                    var ctaHero1 = $('.trustSlider-HeroCta')[i];
                    $(header1).addClass('trustSlider-configurableHeaderCenter');
                    $(subHeader1).addClass('trustSlider-configurableSubHeaderCenter');
                    $(ctaHero1).addClass('trustSlider-configurableCtaToCenter');
                }
            }
            // Configure play Button
            if (headerCTAPlayButtonConfiguration[i].play === false) {
                var playDisplay = $('.trustSlider-caption-playButton')[i];
                var playMobileButton = $('.trustSlider-playMobileButton')[i];
                $(playDisplay).hide();
                $(playMobileButton).hide();
            }
            // Configure Cta
            if (headerCTAPlayButtonConfiguration[i].cta === false) {
                var ctaDisplay = $('.trustSlider-HeroCta')[i];
                $(ctaDisplay).hide();
            }
        }
    }

    alignHeaderSubHeaderPlayBtnCTABtn(headerCTAPlayButtonConfiguration);



/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
}); 

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});


});