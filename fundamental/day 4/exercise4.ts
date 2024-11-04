// SOAL 1

 function createTrianglePattern(height: number): void {
    let number = 1;

    for (let row = 1; row <= height; row++) {
        let rowPattern = "";
        for (let col = 1; col <= row; col++) {
            // Format angka menjadi dua digit dengan menambahkan nol di depan jika diperlukan
            const formattedNumber = (number < 10 ? '0' : '') + number;
            rowPattern += formattedNumber + " ";
            number++;
        }
        console.log(rowPattern.trim()); // Output setiap baris
    }
}

// Contoh penggunaan:
createTrianglePattern(4);


//SOAL 2
function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example usage:
fizzBuzz(6);  // Output: 1, 2, Fizz, 4, Buzz, Fizz
fizzBuzz(15); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz


//SOAL 3

function calculateBMI(weight: number, height: number): string {
    if (height <= 0) {
        throw new Error("Height must be greater than zero.");
    }

    const bmi = weight / (height * height); // BMI formula

    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi < 25.0) {
        return "ideal";
    } else if (bmi >= 25.0 && bmi < 30.0) {
        return "overweight";
    } else if (bmi >= 30.0 && bmi < 40.0) {
        return "very overweight";
    } else {
        return "obesity";
    }
}

// Example usage:
console.log(calculateBMI(60, 1.7)); // Output: "ideal"
console.log(calculateBMI(85, 1.7)); // Output: "overweight"
console.log(calculateBMI(100, 1.7)); // Output: "very overweight"
console.log(calculateBMI(75, 1.65));


//SOAL 4

function removeOddNumbers(arr: number[]): number[] {
    // Filter the array to keep only even numbers
    return arr.filter(num => num % 2 === 0);
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = removeOddNumbers(originalArray);
console.log(evenNumbersArray); // Output: [2, 4, 6, 8, 10]


//SOAL 5

function splitStringIntoArray(input: string): string[] {
    return input.split(" ");
}

// Example usage:
const inputString = "Hello World";
const wordsArray = splitStringIntoArray(inputString);
console.log(wordsArray); // Output: ["Hello", "World"]






