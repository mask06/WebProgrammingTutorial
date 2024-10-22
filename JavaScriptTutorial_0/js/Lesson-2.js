// Array tanımı 

var gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

console.log(gunler[0]);
console.log(gunler[2]);
console.log(gunler[4]);
console.log(gunler);

for (let i = 0; i < gunler.length; i++) {
    console.log(gunler[i]);

}
gunler.forEach(element => {
    console.log(gunler[element]);
});
let sayac = 1;
while (sayac < 10) {
    console.log(sayac)
    sayac++;
}