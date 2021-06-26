var ustadz = location.search.substring(1);
ustadz = parsing(ustadz);
var kategori = check_ustad(ustadz);
AOS.init();
$(document).ready(function () {
    $.ajax({
        url: "https://ceramah-api-zhirrr.vercel.app/api/" + kategori + "/search?q=" + ustadz,
        type: "get",
        success: function (response) {
            $("#mainFrameHadith").fadeIn(1000);
            $("#loadingText").fadeOut(1000);
            if (kategori == "ustadz") {
                $("#Ceramah").html(response.ustad.ceramah);
                $("#TitleUstad").html("Ceramah " + response.ustad.nama);
            }
            else {
                $("#Ceramah").html(response.syekh.ceramah);
                $("#TitleUstad").html("Ceramah " + response.syekh.nama);
            }
            page += 20;
            console.log(ustadz);
        },
        error: function (response) {
            alert("Maaf Terjadi Kesalahan!");
        }
    })
});

function check_ustad(nama_ustad) {
    let temp = "ustadz";
    if (nama_ustad == "ali%20jaber") {
        temp = "syekh";
        console.log(nama_ustad);
    }
    return temp
}
function parsing(nama_ustad) {
    let temp = "";
    for (var i = 0; i < ustadz.length; i++) {
        if (ustadz[i] == "_") {
            temp += "%20";
            continue;
        }
        temp += ustadz[i];
    }
    return temp;
}