import React from 'react'
import './Profile.css'
// import "./profilePic.jpg";

function Profile() {

    // const user = sessionStorage.getItem("user");
    // document.write("Welcome, " + user);
    // console.log(user);
  return (
    // <div>
    //   <div class="card-profile">
    //     {/* <img src="" alt="John" style="width:100%" /> */}
    //           <img src="../image/00.png"/>
    //     <h1>John Doe</h1>
    //     <p class="title-profile">CEO & Founder, Example</p>
    //     <p>Harvard University</p>
    //     <p>
    //       <button className='profile-button'>Contact</button>
    //     </p>
    //   </div>
    // </div>
    <div class="card-profile">
      <img src="../image/01.png" style={{width: '80%', height: '80%'}}
      />
      <h1>John Doe</h1>
      <p>
        <button className='profile-button'>Contact</button>
      </p>
    </div>
  );
}

export default Profile
