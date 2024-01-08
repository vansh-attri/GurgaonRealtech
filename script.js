function sendemail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "bdcommerce09@gmail.com",
        Password: "7247E6A8582F935491EC67310B93F9CB4EA8",
        To: 'Adesh_1982@yahoo.co.in',
        From: 'bdcommerce09@gmail.com',
        Subject: "Message from Website",
        Body: "Name: " + document.getElementById("name").value
        + " <br> Email: " + document.getElementById('email').value
        + " <br> Phone No: " + document.getElementById('phone').value
        + " <br> Message: " + document.getElementById('message').value
    }).then(
        message => alert('Message Sent Successfully!')
    );
  }
function sendemail2() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "bdcommerce09@gmail.com",
        Password: "7247E6A8582F935491EC67310B93F9CB4EA8",
        To: 'Adesh_1982@yahoo.co.in',
        From: 'bdcommerce09@gmail.com',
        Subject: "Message from Website",
        Body: "Name: " + document.getElementById("name2").value
        + " <br> Email: " + document.getElementById('email2').value
        + " <br> Phone No: " + document.getElementById('phone2').value
        + " <br> Message: " + document.getElementById('message2').value
    }).then(
        message => alert('Message Sent Successfully!')
    );
  }
function sendemail1() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "bdcommerce09@gmail.com",
        Password: "7247E6A8582F935491EC67310B93F9CB4EA8",
        To: 'Adesh_1982@yahoo.co.in',
        From: 'bdcommerce09@gmail.com',
        Subject: "Message from Website",
        Body: "Name: " + document.getElementById("name1").value
        + " <br> Email: " + document.getElementById('email1').value
        + " <br> Phone No: " + document.getElementById('phone1').value
        + " <br> Property Name: " + document.getElementById('property_name').value
        + " <br> Message: " + document.getElementById('message1').value
    }).then(
        message => alert('Message Sent Successfully!')
    );
  }