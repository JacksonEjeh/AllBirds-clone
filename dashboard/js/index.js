$(document).ready(function(){
    $('.dashboard').click(function(){
        $('.dashboard_container').show()
        $('.addProduct_page').hide()
        $('.dashboard').toggleClass('active')
        $('.orders').removeClass('active')
        $('.category').removeClass('active')
        $('.eCommerce').removeClass('active')
        $('.user').removeClass('active')
        $('.setting').removeClass('active')
    
        $('.eCommerce_dropdown').slideUp()
        $('.category_dropdown').slideUp()
        $('.orders_dropdown').slideUp()
        $('.user_dropdown').slideUp()
    
    })

    $('.setting').click(function(){
        $('.setting').toggleClass('active')
        $('.orders').removeClass('active')
        $('.category').removeClass('active')
        $('.eCommerce').removeClass('active')
        $('.user').removeClass('active')
        $('.dashboard').removeClass('active')
    
        $('.eCommerce_dropdown').slideUp()
        $('.category_dropdown').slideUp()
        $('.orders_dropdown').slideUp()
        $('.user_dropdown').slideUp()
    
    })

    $('.eCommerce').click(function(){
        $('.eCommerce').toggleClass('active')
        $('.orders').removeClass('active')
        $('.category').removeClass('active')
        $('.user').removeClass('active')
        $('.dashboard').removeClass('active')
        $('.setting').removeClass('active')

        $('.eCommerce_dropdown').slideToggle()
        $('.category_dropdown').slideUp()
        $('.orders_dropdown').slideUp()
        $('.user_dropdown').slideUp()

    })

    $('.category').click(function(){
        $('.category').toggleClass('active')
        $('.orders').removeClass('active')
        $('.user').removeClass('active')
        $('.dashboard').removeClass('active')
        $('.eCommerce').removeClass('active')
        $('.setting').removeClass('active')

        $('.category_dropdown').slideToggle()
        $('.eCommerce_dropdown').slideUp()
        $('.orders_dropdown').slideUp()
        $('.user_dropdown').slideUp()

    })

    $('.orders').click(function(){
        $('.orders').toggleClass('active')
        $('.dashboard').removeClass('active')
        $('.category').removeClass('active')
        $('.eCommerce').removeClass('active')
        $('.user').removeClass('active')
        $('.setting').removeClass('active')


        $('.orders_dropdown').slideToggle()
        $('.eCommerce_dropdown').slideUp()
        $('.category_dropdown').slideUp()
        $('.user_dropdown').slideUp()

    })

    $('.user').click(function(){
        $('.user').toggleClass('active')
        $('.orders').removeClass('active')
        $('.category').removeClass('active')
        $('.dashboard').removeClass('active')
        $('.setting').removeClass('active')
        $('.eCommerce').removeClass('active')
        
        $('.user_dropdown').slideToggle()
        $('.orders_dropdown').slideUp()
        $('.eCommerce_dropdown').slideUp()
        $('.category_dropdown').slideUp()
    })

    $('.profile_holder').click(function(){
        $('.profile_dropdown').slideToggle()
    })
    
    $(document).on('click', '#addProduct', function(){
        $('.dashboard_container').hide()
        $('.addProduct_page').show()
    })
})