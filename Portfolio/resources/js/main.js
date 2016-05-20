$(document).ready(function() {

// Typed for the intro

$(".element").typed({
        strings: ["Web Developer", "Selenium Developer","Java Developer","Full Stack Developer."],
        typeSpeed: 0
      });


// ends
  /* activate jquery isotope */
  var $container = $('#posts').isotope({
    itemSelector: '.item',
    isFitWidth: true
  });

  $(window).smartresize(function() {
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });

  $container.isotope({
    filter: '*'
  });

  // filter items on button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({
      filter: filterValue
    });
  });

  //Configuration Option For Showing and Hiding Cta
    var hideServiceIndividualCta = false;
    var hideServiceCommonCta = true;

    if (hideServiceIndividualCta) {
        $('.ServiceIndividualFrameCta').hide();
    }
    if (hideServiceCommonCta) {
        $('.ServiceFramesCommonCta').hide();
    }
// Confugure Number of Columns
    var NumberOfColumns = 4;
    var configureServiceColumns = $('.NumberOfCol-Service');
               
    if(NumberOfColumns===4){
        $(configureServiceColumns).addClass('col-lg-3');
        $(configureServiceColumns).addClass('col-md-3');
        $(configureServiceColumns).addClass('col-sm-3');
    }
    if(NumberOfColumns===3){
         $(configureServiceColumns).addClass('col-lg-4');
         $(configureServiceColumns).addClass('col-md-4');
         $(configureServiceColumns).addClass('col-sm-4');
         $('.ColHide').hide();
    }
//Find height of all the 4 containers - ServiceCaptionContainer
    var contrs = $('.ServiceCaptionContainer');
    var largestHeight = Math.max(Math.max($(contrs[0]).height(), $(contrs[1]).height()), Math.max($(contrs[2]).height(), $(contrs[3]).height()));
    for (var i = 0; i < contrs.length; i++) {
        $(contrs[i]).height(largestHeight + 40);
    }

// Animate the page
 // hide our element on page load
  $('#intro-animate').css('opacity', 0);
 
  $('#intro-animate').waypoint(function() {
      $('#intro-animate').addClass('fadeIn');
  }, { offset: '50%' });
// hide our element on page load
  $('#about-animate').css('opacity', 0);
 
  $('#about-animate').waypoint(function() {
      $('#about-animate').addClass('fadeIn');
  }, { offset: '50%' });
  // hide our element on page load
  $('#s1-animate').css('opacity', 0);
 
  $('#s1-animate').waypoint(function() {
      $('#s1-animate').addClass('bounceIn');
  }, { offset: '50%' });

  // hide our element on page load
  $('#s2-animate').css('opacity', 0);
 
  $('#s2-animate').waypoint(function() {
      $('#s2-animate').addClass('bounceIn');
  }, { offset: '50%' });
  // hide our element on page load
  $('#s3-animate').css('opacity', 0);
 
  $('#s3-animate').waypoint(function() {
      $('#s3-animate').addClass('bounceIn');
  }, { offset: '50%' });
  // hide our element on page load
  $('#s4-animate').css('opacity', 0);
 
  $('#s4-animate').waypoint(function() {
      $('#s4-animate').addClass('bounceIn');
  }, { offset: '50%' });
  // hide our element on page load
  $('#service').css('opacity', 0);
 
  $('#service').waypoint(function() {
      $('#service').addClass('fadeIn');
  }, { offset: '50%' });
  
 // hide our element on page load
  $('#myWork').css('opacity', 0);
 
  $('#myWork').waypoint(function() {
      $('#myWork').addClass('fadeIn');
  }, { offset: '50%' });
 // hide our element on page load
  $('#client-animate').css('opacity', 0);
 
  $('#client-animate').waypoint(function() {
      $('#client-animate').addClass('fadeIn');
  }, { offset: '50%' });


});