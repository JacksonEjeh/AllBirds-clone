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
    const endPoint = 'http://ecommerce.reworkstaging.name.ng/v2';



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

    function highlightStars(index) {
        stars.each(function (i) {
            if (i < index) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    let userId = userDetails.id
    const product_id = JSON.parse(localStorage.getItem('productId'))

    $(document).on('click', '#like-btn', function(){
        $(this).toggleClass('liked');
        let productId = $(this).closest('.jproduct_container').data('id')
        // console.log(productId);

        let likes = {
            product_id: productId,
            user_id: userId
        }

        $.ajax({
            url: `${endPoint}/likes`,
            method: 'POST',
            data: likes,
            success: function(res){
                console.log(res);
                window.location.reload()
                localStorage.setItem("likesRespond", JSON.stringify(res))
            },
            error: function(err){
                console.log(err);
            }
        })
    })

    let jump = $('.jproduct_container001').find('#like-btn')
    // console.log(jump);
    
    function userLike(){
        let getUserLike = JSON.parse(localStorage.getItem('likesRespond'))
        // console.log('runing');

        if (getUserLike.type === "EXISTS") {

            $('#like-btn').addClass('liked')
        } else{
            $('#like-btn').removeClass('liked')
        }

    } userLike()

});
    