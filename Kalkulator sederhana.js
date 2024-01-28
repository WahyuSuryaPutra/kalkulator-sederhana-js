// Fungsi untuk menghitung faktorial
function factorial(n) {
    // Basis case: faktorial dari 0 dan 1 adalah 1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Rekursi: mengalikan n dengan faktorial dari n-1
      return n * factorial(n - 1);
    }
  }
  
  // Kalkulator lanjutan
  function advancedCalculator(operation, num1, num2) {
    // Pilih operasi matematika berdasarkan parameter 'operation'
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        // Cek agar tidak ada pembagian dengan nol
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return 'Error: Pembagian dengan nol tidak valid';
        }
      case 'power':
        return Math.pow(num1, num2);
      case 'sqrt':
        // Menghitung akar kuadrat dari num1
        return Math.sqrt(num1);
      case 'factorial':
        // Memanggil fungsi faktorial
        return factorial(num1);
      case 'sin':
        // Menghitung sin dari num1 (dalam radian)
        return Math.sin(num1);
      case 'cos':
        // Menghitung cos dari num1 (dalam radian)
        return Math.cos(num1);
      case 'tan':
        // Menghitung tan dari num1 (dalam radian)
        return Math.tan(num1);
      case 'log':
        // Menghitung logaritma basis 10 dari num1
        return Math.log10(num1);
      case 'ln':
        // Menghitung logaritma natural dari num1
        return Math.log(num1);
      default:
        return 'Error: Operasi tidak valid';
    }
  }
  
  // Contoh penggunaan kalkulator
  const operation = prompt("Pilih operasi (add, subtract, multiply, divide, power, sqrt, factorial, sin, cos, tan, log, ln):");
  const num1 = parseFloat(prompt("Masukkan angka pertama:"));
  const num2 = parseFloat(prompt("Masukkan angka kedua (jika diperlukan):"));
  
  // Memanggil fungsi kalkulator dan menampilkan hasilnya
  const result = advancedCalculator(operation, num1, num2);
  console.log(`Hasil: ${result}`);  