 $(function(){
   var oWindowWidth= $(window).width();
   var oWindowHeight= $(window).height();     
  $(".login_img_bg").width(oWindowWidth);
  $(".login_img_bg").height(oWindowHeight);
  $(window).resize(function(){
   autoMiddle();
  })
  function autoMiddle(){
       oWindowWidth= $(window).width();
       oWindowHeight= $(window).height();     
      $(".login_img_bg").width(oWindowWidth);
      $(".login_img_bg").height(oWindowHeight);
  }

  show_msg.timer = null;
  function show_msg(msg, timeOut) {
    var c = $("#msg_dis_container");
    timeOut = timeOut || 1000;
    if(c.length==0){
      $(document.body).append('<div class="motify" style="display:none" id="msg_dis_container"><div class="motify-inner" id="msg_dis_content"></div></div>');
      c = $("#msg_dis_container");
    }
    $("#msg_dis_content").html(msg);
    c.css("display","block");
    clearTimeout(show_msg.timer);
    show_msg.timer = setTimeout(function(){
      c.css("display","none");
    },timeOut);
  }

    var code;
    function createCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = $(".login_vcode");
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index]; 
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.text(code)
    }

    createCode();

   $(".login_vcode").click(function(){
      createCode();
  })

          
   var userName = localStorage.setItem("userName","lilidong");  
   var passWord = localStorage.setItem("passWord","lilidong.cn");  

    var rember = localStorage.getItem("rember")

    if(rember){
       $(".login_check").addClass("active"); 
    }

  $(".login_check").click(function(){
    $this=$(this);
    if($this.hasClass("active")){
      $this.removeClass("active");
      localStorage.removeItem("rember");  
    }else{
      $this.addClass("active")
      localStorage.setItem("rember",true);  
    }
  })

   
    function isRember() {
        if (!rember) {
            $("#user").val('');
            $("#pwd").val('');
        }else{
            $("#user").val(localStorage.getItem("userName"));
            $("#pwd").val(localStorage.getItem("passWord"));
        }
    }

    isRember();


   var bLogining = false;
  $("#btn-submit").on("click", function(){

    if($("#user").val().length<1){
      show_msg("用户名不能为空");
      return ;
    }
    if($("#pwd").val().length<1){
      show_msg("密码不能为空");
      return ;
    }
      if($("#code").val().length<1){
      show_msg("验证码不能为空");
      return ;
    }


    if($("#user").val() !== localStorage.getItem("userName")){
      show_msg("用户名错误");
      return ;
    }
     if($("#pwd").val() !== localStorage.getItem("passWord")){
      show_msg("密码错误");
      return ;
    }
     if($("#code").val().toLowerCase() !== $(".login_vcode").text().toLowerCase()){
      show_msg("验证码错误");
       createCode();
      return ;
    }
    
    if (bLogining) {
      show_msg("正在登录，请稍等……");
      return;
    }

    bLogining = true;
    localStorage.setItem("isLogin",true); 
    window.location.href="index.html"

    
  
  });

   $("body").keydown(function(e) {
         if (e.keyCode == "13") {
             $('#btn-submit').click();
         }
     });

  (function(){
   var oWindowWidth= $(window).width();
   var oWindowHeight= $(window).height();     
  $(".login_img_bg").width(oWindowWidth);
  $(".login_img_bg").height(oWindowHeight);
  $(window).resize(function(){
   autoMiddle();
  })
  function autoMiddle(){
       oWindowWidth= $(window).width();
       oWindowHeight= $(window).height();     
      $(".login_img_bg").width(oWindowWidth);
      $(".login_img_bg").height(oWindowHeight);
  }
})()

})




