let username = document.querySelector('#username');

let email = document.querySelector('#email');

  $('.submit').on('click',function(e){
    e.preventDefault();
      if(username.value === ""|| email.value ===""){
        alert("please full data");
      }
    });


     /* vaildation*/
     $(document).ready(function(){
        $('.user-name').blur(function(){
            if($(this).val().length <4){
      
              $(this).parent().find('.custom-alert').fadeIn(300);
      
            }else{
              $(this).css('border','1px solid #080');
              
              $(this).parent().find('.form-astric').fadeOut(150);
      
              $(this).parent().find('.custom-alert').fadeOut(300);
            }
          });
          $('.email').blur(function(){
      
            if($(this).val().length <1){
      
              $(this).parent().find('.custom-alert').fadeIn(300);
      
            }else{
              $(this).css('border','1px solid #080');
      
              $(this).parent().find('.form-astric').fadeOut(150);
      
              $(this).parent().find('.custom-alert').fadeOut(300);
            }
          });
          $('.message').blur(function(){
      
            if($(this).val().length <10){
      
              $(this).parent().find('.custom-alert').fadeIn(300);
      
            }else{
              $(this).css('border','1px solid #080');
      
              $(this).parent().find('.form-astric').fadeOut(150);
      
              $(this).parent().find('.custom-alert').fadeOut(300);
            }
          });
     });
    
    
  
