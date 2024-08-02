$(document).ready(function(){
    const endPoint = "http://ecommerce.reworkstaging.name.ng/v2" 

    $('.j_arrow').click(function(){
        $('.j_topbar_text').toggle()
        $('.j_topbar_text1').toggle()
    })
    // MEN
    $('#mens').click(function(){
        $('#mens').toggleClass('active')
        $('#womens').removeClass('active')
        $('#kids').removeClass('active')
        $('#sustain').removeClass('active')
        $('#sale').removeClass('active')
        $('.j_mens_overlay').fadeToggle()
        $('.j_womens_overlay').fadeOut()
        $('.j_kids_overlay').fadeOut()
        $('.j_sale_overlay').fadeOut()
        $('.j_sustain_overlay').fadeOut()
    })
    $('.j_mens_overlay').click(function(){
        $('.j_mens_overlay').fadeOut()
        $('#mens').removeClass('active')

    })
    // WOMEN
    $('#womens').click(function(){
        $('#womens').toggleClass('active')
        $('#mens').removeClass('active')
        $('#kids').removeClass('active')
        $('#sustain').removeClass('active')
        $('#sale').removeClass('active')
        $('.j_womens_overlay').fadeToggle()
        $('.j_mens_overlay').fadeOut()
        $('.j_kids_overlay').fadeOut()
        $('.j_sustain_overlay').fadeOut()
        $('.j_sale_overlay').fadeOut()
    })
    $('.j_womens_overlay').click(function(){
        $('.j_womens_overlay').fadeOut()
        $('#womens').removeClass('active')

    })
    // KIDS
    $('#kids').click(function(){
        $('#kids').toggleClass('active')
        $('#mens').removeClass('active')
        $('#womens').removeClass('active')
        $('#sustain').removeClass('active')
        $('#sale').removeClass('active')
        $('.j_kids_overlay').fadeToggle()
        $('.j_womens_overlay').fadeOut()
        $('.j_mens_overlay').fadeOut()
        $('.j_sale_overlay').fadeOut()
        $('.j_sustain_overlay').fadeOut()
    })
    $('.j_kids_overlay').click(function(){
        $('.j_kids_overlay').fadeOut()
        $('#kids').removeClass('active')
    })
    // SUSTAIN
    $('#sustain').click(function(){
        $('#sustain').toggleClass('active')
        $('#kids').removeClass('active')
        $('#mens').removeClass('active')
        $('#womens').removeClass('active')
        $('#sale').removeClass('active')
        $('.j_sustain_overlay').fadeToggle()
        $('.j_kids_overlay').fadeOut()
        $('.j_womens_overlay').fadeOut()
        $('.j_mens_overlay').fadeOut()
        $('.j_sale_overlay').fadeOut()
    })
    $('.j_sustain_overlay').click(function(){
        $('.j_sustain_overlay').fadeOut()
        $('#sustain').removeClass('active')
    })
    // SALE
    $('#sale').click(function(){
        $('#sale').toggleClass('active')
        $('#sustain').removeClass('active')
        $('#kids').removeClass('active')
        $('#mens').removeClass('active')
        $('#womens').removeClass('active')
        $('.j_sale_overlay').fadeToggle()
        $('.j_kids_overlay').fadeOut()
        $('.j_womens_overlay').fadeOut()
        $('.j_sustain_overlay').fadeOut()
        $('.j_mens_overlay').fadeOut()
    })
    $('.j_sale_overlay').click(function(){
        $('.j_sale_overlay').fadeOut()
        $('#sale').removeClass('active')
    })

    //CART
    $('.j_cart_logo').click(function(){
        $('.j_cart_overlay').fadeToggle()
        $('.j_cart_popup').toggleClass('slidein')
        $('.j_kids_overlay').hide()
        $('.j_womens_overlay').hide()
        $('.j_sustain_overlay').hide()
        $('.j_mens_overlay').hide()
        $('.j_sale_overlay').hide()
        $('#sale').removeClass('active')
        $('#sustain').removeClass('active')
        $('#kids').removeClass('active')
        $('#mens').removeClass('active')
        $('#womens').removeClass('active')
    })
    $('.j_cart_overlay').click(function(){
        // $('.j_cart_overlay').fadeOut()
    })
    $('.j_close').click(function(){
        $('.j_cart_popup').toggleClass('slidein')
        $('.j_cart_overlay').fadeToggle()
    })


    $('#jBest').click(function(){
        $('.jCheck1').toggleClass('jCheck_active')
        $('.jbold1').toggleClass('jbold_active')
        $('.jCheck2').removeClass('jCheck_active')
        $('.jbold2').removeClass('jbold_active')
        $('.jCheck3').removeClass('jCheck_active')
        $('.jbold3').removeClass('jbold_active')
        $('.jCheck4').removeClass('jCheck_active')
        $('.jbold4').removeClass('jbold_active')
        $('.jCheck5').removeClass('jCheck_active')
        $('.jbold5').removeClass('jbold_active')
    })
    $('#jBest2').click(function(){
        $('.jCheck5').removeClass('jCheck_active')
        $('.jbold5').removeClass('jbold_active')
        $('.jCheck4').removeClass('jCheck_active')
        $('.jbold4').removeClass('jbold_active')
        $('.jCheck1').removeClass('jCheck_active')
        $('.jCheck3').removeClass('jCheck_active')
        $('.jbold3').removeClass('jbold_active')
        $('.jbold1').removeClass('jbold_active')
        $('.jCheck2').toggleClass('jCheck_active')
        $('.jbold2').toggleClass('jbold_active')

    })
    $('#jBest3').click(function(){
        $('.jCheck3').toggleClass('jCheck_active')
        $('.jbold3').toggleClass('jbold_active')
        $('.jCheck1').removeClass('jCheck_active')
        $('.jbold1').removeClass('jbold_active')
        $('.jCheck2').removeClass('jCheck_active')
        $('.jbold2').removeClass('jbold_active')
        $('.jCheck4').removeClass('jCheck_active')
        $('.jbold4').removeClass('jbold_active')
        $('.jCheck5').removeClass('jCheck_active')
        $('.jbold5').removeClass('jbold_active')
    })
    $('#jBest4').click(function(){
        $('.jCheck4').toggleClass('jCheck_active')
        $('.jbold4').toggleClass('jbold_active')
        $('.jCheck3').removeClass('jCheck_active')
        $('.jbold3').removeClass('jbold_active')
        $('.jCheck1').removeClass('jCheck_active')
        $('.jbold1').removeClass('jbold_active')
        $('.jCheck2').removeClass('jCheck_active')
        $('.jbold2').removeClass('jbold_active')
        $('.jCheck5').removeClass('jCheck_active')
        $('.jbold5').removeClass('jbold_active')
    })
    $('#jBest5').click(function(){
        $('.jCheck5').toggleClass('jCheck_active')
        $('.jbold5').toggleClass('jbold_active')
        $('.jCheck3').removeClass('jCheck_active')
        $('.jbold3').removeClass('jbold_active')
        $('.jCheck1').removeClass('jCheck_active')
        $('.jbold1').removeClass('jbold_active')
        $('.jCheck2').removeClass('jCheck_active')
        $('.jbold2').removeClass('jbold_active')
        $('.jCheck4').removeClass('jCheck_active')
        $('.jbold4').removeClass('jbold_active')
    })
    $('#jBest6').click(function(){
        $('.jCheck6').toggleClass('jCheck_active')
        $('.jbold6').toggleClass('jbold_active')
    })
    $('#jBest7').click(function(){
        $('.jCheck7').toggleClass('jCheck_active')
        $('.jbold7').toggleClass('jbold_active')
    })
    $('#jBest8').click(function(){
        $('.jCheck8').toggleClass('jCheck_active')
        $('.jbold8').toggleClass('jbold_active')
    })
    $('#jBest9').click(function(){
        $('.jCheck9').toggleClass('jCheck_active')
        $('.jbold9').toggleClass('jbold_active')
    })


    $(document).on('click', '#j_1Img', function(){
        let holder = $(this).closest('.jShopItems')
        $(this).addClass('active2')
        holder.find('#j_2Img').removeClass('active2')
        holder.find('#j_3Img').removeClass('active2')
        holder.find('#j_4Img').removeClass('active2')
        holder.find('#j_5Img').removeClass('active2')
        holder.find('.j_1Img').fadeTo(200, 1)
        holder.find('.j_2Img').fadeOut()
        holder.find('.j_3Img').fadeOut()
        holder.find('.j_4Img').fadeOut()
        holder.find('.j_5Img').fadeOut()
    })
    $(document).on('click', '#j_2Img', function(){
        let holder = $(this).closest('.jShopItems')
        $(this).addClass('active2')
        holder.find('#j_1Img').removeClass('active2')
        holder.find('#j_3Img').removeClass('active2')
        holder.find('#j_4Img').removeClass('active2')
        holder.find('#j_5Img').removeClass('active2')
        holder.find('.j_2Img').fadeIn()
        holder.find('.j_3Img').fadeOut()
        holder.find('.j_4Img').fadeOut()
        holder.find('.j_5Img').fadeOut()
        holder.find('.j_1Img').fadeTo(200, 0)
    })
    $(document).on('click', '#j_3Img',function(){
        let holder = $(this).closest('.jShopItems')
        $(this).addClass('active2')
        holder.find('#j_1Img').removeClass('active2')
        holder.find('#j_2Img').removeClass('active2')
        holder.find('#j_4Img').removeClass('active2')
        holder.find('#j_5Img').removeClass('active2')
        holder.find('.j_3Img').fadeIn()
        holder.find('.j_2Img').fadeOut()
        holder.find('.j_4Img').fadeOut()
        holder.find('.j_5Img').fadeOut()
        holder.find('.j_1Img').fadeTo(200, 0)
    })
    $(document).on('click', '#j_4Img', function(){
        $('#j_4Img').addClass('active2')
        $('#j_1Img').removeClass('active2')
        $('#j_3Img').removeClass('active2')
        $('#j_2Img').removeClass('active2')
        $('#j_5Img').removeClass('active2')
        $('.j_4Img').fadeIn()
        $('.j_2Img').fadeOut()
        $('.j_3Img').fadeOut()
        $('.j_5Img').fadeOut()
    })
    $(document).on('click', '#j_5Img', function(){
        
        $('#j_5Img').addClass('active2')
        $('#j_1Img').removeClass('active2')
        $('#j_3Img').removeClass('active2')
        $('#j_4Img').removeClass('active2')
        $('#j_2Img').removeClass('active2')
        $('.j_5Img').fadeIn()
        $('.j_2Img').fadeOut()
        $('.j_3Img').fadeOut()
        $('.j_4Img').fadeOut()
    })

    let count = 1
    $('#increaseBtn').click(function(){
        count ++;
        $('#counter').html(count)
    })
    $('#decreaseBtn').click(function(){
        count -= 1;
        if (count <= 0) {
            $('#counter').html(count = 1)
        } else{
            $('#counter').html(count)
        }
    })


    $('.jAllBird').click(function(){
        $('.jAllBirdHide').slideToggle()
        $('.jdownArrow').toggle()
        $('.jupArrow').toggleClass('opacity')
    })
    $('.jAllBird1').click(function(){
        $('.jAllBirdHide1').slideToggle()
        $('.jdownArrow1').toggle()
        $('.jupArrow1').toggleClass('opacity1')
    })
    
    $('.jShopItemImg').click(function(){
        window.location.href = "product_page.html"
    })
    $('.jShopItemImg1').click(function(){
        window.location.href = "product_page2.html"
    })


    let merchantsDetails = JSON.parse(localStorage.getItem("merchantLoginDetails"))

    let merchant_id = merchantsDetails.id

    // geting all product on the shop page
    function getAllProductOnUser(){
        $('.jShopItemsHolder').empty()

        $.ajax({
            url: `${endPoint}/products?merchant_id=${merchant_id}`,
            method: 'GET',
            success: function(res){
                let products = res.data;
                products.forEach(function(p){
                    $('.jShopItemsHolder').append(`
                        <div class="jShopItems" data-id="${p.id}">
                            <div class="pointer">
                                <div class="jShopItemImg">
                                    <img class="j_1Img" style="width: 100%;" src="${p.images[0]}" alt="">
                                    <img class="j_2Img" style="width: 100%;" src="${p.images[1]}" alt="">
                                    <img class="j_3Img" style="width: 100%;" src="${p.images[2]}" alt="">
                                </div>
                                <div class="jShopItemTitle">
                                    <h4>${p.title}</h4>
                                    <p>${p.currency} ${p.price}</p>
                                </div>
                            </div>
                            <div class="jItemPreview">
                                <div id="j_1Img" class="jPreview active2"><img style="height: 90%; width: 90%;" src="${p.images[0]}" alt=""></div>
                                <div id="j_2Img" class="jPreview"><img style="height: 90%; width: 90%;" src="${p.images[1]}" alt=""></div>
                                <div id="j_3Img" class="jPreview"><img style="height: 90%; width: 90%;" src="${p.images[2]}" alt=""></div>
                                <div class="jPreview1"><img style="height: 60%; width: 60%;" src="./images/shop/black_arror_right.svg" alt=""></div>
                            </div>
                            <div class="jsizes">
                                <p class="jquick"><b>Quick Add</b></p>
                                <div class="jSizeBoxHolder1">
                                    <div class="jSizeBox1">8</div>
                                    <div class="jSizeBox1">9</div>
                                    <div class="jSizeBox1">9.5</div>
                                    <div class="jSizeBox1">10</div>
                                    <div class="jSizeBox1">11</div>
                                    <div class="jSizeBox1">12</div>
                                    <div class="jSizeBox1">13</div>
                                    <div class="jSizeBox1">14</div>
                                </div>
                            </div>
                            <button class="jproduct_addCart" data-id="${p.id}">Add to Cart</button>
                        </div>
                    `);
                });
            },
            error: function(err){
                console.log(err);
            }
        });
    }
    getAllProductOnUser()

    $(document).on('click', '.pointer', function(){
        let product_id = $(this).parent().data('id')
        console.log(product_id);

        $.ajax({
            url: `${endPoint}/products/${product_id}`,
            method: 'GET',
            success: function(res){
                console.log(res);
                window.location.href = `product_page.html?id=${product_id}`
            },
            error: function(err){
                console.log(err);
            }
        })
    })
})