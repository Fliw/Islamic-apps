AOS.init();

$("#submit").click(function () {
    let user = $("#username").val();
    let pass = $("#password").val();
    let verifpass = $("#password2").val();
    if (user == '') {
        return swal("Gagal!", "Tolong isi username!", "error");
    }
    if (user.length < 6) {
        return swal("Gagal!", "Panjang username minimal 6 karakter!", "error");
    }
    if (pass == '' || verifpass == '') {
        return swal("Gagal!", "Tolong isi password!", "error");
    }
    if (pass.length < 6 || verifpass.length < 6) {
        return swal("Gagal!", "Panjang Password minimal 6 karakter!", "error");
    }
    if (verifpass != pass) {
        return swal("Gagal!", "Password tidak sesuai!", "error");
    }
    else {
        pass = btoa(pass);
        swal("Berhasil!", "Selamat, akun anda telah terdaftar, silahkan login!", "success");
        localStorage.setItem("user", user);
        localStorage.setItem("pass", pass);
    }
});
