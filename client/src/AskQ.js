import React, { useEffect, useState } from "react";
import "./AskQuestion.css";

function AskQ() {
  const [data, setdata] = useState({
    titleName: "",
    Question: "",

  });

  const setQuestion = async (e) => {
    e.preventDefault();
    const title = data.titleName;
    const body = data.Question;
    const userName = localStorage.getItem("username");  
    const userId = 136;
    const createdAt = new Date();
    const res = await fetch("https://localhost:7148/api/Questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body,
        userName,
        userId,
        title,
        createdAt,
      }),
    });
    const y = await res.json();
    console.log(y);
    window.location.href = "/";
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
        <div class="text">Ask Your Question</div>
        <form action="#">
          <div class="form-row">
            {/* <div class="input-data">
                 <input type="text" required />
                 <div class="underline"></div>
                 <label for="">Title Of Your Question</label>
              </div> */}
          </div>

          <div class="form-row">
            <div class="input-data textarea">
              <input
                type="text"
                name="titleName"
                onChange={handlechange}
                value={data.titleName}
              ></input>
              <br />
              <div class="underline"></div>
              <label for="">Title</label>
              <br />
            </div>
          </div>
          <div class="form-row">
            <div class="input-data textarea">
              <textarea
                rows="8"
                cols="80"
                name="Question"
                onChange={handlechange}
                value={data.Question}
                required
              ></textarea>
              <br />
              <div class="underline"></div>
              <label for="">Ask Your Question</label>
              <br />
              <div class="form-row submit-btn">
                <div class="input-data">
                  {/* <div class="inner"></div> */}
                  <button
                    style={{
                      width: "165px",
                      height: "50px",
                      backgroundColor: "#FFC048",
                      borderRadius: "3px solid",
                    }}
                    class="input-data-1"
                    onClick={setQuestion}
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

export default AskQ;
