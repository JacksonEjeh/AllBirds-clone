
const endPoint = "http://ecommerce.reworkstaging.name.ng/v2";
$(document).ready(function() {

     // Handle logout button click
  $('#logout-button').click(function() {
    logoutUser();
  });

  // Logout function
  function logoutUser() {
    localStorage.removeItem('userDetails');
    window.location.href = "login.html";
  }
    // Retrieve userId from localStorage
    let userDetails = JSON.parse(localStorage.getItem('userDetails'));

    let user_id = userDetails.id
    let firstName = userDetails.first_name
    let lastName = userDetails.last_name
    let email = userDetails.email
    let phone = userDetails.phone

    // Function to update profile card
    function updateProfileCard(data) {
        $('.profile-header h2').text(`Welcome ${data.first_name} ${data.last_name}`);
        $('#firstName').val(firstName)
        $('#lastName').val(lastName)
        $('#email').val(email)
        $('#phone').val(phone)
        $('.profile-content p:nth-child(1)').html(`<strong>First Name:</strong> ${data.first_name}`);
        $('.profile-content p:nth-child(2)').html(`<strong>Last Name:</strong> ${data.last_name}`);
        $('.profile-content p:nth-child(3)').html(`<strong>Email:</strong> ${data.email}`);
        $('.profile-content p:nth-child(4)').html(`<strong>Phone:</strong> ${data.phone}`);
    }
    // updateProfileCard()

    // Get user details from local storage
    userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
        updateProfileCard(userDetails);
        $('#firstName').val(userDetails.first_name);
        $('#lastName').val(userDetails.last_name);
        $('#email').val(userDetails.email);
        $('#phone').val(userDetails.phone);
    }

    // Get modal elements
    var $editProfileModal = $('#editProfileModal');
    var $changePasswordModal = $('#changePasswordModal');

    // Get open modal buttons
    var $editProfileBtn = $('#editProfileBtn');
    var $changePasswordBtn = $('#changePasswordBtn');

    // Get close buttons
    var $closeBtns = $('.close');

    // Listen for open clicks
    $editProfileBtn.on('click', function() {
        // Populate modal with current user details
        let userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetails) {
            $('#firstName').val(userDetails.first_name);
            $('#lastName').val(userDetails.last_name);
            $('#email').val(userDetails.email);
            $('#phone').val(userDetails.phone);
        }
        $editProfileModal.show();
    });

    $changePasswordBtn.on('click', function() {
        $changePasswordModal.show();
    });

    // Listen for close clicks
    $closeBtns.on('click', function() {
        $editProfileModal.hide();
        $changePasswordModal.hide();
    });

    // Close modal if outside click
    $(window).on('click', function(e) {
        if ($(e.target).is($editProfileModal) || $(e.target).is($changePasswordModal)) {
            $editProfileModal.hide();
            $changePasswordModal.hide();
        }
    });

    // Handle Edit Profile form submission
    $('#editProfileForm').on('submit', function(event) {
        event.preventDefault();
        var formData = $(this).serializeArray();
        

        var updatedData = {
            first_name: formData.find(input => input.name === 'firstName').value,
            last_name: formData.find(input => input.name === 'lastName').value,
            email: formData.find(input => input.name === 'email').value,
            phone: formData.find(input => input.name === 'phone').value,
        };

        // Update local storage
        localStorage.setItem('userDetails', JSON.stringify(updatedData));

        // Update the profile card with new data
        updateProfileCard(updatedData);
        $editProfileModal.hide();

            $.ajax({
                url: `${endPoint}/users/${user_id}`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(updatedData),
                success: function(data) {
                    localStorage.setItem("userDetails", JSON.stringify(data))
                    console.log('Profile updated successfully:', data);
                },
                error: function(xhr, status, error) {
                    console.error('Error updating profile:', xhr.responseText);
                }
            });
    });

    // Handle Change Password form submission
    $('#changePasswordForm').on('submit', function(event) {
        event.preventDefault();
        var formData = $(this).serializeArray();

        var passwordData = {
            old_password: formData.find(input => input.name === 'oldPassword').value,
            new_password: formData.find(input => input.name === 'newPassword').value
        };

            $.ajax({
                url: `${endPoint}/users/${user_id}/change-passwd`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(passwordData),
                success: function(data) {
                    alert('Password changed successfully');
                    $changePasswordModal.hide();
                },
                error: function(xhr, status, error) {
                    console.error('Error changing password:', xhr.responseText);
                }
            });
    });
});
