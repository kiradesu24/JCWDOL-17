import React from "react";

type Props = {};

export function Navbar({}: Props) {
    return (
    <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Team</a>
    </nav>
        );
}


export function Navbar2() {
    return (
    <nav className=" text-red-500 bg-orange-300 font-bold text-md flex 
    flex-col 
    sm:flex-row
    gap-[5px]
    sticky top-0 p-[10px] font-20 ">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Team</a>
    </nav>
        );
}