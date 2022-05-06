import React, { useEffect, useState } from "react";
import { getInstanceStorage } from "../utils/firebaseAPI";
import Bar from "../components/Bar";
import Photoview from "../components/PhotoView";
import { listAll, ref } from "firebase/storage";
const PhotoPage = () => {
  const storage = getInstanceStorage();
  const [listFile, setListFile] = useState([]);

  function loadPhotoList() {
    const listPhotoRef = ref(storage, "/Photo");
    listAll(listPhotoRef).then((res) => {
      setListFile(res.items);
    });
  }

  useEffect(() => {
    loadPhotoList();
  }, []);
  return (
    <>
      <Bar />
      <ul>
        {listFile.map((item) => (
        <Photoview item={item} key={item.name} />
        ))}
      </ul>
      
    </>
  );
};

export default PhotoPage;
