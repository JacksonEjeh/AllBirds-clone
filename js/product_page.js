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



    // RATING REVIEW LIKES
    const userId = JSON.parse(localStorage.getItem('userDetails'));
    const productId = userId;
    const user_id = userId;
    const endPoint = 'http://ecommerce.reworkstaging.name.ng/v2';

    // Fetch and display reviews from API or local storage
    function fetchReviews() {
        $.ajax({
            url: `${endPoint}/reviews?product_id=${productId}`,
            method: 'GET',
            success: function (data) {
                localStorage.setItem(`reviews_${productId}`, JSON.stringify(data));
                displayReviews(data);
            },
            error: function (err) {
                console.log(err);
                const cachedReviews = JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
                displayReviews(cachedReviews);
            }
        });
    }

    function displayReviews(reviews) {
        const reviewsList = $('#reviews-list');
        reviewsList.empty();
        reviews.forEach((review, index) => {
            const reviewClone = $('#review-container2-template').clone().removeAttr('id').removeAttr('style');
            reviewClone.find('.review-title').text(`Review ${index + 1}`);
            reviewClone.find('.review-text').text(review.text);
            reviewClone.find('.review-date').text(new Date(review.date).toLocaleDateString());
            reviewClone.find('.reviewer-name').text(review.user_id);
            reviewClone.find('.reviewer-activity').text('Activity Level: ' + review.activity);
            reviewClone.find('.reviewer-fit').text('Overall Fit: ' + review.fit);
            reviewClone.find('.reviewer-size').text('Size Purchased: ' + review.size);
            reviewClone.find('.reviewer-typical-size').text('Typical Size: ' + review.typical_size);
            reviewClone.find('.reviewer-typical-width').text('Typical Width: ' + review.typical_width);
            reviewClone.find('.edit-review').data('id', review.id);
            reviewClone.find('.delete-review').data('id', review.id);
            reviewsList.append(reviewClone);
        });
    }

    // Fetch and display ratings from API or local storage
    function fetchRatings() {
        $.ajax({
            url: `${endPoint}/ratings?product_id=${productId}`,
            method: 'GET',
            success: function (data) {
                localStorage.setItem(`ratings_${productId}`, JSON.stringify(data));
                displayRatings(data);
            },
            error: function (err) {
                console.log(err);
                const cachedRatings = JSON.parse(localStorage.getItem(`ratings_${productId}`)) || [];
                displayRatings(cachedRatings);
            }
        });
    }

    function displayRatings(ratings) {
        const ratingValue = ratings.reduce((acc, rating) => acc + rating.value, 0) / ratings.length || 0;
        $('.p-star-rating .fa-star').each(function (index) {
            $(this).toggleClass('active', index < Math.round(ratingValue));
        });
    }

    // Fetch like status from API or local storage
    function fetchLikeStatus() {
        $.ajax({
            url: `${endPoint}/likes?product_id=${productId}&user_id=${userId}`,
            method: 'GET',
            success: function (data) {
                localStorage.setItem(`like_${productId}_${userId}`, JSON.stringify(data.liked));
                displayLikeStatus(data.liked);
            },
            error: function (err) {
                console.log(err);
                const cachedLiked = JSON.parse(localStorage.getItem(`like_${productId}_${userId}`)) || false;
                displayLikeStatus(cachedLiked);
            }
        });
    }

    function displayLikeStatus(liked) {
        if (liked) {
            $('#like-btn').addClass('liked');
        } else {
            $('#like-btn').removeClass('liked');
        }
    }

    // Create or update review
    $('#review-form').on('submit', function (e) {
        e.preventDefault();
        const reviewId = $('#review-id').val();
        const reviewText = $('#review-text').val();
        const url = reviewId ? `${endPoint}/reviews/${reviewId}` : `${endPoint}/reviews`;
        const method = reviewId ? 'PUT' : 'POST';
        const reviewData = {
            product_id: productId,
            user_id: userId,
            text: reviewText,
            date: new Date().toISOString(),
            activity: 'Walking, Running Errands, Traveling',
            fit: 'Just Right',
            size: '9',
            typical_size: '9',
            typical_width: 'Average'
        };

        $.ajax({
            url: url,
            method: method,
            contentType: 'application/json',
            data: JSON.stringify(reviewData),
            success: function (data) {
                const reviews = JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
                if (method === 'PUT') {
                    const reviewIndex = reviews.findIndex(r => r.id === data.id);
                    reviews[reviewIndex] = data;
                } else {
                    reviews.push(data);
                }
                localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));
                fetchReviews();
                $('#review-form')[0].reset();
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    // Edit review
    $('#reviews-list').on('click', '.edit-review', function () {
        const reviewId = $(this).data('id');
        $.ajax({
            url: `${endPoint}/reviews/${reviewId}`,
            method: 'GET',
            success: function (review) {
                $('#review-id').val(review.id);
                $('#review-text').val(review.text);
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    // Delete review
    $('#reviews-list').on('click', '.delete-review', function () {
        const reviewId = $(this).data('id');
        $.ajax({
            url: `${endPoint}/reviews/${reviewId}`,
            method: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify({ user_id: userId }),
            success: function () {
                const reviews = JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
                const updatedReviews = reviews.filter(review => review.id !== reviewId);
                localStorage.setItem(`reviews_${productId}`, JSON.stringify(updatedReviews));
                fetchReviews();
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    // Like a product
    $('#like-btn').on('click', function () {
        const liked = $(this).hasClass('liked');
        const method = liked ? 'DELETE' : 'POST';
        const url = `${endPoint}/likes`;

        $.ajax({
            url: `${endPoint}/likes`,
            method: method,
            contentType: 'application/json',
            data: JSON.stringify({
                product_id: productId,
                user_id: userId
            }),
            success: function () {
                fetchLikeStatus();
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    // Rate the product
    $('.p-star-rating .fa-star').on('click', function () {
        const ratingValue = $(this).data('index');
        const url = `${endPoint}/ratings`;
        let method = 'POST';

        $.ajax({
            url: `${endPoint}/ratings?product_id=${productId}&user_id=${userId}`,
            method: 'GET',
            success: function (data) {
                if (data.length) {
                    method = 'PUT';
                }

                $.ajax({
                    url: `${endPoint}/ratings`,
                    method: method,
                    contentType: 'application/json',
                    data: JSON.stringify({
                        product_id: productId,
                        user_id: userId,
                        value: ratingValue
                    }),
                    success: function (data) {
                        const ratings = JSON.parse(localStorage.getItem(`ratings_${productId}`)) || [];
                        if (method === 'PUT') {
                            const ratingIndex = ratings.findIndex(r => r.id === data.id);
                            ratings[ratingIndex] = data;
                        } else {
                            ratings.push(data);
                        }
                        localStorage.setItem(`ratings_${productId}`, JSON.stringify(ratings));
                        fetchRatings();
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    // Initialize
    fetchReviews();
    fetchRatings();
    fetchLikeStatus();
    });
    