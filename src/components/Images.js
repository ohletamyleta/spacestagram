import React, { useState, useEffect } from 'react';

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
      <ul>
        {items.map(item => (
          <li>
            <img src={item.url} />
            
            {item.title} {item.date}
          </li>
        ))}
      </ul>
    );
  }
}

export default Images;