import { getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import "./PhotoView.css";
const Photoview = ({ item }) => {
  const [url, setURL] = useState("");

  useEffect(() => {
    getDownloadURL(item).then((downloadURL) => {
      setURL(downloadURL);
    });
  }, []);

  return (
    <>
      <li className="photoList">
        <h1>{item.name}</h1>
        <img src={url} className="photo"></img>
      </li>
    </>
  );
};

export default Photoview;
