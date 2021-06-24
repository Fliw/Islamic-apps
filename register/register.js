AOS.init();

$( "#submit" ).click(function(){
    let user = $("#username").val();
    let pass = $("#password").val();
    let verifpass = $("#password2").val();
    let remember_me = $("#gridCheck").val();
    if(verifpass != pass){
        alert("Password anda tidak sesuai");
    }
    else{
        if(remember_me){
            localStorage.setItem("remember", true);
        }
        swal("Berhasil!", "Selamat, akun anda telah terdaftar, silahkan login!", "success");
    
        localStorage.setItem("user", user);
        localStorage.setItem("pass", pass);
    }
    
    
});
