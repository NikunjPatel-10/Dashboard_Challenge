import React, { useState, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';




function Ingredients() {
  const [userIngredient, setUserIngredient] = useState([])

  useEffect(() => {
    fetch('https://hooks-projects-default-rtdb.firebaseio.com/ingredients.json')
      .then(response => response.json()).then(responseData => {
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
  const addIngredientHandler = (ingredient) => {

    fetch("https://hooks-projects-default-rtdb.firebaseio.com/ingredients.json", {

      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application.json'
      }
    }).then(res => {
      return res.json()
    }).then(responseData => {

      setUserIngredient(prevIngredients => [
        ...prevIngredients, { id: responseData.name, ...ingredient }
      ])
    })


  }


  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredient} onRemoveItem={() => { }} />
      </section>
    </div>
  );
}

export default Ingredients;
