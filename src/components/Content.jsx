import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faPersonWalkingLuggage,
} from "@fortawesome/free-solid-svg-icons";
import "./content.css";

function Content() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(1);
  const [isLast, setIsLast] = useState(false);

  let userPerPage = 12

  function pervPage() {
    if (pagination > 1) {
      setPagination((perv) => perv - 1);
    }
  }

  function nextPage() {
    if (!isLast) {
      setPagination((perv) => perv + 1);
    }
  }

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums?_page=${pagination}&_limit=${userPerPage}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Album Fetching Failed");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLast(data.length < userPerPage);
      })
      .catch((err) => setError(err.message));
  }, [pagination]);

  return (
    <>
      <div className="content-cont">
        {error && <div>Error:{error}</div>}
        {data.length === 0 && !error && <div className="loader"></div>}
        {data.length > 0 &&
          data.map((item) => (
            <div key={item.id} className="items">
              <FontAwesomeIcon icon={faCompactDisc} />
              <h1>{item.title}</h1>
            </div>
          ))}
      </div>
      <div className="pagination">
        <button onClick={pervPage} disabled={pagination === 1}>
          Pervious
        </button>
        <button onClick={nextPage} disabled={isLast}>
          Next
        </button>
      </div>
    </>
  );
}

export default Content;
