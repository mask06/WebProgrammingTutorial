// Object Tanımlama

var batuhan = {
    memleket: "Nevşehir",
    takim: "Fenerbahçe",
    arabasiVarmi: true,
    arabasi: {
        marka: "Skoda",
        model: "superb",
        yil: 2022,
        km: 31750,
        renk: "Indigo"

    },
    dogumTarihi: new Date(2000, 0, 20),
    dogumTarihiStr: new Date(2000, 0, 20).toLocaleDateString(),
    medeniDurum: "Bekar",
    hobiler: [
        {
            adi: "Kitap Okumak",
            sure: 5,
        },
        {
            adi: "Gitar Çalmak",
            sure: 10,
        },
        {
            adi: "Go kart",
            sure: 3,
        },


    ],
    notlar: [75, 98, 100],
    notOrtalama: function () {
        var toplamNotlar = this.notlar.reduce((toplam, anlikDeger) => {
            return toplam + anlikDeger;
        });
        var notSayisi = this.notlar.length;
        return toplamNotlar / notSayisi;
    }
};
console.log(batuhan);
console.log(batuhan.arabasiVarmi);
console.log(batuhan.arabasi.marka);

/* batuhan.hobiler.forEach((hobi, i) => {
    console.log(`${i + 1}.${hobi.adi} ${hobi.sure} yıldır.`);
}); */
console.log(batuhan.hobiler[1].adi);
console.log(batuhan.notOrtalama());

function Kisi(adi, soyadi, yas) {
    this.adi = adi;
    this.soyadi = soyadi;
    this.yas = yas;
}
console.log(typeof (Kisi));
var yeniKisi = new Kisi("Göksel", "Kalyoncu", "35");
console.log(yeniKisi);

class Kitap {
    constructor(yazarAdi, yazarSoyadi, KitapAdi, SayfaSayisi) {
        this.YazarAdi = yazarAdi;
        this.YazarSoyadi = yazarSoyadi;
        this.KitapAdi = KitapAdi;
        this.SayfaSayisi = SayfaSayisi;

    }
    YazarAdiSoyadi = function () {
        return this.YazarAdi + " " + this.YazarSoyadi;
    }
    YazarAdiSoyadiArrowFunc = () => {
        return this.YazarAdi + " " + this.YazarSoyadi;
    }
    YazarAdiSoyadiArrowFuncShort = () => this.YazarAdi + " " + this.YazarSoyadi;
}
console.log(typeof (Kitap));

var yeniKitap = new Kitap("Göksel", "Kalyoncu", "Kim Korkar c#'dan", 300);
console.log(yeniKitap);
console.log(yeniKitap.KitapAdi);
console.log(yeniKitap.YazarAdi);
console.log(yeniKitap.YazarAdiSoyadi());
console.log(yeniKitap.YazarAdiSoyadiArrowFunc());
console.log(yeniKitap.YazarAdiSoyadiArrowFuncShort());


var sayHello = function () {
    console.log("Hello JS");
}
sayHello();

var toplama = (a, b) => a + b;
var cikarma = (a, b) => a - b;
var carpma = (a, b) => a * b;
var bolme = (a, b) => a / b;
var ort = function (...nums) {
    var toplam = nums.reduce((p, c) => p + c)
    return bolme(toplam, nums.length);
}

console.log(toplama(5, 3));
console.log(carpma(5, 3));
console.log(cikarma(5, 3));
console.log(bolme(5, 3));
console.log(ort(3, 5, 7, 8, 10));

class Hayvan {
    constructor(adi) {

        this.Adi = adi;
    }
    AdinNedir() {
        return this.Adi;
    }
}

class Kedi extends Hayvan{
    /**
     *@neler
     */
    constructor(adi,cinsi) {
        super(adi);
        this.Cinsi = cinsi
    }
    CinsinNedir(){
        return this.Cinsi;
    }
    SenKimsin(){
        return "ben kedi" + this.Adi + " and type of " + this.Cinsi;
    }
}
var hayvan = new Hayvan();
var blackWhiteCat = new Kedi("black White", "Sokak Kedisi");
console.log(blackWhiteCat.AdinNedir());
console.log(blackWhiteCat.CinsinNedir());
console.log(blackWhiteCat.SenKimsin());
 
 
console.log("-".repeat(10));
 
console.log(JSON.stringify(yeniKisi));
console.log(JSON.stringify(yeniKitap));
console.log(JSON.stringify(batuhan));
 
 
console.log("-".repeat(10));
 
var kisiJsonStr = JSON.stringify(yeniKisi);
 
console.log(kisiJsonStr);
 
var jsonKisiClass = JSON.parse(kisiJsonStr);
 
console.log(jsonKisiClass);
 
 
console.log("-".repeat(10));
 
var batuJson = JSON.stringify(batuhan);
 
console.log(batuJson);
 
var batuObject = JSON.parse(batuJson);
 
console.log(batuObject);