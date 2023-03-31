import React, { useState, useEffect } from 'react'
import { format } from "date-fns";
import Post_Ans from './Post_Ans';

export default function Question_Card(props) {
  
    const [date, setdate] = useState();
    const [answer,setanswer] = useState();
    const allanswer = async () => {
        const res = await fetch("https://localhost:7148/api/Answers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
      
   
      const y=await res.json();
        // Date d = new Date("2023-03-03T17:22:55.068");
        const aneri = y.map((ans) => {
            if (ans.q_id === props.question.id) {
                return <Post_Ans ans={ans} />;
            }
        });
        setanswer(aneri);
    }
    const handleanswer = () => {
          console.log(props.question.id)
        localStorage.setItem("question_id",props.question.id);
        window.location.href = "/Answer";
      };
    // const [time, settime] = useState();
    useEffect(() => {
        var day = format(new Date(props.question.createdAt), "MM/yy/yyyy");
        //=> '11/19/2021'
        console.log(day);
        setdate(day);
        allanswer();
     },[]);
  return (
    <div>
      {/* <h1>Aneri </h1> */}
      <div class="qa_container">
        <div class="col1">
          <div class="userimg">
            <img src="../image/01.png" alt=""></img>
          </div>
          <div class="vote">
            <button class="upvote v">
              <i class="fa fa-sort-asc" aria-hidden="true"></i>
            </button>

            <button class="downvote v">
              <i class="fa fa-sort-desc" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class="col2">
          <div class="infobar cdw">
            <div class="name" style={{color:"black"}}>{props.question.userName}</div>
            <div
              class="status"
              style={{
                backgroundColor: "#FFC048",
                color: "black",
              }}
            >
              Answered
            </div>
            <div class="date">Asked : {date}</div>
          </div>
          <div class="heading">{props.question.title}</div>
          <div class="body">{props.question.body}</div>
          <br />
          <div>{answer}</div>

          <div class="tags">
            <a class="dh" href="">
              English
            </a>
            <a class="dh" href="">
              {" "}
              Language{" "}
            </a>
          </div>
          <div class="reply cdw">
            <a class=" na dh">
              <i class="fa fa-comments-o" aria-hidden="true"></i> 4 Answers
            </a>
            {/* <a class=" views dh">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                  904 views
                </a> */}

            <button
              onClick={handleanswer}
              style={{
                backgroundColor: "#FFC048",
                color: "black",
              }}
              class="sa"
            >
              Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
