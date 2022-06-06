// import React, { useEffect, useState } from "react";
import React,{ useState, useEffect } from 'react'
// import { getInstanceStorage } from "../utils/firebaseAPI";
import Bar from "../components/Bar";
import { firestore } from '../utils/firebaseAPI';
import { collection, getDocs } from 'firebase/firestore';
import Postview from '../components/PostView';
// import Photoview from "../components/PhotoView";
// import { listAll, ref } from "firebase/storage";
const  PostPage = () => {
  // const storage = getInstanceStorage();
  const [docs, setDocs] = useState([]);

  // function loadPhotoList() {
  //   const listPhotoRef = ref(storage, "/Photo");
  //   listAll(listPhotoRef).then((res) => {
  //     setListFile(res.items);
  //   });
  // }
  function getPosts(){
    getDocs(collection(firestore, 'post')).then((querySnapshot) =>{
      querySnapshot.forEach((doc)=>{
        const data = {
          id:doc.id,
          item:doc.data()
        }
        setDocs((prev) =>{
          return [...prev, data]
        })
      })
    })
  }

  useEffect(()=>{
    getPosts()
  }, [])
  return (
    <>
      <Bar />

      {docs.map((item) => {
        return <Postview item={item.item} key={item.id} />
      }
      )}
    </>
  );
};

export default PostPage;
