AOS.init();
$(window).on("load", function () {
    let remember_me = false;
    if (typeof localStorage.getItem("remember_me") !== "undefined") {
        remember_me = localStorage.getItem("remember_me");
        if (remember_me == 'true') {
            $("#gridCheck").prop("checked", true);
            $("#username").val(localStorage.getItem("user"));
        }
    }
});

function checkLogin() {
    let user = $("#username").val();
    let pass = $("#password").val();
    let remember_me = $("#gridCheck").prop("checked");
    if (user == '') {
        return swal("Gagal!", "Tolong isi username!", "error");
    }
    if (user.length < 6) {
        return swal("Gagal!", "Panjang username minimal 6 karakter!", "error");
    }
    if (pass == '') {
        return swal("Gagal!", "Tolong isi Password!", "error");
    }
    if (pass.length < 6) {
        return swal("Gagal!", "Panjang Password minimal 6 karakter!", "error");
    }
    else {
        let realUser = localStorage.getItem("user");
        let realPass = localStorage.getItem("pass");
        if (realUser == user) {
            pass = btoa(pass)
            if (realPass == pass) {
                swal("Berhasil!", "Berhasil Login, selamat datang kembali " + user + "!", "success");
                localStorage.setItem("logged_in", true);
                localStorage.setItem("remember_me", remember_me);
                setTimeout(function () {
                    window.location = "../index.html";
                }, 1500);
            }
            else {
                return swal("Gagal!", "Username / password salah!", "error");
            }
        }
        else {
            return swal("Gagal!", "Username Tidak Ditemukan!", "error");
        }
    }
}