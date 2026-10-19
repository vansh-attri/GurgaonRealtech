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

// Pre-fill property name in the enquiry modal when 'Enquire Now' is clicked
document.addEventListener('click', function (e) {
    var enqBtn = e.target.closest ? e.target.closest('a.enq[data-project]') : null;
    if (enqBtn) {
        var pName = enqBtn.getAttribute('data-project');
        if (pName) {
            var propInput = document.getElementById('property_name');
            if (propInput) {
                propInput.value = pName;
            }
            var nameInputs = document.querySelectorAll('input[name="your-propertyName"]');
            for (var i = 0; i < nameInputs.length; i++) {
                nameInputs[i].value = pName;
            }
        }
    }
});

// Smart redirect for homepage search form
document.addEventListener('DOMContentLoaded', function () {
    var searchForm = document.querySelector('.adv-search-block form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var typeSelect = document.getElementById('property_type');
            var val = typeSelect ? typeSelect.value : '';
            if (val === 'Commercial') {
                window.location.href = 'commercial_properties.html';
            } else if (val === 'Residential') {
                window.location.href = 'residential_properties.html';
            } else if (val === 'Offices') {
                window.location.href = 'offices.html';
            } else {
                window.location.href = 'all_properties.html';
            }
        });
    }
});
