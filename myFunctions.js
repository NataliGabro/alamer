
    $('.collapse').collapse()
   

      $(document).ready(function() {
        $("#btnsub").click(function() {
            var username = $("#name").val();
            var ID = $("#ID").val();
            var date = $("#date").val();
            var phone = $("#phone").val();
            var email = $("#email").val();
            var captcha = $("#txtCaptcha").val();
            var refrlpl = $("#refrlpl").text();
			var radiof =$('input[name="radio"]:checked').val();
		
		
            $(".worong").removeClass("worong");
    
			if (!radiof ) {
                alert("يرجى اختيار الشقة \n");
                return false;
            }
    
	
            if (username == "") {
                $("#name").addClass("worong");
                alert("يرجى ملء جميع الحقول الإلزامية");
                return false;
            }
    
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email) && email != "") {
                $("#email").addClass("worong");
                alert("يرجى إدخال عنوان بريد إلكتروني صالح");
                return false;
            }
    
           if (ID.length != 11) {
		alert('يجب أن يكون الرقم الوطني 11 رقم');
		return false;
		}
    
            var phonePattern = /((0)(93|94|95|96|98|99)([0-9]{7}))|((0)(92|95|96|97)([0-9]{7}))/;
            if (!phonePattern.test(phone) && phone != "") {
                $("#phone").addClass("worong");
                alert("يرجى إدخال رقم هاتف صالح مع رمز البلد (مثال: 0932888888)");
                return false;
            }
 
            if (captcha == "") {
                $("#txtCaptcha").addClass("worong");
                alert("يرجى إدخال رمز التحقق من الكابتشا");
                return false;
            }
    
            if (captcha != refrlpl) {
                alert("رمز التحقق من الكابتشا غير صحيح" + refrlpl + '\n' + captcha);
                $("#txtCaptcha").addClass("worong");
                return false;
            }
    
	

		alert(	"لقد تم حجز شقة بنجاح" + "\n" +
				radiof + "\n" +
				"الاسم: " + username + "\n" 
		
			);
        });
    });
	
	
	
	function Captcha(){
     var alpha = new Array(
'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','A','B','M','E','Q');
     var i;
     for (i=0;i<6;i++){
         var a = alpha[Math.floor(Math.random() * alpha.length)];
         var b = alpha[Math.floor(Math.random() * alpha.length)];
         var c = alpha[Math.floor(Math.random() * alpha.length)];
         var d = alpha[Math.floor(Math.random() * alpha.length)];
         var e = alpha[Math.floor(Math.random() * alpha.length)];
         var f = alpha[Math.floor(Math.random() * alpha.length)];
         var g = alpha[Math.floor(Math.random() * alpha.length)];
                      }
         var code = a + '' + b + '' + '' + c + '' + d + '' + e + ''+ f + '' + g;
         document.getElementById("refrlpl").innerHTML = code
		 document.getElementById("refrlpl").value = code
       }
function ValidCaptcha(){
     var string1 = removeSpaces(document.getElementById('refrlpl').value);
     var string2 =         removeSpaces(document.getElementById('txtCaptcha').value);
     if (string1 == string2){
            return true;
     }else{        
          return false;
          }
}
function removeSpaces(string){
     return string.split(' ').join('');
}


