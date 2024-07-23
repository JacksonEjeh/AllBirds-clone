$(document).ready(function(){

    const endPoint = "http://ecommerce.reworkstaging.name.ng/v2"

    $('#register').on('submit', function(e){
        e.preventDefault()

        let marchantDetails = {
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            store_name: $('#store_name').val(),
            descp: $('#descp').val(),
            icon: $('#icon').val(),
            banner: $('#banner').val(),
            phones: $('#phones').val(),
            password: $('#password').val()
        }
        let retypePassword = $('#retypePassword').val()
        
        let valid = true

        if (marchantDetails.last_name === "") {
            valid = false
            // $('#last_name').addClass('error')
            $('#lastNameError').show()
        }else if (marchantDetails.first_name === "") {
            valid = false
            $('#firstNameError').show()
            $('#lastNameError').hide()
        } else if (marchantDetails.email === "") {
            valid = false
            $('#emailError').show()
            $('#firstNameError').hide()
        } else if (marchantDetails.phone === "") {
            valid = false
            $('#phoneError').show()
            $('#emailError').hide()
        } else if (marchantDetails.phones === "") {
            valid = false
            $('#phoneError2').show()
            $('#phoneError').hide()
        }else if (marchantDetails.store_name === "") {
            valid = false
            $('#storeNameError').show()
            $('#phoneError2').hide()
        } else if (marchantDetails.descp === "") {
            valid =false
            $('#despError').show()
            $('#storeNameError').hide()
        } else if (marchantDetails.icon === "") {
            valid = false
            $('#iconError').show()
            $('#despError').hide()
        } else if (marchantDetails.banner === "") {
            valid = false
            $('#bannerError').show()
            $('#iconError').hide()
        } else if (marchantDetails.password === "") {
            valid = false
            $('#passwordError').show()
            $('#bannerError').hide()
        } else if (marchantDetails.password.length < 8) {
            valid = false
            $('#passwordError2').show()
            $('#passwordError').hide()
        }else if (retypePassword === "") {
            valid = false
            $('#passwordError3').show()
            $('#passwordError').hide()
            $('#passwordError2').hide()
        }else if (marchantDetails.password !== retypePassword) {
            valid = false
            $('#passwordError4').show()
            $('#passwordError3').hide()
        } else{
            valid
            $('#passwordError4').hide()

            $.ajax({
                url: `${endPoint}/merchants`,
                method: 'POST',
                data: marchantDetails,
                success: function(res){
                    console.log(res);
                    if (res.code === 304) {
                        $('#emailExist').show()
                    } else{
                        alert(`Registration Successful!! Click on the "GET STARTED" button to log-in`)
                        // window.location.href = "login.html"
                    }
                },
                error: function(err){
                    console.log(err);
                }
            })
        }
    })

})