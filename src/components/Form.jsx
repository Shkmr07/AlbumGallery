import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./form.css";

function Form() {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  function formSubmit(e) {

    e.preventDefault();

    if(data.trim() === ''){
      setError('Input Field Cannot Be Empty')
      return
    }

    

    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({ title: data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Post Request Fetching Failed");
        }
        return res.json();
      })
      .then(()=>{
        setData('')
        navigate('/')
      })
      .catch((err) => setError(err.message));

    
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          id="title"
          value={data}
          placeholder="Enter Title"
          onChange={(e) => setData(e.target.value)}
        />
        <input type="submit" id="submit" />
      </form>
      {error && <p style={{color:'red'}}>Error : {error}</p>}
    </div>
  );
}

export default Form;
