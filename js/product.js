$(document).ready(function(){
    const endPoint = "http://ecommerce.reworkstaging.name.ng/v2" 
    $(document).on('click', '.jAllBird9', function(){
        $('.jAllBirdHide9').slideToggle()
        $('.jdownArrow9').toggle()
        $('.jupArrow9').toggleClass('opacity1')
    })

    $(document).on('click', '.jAllBird91', function(){
        $('.jAllBirdHide91').slideToggle()
        $('.jdownArrow91').toggle()
        $('.jupArrow91').toggleClass('opacity91')
    })

    $(document).on('click', '.jAllBird912', function(){
        $('.jAllBirdHide912').slideToggle()
        $('.jdownArrow912').toggle()
        $('.jupArrow912').toggleClass('opacity912')
    })

    $(document).on('click', '.jAllBird913', function(){
        $('.jAllBirdHide913').slideToggle()
        $('.jdownArrow913').toggle()
        $('.jupArrow913').toggleClass('opacity913')
    })

    $(document).on('click', '.jAllBird914', function(){
        $('.jAllBirdHide914').slideToggle()
        $('.jdownArrow914').toggle()
        $('.jupArrow914').toggleClass('opacity914')
    })
    
    $(document).on('click', '.jslide_in', function(){
        $('#jslide_in').show()
        $('#jslide_in1').hide()
        $('#jslide_in2').hide()
        $('#jslide_in3').hide()
        $('#jslide_in4').hide()
        $('#jslide_in5').hide()
        $('#jslide_in6').hide()
        $('#jslide_in7').hide()
        $('.jslide_in').addClass('active_product')
        $('.jslide_in1').removeClass('active_product')
        $('.jslide_in2').removeClass('active_product')
        $('.jslide_in3').removeClass('active_product')
        $('.jslide_in4').removeClass('active_product')
        $('.jslide_in5').removeClass('active_product')
        $('.jslide_in6').removeClass('active_product')
        $('.jslide_in7').removeClass('active_product')

    })
    $(document).on('click', '.jslide_in1', function(){
        $('#jslide_in1').show()
        $('#jslide_in').hide()
        $('#jslide_in2').hide()
        $('#jslide_in3').hide()
        $('#jslide_in4').hide()
        $('#jslide_in5').hide()
        $('#jslide_in6').hide()
        $('#jslide_in7').hide()
        $('.jslide_in1').addClass('active_product')
        $('.jslide_in').removeClass('active_product')
        $('.jslide_in2').removeClass('active_product')
        $('.jslide_in3').removeClass('active_product')
        $('.jslide_in4').removeClass('active_product')
        $('.jslide_in5').removeClass('active_product')
        $('.jslide_in6').removeClass('active_product')
        $('.jslide_in7').removeClass('active_product')
    })
    $(document).on('click', '.jslide_in2', function(){
        $('#jslide_in2').show()
        $('#jslide_in1').hide()
        $('#jslide_in').hide()
        $('#jslide_in3').hide()
        $('#jslide_in4').hide()
        $('#jslide_in5').hide()
        $('#jslide_in6').hide()
        $('#jslide_in7').hide()
        $('.jslide_in2').addClass('active_product')
        $('.jslide_in1').removeClass('active_product')
        $('.jslide_in').removeClass('active_product')
        $('.jslide_in3').removeClass('active_product')
        $('.jslide_in4').removeClass('active_product')
        $('.jslide_in5').removeClass('active_product')
        $('.jslide_in6').removeClass('active_product')
        $('.jslide_in7').removeClass('active_product')
    })
    $(document).on('click', '.jslide_in3', function(){
        $('#jslide_in3').show()
        $('#jslide_in1').hide()
        $('#jslide_in2').hide()
        $('#jslide_in').hide()
        $('#jslide_in4').hide()
        $('#jslide_in5').hide()
        $('#jslide_in6').hide()
        $('#jslide_in7').hide()
        $('.jslide_in3').addClass('active_product')
        $('.jslide_in1').removeClass('active_product')
        $('.jslide_in2').removeClass('active_product')
        $('.jslide_in').removeClass('active_product')
        $('.jslide_in4').removeClass('active_product')
        $('.jslide_in5').removeClass('active_product')
        $('.jslide_in6').removeClass('active_product')
        $('.jslide_in7').removeClass('active_product')
    })
    $(document).on('click', '.jslide_in4', function(){
        $('#jslide_in4').show()
        $('#jslide_in1').hide()
        $('#jslide_in2').hide()
        $('#jslide_in3').hide()
        $('#jslide_in').hide()
        $('#jslide_in5').hide()
        $('#jslide_in6').hide()
        $('#jslide_in7').hide()
        $('.jslide_in4').addClass('active_product')
        $('.jslide_in1').removeClass('active_product')
        $('.jslide_in2').removeClass('active_product')
        $('.jslide_in3').removeClass('active_product')
        $('.jslide_in').removeClass('active_product')
        $('.jslide_in5').removeClass('active_product')
        $('.jslide_in6').removeClass('active_product')
        $('.jslide_in7').removeClass('active_product')
    })
    $(document).on('click', '.jslide_in5', function(){
        $('#jslide_in5').show()
        $('#jslide_in1').hide()
        $('#jslide_in2').hide()
        $('#jslide_in3').hide()
        $('#jslide_in4').hide()
        $('#jslide_in').hide()
        $('#jslide_in6').hide()
        $('#jslide_in7').hide()
        $('.jslide_in5').addClass('active_product')
        $('.jslide_in1').removeClass('active_product')
        $('.jslide_in2').removeClass('active_product')
        $('.jslide_in3').removeClass('active_product')
        $('.jslide_in4').removeClass('active_product')
        $('.jslide_in').removeClass('active_product')
        $('.jslide_in6').removeClass('active_product')
        $('.jslide_in7').removeClass('active_product')
    })
    $(document).on('click', '.jslide_in6', function(){
        $('#jslide_in6').show()
        $('#jslide_in1').hide()
        $('#jslide_in2').hide()
        $('#jslide_in3').hide()
        $('#jslide_in4').hide()
        $('#jslide_in5').hide()
        $('#jslide_in').hide()
        $('#jslide_in7').hide()
        $('.jslide_in6').addClass('active_product')
        $('.jslide_in1').removeClass('active_product')
        $('.jslide_in2').removeClass('active_product')
        $('.jslide_in3').removeClass('active_product')
        $('.jslide_in4').removeClass('active_product')
        $('.jslide_in5').removeClass('active_product')
        $('.jslide_in').removeClass('active_product')
        $('.jslide_in7').removeClass('active_product')
    })
    $(document).on('click', '.jslide_in7', function(){
        $('#jslide_in7').show()
        $('#jslide_in1').hide()
        $('#jslide_in2').hide()
        $('#jslide_in3').hide()
        $('#jslide_in4').hide()
        $('#jslide_in5').hide()
        $('#jslide_in6').hide()
        $('#jslide_in').hide()
        $('.jslide_in7').addClass('active_product')
        $('.jslide_in1').removeClass('active_product')
        $('.jslide_in2').removeClass('active_product')
        $('.jslide_in3').removeClass('active_product')
        $('.jslide_in4').removeClass('active_product')
        $('.jslide_in5').removeClass('active_product')
        $('.jslide_in6').removeClass('active_product')
        $('.jslide_in').removeClass('active_product')
    })

    $(document).on('click', '.jproduct_size',function(){
        $('.jproduct_addCart').toggle()
    })

    $(document).on('click', '.black1', function(){
        $('.black1').toggleClass('active_jproduct_size')
        $('.black2').removeClass('active_jproduct_size')
        $('.black3').removeClass('active_jproduct_size')
        $('.black4').removeClass('active_jproduct_size')
        $('.black5').removeClass('active_jproduct_size')
        $('.black6').removeClass('active_jproduct_size')
        $('.black7').removeClass('active_jproduct_size')
    })
    $(document).on('click', '.black2', function(){
        $('.black2').toggleClass('active_jproduct_size')
        $('.black1').removeClass('active_jproduct_size')
        $('.black3').removeClass('active_jproduct_size')
        $('.black4').removeClass('active_jproduct_size')
        $('.black5').removeClass('active_jproduct_size')
        $('.black6').removeClass('active_jproduct_size')
        $('.black7').removeClass('active_jproduct_size')
    })
    $(document).on('click', '.black3', function(){
        $('.black3').toggleClass('active_jproduct_size')
        $('.black2').removeClass('active_jproduct_size')
        $('.black1').removeClass('active_jproduct_size')
        $('.black4').removeClass('active_jproduct_size')
        $('.black5').removeClass('active_jproduct_size')
        $('.black6').removeClass('active_jproduct_size')
        $('.black7').removeClass('active_jproduct_size')
    })
    $(document).on('click', '.black4', function(){
        $('.black4').toggleClass('active_jproduct_size')
        $('.black2').removeClass('active_jproduct_size')
        $('.black3').removeClass('active_jproduct_size')
        $('.black1').removeClass('active_jproduct_size')
        $('.black5').removeClass('active_jproduct_size')
        $('.black6').removeClass('active_jproduct_size')
        $('.black7').removeClass('active_jproduct_size')
    })
    $(document).on('click', '.black5', function(){
        $('.black5').toggleClass('active_jproduct_size')
        $('.black2').removeClass('active_jproduct_size')
        $('.black3').removeClass('active_jproduct_size')
        $('.black4').removeClass('active_jproduct_size')
        $('.black1').removeClass('active_jproduct_size')
        $('.black6').removeClass('active_jproduct_size')
        $('.black7').removeClass('active_jproduct_size')
    })
    $(document).on('click', '.black6', function(){
        $('.black6').toggleClass('active_jproduct_size')
        $('.black2').removeClass('active_jproduct_size')
        $('.black3').removeClass('active_jproduct_size')
        $('.black4').removeClass('active_jproduct_size')
        $('.black5').removeClass('active_jproduct_size')
        $('.black1').removeClass('active_jproduct_size')
        $('.black7').removeClass('active_jproduct_size')
    })
    $(document).on('click', '.black7', function(){
        $('.black7').toggleClass('active_jproduct_size')
        $('.black2').removeClass('active_jproduct_size')
        $('.black3').removeClass('active_jproduct_size')
        $('.black4').removeClass('active_jproduct_size')
        $('.black5').removeClass('active_jproduct_size')
        $('.black6').removeClass('active_jproduct_size')
        $('.black1').removeClass('active_jproduct_size')
    })

    $(document).on('click', '.jproduct_addCart', function(){
        $('.j_cart_overlay').fadeToggle()
        $('.j_cart_popup').toggleClass('slidein')
    })

    let urlParams = new URLSearchParams(window.location.search)
    let product_id = urlParams.get('id')

    function getProductInfo(){
        // $('.jproduct_container001').empty()
        $.ajax({
            url: `${endPoint}/products/${product_id}`,
            method: 'GET',
            success: function(res){
                // console.log(res);
                let productDetailsHTML = `
                    <div class="jproduct_container" data-id="${res.id}">
                        <div class="jproduct_preview">
                            <div class="jproduct_previewBox jslide_in active_product"><img style="width: 100%;" src="${res.images[0]}" alt=""></div>
                            <div class="jproduct_previewBox jslide_in1"><img style="width: 100%;" src="${res.images[1]}" alt=""></div>
                            <div class="jproduct_previewBox jslide_in2"><img style="width: 100%;" src="${res.images[2]}" alt=""></div>
                            <div class="jproduct_previewBox jslide_in3"><img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_BACK_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt=""></div>
                            <div class="jproduct_previewBox jslide_in4"><img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_TOP_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt=""></div>
                            <div class="jproduct_previewBox jslide_in5"><img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://cdn.allbirds.com/video/upload/f_auto,q_auto,so_25p,fl_relative,w_0.5,l_play-button-png/cms/5otSnP6Ctef9FlftXHkcZ4/388d2a2c80c7a4c5dd3fc98427fc17e5/M_TR_BLACK_1_mp4_.jpg" alt=""></div>
                            <div class="jproduct_previewBox jslide_in6"><img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_BOTTOM_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt=""></div>
                            <div class="jproduct_previewBox jslide_in7"><img  src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_PAIR_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt=""></div>
                        </div>
                        <div class="jproduct_holder">
                            <div class="jproduct_image">
                                <div id="jslide_in">
                                    <img style="width: 100%;" src="${res.images[0]}" alt="">
                                </div>
                                <div id="jslide_in1" class="jposition">
                                    <img style="width: 100%;" src="${res.images[1]}" alt="">
                                </div>
                                <div id="jslide_in2"  class="jposition">
                                    <img style="width: 100%;" src="${res.images[2]}" alt="">
                                </div>
                                <div id="jslide_in3"  class="jposition">
                                    <img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_829,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_BACK_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt="">
                                </div>
                                <div id="jslide_in4" class="jposition">
                                    <img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_829,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_TOP_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt="">
                                </div>
                                <div id="jslide_in5" class="jposition">
                                    <video style="width: 100%;" src="https://cdn.allbirds.com/video/upload/f_auto,q_auto/cms/5otSnP6Ctef9FlftXHkcZ4/388d2a2c80c7a4c5dd3fc98427fc17e5/M_TR_BLACK_1_mp4_.mp4" preload="auto" autoplay loop></video>
                                </div>
                                <div id="jslide_in6"  class="jposition">
                                    <img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_829,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_BOTTOM_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt="">
                                </div>
                                <div id="jslide_in7"  class="jposition">
                                    <img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1421,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_PAIR_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt="">
                                </div>
                            </div>
                            <div class="jproduct_details">
                                <p class="jproduct_navigation"><a href="#">Home</a> / <a href="#">Men's Shoe</a> / <a href="#">Everyday Sneakers</a> /</p>
                                <h1 class="jproduct_title">${res.title}</h1>
                                <div class="jproduct_price">
                                    <p>${res.currency} ${res.price}</p>
                                    <div>
                                        <p>${res.shipping_text}</p>
                                    </div>
                                </div>
                                <div class="jproduct_rating">
                                    <p>
                                        <span class="p-star-rating">
                                            <i class="fa fa-star" data-index="1"></i>
                                            <i class="fa fa-star" data-index="2"></i>
                                            <i class="fa fa-star" data-index="3"></i>
                                            <i class="fa fa-star" data-index="4"></i>
                                            <i class="fa fa-star" data-index="5"></i>
                                        </span>
                                        <button id="like-btn"><i class="fa fa-thumbs-up"></i> Like</button>
                                        <a href="#">(${res.like})</a>
                                    </p>
                                </div>
                                <div class="jproduct_type">
                                    <p  class="jclassic"><b>CLASSICS:</b></p>
                                    <p class="jclassic">Jet Black (White Sole)</p>
                                </div>
                                <div class="jproduct_color_holder">
                                    <div class="jproduct_color1"></div>
                                    <div class="jproduct_color2"></div>
                                    <div class="jproduct_color3"></div>
                                    <div class="jproduct_color4"></div>
                                    <div class="jproduct_color5"></div>
                                </div>
                                <p class="jclassic"><b>LIMITED EDITION:</b></p>
                                <div class="jproduct_color_holder">
                                    <div class="jproduct_color1"></div>
                                    <div class="jproduct_color2"></div>
                                    <div class="jproduct_color3"></div>
                                    <div class="jproduct_color4"></div>
                                    <div class="jproduct_color5"></div>
                                    <div class="jproduct_color5"></div>
                                    <div class="jproduct_color5"></div>
                                </div>
                                <p class="jclassic"><b>SELECT SIZE:</b></p>
                                <div class="jproduct_size_holder">
                                    <div class="jproduct_size black1">8</div>
                                    <div class="jproduct_size black2">9</div>
                                    <div class="jproduct_size black3">10</div>
                                    <div class="jproduct_size black4">11</div>
                                    <div class="jproduct_size black5">12</div>
                                    <div class="jproduct_size black6">13</div>
                                    <div class="jproduct_size black7">14</div>
                                </div>
                                <p class="sizeText">This style is available in whole sizes only. In between sizes? We recommend you size up. <a href="#">See Size Chart</a></p>
                                <div class="jproduct_btn">
                                    SELECT A SIZE
                                    <button class="jproduct_addCart" data-product-id="1" data-id="${res.id}">
                                        ADD TO CART - ${res.currency}${res.price}
                                    </button>
                                </div>
                                <p class="sizeText1">Free shipping on orders over $75. Free returns.*</p>
                                <div class="jAllBirdHolder9">
                                    <div class="jAllBird9">
                                        <h5>FIND IN STORE</h5>
                                        <div class="jUp_down9">
                                            <img class="jupArrow9" style="height: 15px;" src="./images/icons/arrow-down-sign-to-navigate.png" alt="">
                                            <img class="jdownArrow9" src="./images/icons/arrow-down-sign-to-navigate (1).png" alt="">
                                        </div>
                                    </div>
                                    <div class="jAllBirdHide9">
                                        <p>
                                            Please select a size to see availability at a store near you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $('.jtreeRunner_title').prepend(`
                    <div><h4>${res.title} Highlights</h4></div>  
                `);

                $('.jAllBirdHide91').prepend(`
                    <p>${res.descp}</p>
                `);

                $('.jmensTree_holder').prepend(`
                    <h1>${res.title} Reviews</h1>
                `)

                $('.jproduct_container001').html(productDetailsHTML)
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    getProductInfo()
})