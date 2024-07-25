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
                    window.location.reload()
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

    //     let formData = new FormData()
    //     let imageInput = $('#category_image')[0].files[0]
    //     let categoryName = $('#category_name').val()
    //     let merchantId = merchant_id

    //     formData.append('merchant_id', merchantId)
    //     formData.append('name', categoryName)
    //     formData.append('image', imageInput)

    //     $.ajax({
    //         url: `${endPoint}/categories`,
    //         method: 'POST',
    //         data: formData,
    //         processData: false,
    //         contentType: false,
    //         success: function(res){
    //             console.log(res);
    //         },
    //         error: function(err){
    //             console.log(err);
    //         }
    //     })
    // })



    //function for getting all categories
    function getAllCategories(){
        $('.categoryList_container').empty()
        
        $.ajax({
            url: `${endPoint}/categories?merchant_id=${merchant_id}`,
            method: 'GET',
            success: function(res){
                console.log(res);
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
        // $('#editCategory_image').val(image)

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

})