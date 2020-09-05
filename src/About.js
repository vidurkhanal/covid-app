import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="app__header">
          {/* Title */}
          <Link to="/">
            <h1 className="logo">COVID TRACKER</h1>
          </Link>
        </div>
        <div className="symptoms">
          <h3>Symptoms Of Novel Corona Virus (Covid-19)</h3>
          <p className="starting">
            COVID-19 affects different people in different ways. Most infected
            people will develop mild to moderate illness and recover without
            hospitalization.
          </p>
          <ul>
            <p className="list-title"> Most Common Symptoms:</p>
            <li>-fever </li>
            <li> -dry cough </li>
            <li> -tiredness</li>
            <p className="list-title"> Less common symptoms:</p>
            <li>-aches and pains</li>
            <li>-a rash on skin, or discolouration of fingers or toes</li>
            <li>-loss of taste or smell</li>
            <li>-headache</li>
            <li>-conjunctivitis</li>
            <li>-diarrhoea</li>
            <li>sore throat</li>
            <p className="list-title">-Serious symptoms:</p>
            <li>-difficulty breathing or shortness of breath</li>
            <li>-chest pain or pressure</li>
            <li>-loss of speech or movement</li>
            <p className="ending-description">
              Seek immediate medical attention if you have serious symptoms.
              Always call before visiting your doctor or health facility. People
              with mild symptoms who are otherwise healthy should manage their
              symptoms at home. On average it takes 5–6 days from when someone
              is infected with the virus for symptoms to show, however it can
              take up to 14 days.
            </p>
          </ul>
          <h1 className="ending">PLEASE ALWAYS WEAR MASK AND BE SAFE !! </h1>
        </div>
      </div>
    </>
  );
}

export default About;
