;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});
   
    //Configuration Option For Showing and Hiding Testimonials
    var hideIndividualCta = false;
    var hideCommonCta = true;

    if (hideIndividualCta) {
        $('.serviceIndividualFrameCta').hide();
    }
    if (hideCommonCta) {
        $('.serviceFramesCommonCta').hide();
    }
// Confugure Number of Columns
    var NumberOfColumns = 3;
    var configureColumns = $('.serviceNumberOfCol-');
               
    if(NumberOfColumns===4){
        $(configureColumns).addClass('col-lg-3');
        $(configureColumns).addClass('col-md-3');
        $(configureColumns).addClass('col-sm-3');
    }
    if(NumberOfColumns===3){
         $(configureColumns).addClass('col-lg-4');
         $(configureColumns).addClass('col-md-4');
         $(configureColumns).addClass('col-sm-4');
         $('.serviceColHide').hide();
    }
//Find height of all the 4 containers - serviceCaptionContainer
    var contrs = $('.serviceCaptionContainer');
    var largestHeight = Math.max(Math.max($(contrs[0]).height(), $(contrs[1]).height()), Math.max($(contrs[2]).height(), $(contrs[3]).height()));
    for (var i = 0; i < contrs.length; i++) {
        $(contrs[i]).height(largestHeight + 40);
    }
 var itemsContainer1 = $('#T .items');
    var index1;
    var itemsLength1;
    //For controls alightment
    $('#T .controls').height($('#T .item').height());

    function init1() {
        var items1 = itemsContainer1.find('.item');
        itemsContainer1.append(items1.clone());
        itemsLength1 = items1.length;
        index1 = 0;

        $('#T .left_control').on('click', goLeft1);
        $('#T .right_control').on('click', goRight1);
        $('#T .item').on('swipeleft', goRight1);
        $('#T .item').on('swiperight', goLeft1);
    }

    function goLeft1() {
        index1 = index1 - 1;
        updateGallery1();
    }

    function goRight1() {
        index1 = index1 + 1;
        updateGallery1();
    }

    function animateLeft1(duration, completeFn) {
        var itemWidth1 = $('#T .item:first-child').outerWidth();
        var targetLeft1 = -index1 * itemWidth1;

        itemsContainer1.animate({
            animStart: targetLeft1,
        }, {
            complete: completeFn,
            duration: duration,
            step: function(now) {
                itemsContainer1.css('transform', 'translateX(' + now + 'px)');
            }
        });
    }

    function disableControls1() {
        $('#T .left_control,#T .right_control').addClass('disabled');
    }

    function enableControls1() {
        $('#T .left_control,#T .right_control').removeClass('disabled');
    }

    function updateGallery1() {
        disableControls1();

        //For controls alightment
        $('#T .controls').height($('#T .item').height());
        if(index1 < 0) {
            index1 = itemsLength1;
            animateLeft1(0, goLeft1);
        } else if(index1 >= itemsLength1) {
            animateLeft1(400, function(){
                enableControls1();
                index1 = 0;
                animateLeft1(0);
            });
        } else {
            animateLeft1(400, function() {
                enableControls1();
            });
        }
    }

    init1();
})(jQuery)