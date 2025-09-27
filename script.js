const form = document.getElementById('messageForm');
const outputBox = document.getElementById('outputBox');

form.addEventListener('submit', function(e) {
e.preventDefault();
const name = document.getElementById('name').value;
const dob = document.getElementById('dob').value;
const gender = document.querySelector('input[name="gender"]:checked')?.value || "-";
const message = document.getElementById('message').value;

const now = new Date();

outputBox.innerHTML = `
    <p><strong>Current Time:</strong> ${now}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${dob}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
`;
});
