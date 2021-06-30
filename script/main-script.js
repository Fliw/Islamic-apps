function checkIntegrity() {
    if ('serviceWorker' in navigator) {
        let registration;
        const registerServiceWorker = async () => {
            registration = await navigator.serviceWorker.register('../script/sw.js');
        };
        registerServiceWorker();
    }
    let logged_in = false;
    if (typeof localStorage.getItem("logged_in") !== "undefined") {
        logged_in = localStorage.getItem("logged_in");
        if (logged_in == "false") {
            window.location = "./auth/index.html";
        }
        else if (logged_in == 'true') {
            return;
        }
        else {
            window.location = "./auth/index.html";
        }
    }

}
if (!window.navigator.onLine) {
    if (localStorage.getItem("listHadith") != null) {
        let response = localStorage.getItem("listHadith");
        for (var x = 0; x < 9; x++) {
            var button =
                '<a href="./hadith-layout/index.html?' +
                response.data[x].id +
                '|20"<button class="btn btn-lg text-white" style="background-color:#00adb5;">' +
                response.data[x].name +
                " Dengan Jumlah hadist " +
                response.data[x].available +
                "</button></a><br><br>";
            $(".hadithModalBody").append(button);
        }
    }
    else{
        alert("anda sepertinya offline :(");
    }
}
else {
    $('[data-target="#hadithModal"]').on("click", function e() {
        $.ajax({
            url: "https://api.hadith.sutanlab.id/books/",
            type: "get",
            success: function (response) {
                localStorage.setItem("listHadith", JSON.stringify(response));
                for (var x = 0; x < 9; x++) {
                    var button =
                        '<a href="./hadith-layout/index.html?' +
                        response.data[x].id +
                        '|20"<button class="btn btn-lg text-white" style="background-color:#00adb5;">' +
                        response.data[x].name +
                        " Dengan Jumlah hadist " +
                        response.data[x].available +
                        "</button></a><br><br>";
                    $(".hadithModalBody").append(button);
                }
            },
            error: function (response) {
                $("#loadingText").html("Maaf Terjadi Kesalahan!");
            },
        });
    });
}
$('[data-dismiss="modal"]').on("click", function e() {
    console.log("kehapus");
    $(".hadithModalBody").empty();
});
AOS.init();
var typed = new Typed("#typed", {
    strings: [
        "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ",
        "Hai Akhi!",
        "Selamat Datang di Aplikasi islami",
    ],
    typeSpeed: 50,
    backSpeed: 20,
    showCursor: false,
    loop: true,
});
$("#prayBtn").click(function () {
    window.location = "./daily-pray/index.html";
});

$("#CeramahBtn").click(function () {
    window.location = "./extra/index.html";
});

$("#AsmaulBtn").click(function () {
    window.location = "./asmaul-husna/index.html";
});

$("#NiatBtn").click(function () {
    window.location = "./niat-sholat/index.html";
});
