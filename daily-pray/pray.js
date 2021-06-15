AOS.init();
$(document).ready(function() {
    $.ajax({
        url: "https://islamic-api-indonesia.herokuapp.com/api/data/json/doaharian",
        type: "get",
        success: function(response) {
            $("#loadingText").fadeOut();
            for (var x = 0; x < 34; x++) {
                var original = '<div class="glass col-sm-12 col-md-5 pb-4 mb-4" data-aos="fade-up" data-aos-delay="200">';
                var gutter = '<div class="glass col-sm-12 col-md-5 offset-md-2 mb-4 pb-4" data-aos="fade-up" data-aos-delay="200">';
                var content = '<h3 class=" text-center display-5 mt-4 mb-4" id="prayTitle">'+response.result.data[x].title+'</h3><div> <span class="lead" style="font-weight: bold;">Arab : </span><span class="lead" style="font-weight: bold;">'+response.result.data[x].arabic+'</span></div><div> <span class="lead" style="font-weight: bold;">Latin : </span><span class="lead">'+response.result.data[x].latin+'</span></div><div> <span class="lead" style="font-weight: bold;">Latin : </span><span class="lead">'+response.result.data[x].translation+'</span></div></div>';
                if(x%2==0){
                    content = original + content;
                }
                else{
                    content = gutter + content;
                }
                $("#mainFramePray").append(content);
            }
            
        },
        error: function(response) {
            alert("Maaf Terjadi Kesalahan!");
        }
    })
});