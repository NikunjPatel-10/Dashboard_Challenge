import React, { useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  useEffect(() => {

    fetch('https://hooks-projects-default-rtdb.firebaseio.com/ingredients.json').then(response => response.json()).then(responseData => {

      const loadedIngredients = [];
      for (const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        })
      }
    })

  }, [])
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" />
        </div>
      </Card>
    </section>
  );
});

export default Search;
