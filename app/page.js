"use client";
import "./page.css";
import react, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Globe from "./globe.png";
import Phone from "./phone-call.png";
import AtTheRate from "./sign.png";
import AddUser from "./add-user.png";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const Res = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    const ResP = axios
      .get("https://api.dicebear.com/7.x/initials/svg?seed=UserName")
      .then((res) => {
        console.log("barcc", res);
        // setData(res.data);
      });
  }, []);

  const FollowHandle=()=>{
    alert("folow")
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      {data.map((item) => (
        <div class="card" style={{ padding: "14px", margin: "1rem" }}>
          <div class="img">
            {/* <div >Abhishek</div> */}
            <img id="rcorners1" src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.name}`} alt="avatar" />
            <b>{item.name}</b>
          </div>

          <div class="container">
            <p class="textxoloe">
              <Image
                class="tabler-icon-phone-call "
                src={AtTheRate}
                alt="At The Rate"
                height="20"
                width="20"
              />{" "}
              {item.email}
            </p>
            <p>
              <Image
                class="tabler-icon-phone-call textxoloe"
                src={Phone}
                alt="Phone"
                height="20"
                width="20"
              />{" "}
              {item.phone}
            </p>
            <p>
              <Image
                class="tabler-icon-phone-call textxoloe"
                src={Globe}
                alt="Globe"
                height="20"
                width="20"
              />{" "}
              {item.website}
            </p>
          </div>
          <div class="ButtonDiv">
            <button class="primary-button" onClick={FollowHandle}>Follow</button>
            <button class="blue-button">Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}
