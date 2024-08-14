$(document).ready(function() {
    $('#searchInput').on('keyup', function() {
      var value = $(this).val().toLowerCase();
      $('.option').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  
    $('.display').on('click', function(e) {
      e.stopPropagation();
      $(this).siblings('.options-container').toggleClass('active2');
    });
  
    $(document).on('click', function(e) {
      if (!$(e.target).closest('.custom-select').length) {
        $('.options-container').removeClass('active2');
      }
    });
  
    $('.option input[type="checkbox"]').on('change', function() {
      var selectedTags = [];
      $('.option input[type="checkbox"]:checked').each(function() {
        selectedTags.push($(this).val());
      });

      $('.display').val(selectedTags)
    //   console.log('Selected Tags:', selectedTags);
      // You can use selectedTags array as per your requirement
    });
});


$(document).ready(function(){
    const endPoint = "http://ecommerce.reworkstaging.name.ng/v2" 
    $(document).on('click', '.dashboard', function(){
        $('.dashboard_container').show()
        $('.addProduct_page').hide()
        $('.addCategory_page').hide()
        $('.categoryList_page').hide()
        $('.productList_page').hide()
        $('.productDetail_page').hide()

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

    $(document).on('click', '.setting', function(){
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

    $(document).on('click', '.eCommerce', function(){
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

    $(document).on('click', '.category', function(){
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

    $(document).on('click','.orders', function(){
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

    $(document).on('click', '.user', function(){
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

    $(document).on('click', '.profile_holder', function(){
        $('.profile_dropdown').slideToggle()
    })
    
    $(document).on('click', '#myAccount', function(){
        window.location.href = "profile.html"
    })
    
    $(document).on('click', '#logOut', function(){
        localStorage.removeItem('merchantLoginDetails')
        window.location.href = "login.html"
    })

    $(document).on('click', '#addProduct', function(){
        $('.dashboard_container').hide()
        $('.addCategory_page').hide()
        $('.categoryList_page').hide()
        $('.productList_page').hide()
        $('.productDetail_page').hide()
        $('.addProduct_page').show()
    })
    $(document).on('click', '#newCategory', function(){
        $('.dashboard_container').hide()
        $('.addProduct_page').hide()
        $('.categoryList_page').hide()
        $('.productList_page').hide()
        $('.productDetail_page').hide()
        $('.addCategory_page').show()
    })
    $(document).on('click', '#categoryList', function(){
        $('.dashboard_container').hide()
        $('.addProduct_page').hide()
        $('.addCategory_page').hide()
        $('.productList_page').hide()
        $('.productDetail_page').hide()
        $('.categoryList_page').show()
    })
    $(document).on('click', '#productList', function(){
        $('.dashboard_container').hide()
        $('.addProduct_page').hide()
        $('.addCategory_page').hide()
        $('.categoryList_page').hide()
        $('.productDetail_page').hide()
        $('.productList_page').show()
    })


    let merchantsDetails = JSON.parse(localStorage.getItem("merchantLoginDetails"))

    let merchant_id = merchantsDetails.id
    let firstName = merchantsDetails.first_name
    let lastName = merchantsDetails.last_name
    let storeName = merchantsDetails.store_name

    function updateAccountName(){
        $('.mainName').html(lastName +" " + firstName)
        $('.shopName').html(storeName)
    }
    updateAccountName()

    // validating and posting a new category to api
    $('#addCategory').on('submit', function(e){
        e.preventDefault()
        

        let categoryDetails ={
            merchant_id: merchant_id,
            name: $('#category_name').val(),
            image: $('#category_image').val()
        }
        let valid = true

        if (categoryDetails.name === "") {
            valid = false
            $('#nameErr').show()
            $('#category_name').addClass('errBorder')
        }else if (categoryDetails.image === "") {
            valid = false
            $('#imageErr').show()
            $('#nameErr').hide()
            $('#category_image').addClass('errBorder')
            $('#category_name').removeClass('errBorder')
        } else{
            valid
            $('#imageErr').hide()
            $('#nameErr').hide()
            $('#category_name').removeClass('errBorder')
            $('#category_image').removeClass('errBorder')

            $.ajax({
                url: `${endPoint}/categories`,
                method: 'POST',
                data: categoryDetails,
                success: function(res){
                    // console.log(res);
                    window.location.reload()
                    $('.dashboard_container').hide()
                    $('.addProduct_page').hide()
                    $('.addCategory_page').hide()
                    $('.productList_page').hide()
                    $('.categoryList_page').show()
                    alert('New category created')
                },
                error: function(err){
                    console.log(err);
                }
            })
        }
    })




    //function for getting all categories
    function getAllCategories(){
        $('.categoryList_container').empty()
        
        $.ajax({
            url: `${endPoint}/categories?merchant_id=${merchant_id}`,
            method: 'GET',
            success: function(res){
                localStorage.setItem("categories", JSON.stringify(res)) || []
                res.forEach(function(i){
                    $('.categoryList_container').append(`
                        <div class="categoryList" data-id ="${i.id}">
                                <div class="categoryName">
                                    <img class="categoryImage" src="${i.image}" alt="">
                                    <p class="categorynnamme">${i.name}</p>
                                </div>
                                <div class="categoryQuantity">
                                    ${i.total_earned}
                                </div>
                                <div class="categorySale">
                                    <p>${i.total_sold}<p/>
                                    <div class="dot">
                                        <img id="dot" src="../images/icons/dot.png" alt="">
                                        <ul class="dropdown">
                                            <li id="editCategory">Edit</li>
                                            <li id="deleteCategory">Delete</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    `)
                    $('#category').append(`
                        <option value="${i.id}">${i.name}</option>
                    `)
                })
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    getAllCategories()

    //function for getting all categories on dashboard
    function getAllCategoriesOnDashboard(){
        $('.categoryTitle_holder_dashboard').empty()
        
        $.ajax({
            url: `${endPoint}/categories?merchant_id=${merchant_id}`,
            method: 'GET',
            success: function(res){
                localStorage.setItem("categories", JSON.stringify(res)) || []
                res.forEach(function(i){
                    $('.categoryTitle_holder_dashboard').append(`

                        <div class="categoryListDashboard">
                            <div class="categoryNameDash">
                                <img class="categoryImage" src="${i.image}" alt="">
                                <p>${i.name}</p>
                            </div>
                            <div class="categoryQuantityTitleDashboard">
                                $${i.total_earned}.00
                            </div>
                        </div>
                    `)
                })
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    getAllCategoriesOnDashboard()

    // function to toggle my edit/delete dropdown
    $(document).on("click", "#dot", function () {
        $(this).siblings().toggle();
    });

    // function for deleting a particular category
    $(document).on('click', '#deleteCategory', function(){
        let parent = $(this).parent().parent().parent().parent()
        let id = parent.data('id')
    
        $.ajax({
            url: `${endPoint}/categories/${id}`,
            method: 'DELETE',
            success: function(res){
                window.location.reload()
                alert('Category deleted successfully')
            },
            error: function(err){
                console.log(err);
            }
        })
    })
    

    // function for editing a particular category
    $(document).on('click', '#editCategory', function(){
        $('.dashboard_container').hide()
        $('.addProduct_page').hide()
        $('.categoryList_page').hide()
        $('.addCategory_page').hide()
        $('.editCategory_page').show()

        let parent = $(this).parent().parent().parent().parent()
        let category_id = parent.data('id')

        let categoryHolder = $(this).closest('.categoryList')
        let categoryTitle = categoryHolder.find('.categorynnamme').text()
        let image = categoryHolder.find('.categoryImage').attr('src')
        // console.log(image);
        
        $('#editCategory_name').val(categoryTitle)
        $('#editCategory_image').val(image)

        $('#editCategoryBtn').click(function(e){
            e.preventDefault()

            let updatedCategoryTitle = $('#editCategory_name').val()
            let updatedCategoryImage = $('#editCategory_image').val()

            let updatedCategory = {
              name: updatedCategoryTitle,
              image: updatedCategoryImage
            }

            let valid = true

            if (updatedCategory.name === "") {
                valid = false
                $('#nameErr1').show()
            }else if (updatedCategory.image === "") {
                valid = false
                $('#imageErr1').show()
                $('#nameErr1').hide()
            }else{
                valid
                
                $.ajax({
                    url: `${endPoint}/categories/${category_id}`,
                    method: 'PUT',
                    data: updatedCategory,
                    success: function(res){
                        console.log(res);
                        window.location.reload()
                    },
                    error: function(err){
                        console.log(err);
                    }
                })
            }
        })
    })

    $('.discount_holder').hide()
    $(document).on('click', '#discount', function(){
       let check = this.checked
        if (check === true) {
            $('.discount_holder').slideToggle()
        } else{
            $('.discount_holder').slideToggle()
        }
    })

    $('.shipping_location_holder').hide()
    $(document).on('click', '#shipment', function(){
        let check = this.checked
        if (check === true) {
            $('.shipping_location_holder').slideToggle()
        } else{
            $('.shipping_location_holder').slideToggle()
        }
    })

    // validating addProduct form field and API call
    $('#addProductForm').on('submit', function(event){
        event.preventDefault()


        let arrayOfProductImage = []
        let image1 = $('#addProduct_image1').val()
        let image2 = $('#addProduct_image2').val()
        let image3 = $('#addProduct_image3').val()

        let arrayOfShippingLocation = []
        let location1 = $('#tag1').val()
        let location2 = $('#tag2').val()
        let location3 = $('#tag3').val()
        let location4 = $('#tag4').val()
        let location5 = $('#tag5').val()
        let shipLocation = $('#searchInput').val()

        arrayOfShippingLocation.push(location1, location2, location3, location4, location5)
        arrayOfProductImage.push(image1, image2, image3)

        var refund = $('#refund').is(':checked')
        console.log(refund);
        var discountCheck = $('#discount').is(':checked')
        var shipment = $('#shipment').is(':checked')
        var category_id = $('#category').val()

        let productInfo = {
            title: $('#productTitle').val(),
            descp: $('#productDescp').val(),
            price: $('#productPrice').val(),
            brand: $('#productBrand').val(),
            quantity: $('#quantity').val(),
            currency: $('#currency').val(),
            category: $('#category').val(),
            min_qty: $('#minQty').val(),
            max_qty: $('#maxQty').val(),
            has_refund_policy: refund,
            has_discount: discountCheck,
            has_shipment: shipment,
            discount: $('#discountRate').val(),
            discount_expiration: $('#discountExpiry').val(),
            images: arrayOfProductImage,
            shipping_locations: arrayOfShippingLocation,
            shipping_text: $('#shippingText').val(),
            category_id: category_id,
            merchant_id: merchant_id
        } 

        let valid =  true

        if (productInfo.has_refund_policy) {
            localStorage.setItem("refund", productInfo.has_refund_policy)
        }
        if (productInfo.title === "") {
            valid = false
            $('#addProduct_err').text('There,s an empty field in your form')
            $('#productTitle').addClass('errBorder')
        } else if (productInfo.price === "") {
            valid = false
            $('#addProduct_err').text('There,s an empty field in your form')
            $('#productPrice').addClass('errBorder')
            $('#productTitle').removeClass('errBorder')
        } else if (productInfo.brand === "") {
           valid = false
           $('#addProduct_err').text('There,s an empty field in your form')
           $('#productBrand').addClass('errBorder')
           $('#productPrice').removeClass('errBorder')
        } else if (productInfo.descp === "") {
            valid = false
            $('#addProduct_err').text('There,s an empty field in your form')
            $('#productDescp').addClass('errBorder')
           $('#productBrand').removeClass('errBorder')
        } else if (productInfo.currency === "") {
            valid = false
            $('#addProduct_err').text('There,s an empty field in your form')
            $('#currency').addClass('errBorder')
            $('#productDescp').removeClass('errBorder')
        } else if (productInfo.quantity === "") {
            valid = false
            $('#addProduct_err').text('There,s an empty field in your form')
            $('#quantity').addClass('errBorder')
            $('#currency').removeClass('errBorder')
        } else if (productInfo.category === "") {
            valid = false
            $('#addProduct_err').text('There,s an empty field in your form')
            $('#category').addClass('errBorder')
            $('#quantity').removeClass('errBorder')
        } else if (productInfo.min_qty === "") {
            valid = false
            $('#addProduct_err').text('There,s an empty field in your form')
            $('#minQty').addClass('errBorder')
            $('#category').removeClass('errBorder')
        } else if (productInfo.max_qty === "") {
            valid = false
            $('#addProduct_err').text('There,s an empty field in your form')
            $('#maxQty').addClass('errBorder')
            $('#minQty').removeClass('errBorder')
        } else if (image1 === "") {
            valid = false
            $('#addProduct_image1').addClass('errBorder')
            $('.warn1').addClass('imgErr')
            $('#maxQty').removeClass('errBorder')
        } else if (image2 === "") {
            valid = false
            $('#addProduct_image2').addClass('errBorder')
            $('#addProduct_image1').removeClass('errBorder')
            $('.warn1').addClass('imgErr')
        } else if (image3 === "") {
            valid = false
            $('#addProduct_image3').addClass('errBorder')
            $('#addProduct_image2').removeClass('errBorder')
            $('.warn1').addClass('imgErr')

        } 
        if (productInfo.has_discount === true) {

            if (productInfo.discount === "") {
                valid = false
                $('#addProduct_err').text('There,s an empty field in your form')
                $('#discountRate').addClass('errBorder')
            } else if (productInfo.discount_expiration === "") {
                valid = false
                $('#addProduct_err').text('There,s an empty field in your form')
                $('#discountExpiry').addClass('errBorder')
                $('#discountRate').removeClass('errBorder')
            }
            

        } 
        if (productInfo.has_shipment === true) {
            if (shipLocation === "") {
                valid = false
                $('#searchInput').addClass('errBorder')
                $('#addProduct_image3').removeClass('errBorder')
                $('#shipLocationErr').text('You need to add at least a shipping location')
            } else if (productInfo.shipping_text === "") {
                valid = false
                $('#shippingText').addClass('errBorder')
                $('#searchInput').removeClass('errBorder')
                $('#shipLocationErr').text('')
            }

        } 
        if (valid) {

            $.ajax({
                url: `${endPoint}/products`,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(productInfo),
                success: function(res){
                    window.location.reload()
                    $('.dashboard_container').hide()
                    $('.addProduct_page').hide()
                    $('.addCategory_page').hide()
                    $('.categoryList_page').hide()
                    $('.productList_page').show()
                    alert('Product posted successful')
                },
                error: function(err){
                    console.log(err);
                }
            })
        }

    })

    // geting all product from the api
    function getAllProduct(){
        $('.product_holder').empty()

        $.ajax({
            url: `${endPoint}/products?merchant_id=${merchant_id}`,
            method: 'GET',
            success: function(res){
                let products = res.data
                localStorage.setItem("productDetails", JSON.stringify(products))    
                products.forEach(function(p){
                    $('.product_holder').append(`
                        <div class="productList" data-id="${p.id}">
                                <div class="productName">
                                    <img class="productImage" src="${p.image}" alt="">
                                    <p id="productName_dash">${p.title}</p>
                                </div>
                                <div class="productID">
                                    #${p.id}
                                </div>
                                <div class="productPrice">
                                    $${p.price}
                                </div>
                                <div class="productPrice">
                                    ${p.quantity}
                                </div>
                                <div class="productPrice">
                                    ${p.total_sold}
                                    <div class="dot">
                                        <img id="dot" src="../images/icons/dot.png" alt="">
                                        <ul class="dropdown">
                                            <li id="editProduct">Edit</li>
                                            <li id="deleteProduct">Delete</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    `) 
                })
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    getAllProduct()

    // function for deleting a particular product
    $(document).on('click', '#deleteProduct', function(){
        let parent = $(this).parent().parent().parent().parent()
        let id = parent.data('id')
    
        $.ajax({
            url: `${endPoint}/products/${id}`,
            method: 'DELETE',
            success: function(res){
                window.location.reload()
                alert('Product deleted successfully')
            },
            error: function(err){
                console.log(err);
            }
        })
    })

    // function for editing a particular product
    $(document).on('click', '#editProduct', function(){
        $('.dashboard_container').hide()
        $('.addProduct_page').hide()
        $('.categoryList_page').hide()
        $('.addCategory_page').hide()
        $('.editCategory_page').hide()
        $('.productList_page').hide()
        $('.editProduct_page').show()

        let parent = $(this).parent().parent().parent().parent()
        let product_id = parent.data('id')

        $.ajax({
            url: `${endPoint}/products/${product_id}`,
            method: 'GET',
            success: function(res){
                console.log(res); 
                localStorage.setItem("editProductInfo", JSON.stringify(res))
                inputValue()
            },
            error: function(err){
                console.log(err);
            }
        })
        function inputValue(){
            let editProduct = JSON.parse(localStorage.getItem('editProductInfo'));

            $('#editproductTitle').val(editProduct.title)
            $('#editproductPrice').val(editProduct.price)
            $('#editproductBrand').val(editProduct.brand)
            $('#editproductDescp').val(editProduct.descp)
            $('#editCurrency').val(editProduct.currency)
            $('#editQuantity').val(editProduct.quantity)
            $('#editProduct_image1').val(editProduct.images[0])
            $('#editProduct_image2').val(editProduct.images[1])
            $('#editProduct_image3').val(editProduct.images[2])
        }

        $('#editProductForm').on('submit', function(e){
            e.preventDefault()

            let arrayOfProductImage = []
            let image1 = $('#editProduct_image1').val()
            let image2 = $('#editProduct_image2').val()
            let image3 = $('#editProduct_image3').val()

            arrayOfProductImage.push(image1, image2, image3)

            let updatedProduct = {
                title: $('#editproductTitle').val(),
                price: $('#editproductPrice').val(),
                brand: $('#editproductBrand').val(),
                descp: $('#editproductDescp').val(),
                currency: $('#editCurrency').val(),
                quantity: $('#editQuantity').val(),
                images: arrayOfProductImage
            }

            let valid = true

            if (updatedProduct.title === "") {
                valid = false
                $('#editProduct_err').text('There,s an empty field in your form')
                $('#editproductTitle').addClass('errBorder')
            }else if (updatedProduct.price === "") {
                valid = false
                $('#editProduct_err').text('There,s an empty field in your form')
                $('#editproductPrice').addClass('errBorder')
                $('#editproductTitle').removeClass('errBorder')
            } else if (updatedProduct.brand === "") {
                valid = false
                $('#addProduct_err').text('There,s an empty field in your form')
                $('#editproductBrand').addClass('errBorder')
                $('#editproductPrice').removeClass('errBorder')
            } else if (updatedProduct.descp === "") {
                valid = false
                $('#addProduct_err').text('There,s an empty field in your form')
                $('#editproductDescp').addClass('errBorder')
                $('#editproductBrand').removeClass('errBorder')
            } else if (updatedProduct.currency === "") {
                valid = false
                $('#addProduct_err').text('There,s an empty field in your form')
                $('#editCurrency').addClass('errBorder')
                $('#editproductDescp').removeClass('errBorder')
            } else if (updatedProduct.quantity === "") {
                valid = false
                $('#addProduct_err').text('There,s an empty field in your form')
                $('#editQuantity').addClass('errBorder')
                $('#editCurrency').removeClass('errBorder')
            } else if (image1 === "") {
                valid = false
                $('#addProduct_err').empty()
                $('#editProduct_image1').addClass('errBorder')
                $('.editWarn1').addClass('imgErr')
                $('#maxQty').removeClass('errBorder')
            } else if (image2 === "") {
                valid = false
                $('#addProduct_err').empty()
                $('#editProduct_image2').addClass('errBorder')
                $('#editProduct_image1').removeClass('errBorder')
                $('.editWarn1').addClass('imgErr')
            } else if (image3 === "") {
                valid = false
                $('#addProduct_err').empty()
                $('#editProduct_image3').addClass('errBorder')
                $('#editProduct_image2').removeClass('errBorder')
                $('.editWarn1').addClass('imgErr')
            } 
            
            if (valid){
                
                $.ajax({
                    url: `${endPoint}/products/${product_id}`,
                    method: 'PUT',
                    data: updatedProduct,
                    success: function(res){
                        console.log(res);
                        // window.location.reload()
                        alert('Product Updated Successful')
                    },
                    error: function(err){
                        console.log(err);
                    }
                })
            }
        })
    })



    // geting all product from the api
    function getAllProductDashboard(){
        $('.product_holderDashboard').empty()

        $.ajax({
            url: `${endPoint}/products?merchant_id=${merchant_id}`,
            method: 'GET',
            success: function(res){
                let products = res.data
                products.forEach(function(p){
                    $('.product_holderDashboard').append(`
                        <div class="productListDash" data-id="${p.id}">
                            <div class="productNameTitleDashboard">
                                <img class="productImage" src="${p.image}" alt="">
                                <p id="productName_dash">${p.title}</p>
                            </div>
                            <div class="productPriceDashboard">
                                $${p.price}
                            </div>
                        </div>
                    `) 
                })
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    getAllProductDashboard()

    // geting all product for a particular category
    $(document).on('click', '.categorynnamme', function(e){
        e.preventDefault()
        $('.dashboard_container').hide()
        $('.addProduct_page').hide()
        $('.addCategory_page').hide()
        $('.productList_page').hide()
        $('.categoryList_page').hide()
        $('.productUnderAcategory_page').show()
        
        
        let parent = $(this).parent().parent()
        let category_id = parent.data('id')
        
        allProductInAcategory()

        function allProductInAcategory(){
            $('.categoryProducts').empty()
            $('.nameOfCategory').empty()
            $.ajax({
                url: `${endPoint}/products?merchant_id=${merchant_id}&category_id=${category_id}`,
                method: 'GET',
                success: function(res){
                    let categoryProducts = res.data
                    categoryProducts.forEach(function(c){
                        $('.categoryProducts').append(`
                            <div class="productList">
                                <div class="productName">
                                    <img class="productImage" src="${c.image}" alt="">
                                    <p>${c.title}</p>
                                </div>
                                <div class="productID">
                                    ${c.id}
                                </div>
                                <div class="productPrice">
                                    $${c.price}
                                </div>
                                <div class="productPrice">
                                    ${c.quantity}
                                </div>
                                <div class="productPrice">
                                    ${c.total_sold}
                                </div>
                            </div>
                        `)

                        $('.nameOfCategory').append(`
                            <h3>All Products belonging to ${c.category.name} Category</h3>
                        `)

                    })
                },
                error: function(err){
                    console.log(err);
                }
            })
        }
    })

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    let userId = userDetails.id

    function likesMadeByUser(){

        $.ajax({
            url: `${endPoint}/users/likes?user_id=${userId}`,
            method: 'GET',
            success: function(res){
                $('#totalLike').html(res.length )
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    likesMadeByUser()

    function totalSales(){
        $.ajax({
            url: `${endPoint}/sales?merchant_id=${merchant_id}`,
            method: 'GET',
            success: function(res){
                $('#totalSales').html(res.total)
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    totalSales()

    $(document).on('click', '#productName_dash', function(){
        let product_id = $(this).parent().parent().data('id')
        
        $.ajax({
            url: `${endPoint}/products/${product_id}`,
            method: 'GET',
            success: function(res){
                // saving the id to the local storage
                localStorage.setItem("productID_dash", JSON.stringify(res.id))
                
                // hiding all pages except the detail page
                $('.dashboard_container').hide()
                $('.addProduct_page').hide()
                $('.addCategory_page').hide()
                $('.categoryList_page').hide()
                $('.productList_page').hide()
                $('.productDetail_page').show()
                
                // running all the function needed for the detail page
                getProductDetail_dash()
                getAllLike_dash()
                getAllReviews()
                getAllRatings_dash()
            },
            error: function(err){
                console.log(err);
            }
        })
    })

    // getting product detail on the merchant end
    function getProductDetail_dash(){
        let product_id = JSON.parse(localStorage.getItem('productID_dash'));

        $.ajax({
            url: `${endPoint}/products/${product_id}`,
            method: 'GET',
            success: function(res){
                // console.log(res);
                let productDetailsHTML = `
                        <div class="jproduct_container_dash" data-id="${res.id}">
                            <div class="jproduct_preview_dash">
                                <div class="jproduct_previewBox_dash jslide_in active_product"><img style="width: 100%;" src="${res.images[0]}" alt=""></div>
                                <div class="jproduct_previewBox_dash jslide_in1"><img style="width: 100%;" src="${res.images[1]}" alt=""></div>
                                <div class="jproduct_previewBox_dash jslide_in2"><img style="width: 100%;" src="${res.images[2]}" alt=""></div>
                                <div class="jproduct_previewBox_dash jslide_in3"><img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_BACK_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt=""></div>
                                <div class="jproduct_previewBox_dash jslide_in4"><img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_TOP_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt=""></div>
                                <div class="jproduct_previewBox_dash jslide_in5"><img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://cdn.allbirds.com/video/upload/f_auto,q_auto,so_25p,fl_relative,w_0.5,l_play-button-png/cms/5otSnP6Ctef9FlftXHkcZ4/388d2a2c80c7a4c5dd3fc98427fc17e5/M_TR_BLACK_1_mp4_.jpg" alt=""></div>
                                <div class="jproduct_previewBox_dash jslide_in6"><img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_BOTTOM_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt=""></div>
                                <div class="jproduct_previewBox_dash jslide_in7"><img style="width: 100%;"  src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_72,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_PAIR_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt=""></div>
                            </div>
                            <div class="jproduct_holder_dash">
                                <div class="jproduct_image">
                                    <div id="jslide_in">
                                        <img style="width: 100%;" src="${res.images[0]}" alt="">
                                    </div>
                                    <div id="jslide_in1" class="jposition_dash">
                                        <img style="width: 100%;" src="${res.images[1]}" alt="">
                                    </div>
                                    <div id="jslide_in2"  class="jposition_dash">
                                        <img style="width: 100%;" src="${res.images[2]}" alt="">
                                    </div>
                                    <div id="jslide_in3"  class="jposition_dash">
                                        <img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_829,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_BACK_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt="">
                                    </div>
                                    <div id="jslide_in4" class="jposition_dash">
                                        <img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_829,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_TOP_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt="">
                                    </div>
                                    <div id="jslide_in5" class="jposition_dash">
                                        <video style="width: 100%;" src="https://cdn.allbirds.com/video/upload/f_auto,q_auto/cms/5otSnP6Ctef9FlftXHkcZ4/388d2a2c80c7a4c5dd3fc98427fc17e5/M_TR_BLACK_1_mp4_.mp4" preload="auto" autoplay loop></video>
                                    </div>
                                    <div id="jslide_in6"  class="jposition_dash">
                                        <img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_829,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_BOTTOM_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt="">
                                    </div>
                                    <div id="jslide_in7"  class="jposition_dash">
                                        <img style="width: 100%;" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1421,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/TR3MJBW080_SHOE_PAIR_GLOBAL_MENS_TREE_RUNNER_JET_BLACK_WHITE.png?v=1717710541" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                `;
                $('.productImages_holderDash').html(productDetailsHTML);
                
                let jproduct_details_dash = `
                    <div class="jproduct_details_dash">
                        <h1 class="jproduct_title">${res.title}</h1>
                        <div class="jproduct_price">
                            <p>${res.currency} ${res.price}</p>
                            <div>
                                <p>${res.shipping_text}</p>
                            </div>
                        </div>
                        <div class="jproduct_type_dash">
                            <p  class="jclassic"><b>BRAND:</b></p>
                            <p class="jclassic">${res.brand}</p>
                        </div>
                        <div class="jproduct_color_holder">
                            <div class="jproduct_color1"></div>
                            <div class="jproduct_color2"></div>
                            <div class="jproduct_color3"></div>
                            <div class="jproduct_color4"></div>
                            <div class="jproduct_color5"></div>
                        </div>
                        <p class="jclassic"><b>SELECT SIZE:</b></p>
                        <div class="jproduct_size_holder_dash">
                            <div class="jproduct_size black1">8</div>
                            <div class="jproduct_size black2">9</div>
                            <div class="jproduct_size black3">10</div>
                            <div class="jproduct_size black4">11</div>
                            <div class="jproduct_size black5">12</div>
                            <div class="jproduct_size black6">13</div>
                            <div class="jproduct_size black7">14</div>
                            <div class="jproduct_size black7">14</div>
                            <div class="jproduct_size black7">14</div>
                        </div>
                    </div> 
                `; $('.detail_holder_dash').html(jproduct_details_dash)

                let jAllBirdHolder91 = `
                    <div class="jAllBirdHolder91">
                        <div class="jAllBird91">
                            <h5>DESCRIPTION</h5>
                            <div class="jUp_down91">
                                <img class="jupArrow91" style="height: 15px;" src="../images/icons/arrow-down-sign-to-navigate.png" alt="">
                                <img class="jdownArrow91" src="../images/icons/arrow-down-sign-to-navigate (1).png" alt="">
                            </div>
                        </div>
                        <div class="jAllBirdHide91 jhide_dash">
                            <p>${res.descp}</p>
                        </div>
                    </div>
                `; $('.description_dash').html(jAllBirdHolder91)
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    // getProductDetail_dash()

    // getting all likes on the merchant end
    function getAllLike_dash(){
        let product_id = JSON.parse(localStorage.getItem('productID_dash'));

        $.ajax({
            url: `${endPoint}/likes?product_id=${product_id}`,
            method: 'GET',
            success: function(res){
                $('.like_holderDash').html(`
                    <div class="total_like">
                        <div class="">
                            <h4>Total like:(${res.length})</h4>
                        </div>
                    </div>
                `)
                res.forEach(function(l){
                    $('.total_like').append(`
                       <div class="like_dash">
                            <img src="../images/icons/love.png" alt="">
                            <p>Liked by <b>${l.user.first_name}</b> and <b>${res.length} others</b></p>
                        </div> 
                    `)
                })
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    

    // getting all reviews on the merchant end
    $('.noComment_holder').hide()
    function getAllReviews(){
        let product_id = JSON.parse(localStorage.getItem('productID_dash'));

        $('#reviewSection').empty()

        $.ajax({
            url: `${endPoint}/reviews?product_id=${product_id}`,
            method: 'GET',
            success: function(res){
                if (res.length === 0) {
                    $('.totalReview_dash').html(`
                        <h4>Total Review:(${res.length})</h4>
                    `)
                    $('.noComment_holder').show() 
                }
                res.forEach(function(r){
                    $('.totalReview_dash').html(`
                        <h4>Total Review:(${res.length})</h4>
                    `)
                    $('.review_holder_dash').html(`
                        <div class="reviewContainer_dash">
                            <div class="text_head_dash">
                                <p><b>${r.user.first_name} ${r.user.last_name}:</b> <span style="font-size: 12px; letter-spacing: .5px; color: blue; font-style: oblique;">Verified Buyer</span></p> 
                                <p style="font-size: 12px;"><b>Date:</b> <span>${r.created_at}</span></p>
                            </div>
                            <div class="text_dash">
                                <p>${r.text}</p> 
                            </div>
                        </div>  
                    `)
                })
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    

    // getting all rating on the merchant end
    function getAllRatings_dash(){
        $('.starHolder').hide()
        let product_id = JSON.parse(localStorage.getItem('productID_dash'));

        $.ajax({
            url: `${endPoint}/ratings?product_id=${product_id}`,
            method: 'GET',
            success: function(res){
                res.forEach(function(r){
                    if (r.value === 1) {
                        $('.rating_dash').html(`
                            <span class="star1 starHolder">★☆☆☆☆</span>
                        `)
                        $('.star1').show()
                    } else if (r.value === 2) {
                        $('.rating_dash').html(`
                            <span class="star2 starHolder">★★☆☆☆</span>
                        `)
                        $('.star2').show()
                    } else if (r.value === 3) {
                        $('.rating_dash').html(`
                            <span class="star3 starHolder">★★★☆☆</span>
                        `)
                        $('.star3').show()
                    } else if (r.value === 4) {
                        $('.rating_dash').html(`
                            <span class="star4 starHolder">★★★★☆</span>
                        `)
                        $('.star4').show()
                    } else if (r.value === 5) {
                        $('.rating_dash').html(`
                            <span class="star5 starHolder">★★★★★</span>
                        `)
                        $('.star5').show()
                    }
                })
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    getAllRatings_dash()
})