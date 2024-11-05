// object merupakan sebuah ciri-ciri yg menggambarkan sesuatu
// sedangkan array merupakan sebuah kumpulan data (bentuk datanya mirip mirip)

//lemari buku komik merupakan array => komik doraemon, komik shinchan, komik naruto
//object adalah bukunya => author siapa, total pages, genre, cover image, ratingcd


// let user = {} creating object literal syntax
// let user = new Object() creating object constructor syntax

// string,number,boolean,null,undefined => tipe data primitive
// array, object => tipe data non primitive

interface ICar {
    brand: string;
    model: string;
    price: number;
};

interface ICar {
    origin?: string;
    color?: string | number;
};


type TCar = {
    brand: string;
    model: string;
    price: number;
};


const car1: ICar = {
    brand: "BMW",
    model: "M135I xDrive",
    price: 800000000,
    origin: "germany",
};

const car2: ICar = {
    brand: "Toyota",
    model: "Innova",
    price: 500000000,
    origin: "japan",
};




console.log(car1, car2);


