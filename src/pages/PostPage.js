import React, { useState, useEffect } from 'react'
import Bar from "../components/Bar";
import { firestore } from '../utils/firebaseAPI';
import { collection, getDocs } from 'firebase/firestore';
import Postview from '../components/PostView';
import { Container } from 'react-bootstrap';

const PostPage = () => {

  const [docs, setDocs] = useState([]);

  function getPosts() {
    getDocs(collection(firestore, 'post')).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          item: doc.data()
        }
        setDocs((prev) => {
          return [...prev, data]
        })
      })
    })
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <>
      <Bar />
      <Container>
        {docs.map((item) => {
          return <Postview item={item.item} key={item.id} />
        })}
      </Container>
      
    </>
  );
};

export default PostPage;
