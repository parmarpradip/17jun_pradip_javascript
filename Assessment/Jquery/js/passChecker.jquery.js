$(document).ready(function() {
    $('#password').keyup(function() {
        checkPasswordStrength($(this).val());
    });

    function checkPasswordStrength(password) {
        var strength = 0;

        // Check for length
    if (password.length >= 8) {
        strength += 1;
    }

        // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

        // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

        // Check for numbers
    if (/\d/.test(password)) {
        strength += 1;
    }

        // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        strength += 1;
    }

        // Update the UI based on the strength
    if (strength <= 1) {
        $('#password-strength').html('Weak');
        $('#password-strength').css('color', 'red');
    } else if (strength == 2) {
        $('#password-strength').html('Moderate');
        $('#password-strength').css('color', 'orange');
    } else {
        $('#password-strength').html('Strong');
        $('#password-strength').css('color', 'green');
    }
      }
    });
