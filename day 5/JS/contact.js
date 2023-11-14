function submitData() {
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const phoneNumber = document.getElementById('inputphone').value;
    const subject = document.getElementById('inputSubject').value;
    const message = document.getElementById('message').value;

    if (name === "") {
        alert('Nama harus diisi');
    } else if (email === "") {
        alert('Email harus diisi');
    } else if (phoneNumber === "") {
        alert('Phone number harus diisi');
    } else if (subject === "") {
        alert('Subject harus diisi');
    } else if (message === "") {
        alert('Message harus diisi');
    } else {
        
        console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`);

         const mailtoURL = `mailto:rizkimuhamad953@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

         window.location.href = mailtoURL;
    }

}