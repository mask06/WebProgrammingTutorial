// Parametresi Fonksiyon Tanımlama ve Çağırma
/*
function ClickMe()
{
    console.log("Tıklandım.");
}

ClickMe();

--- html file

<button onclick="ClickMe();">ClickMe!</button>

*/

// Döngüler for, while, do-while
// Array tanımı, fonksiyonları ve forEach kullanımı
/*
array.join('|');
array.push("Last Element Adding");
array.unshift("First Element Adding");
array.pop();  read last element and remove array
array.shift();  read first element and remove array
array.sort(); => alfabetik sıralama
array.sort(function(a,b){return a-b;}); => sayısal sıralama asc 1-10
array.sort(function(a,b){return b-a;}); => sayısal sıralama desc 10-1
array.slice(2,4); parça almak
array.revers(); array i mevcut sırasını tersten sıralar

var arr3 = arr1.concat(arr2);

*/

// Değişken tanım ve veri tipleri
/*
    var, let, const
    string, number, boolean, object, undefined
*/


// Array ek örnek

function DiziOrnekleri()
{
    var numbers = [3,5,12,4,9,19];

    console.log(numbers);
    // ` kesme işareti => alt-gr + ;(tuşu windowsta)
    // ' tek tırnak işareti => shift + 2
    // " çift tırnak işareti => sol üst tuş é nin tek başına kullanılması

    console.log("--------");

    for(let i = 1; i <= 5; i++ )
    {
        numbers.sort(function(a,b){ 
            //console.log(`${a} - ${b} = ${a-b}`);
            //console.log(`${b} - ${a} = ${b-a}`);
            return 0.5 - Math.random(); 
        });
        console.log(numbers);
    }
}


// String ifadeler için fonksiyonlar

function MetinselOrnekler()
{
    var metinselifade = "merhaba dünya ünlüler için bugün hava çok güzel";
    console.log(metinselifade.length);
    console.log(metinselifade[0]);
    console.log(metinselifade.indexOf("ün"));
    console.log(metinselifade.lastIndexOf("ün"));
    console.log(metinselifade.search("ün")); // RegEx kullanımı
    console.log(metinselifade.includes("ün")); // C# da ki string.contains
    console.log(metinselifade.slice(4,26));
    // console.log(metinselifade.replace("ün","UN"));
    // console.log(metinselifade.replace("ün","UN").replace("ün","UN"));
    // console.log(metinselifade.replace("ün","UN").replace("ün","UN").replace("ün","UN"));
    
    console.log(metinselifade.replaceAll("ün","UN"));
    console.log("-".repeat(10));
    console.log(metinselifade.toUpperCase());
    console.log(metinselifade.toLowerCase());
    
    console.log("-".repeat(10));
    console.log("BUGÜN YARIN DÜN ISI YAĞMUR ÇAMUR ÖRDEK".toLocaleLowerCase("tr"));
    console.log("bugün yarın iki dün ısı yağmur çamur ördek".toLocaleUpperCase("tr"));
    
    console.log("BUGÜN YARIN DÜN ISI YAĞMUR ÇAMUR ÖRDEK Ş".toLowerCase());
    console.log("bugün yarın iki dün ısı yağmur çamur ördek ş".toUpperCase());
    console.log("-".repeat(10));
    
    console.log(metinselifade.charAt(10));
    console.log(metinselifade.split(" ").join("|"));
    console.log(metinselifade.replaceAll(" ", "|"));
    
}

// Matematik işlemler

function MatematikselOrnekler()
{
    const PI = Math.PI;

    console.log(PI);
    console.log(typeof(PI));
    console.log(PI.toFixed(0));
    console.log(PI.toFixed(2));
    console.log(PI.toFixed(5));
    
    console.log(PI.toPrecision(7)); // 3.1415926 => 3.141593

    console.log(Math.round(4.4)); // 4
    console.log(Math.round(4.5)); // 5
    console.log(Math.round(4.6)); // 5

    console.log(Math.ceil(4.4)); // 5
    console.log(Math.ceil(4.5)); // 5
    console.log(Math.ceil(4.6)); // 5
    
    console.log(Math.floor(4.4)); // 4
    console.log(Math.floor(4.5)); // 4
    console.log(Math.floor(4.6)); // 4

    console.log(Math.min(3,5,9,-2,77));
    console.log(Math.max(3,5,9,-2,77));

    console.log(Math.pow(2,3));
    console.log(Math.sqrt(49));

    console.log(Math.random()); 

    // 1-10

    var random = Math.random();

    console.log(random);
    console.log(Math.ceil(random*10)); 
    console.log(Math.E);
    console.log(Math.exp(2)); // e^2 işlemini yapar
    console.log(Math.pow(Math.E,2)); // e^2 işlemini yapar daha hassas değerlidir.
}


function TarihselOrnekler()
{
    var bugun = new Date();
    console.log(bugun);
    console.log(bugun.getDate());       // 1 - 31
    console.log(bugun.getDay());        // 0 - 6    => 0 Pazar
    console.log(bugun.getMonth());      // 0 - 11   => 0 Ocak
    console.log(bugun.getFullYear());   // yyyy
    console.log(bugun.getHours());      // 0-23
    console.log(bugun.getMinutes());    // 0-59
    console.log(bugun.getSeconds());    // 0-59
    console.log(bugun.getTime());       // 01.01.1970 00:00:00 dan itibaren ms

    var herHangibirTarih = new Date(1907, 0, 29, 6, 30, 7);
    console.log(herHangibirTarih);
    console.log(herHangibirTarih.getDate());       // 1 - 31
    console.log(herHangibirTarih.getDay());        // 0 - 6    => 0 Pazar
    console.log(herHangibirTarih.getMonth());      // 0 - 11   => 0 Ocak
    console.log(herHangibirTarih.getFullYear());   // yyyy
    console.log(herHangibirTarih.getHours());      // 0-23
    console.log(herHangibirTarih.getMinutes());    // 0-59
    console.log(herHangibirTarih.getSeconds());    // 0-59
    console.log(herHangibirTarih.getTime());       // 01.01.1970 00:00:00 dan itibaren ms

    console.log("-".repeat(10));

    bugun.setDate(bugun.getDate() + 7); // bir hafta C# AddDays()
    bugun.setMonth((bugun.getMonth() + 7)); // bir hafta C# AddDays()
    bugun.setFullYear((bugun.getFullYear() + 7)); // bir hafta C# AddDays()

    console.log(bugun.getDate()); 
    console.log(bugun.getMonth()); 
    console.log(bugun.getFullYear()); 
    console.log(bugun); 

    // 3382607099157

    // bugun.setTime(3382607099157);
    // console.log(bugun);

    // bugun.setTime(bugun.getTime() + 3382607099157);
    // console.log(bugun);



}

function KararYapilari()
{    
    var random = Math.random();
    var sayi = Math.ceil(random*10);
    
    var x = 5;
    var result = (x == 1) ? true : false;

    if(sayi > 5)
        console.log("5 den büyük");
    else if(sayi == 5)
        console.log("5");
    else
        console.log("5 den küçük");


    switch (sayi)
    {
        case 1:
            console.log("Sayı 1");
            break;

        case 3:
            console.log("Sayı 3");
            break;

        case 5:
            console.log("Sayı 5");
            break;
        
        case 2:
        case 4:
        case 6:
            console.log("Sayı 2 yada 4 yada 6 " + sayi);
            break;
    
        default:
            console.log("sayı değeri alan dışı");
            break;
    }
}

function HataYakalamaOrnekleri()
{
    var sayi = 123;
    console.log(isNaN(sayi)); // Not A Number
    console.log(isFinite(5/0)); // sonlu bir sayı mı false

    // try {
    //     console.log(number);
    // } catch (error) {
    //     console.log(error.name);
    //     console.log(error.message);
    //     console.log(error.stack);
    // }

    // try {
    //     var number = 5.123456
    //     console.log(number.toFixed(101));
    // } catch (error) {
    //     console.log(error.name);
    //     console.log(error.message);
    //     console.log(error.stack);
    // }

    try {
        throw {name:"Özel Durum", message:"Bir hata oluştu", stack:"line x y z"};
    } catch (error) {
        console.log(error);
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }
}

// DiziOrnekleri();
// MetinselOrnekler();
// MatematikselOrnekler();
// TarihselOrnekler();

// KararYapilari();
// KararYapilari();
// KararYapilari();
// KararYapilari();
// KararYapilari();

HataYakalamaOrnekleri();

// Yarın Sabahtan Object örnekleri ve DOM yapısı ile form elemanlarından veri 
// okuma ve DOM elemanlarını manüplasyon edilmesi.