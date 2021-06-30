var ustadz = location.search.substring(1);
ustadz = parsing(ustadz);
var kategori = check_ustad(ustadz);
AOS.init();
if (localStorage.getItem("ceramah") != null) {
    let response = JSON.parse(localStorage.getItem("ceramah"));
    $("#loadingText").fadeOut();
    for (var x = 0; x < 99; x++) {
        $("#mainFrameHadith").fadeIn(1000);
        $("#loadingText").fadeOut(1000);
        if (kategori == "ustadz") {
<<<<<<< HEAD
            if(error_data_syekh(response)){
                ambil_data();
            }else{
                if(error_data_ustad(response)){
                    if(check_valid(ustadz, parsing_nama_penceramah(response.ustad.nama))){
                        $("#Ceramah").html(response.ustad.ceramah);
                        $("#TitleUstad").html("Ceramah " + response.ustad.nama);
                    }else{
                        ambil_data();
                    }
                }
            }
        }
        else {
            if(error_data_syekh(response)){
                $("#Ceramah").html(response.syekh.ceramah);
                $("#TitleUstad").html("Ceramah " + response.syekh.nama);
            }else{
                ambil_data();
            }
        }
    }
}
else {
    ambil_data();
}

function error_data_ustad(response){
    let temp = false
    try{
        let a = response.ustad.nama;
        temp = true;
    }catch(err){
        temp = false;
    }
    return true;
}

function error_data_syekh(response){
    let temp = false;
    try{
        let a = response.syekh.nama;
        temp = true;
    }catch(err){
        temp = false;
    }
    return temp;
}

function parsing_nama_penceramah(nama_penceramah){
    let temp = "";
    let flag = 0;
    for(var i = 0; i < nama_penceramah.length;i++){
        if((nama_penceramah[i] == " ") && (flag == 0)){
            flag = 1;
        }
        if(flag == 1){
            if(nama_penceramah[i] == " "){
                temp += "_";
                continue;
            }
            temp += nama_penceramah[i];
        }
    }
    console.log(temp);
    return parsing(temp);
=======
            $("#Ceramah").html(response.ustad.ceramah);
            $("#TitleUstad").html("Ceramah " + response.ustad.nama);
        }
        else {
            $("#Ceramah").html(response.syekh.ceramah);
            $("#TitleUstad").html("Ceramah " + response.syekh.nama);
        }
        page += 20;
        console.log(ustadz);
    }
}
else {
    $(document).ready(function () {
        $.ajax({

            url: "https://ceramah-api-zhirrr.vercel.app/api/" + kategori + "/search?q=" + ustadz,
            type: "get",
            success: function (response) {
                localStorage.setItem("ceramah", JSON.stringify(response));
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
    })
>>>>>>> 35741ae6ebdb2b4322224801dd77fcf8a482419c
}

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
    for (var i = 0; i < nama_ustad.length; i++) {
        if (nama_ustad[i] == "_") {
            temp += "%20";
            continue;
        }
        temp += nama_ustad[i];
    }
    return temp;
}

function check_valid(nama_ustad, target_perbandingan){
    let temp = false;
    if(nama_ustad == target_perbandingan){
        temp = true;
    }
    return temp;
}

function ambil_data(){
    $(document).ready(function () {
        $.ajax({

            url: "https://ceramah-api-zhirrr.vercel.app/api/" + kategori + "/search?q=" + ustadz,
            type: "get",
            success: function (response) {
                localStorage.setItem("ceramah", JSON.stringify(response));
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
            },
            error: function (response) {
                alert("Maaf Terjadi Kesalahan!");
            }
        })
    })
}