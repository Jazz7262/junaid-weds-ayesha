import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <img
                src="../assets/images/bismillah.png"
                alt="bismillah"
                className="poster"
            />
            <h3>
                Begin With The Name Of Allaah, The Most Benificient And The Most
                Merciful
            </h3>
            <h4 className="mt-4">
                Oh Allaah! Guide this marriage to the best of understanding,
                happiness, prosperty & Success - Aameen.
            </h4>
            
        </section>
    );
}

export default Header;
