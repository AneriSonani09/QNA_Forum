import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './Homs.css' 
import Question_Card from './Question_Card';

function Home() {
  const [questions, setquestions] = useState();
  const allquestions = async () => {
    
    const res = await fetch("https://localhost:7148/api/Questions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res);
    const y = await res.json();
    console.log(y);
    // Date d = new Date("2023-03-03T17:22:55.068");
    const aneri = y.map((question) => { return (<Question_Card question={question} />) });
    setquestions(aneri);
  }
  useEffect(()=> {
    allquestions();
  }, []);
  return (
    <div>
      <div>
        <div class="leftmc">
          <div class="trigger show">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          {/* {questions} */}
          <div class="pageinfo">
            <img src="../image/Forum.png" className="logo" />
            <div class="pi_col">
              <div class="home">
                <i class="fa fa-home" aria-hidden="true"></i>{" "}
                <a href="">Home</a>
              </div>

              <div class="about">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                <a href="">About Us</a>
              </div>

              <div class="about">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                <a href="">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <form method="post" action="indexx.html" class="askquestion">
          <label class="h3">Topic :</label>
          <input
            type="text"
            id="title"
            name="title"
            class="form-control"
            placeholder="ex : Learn php "
            required
          />
          <br />
          <label class="h3">Content :</label>
          <textarea
            name="contentDetails"
            id="contentDetails"
            rows="40"
            cols="80"
          ></textarea>
          <button class="savequs" type="submit">
            Submit Question
          </button>
        </form>
        <div class="mc">
          <nav>
            <div class="slider"></div>
            <ul>
              <li class="ra">
                <a href="?x=ra"> Recent Asked</a>
              </li>
              <li class="ma">
                <a href="?x=ma"> Most Answered</a>
              </li>
              <li class="w">
                <a href="?x=w"> Work</a>
              </li>
              <li class="c">
                <a href=""> Profile</a>
              </li>
            </ul>
          </nav>

          <br />
          <div>{questions}</div>
        </div>

        <div class="rightmc">
          <div>
            <Link to="/askQuestion">
              <button
                style={{ backgroundColor: "#FFC048", color:"black" }}
                className="button_ans"
              >
                ASK A QUESTION
              </button>
            </Link>
          </div>

          <div class="card-profile">
            <img
              src="../image/01.png"
              style={{ width: "35%", height: "35%" }}
            />
            <h5>Aneri</h5>
            <p>
              <button className="profile-button">View Profile</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
