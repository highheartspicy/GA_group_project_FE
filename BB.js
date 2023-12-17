function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "benjiotueyo@gmail.com",
        Password : "password",
        To : 'benjaminotuefiwatt@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
               + "<br> Email: " +  document.getElementById("email").value
               + "<br> Phone no: " +  document.getElementById("phone").value
               + "<br> Message: " +  document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}
// to use this successfully , you have to create a profile on 'elastic email.com'