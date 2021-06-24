const array_ustad = ["Ustadz Abdul Somad", "Ustadz Khalid Basalamah", "Ustadz Adi Hidayat", "Ustadz Felix Siauw", "Syekh Ali Jaber"]
const link_ceramah = ["abdul_somad", "khalid_basalamah", "adi_hidayat", "felix_siauw", "ali_jaber"]
AOS.init();
$(document).ready(function(){
    for (var x = 0; x < 5; x++) {
        var original = '<div class="glass col-sm-12 col-md-5 pb-4 mb-4" data-aos="fade-up " data-aos-delay="200">';
        var gutter = '<div class="glass col-sm-12 col-md-5 offset-md-2 mb-4 pb-4" data-aos="fade-up " data-aos-delay="200">';
        var content = '<div><a href="../ceramah-ustad/index.html?'+ link_ceramah[x]  +'"><button class="btn btn-lg"> <h1 class=" text-center display-5 mt-2 mb-2" id="prayTitle">'+array_ustad[x]+'</h1> </button></a></div> </div>';
            if(x%2==0){
                content = original + content;
            }
            else{
                content = gutter + content;
            }
            console.log($("#mainFrameCeramah"));
        $("#mainFrameCeramah").append(content);
    }
})