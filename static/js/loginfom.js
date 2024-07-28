console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            signupBtn.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});

signupBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            loginBtn.parentNode.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});

$(document).ready(function () {

    $('#signup-form').submit(function (event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Get the form data
        var formData = {
            'si_username': $('input[name="si-username"]').val(),
            'si_email': $('input[name="si-email"]').val(),
            'si_password': $('input[name="si-password"]').val()
        };

        // Send the AJAX request
        $.ajax({
            type: 'POST',
            url: '/signup',
            data: formData,
            dataType: 'json',
            encode: true
        })
            .done(function (data) {
                if (data.status === 'success') {
                    window.location.replace('/login');
                } else {
                    alert('No you!!!');
                }

            });
    });

    const usernameInput = $('#si-username');
    const usernameError = $('#username-error');
    const disBtn = $('#sig');

    usernameInput.on('input', async () => {
        const username = usernameInput.val().trim();
        if (username == null) {
            usernameError.html('Username is required');
        } else {
            const response = await fetch(`/check-on-username/${username}`);
            const data = await response.json();
            if (data.exists) {
                // alert('God 1')
                // usernameError.html('Already exists');
                usernameError.addClass('error-translateY')
                $('#sig').prop("disabled", true);
            } else {
                usernameError.removeClass('error-translateY')
                $('#sig').prop("disabled", false);
                // usernameError.html('');
            }
        }
    });


    // Function to set the session cookie
    function setSessionCookie(cookieName, cookieValue, expirationDays) {
        var d = new Date();
        d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    }


    $('#login-from').submit(function (event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Get the form data
        var formData = {
            'username': $('input[name="username"]').val(),
            'password': $('input[name="password"]').val()
        };
        // Send the AJAX request
        $.ajax({
            type: 'POST',
            url: '/login',
            data: formData,
            dataType: 'json',
            encode: true
        })
            .done(function (data) {
                if (data.status === 'success') {
                    window.location.replace('/index');
                } else {
                    alert('No you!!!');
                }

            });
        now_username = $('input[name="username"]').val()
        setSessionCookie('username', now_username, 1)
    });
});
