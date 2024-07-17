$(document).ready(function(){
    $('#regForm').on('submit', function(event){
        event.preventDefault();
    
        $('#register-firstname').removeClass('error');
        $('#firstnameError').hide();
        $('#register-lastname').removeClass('error');
        $('#lastnameError').hide();
        $('#register-email').removeClass('error');
        $('#emailError').hide();
        $('#register-password').removeClass('error');
        $('#passwordError').hide();
        $('#register-confirmpassword').removeClass('error');
        $('#confirmpasswordError').hide();
        $('#lengthError').hide();
    
        let pw2 = $('#register-confirmpassword').val();
        
        let valid = true;
    
        let formData = {
            firstname: $('#register-firstname').val(),
            lastname: $('#register-lastname').val(),
            email: $('#register-email').val(),
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
            alert('Registration Successful!!');
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
            alert('Login Successful!!');
            window.location.href = "index.html"
        }
    });
});
