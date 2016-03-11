 var scene = document.getElementById('scene');
 var parallax = new Parallax(scene);

$(document).ready(function() {
    
//    $(".input-group-addon").click(function() {
//        $('#datetimepicker1').datetimepicker();
//    });
    
        $("#wholeform").validate({
            rules: {
                name: "required",
                email: "required",
                username: "required",
                password: {
                    required: true,
                    param: 8,
                }
            },
            messages: {
                name: "Please specify your name",
                email: "Please enter your email",
                username: "Please enter your username",
                password: "Your password must be 8 characters long"
            }
       });
//    });
    
   
//    
//    $(function () {
//	$('#datetimepicker1').datetimepicker();
//    });

});
