import Swal from 'sweetalert2';

async function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if (!username || !password) {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    try {
        const response = await fetch('https://textfilters.codebloop.my.id/auth/signup', {
            method: 'POST',
            headers: {
		'Content-Type': 'application/json',
            },
            body: JSON.stringify({'user_name': username, 'password': password}),
        });

        if (response.ok) {
            const data = await response.json();
	    console.log(data);

	    if(data.error) {
		Swal.fire({
		    title: 'Error!',
		    text: `${data.error}`,
		    icon: 'error',
		    confirmButtonText: 'Cool'
		})
	    }
	    else{
		Swal.fire({
		    title: 'Register Success',
		    text: 'Register Successful',
		    icon: 'success',
		});

		window.location.href = "login.html?#";
		
	    }
        } else {
            const error = await response.json();
            errorMessage.textContent = error.message || 'Register failed.';
        }
    } catch (error) {
	console.log(error);
        errorMessage.textContent = 'An error occurred. Please try again later.';
    }
}

const button = document.getElementById('reg-button');
button.onclick = function() {
  register();
};
