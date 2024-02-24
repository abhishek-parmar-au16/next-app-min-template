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
  const [follow,setFollow]=useState(false);
  const [deleteBtn,setDeleteBtn]= useState(false);

  useEffect(() => {
    const Res = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        const DataFollo = res.data.map((idx)=>({...idx, status:false}))
        console.log("DataFollo",DataFollo);
        setData(DataFollo);
      });
    const ResP = axios
      .get("https://api.dicebear.com/7.x/initials/svg?seed=UserName")
      .then((res) => {
        console.log("barcc", res);
        // setData(res.data);
      });
  }, []);

  const FollowHandle=(item)=>{
    console.log("item",item);
    const objIndex = data.map(obj => obj.id == item.id ? !obj.status ? {...obj ,status:true} :{...obj ,status:false}: {...obj})
    console.log("data",objIndex);
    setData(objIndex)
      
  }

  const handleDelete =(item)=>{
console.log("dele",item);
setData(data.filter((i) => i.id !== item.id));
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
        <div className="card" style={{ padding: "14px", margin: "1rem" }} key={item.id}>
          <div className="img">
            {/* <div >Abhishek</div> */}
            <img id="rcorners1" src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.name}`} alt="avatar" />
            <b>{item.name}</b>
          </div>

          <div className="container">
            <p className="textxoloe">
              <Image
                className="tabler-icon-phone-call "
                src={AtTheRate}
                alt="At The Rate"
                height="20"
                width="20"
              />{" "}
              {item.email}
            </p>
            <p>
              <Image
                className="tabler-icon-phone-call textxoloe"
                src={Phone}
                alt="Phone"
                height="20"
                width="20"
              />{" "}
              {item.phone}
            </p>
            <p>
              <Image
                className="tabler-icon-phone-call textxoloe"
                src={Globe}
                alt="Globe"
                height="20"
                width="20"
              />{" "}
              {item.website}
            </p>
          </div>
          <div className="ButtonDiv">
            <button className="primary-button" key={item.id} onClick={()=>FollowHandle(item)}>{item.status==true?"Unfollow":"Follow"}</button>
            <button className="blue-button" onClick={()=>handleDelete(item)}>Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}
