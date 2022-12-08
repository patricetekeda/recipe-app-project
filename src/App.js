import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  //create a use tate for new and preexisting recipe data
  const [recipes, setRecipes] = useState(RecipeData);

  //uses the form data and spreads it to the recipe array
  const addRecipe = (data) => {
    setRecipes([...recipes, data]);
  };

  //adds the delete functionality to each row containing a recipe
  function deleteRecipe(targetIndex) {
    setRecipes(recipes.filter((_, index) => index !== targetIndex));
  }
  // creating props so I can use addRecipe and deleteRecipe  in my components
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
