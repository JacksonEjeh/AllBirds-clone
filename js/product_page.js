document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove the selected class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('selected'));
            // Add the selected class to the clicked thumbnail
            thumbnail.classList.add('selected');
            // Change the main image to the clicked thumbnail
            mainImage.src = thumbnail.src;
        });
    });
});

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





    const stars = $('.p-star-rating .fa-star');
    const likeBtn = $('#like-btn');
    let currentRating = 0;
    
    stars.on('mouseover', function () {
        const index = $(this).data('index');
        highlightStars(index);
    });

    stars.on('mouseout', function () {
        highlightStars(currentRating);
    });

    stars.on('click', function () {
        currentRating = $(this).data('index');
        highlightStars(currentRating);
    });

    likeBtn.on('click', function () {
        $(this).toggleClass('liked');
    });

    function highlightStars(index) {
        stars.each(function (i) {
            if (i < index) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }
});