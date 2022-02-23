//Nadefinujme si proměnné a jejich hodnoty potřebné k uložení následujících informací:
 //Jméno muže a ženy ​
 //Rok a měsíc narození muže i ženy​
//Spočteme rozdíl věku muže a ženy v měsících a vypíšeme ve formátu​ "[muz] a [zena] jsou od sebe věkově vzdáleni [XY] měsíců​"
//Pro zjednodušení úkolu počítejme, že je muž vždy starší! (ať nemusíme řešit absolutní hodnotu z Math.abs())

let jmenoMuze = 'Pavel';
let jmenoZeny = 'Jitka';

let rokNarozeniZena = 1990
let rokNarozeniMuz = 1985

let mesicNarozeniZena = 2
let mesicNarozeniMuz = 5

let vysledek = (rokNarozeniZena - rokNarozeniMuz) * 12 + (mesicNarozeniZena-mesicNarozeniMuz);

console.log(vysledek);
