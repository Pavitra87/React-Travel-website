import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="hero-title">
            <h1>Explore the World <br/>just one Click</h1>
            <button className="btn">
               <Link>Get Started</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
