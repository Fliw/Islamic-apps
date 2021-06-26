AOS.init();
$(document).ready(function () {
    $.ajax({
        url: "https://islamic-api-indonesia.herokuapp.com/api/data/json/niatshalat",
        type: "get",
        success: function (response) {
            console.log(response);
            $("#loadingText").fadeOut();
            for (var x = 0; x < 5; x++) {
                var original = '<div class="glass col-sm-12 col-md-5 pb-4 mb-4" data-aos="fade-up " data-aos-delay="200">';
                var gutter = '<div class="glass col-sm-12 col-md-5 offset-md-2 mb-4 pb-4" data-aos="fade-up " data-aos-delay="200">';
                var content = '<h3 class=" text-center display-5 mt-2 mb-2" id="prayTitle">' + response.result[x].name + '</h3><div><br> <span class="lead" style="font-weight: bold;">Arab : </span><span class="lead" style="font-weight: bold;">' + response.result[x].arabic + '</span></div><div> <span class="lead" style="font-weight: bold;">Latin : </span><span class="lead">' + response.result[x].latin + '</span></div><div> <span class="lead" style="font-weight: bold;">Terjemahan : </span><span class="lead">' + response.result[x].terjemahan + '</span></div></div>';
                if (x % 2 == 0) {
                    content = original + content;
                }
                else {
                    content = gutter + content;
                }
                console.log($("#mainFrameNiat"));
                $("#mainFrameNiat").append(content);
            }
        },
        error: function (response) {
            alert("Maaf Terjadi Kesalahan!");
        }
    })
})