var param = location.search.substring(1);
var splitter = param.split("|");
var hadithId = splitter[0];
var page = parseInt(splitter[1]);
$(document).ready(function() {
    if (page == 20) {
        $('#btnPrev').addClass("disabled")
    }
    $.ajax({
        url: "https://api.hadith.sutanlab.id/books/" + hadithId + "?range=" + (page - 19) + "-" + page,
        type: "get",
        success: function(response) {
            $("#mainFrameHadith").fadeIn();
            $("#loadingText").fadeOut();
            for (var x = 0; x < 19; x++) {
                var content = '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">' + response.data.hadiths[0].arab + '</h5></div><p class="mb-1">' + response.data.hadiths[x].id + '</p></a><br><br>';
                $("#mainContent").append(content);
            }
            $("#hadithTitle").html("Hadist Riwayat " + response.data.name);
            page += 20;
        },
        error: function(response) {
            alert("Maaf Terjadi Kesalahan!");
        }
    })
});

$("#btnNext").click(function() {
    window.history.replaceState(null, null, "?" + hadithId + "|" + page);
    location.reload();
});
$("#btnPrev").click(function() {
    if (!$("#btnPrev").hasClass('disabled')) {
        page -= 40;
        console.log(page);
        window.history.replaceState(null, null, "?" + hadithId + "|" + page);
        location.reload();
    }
});