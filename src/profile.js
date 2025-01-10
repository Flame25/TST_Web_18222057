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
    const api_key = document.getElementById("api-key")
    api_key.textContent = token;
}
