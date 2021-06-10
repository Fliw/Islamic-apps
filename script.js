$('[data-target="#hadithModal"]').on('click',
    function e() {
        $.ajax({
            url: "https://api.hadith.sutanlab.id/books/",
            type: "get",
            success: function(response) {
                for (var x = 0; x < 9; x++) {
                    var button = '<button class="btn btn-lg bg-success text-white" id="btnHadith' + response.data[x].id + '">' + response.data[x].name + ' Dengan Jumlah hadist ' + response.data[x].available + '</button><br><br>';
                    $(".hadithModalBody").append(button);
                }
            },
            error: function(response) {
                $("#loadingText").html("Maaf Terjadi Kesalahan!");
            }
        })
    });
$('[data-dismiss="modal"]').on('click',
    function e() {
        console.log("kehapus");
        $(".hadithModalBody").empty();
    });

var options = {
    strings: ['ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ', 'Hai Sahabat Mantap Mantap'],
    loop: true,
    showCursor: false,
    backSpeed: 20,
    typeSpeed: 20,
    startDelay: 200
};
var typed = new Typed('#typed', options);