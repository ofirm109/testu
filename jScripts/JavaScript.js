var myvalidation = [false, false, false, false];

$(document).ready(function () {
    //fname
    $("#exampleInputFname").on('input', function () {
        var fname = $("#exampleInputFname").val();
        var fnameCount = fname.length;
        if ((/^[a-zA-Z]*$/.test(fname)) && fnameCount > 2) {
            $("#fnameHelp").text("");
            myvalidation[0] = true;
        } else {
            $("#fnameHelp").text("You have entered an invalid first name address");
            myvalidation[0] = false;
        }
    });
    //lname
    $("#exampleInputLname").on('input', function () {
        var lname = $("#exampleInputLname").val();
        var lnameCount = lname.length;

        if ((/^[a-zA-Z]*$/.test(lname)) && lnameCount > 2) {
            $("#lnameHelp").text("");
            myvalidation[1] = true;
        } else {
            $("#lnameHelp").text("You have entered an invalid last name address");
            myvalidation[1] = false;
        }
    });
    //email
    $("#exampleInputEmail1").on('input', function () {
        var mail = $("#exampleInputEmail1").val();
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            $("#emailHelp").text("");
            myvalidation[2] = true;
        } else {
            $("#emailHelp").text("You have entered an invalid email address");
            myvalidation[2] = false;
        }
    });
    //phone Number
    $("#phone").on('input', function () {
        var phone = $("#phone").val();
        var phoneno = /^\d{10}$/;
        if (phone.match(phoneno)) {
            $("#cellHelp").text("");
            myvalidation[3] = true;
        } else {
            if (phone != "") {
                $("#cellHelp").text("You have entered an invalid phone number address");
                myvalidation[3] = false;
            }
        }
    });
    //submit
    $("#result").click(function () {
        var myresult = true;
        for (i = 0; i < 4; i++) {
            if (myvalidation[i] == false) {
                myresult = false;
            }
        }

        if (myresult == false) {
            $("#relHelp").text("Please correctly fill in all the fields in the form.");
        } else {
            //ajax
            $.post("https://hooks.zapier.com/hooks/catch/5292946/ocfixxv/",
                {
                    fname: $("#exampleInputFname").val(),
                    lname: $("#exampleInputLname").val(),
                    email: $("#exampleInputEmail1").val(),
                    phone: $("#phone").val(),
                    source: "utm_source"
                },
                function (data, status) {
                    //alert("Data: " + data + "\nStatus: " + status);
                    if (status == "success") {
                        window.open('finish.htm');
                    } else {
                        $("#relHelp").text("There is a problem connecting to the server.");
                    }
                });
        }

    });
});





