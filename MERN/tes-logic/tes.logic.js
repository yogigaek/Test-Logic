//  1. Buatlah fungsi sebagai berikut :
// 	Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
// 	Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)
// Jawab :
console.log("SOAL NOMOR 1 :");
function int(angka) {
    let result = `{${angka}*`;
    let results = angka;
    for (let i = angka-1; i >= 1; i--) {
        results *= i
        i === 1 ? result +=`${i}}` : result += `${i}*`
    }
    return `${result} = ${results}`
};
console.log(int(4));
console.log(int(8));
console.log("-----------------------------------------------------------------------");

// 2. Buatlah fungsi untuk reverse sebuah string
// Apabila input = “abcde”, maka outputnya = “edcba”
// Dilarang menggunakan function reverse, buatlah logika sendiri
// Jawab :
console.log("SOAL NOMOR 2 :");
let input = `abcde`;
for (let i=input.length-1; i>=0; i--) {
    console.log(input[i]);
}
console.log("-----------------------------------------------------------------------");

// 3. Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”! 
// Contoh: printDigitValue(‘9.86-A5.321’);
// Hasil :
// 9865321
// 9000000
// 800000
// 60000
// 5000
// 300
// 20
// 1
// Jawab :
console.log("SOAL NOMOR 3 :");
let angka = "9.86-A5.321"
printDigitValue(angka.split(''));

function printDigitValue(params) {
    let arr = []
    params.forEach(item => {
        !isNaN(item) ? arr.push(item) : null
    });
    let panjang = arr.length - 1
    arr.forEach(item => {
        print(item, panjang)
        panjang--
    });
}

function print(angka, panjang) {
    let result = angka;
    for (let i = 0; i < panjang; i++) {
        result += "0"
    }
    console.log(result);
};
console.log("-----------------------------------------------------------------------");

// 4. Ketik kode untuk swap 2 integer variables tanpa VARIABLE TAMBAHAN 
// Contoh : let a = 3, let b = 7 => hasilnya a = 7, b = 3
// Jawab
console.log("SOAL NOMOR 4 :");
let a = 3;
let b = 7;
a = a + b;
b = a - b;
a = a - b;
console.log("a =", a);
console.log("b =", b);
console.log("-----------------------------------------------------------------------");

// 5. Buatlah fungsi sebagai berikut :
// int : 4, maka outputnya adalah : empat
// int : 20, maka outputnya adalah : dua puluh
// int : 39, maka outputnya adalah : tiga puluh sembilan
// int : 104, maka outputnya adalah : silahkan masukkan bilangan 1-100
// Jawab :
console.log("SOAL NOMOR 5 :");

console.log("-----------------------------------------------------------------------");

// 6. Apabila terdapat sebuah data : 
// array data =  [1,4,7,9,12], 
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput [4,7,9,12]
// Jawab :
console.log("SOAL NOMOR 6 :");
let low = 2;
let high = 15;
let array = [1, 4, 7, 9, 12];

for (let i=0; i < array.length; i++) {
     const element = array[i];
    if (element >= low && element <= high) {
        const hasilArray = element;
        console.log(hasilArray);
    }
}
console.log("-----------------------------------------------------------------------");

// 7. Dari soal nomor 6, buatlah juga untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
// array data =  [1,4,7,9,12], 
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput = 4
// Jawab :
console.log("SOAL NOMOR 7 :");
let hasilArray = [];
for (let i=0; i<array.length; i++) {
    if (array[i] >= low && array[i] <= high) {
        hasilArray.push(array[i]);
    }
}
console.log(hasilArray.length);
console.log("-----------------------------------------------------------------------");

// 8. Apabila terdapat int = 15, maka akan mencetak output berikut :
// 1
// 2
// Edu
// 4
// Work
// 6
// 7
// 8
// Edu
// 10
// 11
// Edu
// 13
// 14
// EduWork

// keterangan : string edu untuk kelipatan 3, string work untuk kelipatan 5, string eduwork untuk kelipatan 3 dan 5
// Jawab
console.log("SOAL NOMOR 8 :");
for (let i = 0; i<=15 ; i++) {
    console.log(checkNumber(i));
}
function checkNumber(angka) {
    if (angka % 3 === 0 && angka % 5 === 0) {
        return "Eduwork";
    }
    if (angka % 3 === 0) {
        return "edu";
    }
    if (angka % 5 === 0) {
        return "work";
    }
    else {
        return angka;
    }
}
console.log("-----------------------------------------------------------------------");

// 9. Buatlah fungsi untuk menentukan bilangan terkecil dan terbesar dari sebuah array
// Contoh : array [4,2,6,88,3,11]
// Maka outputnya adalah low : 2, high : 88
// dilarang menggunakan built in function
// Jawab :
console.log("SOAL NOMOR 9 :");
var nilai = [4, 2, 6, 88, 3, 11];
for (var i = 0; i < nilai.length; i++) {
  if (i == 0) {
    let low = nilai[i];
  }
  if (nilai[i] > high) {
    high = nilai[i];
  }
    
}
console.log(`low : ${low}`);
console.log(`high : ${high}`);

console.log("-----------------------------------------------------------------------");

// 10. Buatlah fungsi untuk mengecek tahun kabisat
// input : 2021
// output : 2021 bukan tahun kabisat
// input : 2024
// output : 2024 adalah tahun kabisat
// Tahun kabisat Setiap tahun yang merupakan kelipatan 4 adalah tahun kabisat. Kecuali, tahun yang habis dibagi 100 bukanlah tahun kabisat
// Jawab :
console.log("SOAL NOMOR 10 :");
let tahun1 = 2021;
let tahun2 = 2024;
if (tahun1 % 4 === 0) {
    console.log(`${tahun1} bukan tahun kabisat`)
}else if (tahun2 % 4 === 0){
    console.log(`${tahun2} adalah tahun kabisat`)
    console.log(`${tahun1} bukan tahun kabisat`)
}

// OR

function checkKabisat(year) {
    if ((year % 4 == 0) && (year % 100 != 0 ) || (year % 400 ==  0)) {
        console.log(year + ' adalah tahun kabisat');
    } else {
        console.log(year + ' bukan tahun kabisat');
    }
}
console.log( checkKabisat(2024), checkKabisat(2021));





