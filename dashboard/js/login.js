$(document).ready(function(){
    const endPoint = "http://ecommerce.reworkstaging.name.ng/v2"
    $('#login').on('submit', function(e){
        e.preventDefault()

        $('#incorrectDetail').hide()

        const email = $('#email').val()
        const password = $('#password').val()

        let valid = true;
        
        if (email.trim() === "") {
            valid = false
            $('#emailError_for_login').show()
        }else if (password.trim() === "") {
            valid =false
            $('#passwordError_for_login').show()
            $('#emailError_for_login').hide()
        } else{
            valid
            let loginData = {
                email: $('#email').val(),
                password: $('#password').val(),
            };
            $.ajax({
                url: `${endPoint}/merchants/login`,
                method: 'POST',
                data: loginData,
                success: function(res){
                    console.log(res);
                    localStorage.setItem("loginDetails", JSON.stringify(res))
                    if (res.code === 404) {
                        $('#incorrectDetail').show()
                    }else{
                        alert('login')
                        window.location.href = "index.html"
                    }
                },
                error: function(err){
                    console.log(err)
                }
            })
        }
    })
})