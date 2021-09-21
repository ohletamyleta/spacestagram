import React, { useState, useEffect } from 'react';
import Like from './Like';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

function Images() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const url = "https://api.nasa.gov/planetary/apod?api_key=toByqhUym0noaMeTuDtexLfJ2bbyMsW97w9XuGwF&count=10";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)
        },

       (error) => {
          setIsLoaded(true);
          setError(error);
        } 
     )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
     <Container>
      <ul>
        {items.map(item => (
          <li>
            
            <img src={item.url} width="750" height="750" alt="Something super cool and spacey should be here!" />
            <br></br>
            <Like />
            <br></br>
              <ListGroup>
                <ListGroup.Item>Title: {item.title}</ListGroup.Item>
                <ListGroup.Item>Date Taken: {item.date}</ListGroup.Item>
                </ListGroup>  
          </li>
        ))}
      </ul>
      </Container>
   
    );
  }
}

export default Images;