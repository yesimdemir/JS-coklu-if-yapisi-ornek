//ÇOKLU IF YAPISI


let ad = prompt("İsminizi giriniz: ");
let tckn = prompt("TC nizi giriniz: ");

kontrolEt(ad, tckn);

function kontrolEt(ad, tckn){
    if(ad == ""){
        console.log("Lütfen isim alanını boş bırakmayın.");
        return;
    }
    if(tckn.length != 11){
        console.log("Lütfen tc'nizi 11 karakter olarak girin.");
        return;
    }

    console.log("Başarılı giriş, tebrikler!");

}