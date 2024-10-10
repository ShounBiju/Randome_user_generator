async function getRandomeUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];  // Accessing 'results' instead of 'result'
        console.log(user);
        displayUser(user);
    } catch (error) {
        console.error("Error fetching random user:", error);
        alert("Failed to fetch user data. Please try again.");
    }
}

function displayUser(user) {
    const image = document.getElementById('user-image');
    const name = document.getElementById('user-name');
    const gender = document.getElementById('user-gender');
    const email = document.getElementById('user-email');
    const location = document.getElementById('user-location');
    const dob = document.getElementById('user-dob');
    const phone = document.getElementById('user-phone');
    const nationality = document.getElementById('user-nationality');
    
    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    gender.innerText = `Gender: ${user.gender}`;
    email.innerText = `Email: ${user.email}`;
    location.innerText = `Location: ${user.location.city}, ${user.location.country}`;
    dob.innerText = `DOB: ${user.dob.date}`;
    phone.innerText = `Phone: ${user.phone}`;
    nationality.innerText = `Nationality: ${user.nat}`;
    image.setAttribute('src', `${user.picture.large}`);
}
