$(document).ready(function() {
    const $slider = $('.slider-track');
    const $cards = $('.r_card');
    const $prevBtn = $('.prev-btn');
    const $nextBtn = $('.next-btn');

    let currentIndex = 0;

    function updateSliderPosition() {
        $slider.css('transform', `translateX(-${currentIndex * ($cards.first().outerWidth(true))}px)`);
        checkButtons();
    }

    function checkButtons() {
        $prevBtn.prop('disabled', currentIndex <= 0);
        $nextBtn.prop('disabled', currentIndex >= $cards.length - 1);
    }

    $prevBtn.on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    $nextBtn.on('click', function() {
        if (currentIndex < $cards.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    $(window).on('resize', updateSliderPosition);

    // Initial button state check
    checkButtons();
});