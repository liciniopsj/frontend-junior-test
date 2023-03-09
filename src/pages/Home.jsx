import React from "react";
import logo from "../assets/logo.svg";
import star from "../assets/shooting-star.svg"
import '../App.css';

function Home() {
  return (
    <div>
      <header>
      <img id="kleverIcon" src={logo} alt="Klever Logo" />
      <div className="titleContainer">
      <img id="starIcon" src={star} alt="Shooting Star Icon" />
      <h1>Wish Wallet</h1>
      <div className="addTokenBtnContainer">
        <button
          type="button"
        >
          Add Token
        </button>
      </div>
      </div>
      </header>
      <main>

      </main>
    </div>
  )
};

export default Home;
