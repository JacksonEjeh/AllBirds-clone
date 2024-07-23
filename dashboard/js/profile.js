$(document).ready(function(){
    const endPoint = "http://ecommerce.reworkstaging.name.ng/v2"
    $('#password').click(function(){
        $('#password').addClass('active')
        $('#account').removeClass('active')
        $('.password_setting_container').show()
        $('.account_settinds_container').hide()
    })

    $('#account').click(function(){
        $('#account').addClass('active')
        $('#password').removeClass('active')
        $('.account_settinds_container').show()
        $('.password_setting_container').hide()
    })

    $('.btn2').click(function(){
        $('.allInput').prop('disabled', false)
        $('.allInput').addClass('activeInpute')
        $('.allInput1').addClass('activeInpute')
        $('.allInput1').prop('disabled', false)
        $('.btn1').show()
        $('.btn3').show()
        $('.btn2').hide()
    })
    $('.btn3').click(function(){
        window.location.reload()
    })
    $('.btn4').click(function(){
        window.location.href = "index.html"
    })

    let merchantsDetails = JSON.parse(localStorage.getItem("merchantLoginDetails"))

    let merchant_id = merchantsDetails.id
    let firstName = merchantsDetails.first_name
    let lastName = merchantsDetails.last_name
    let email = merchantsDetails.email
    let phone = merchantsDetails.phones[0]
    let storeName = merchantsDetails.store_name
    let descp = merchantsDetails.descp
    let state = merchantsDetails.state
    let district = merchantsDetails.district
    let twitter = merchantsDetails.social_media.x
    let facebook = merchantsDetails.social_media.facebook
    let instagram = merchantsDetails.social_media.instagram

    function updateProfileDetails(){
        $('#firstName').val(firstName)
        $('#email').val(email)
        $('#storeName').val(storeName)
        $('#state').val(state)
        $('#lastName').val(lastName)
        $('#phone').val(phone)
        $('#descp').val(descp)
        $('#district').val(district)
        $('#twitter').val(twitter)
        $('#facbook').val(facebook)
        $('#insta').val(instagram)

        $('.mainName').html(lastName +" " + firstName)
    }
    updateProfileDetails()

    $('.updateProfile').on('submit', function(e){
        e.preventDefault()

        
        let updatedMerchantInfo = {
            first_name: $('#firstName').val(),
            email : $('#email').val(),
            store_name : $('#storeName').val(),
            state : $('#state').val(),
            last_name : $('#lastName').val(),
            phone : $('#phone').val(),
            descp : $('#descp').val(),
            district : $('#district').val(),
            social_media: {
                x: $('#twitter').val(),
                facebook: $('#facbook').val(),
                instagram: $('#insta').val(),
            }
        }

        let valid = true

        if (updatedMerchantInfo.first_name === "") {
            valid = false
            $('#firstName').addClass('errInpute')
        } else if (updatedMerchantInfo.last_name === "") {
            valid = false
            $('#lastName').addClass('errInpute')
            $('#firstName').removeClass('errInpute')
            
        } else if (updatedMerchantInfo.email === "") {
            valid = false
            $('#lastName').removeClass('errInpute')
            $('#email').addClass('errInpute')
            
        } else if (updatedMerchantInfo.phone === "") {
            valid = false
            $('#email').removeClass('errInpute')
            $('#phone').addClass('errInpute')
            
        }else if (updatedMerchantInfo.store_name === "") {
            valid = false
            $('#phone').removeClass('errInpute')
            $('#storeName').addClass('errInpute')
            
        } else if (updatedMerchantInfo.descp === "") {
            valid = false
            $('#storeName').removeClass('errInpute')
            $('#descp').addClass('errInpute')
        }else if (updatedMerchantInfo.state === "") {
            valid = false
            $('#descp').removeClass('errInpute')
            $('#state').addClass('errInpute')
        }else if (updatedMerchantInfo.district === "") {
            valid = false
            $('#state').removeClass('errInpute')
            $('#district').addClass('errInpute')
        }else if (updatedMerchantInfo.social_media.x === "") {
            valid = false
            $('#district').removeClass('errInpute')
            $('#twitter').addClass('errInpute')
        }else if (updatedMerchantInfo.social_media.facebook === "") {
            valid = false
            $('#twitter').removeClass('errInpute')
            $('#facebook').addClass('errInpute')
        }else if (updatedMerchantInfo.social_media.instagram === "") {
            valid = false
            $('#facebook').removeClass('errInpute')
            $('#insta').addClass('errInpute')
        } else{
            valid

            $.ajax({
                url: `${endPoint}/merchants/${merchant_id}`,
                method: 'PUT',
                data: updatedMerchantInfo,
                success: function(res){
                    window.location.reload()
                    localStorage.setItem("merchantLoginDetails", JSON.stringify(res))
                },
                error: function(err){
                    console.log("error", err);
                }
            })
        }
    })

    $('#UpdatePassword').on('submit', function(e){
        e.preventDefault()

        let updatedMerchantPassword = {
            old_password: $('#oldPassword').val(),
            new_password: $('#newPassword').val()
        }
        let confirmPassword = $('#confirmPassword').val()
        let valid = true
        if (updatedMerchantPassword.old_password === "") {
            valid = false
            $('#oldPassword').addClass('errInpute')
        } else if (updatedMerchantPassword.new_password === "") {
            valid = false
            $('#newPassword').addClass('errInpute')
            $('#oldPassword').removeClass('errInpute')
        } else if (updatedMerchantPassword.new_password.length < 8) {
            valid = false
            $('#newPassword').addClass('errInpute')
            $('#oldPassword').removeClass('errInpute')
            $('#err3').html('password must be 8 characters or more')
        }else if (confirmPassword === "") {
            $('#confirmPassword').addClass('errInpute')
            $('#oldPassword').removeClass('errInpute')
            $('#newPassword').removeClass('errInpute')
            $('#err3').empty()
            
        } else if (confirmPassword !== updatedMerchantPassword.new_password) {
            $('#confirmPassword').addClass('errInpute')
            $('#newPassword').addClass('errInpute')
            $('#err1').html('Password Mismatch')
        } else{
            valid
            
            $.ajax({
                url: `${endPoint}/merchants/${merchant_id}/change-passwd`,
                method: 'PUT',
                data: updatedMerchantPassword,
                success: function(res){
                    if (res.code === 404) {
                        $('#oldPassword').addClass('errInpute')
                        $('#err2').html('Old password is incorrect') 
                        $('#err1').empty()
                    } else{
                        alert('Password successfully updated')
                        window.location.reload()
                    }
                },
                error: function(err){
                    console.log(err);
                }
            })
        }
    })
})