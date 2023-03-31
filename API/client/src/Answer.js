import React, { useEffect, useState } from "react";
import "./AskQuestion.css";

function Answer() {
  const [q_id, setid] = useState();
  const [data, setdata] = useState({
    userName: "",
    body: "",
  });
  useEffect(() => {
    const q_id = localStorage.getItem("question_id");
    console.log(q_id);
    setid(q_id);
    // localStorage.removeItem('question_id');
  }, []);
  const setanswer = async (e) => {
    e.preventDefault();

    const body = data.body;
    const userName = data.userName;
    const userId = 136;
    const res = await fetch("https://localhost:7148/api/Answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body,
        userName,
        q_id,
        userId,
      }),
    });
    const y = await res.json();
    console.log(y);
    window.location.href = "http://localhost:3000/";
  };
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({
      ...data,
      [name]: value,
    });
  };
  return (
    <div>
      <div class="container">
        <div class="text">Post Your Answer</div>
        <form action="#">
          <div class="form-row">
            <div class="input-data">
              <input
                type="text"
                onChange={handlechange}
                name="userName"
                value={data.userName}
                required
              />
              <div class="underline"></div>
              <label for="">Your Name</label>
            </div>
          </div>

          <div class="form-row">
            <div class="input-data textarea">
              <textarea
                rows="10"
                cols="80"
                name="body"
                onChange={handlechange}
                value={data.body}
                required
              ></textarea>
              <br />
              <div class="underline"></div>
              <label for="">Write your Answer</label>
              <br />
              <div class="form-row submit-btn">
                <div class="input-data">
                  {/* <div class="inner"></div> */}
                  <button
                    style={{
                      width: "165px",
                      height: "50px",
                      backgroundColor: "#2292dd",
                    }}
                    class="input-data-1"
                    onClick={setanswer}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Answer;
