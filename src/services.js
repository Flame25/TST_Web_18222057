import Swal from "sweetalert2";

const token = localStorage.getItem("token");
if (!token) {
    Swal.fire({
        title: 'Error',
        text: "Login First!",
        icon: 'error',
    }).then(() => {
        // Optionally, redirect to login page
        window.location.href = '/login.html?#';
    });
}

else{
// Example AJAX calls for Filter and Predict APIs
document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('filterInput').value;
    fetch('https://textfilters.codebloop.my.id/api/filter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
	    'Authorization': `${token}`
        },
        body: JSON.stringify({ 'text': `${inputText}` })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('filterResponse').innerHTML = `<strong>Response:</strong> ${data.response}`;
        })
        .catch(error => {
            document.getElementById('filterResponse').innerHTML = `<strong>Error:</strong> ${error.message}`;
        });
});

document.getElementById('predictForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('predictInput').value;
    fetch('https://textfilters.codebloop.my.id/api/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
	    'Authorization': token
        },
        body: JSON.stringify({ 'text': inputText })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('predictResponse').innerHTML = `<strong>Class:</strong> ${data.class}`;
        })
        .catch(error => {
            document.getElementById('predictResponse').innerHTML = `<strong>Error:</strong> ${error.message}`;
        });
});


document.getElementById('llmForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('llmInput').value;
    fetch('https://textfilters.codebloop.my.id/api/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
	    'Authorization': token
        },
        body: JSON.stringify({ 'text': inputText })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('llmResponse').innerHTML = `<strong>Response:</strong> ${data.response}`;
        })
        .catch(error => {
            document.getElementById('llmResponse').innerHTML = `<strong>Error:</strong> ${error.message}`;
        });
});

}
