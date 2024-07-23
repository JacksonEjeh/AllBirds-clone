$(document).ready(function(){
    const endPoint = "http://ecommerce.reworkstaging.name.ng/v2"
    $('#regForm').on('submit', function(event){
        event.preventDefault();
    
        $('#register-firstname').removeClass('error');
        $('#firstnameError').hide();
        $('#register-lastname').removeClass('error');
        $('#lastnameError').hide();
        $('#register-email').removeClass('error');
        $('#emailError').hide();
        $('#register-phone').removeClass('error');
        $('#phoneError').hide();
        $('#register-password').removeClass('error');
        $('#passwordError').hide();
        $('#register-confirmpassword').removeClass('error');
        $('#confirmpasswordError').hide();
        $('#lengthError').hide();
    
        let pw2 = $('#register-confirmpassword').val();
        
        let valid = true;
    
        let formData = {
            first_name: $('#register-firstname').val(),
            last_name: $('#register-lastname').val(),
            email: $('#register-email').val(),
            phone: $('#register-phone').val(),
            password: $('#register-password').val(),
        };

        // Regex for validating email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (formData.firstname === "") {
            valid = false;
            $('#register-firstname').addClass('error');
            $('#firstnameError').show();
        } 
        if (formData.lastname === "") {
            valid = false;
            $('#register-lastname').addClass('error');
            $('#lastnameError').show();
        }
        if (formData.phone === "") {
            valid = false;
            $('#register-phone').addClass('error');
            $('#phoneError').show();
        }
        if (formData.email === "") {
            valid = false;
            $('#register-email').addClass('error');
            $('#emailError').show();
        } else if (!emailRegex.test(formData.email)) {
            valid = false;
            $('#register-email').addClass('error');
            $('#emailError').text('Invalid email format').show();
        } 
        if (formData.password === "") {
            valid = false;
            $('#register-password').addClass('error');
            $('#passwordError').show();
        } else if (pw2 != formData.password) {
            valid = false;
            $('#register-confirmpassword').addClass('error');
            $('#confirmpasswordError').show();
        } else if (formData.password.length < 8){
            valid = false;
            $('#lengthError').show();
        } 
        
        if (valid) {
            $.ajax({
                url: `${endPoint}/users`,
                method: 'POST',
                data: formData,
                success: function(res){
                    if (res.code === 304) {
                    } else{
                        alert(`Registration Successful!!`)
                        window.location.href = "login.html"
                    }
                },
                error: function(err){
                    console.log(err);
                }
            })
        }
    });

     // Login form validation
     $('#loginForm').on('submit', function(event){
        event.preventDefault();
    
        $('#login-email').removeClass('error');
        $('#login-emailError').hide();
        $('#login-password').removeClass('error');
        $('#login-passwordError').hide();
    
        let valid = true;
    
        let loginData = {
            email: $('#login-email').val(),
            password: $('#login-password').val(),
        };

        // Regex for validating email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (loginData.email === "") {
            valid = false;
            $('#login-email').addClass('error');
            $('#login-emailError').show();
        } else if (!emailRegex.test(loginData.email)) {
            valid = false;
            $('#login-email').addClass('error');
            $('#login-emailError').text('Invalid email format').show();
        } 
        if (loginData.password === "") {
            valid = false;
            $('#login-password').addClass('error');
            $('#login-passwordError').show();
        } 
    
        if (valid) {
            $.ajax({
                url: `${endPoint}/users/login`,
                method: 'POST',
                data: loginData,
                success: function(res){
                    console.log(res);
                    localStorage.setItem("userDetails", JSON.stringify(res))
                    if (res.code === 404) {
                        $('#none').show()
                    }else{
                        alert('login Successful!!')
                         window.location.href = "profile_page.html"
                    }
                },
                error: function(err){
                    console.log(err)
                }
            })
        }
    });
});
