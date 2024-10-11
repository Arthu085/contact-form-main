function selectOption(type) {
    document.querySelector('.general-enquiry').classList.remove('active');
    document.querySelector('.support-request').classList.remove('active');  

    if (type === 'general') {
        document.querySelector('.general-enquiry').classList.add('active');
        document.getElementById('general').checked = true;
    } else {
        document.querySelector('.support-request').classList.add('active');
        document.getElementById('support').checked = true;
    }
    
}

function handleSubmit(event) {
    event.preventDefault();
   
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    
    document.querySelector("form").reset();

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}

