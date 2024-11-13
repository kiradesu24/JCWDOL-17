// SOAL 1

function excelColumnToNumber(column: string): number {
    let result = 0;
    
    for (let i = 0; i < column.length; i++) {
        // Hitung nilai karakter, di mana 'A' sama dengan 1, 'B' sama dengan 2, dst.
        const charValue = column.charCodeAt(i) - 64;
        
        // Perhitungkan posisi karakter di dalam string
        result = result * 26 + charValue;
    }

    return result;
}

// Contoh penggunaan
console.log(excelColumnToNumber("A"));    // Output: 1
console.log(excelColumnToNumber("B"));    // Output: 2
console.log(excelColumnToNumber("Z"));    // Output: 26
console.log(excelColumnToNumber("AA"));   // Output: 27
console.log(excelColumnToNumber("AB"));   // Output: 28
console.log(excelColumnToNumber("ZY"));   // Output: 701


// SOAL 2



// SOAL 3
function isAnagram(s: string, t: string): boolean {
    // Jika panjang kedua string berbeda, langsung return false
    if (s.length !== t.length) {
        return false;
    }

    // Ubah string menjadi array karakter, lalu urutkan dan gabungkan kembali menjadi string
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    // Periksa apakah kedua string yang sudah diurutkan sama
    return sortedS === sortedT;
}

// Contoh penggunaan
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car"));         // Output: false



// SOAL 4
function climbStairs(n: number): number {
    if (n <= 2) {
        return n;
    }

    let oneStepBefore = 2; // Jumlah cara untuk mencapai langkah (n-1)
    let twoStepsBefore = 1; // Jumlah cara untuk mencapai langkah (n-2)
    let allWays = 0;

    for (let i = 3; i <= n; i++) {
        allWays = oneStepBefore + twoStepsBefore;
        twoStepsBefore = oneStepBefore;
        oneStepBefore = allWays;
    }

    return allWays;
}

// Contoh penggunaan
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(4)); // Output: 5
console.log(climbStairs(5)); // Output: 8


// SOAL 5

function printTriangles(height: number): void {
    console.log("Triangle 1:");
    // Triangle 1 - Right-aligned, descending
    for (let i = height; i > 0; i--) {
        console.log("*".repeat(i));
    }

    console.log("\nTriangle 2:");
    // Triangle 2 - Left-aligned, ascending
    for (let i = 1; i <= height; i++) {
        console.log("*".repeat(i));
    }

    console.log("\nTriangle 3:");
    // Triangle 3 - Right-aligned, ascending
    for (let i = 1; i <= height; i++) {
        console.log(" ".repeat(height - i) + "*".repeat(i));
    }

    console.log("\nTriangle 4:");
    // Triangle 4 - Right-aligned, descending (inverted triangle)
    for (let i = height; i > 0; i--) {
        console.log(" ".repeat(height - i) + "*".repeat(i));
    }
}

// Contoh penggunaan
printTriangles(5);
