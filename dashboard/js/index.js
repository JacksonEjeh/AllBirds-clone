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
      console.log('Selected Tags:', selectedTags);
      // You can use selectedTags array as per your requirement
    });
});


$(document).ready(function(){
    const endPoint = "http://ecommerce.reworkstaging.name.ng/v2" 
    $('.dashboard').click(function(){
        $('.dashboard_container').show()
        $('.addProduct_page').hide()
        $('.addCategory_page').hide()
        $('.categoryList_page').hide()

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
    
    $('#myAccount').click(function(){
        window.location.href = "profile.html"
    })
    
    $('#logOut').click(function(){
        localStorage.removeItem('merchantLoginDetails')
        window.location.href = "login.html"
    })

    $(document).on('click', '#addProduct', function(){
        $('.dashboard_container').hide()
        $('.addCategory_page').hide()
        $('.categoryList_page').hide()
        $('.addProduct_page').show()
    })
    $(document).on('click', '#newCategory', function(){
        $('.dashboard_container').hide()
        $('.addProduct_page').hide()
        $('.categoryList_page').hide()
        $('.addCategory_page').show()
    })
    $(document).on('click', '#categoryList', function(){
        $('.dashboard_container').hide()
        $('.addProduct_page').hide()
        $('.addCategory_page').hide()
        $('.categoryList_page').show()
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
                    console.log(res);
                    // window.location.reload()
                    alert('New category created')
                },
                error: function(err){
                    console.log(err);
                }
            })
        }
    })

    // $('#addCategory').on('submit', function(e){
    //     e.preventDefault()

    //     var formData = new FormData(this)
    //     let merchantsDetails = localStorage.getItem("merchantLoginDetails")
    //     let _id = JSON.parse(merchantsDetails)
    //     id = _id.id
    //     if(id){
    //         formData.append('merchant_id', id)
    //     }
    //     console.log(formData)


    //     $.ajax({ 
    //         url: `${endPoint}/categories`, 
    //         method: 'POST', 
    //         data: formData, 
    //         processData: false, 
    //         // contentType: false, 
    //         success: function (response) { 
    //             console.log(response);                      
    //             alert('Your form has been sent successfully.'); 
    //         }, 
    //         error: function (error) {                        
    //             alert('error.'); 
    //             console.error(error); 
    //         } 
    //     });

    // })



    //function for getting all categories
    function getAllCategories(){
        $('.categoryList_container').empty()
        
        $.ajax({
            url: `${endPoint}/categories?merchant_id=${merchant_id}`,
            method: 'GET',
            success: function(res){
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

    // function to toggle me edit/delete dropdow 
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
        var discount = $('#discount').is(':checked')
        var shipment = $('#shipment').is(':checked')
        var category_id = $('#category').val()
        console.log(category_id);

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
            has_discount: discount,
            has_shipment: shipment,
            discount: $('#discountRate').val(),
            discount_expiration: $('#discountExpiry').val(),
            images: arrayOfProductImage,
            shipping_locations: arrayOfShippingLocation,
            category_id: category_id,
            merchant_id: merchant_id
        } 

        let valid =  true
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
            $('#addProduct_image1').removelass('errBorder')
            $('.warn1').addClass('imgErr')
        } else if (image3 === "") {
            valid = false
            $('#addProduct_image3').addClass('errBorder')
            $('#addProduct_image2').removeClass('errBorder')
            $('.warn1').addClass('imgErr')

        }  else {
            valid = true
            $.ajax({
                url: `${endPoint}/products`,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(productInfo),
                success: function(res){
                    console.log(res);
                    alert('product posted successful')
                },
                error: function(err){
                    console.log(err);
                }
            })
        }

        if (refund) {
            localStorage.setItem("refund", JSON.stringify(refund))
        }
        
        if (discount === true) {
            if (productInfo.discount === "") {
                valid = false
                $('#addProduct_err').text('There,s an empty field in your form')
                $('#discountRate').addClass('errBorder')
            } else if (productInfo.discount_expiration === "") {
                valid = false
                $('#addProduct_err').text('There,s an empty field in your form')
                $('#discountExpiry').addClass('errBorder')
            }
        }
        if (shipment === true) {
            if (shipLocation === "") {
                valid = false
                $('#searchInput').addClass('errBorder')
                $('#shipLocationErr').text('You need to add at least a shipping location')
            }
        }
       

        

    })
})