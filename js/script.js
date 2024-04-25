document.addEventListener("DOMContentLoaded", function() {
    const celciusInput = document.getElementById("celciusInput");
    const originalCelcius = document.getElementById("originalCelcius");
    const fahrenheitResult = document.getElementById("fahrenheitResult");
    const calculationResult = document.getElementById("calculationResult");
    const buttonConvert = document.getElementById("button_convert");
    const buttonReset = document.getElementById("button_reset");
    const buttonReverse = document.getElementById("button_reverse");

    // Fungsi konversi suhu dari Celcius ke Fahrenheit
    function convertToFarhenheit(celcius) {
        return (celcius * 9/5) + 32;
    }

    // Fungsi konversi suhu dari Fahrenheit ke Celsius
    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    // Fungsi menghitung cara kalkulasi konversi suhu
    function calculateConversion(celcius) {
        const fahrenheit = convertToFarhenheit(celcius);
        return `(${celcius} * 9/5) + 32 = ${fahrenheit}`;
    }

    // Ketika tombol Convert ditekan
    buttonConvert.addEventListener("click", function() {
        const celciusValue = parseFloat(celciusInput.value);
        if (!isNaN(celciusValue)) {
            const fahrenheitValue = convertToFarhenheit(celciusValue);
            fahrenheitResult.value = fahrenheitValue;
            calculationResult.value = calculateConversion(celciusValue);
            originalCelcius.value = celciusValue; // Simpan nilai celcius asli
        } else {
            alert("Masukkan angka yang valid untuk suhu dalam Celcius.");
        }
    });

    // Ketika tombol Reverse ditekan
    buttonReverse.addEventListener("click", function() {
        const fahrenheitValue = parseFloat(fahrenheitResult.value);
        if (!isNaN(fahrenheitValue)) {
            const celsiusValue = convertToCelsius(fahrenheitValue);
            celciusInput.value = celsiusValue;
            calculationResult.value = `(${fahrenheitValue} - 32) * 5/9 = ${celsiusValue}`;
            originalCelcius.value = celsiusValue;
        } else {
            alert("Tidak ada nilai suhu yang disimpan untuk dibalikkan.");
        }
    });

    // Ketika tombol Reset ditekan
    buttonReset.addEventListener("click", function() {
        celciusInput.value = "";
        fahrenheitResult.value = "";
        calculationResult.value = "";
        originalCelcius.value = "";
    });
});
