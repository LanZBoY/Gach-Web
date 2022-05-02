import { getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";

const Photoview = ({ item }) => {
  const [url, setURL] = useState("");

  useEffect(() => {
    getDownloadURL(item).then((downloadURL) => {
      setURL(downloadURL);
    });
  }, []);

  return (
    <>
      <img src={url} width="10%" height="10%"></img>
    </>
  );
};

export default Photoview;
