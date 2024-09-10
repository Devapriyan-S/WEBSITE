$(function()
{
    var $registerform = $("#form");
    if($registerform.length){
        $registerform.validate({
            rules:{
                username:{
                    required: true
                },
                email:{
                    required:true
                },
                password:{
                    required:true,
                    minlength: 7
                },
                cpassword:{
                 required : true,
                 equalTo: "#password"   
                },
                Licence:{
                    required:true
                }
            },
            messages:{
                username:{
                    required: '<br> Username is mandotary!'
                },
                email:{
                    required: '<br>Please enter the Email address'
                },
                password:{
                    required:'<br>Please Enter the Password'
                },
                cpassword:{
                    required:'<br>Password Mismatch'
                },
                Licence:{
                    required:'<br>Please upload your Driving Licence'
                }


            }
        });
    }
});


document.getElementById('form').addEventListener('Submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    // const pickupDate = document.getElementById('pickupDate').value;
    // const dropoffDate = document.getElementById('dropoffDate').value;

    if (carType && pickupLocation) {
        alert(`Registration Successful!\n\nUser Name: ${name}\nEmail : ${email}`);
    } else {
        alert('Please fill in all fields.');
    }
});

