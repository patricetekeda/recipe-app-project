import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  // rows is a variable that contains the map method and sorts each key:value pair in each recip to its own row and column
  //mapp iterates through my recipes array and creates a new arrray with a singluar recipe and the key:value pairs are spread along the column white each individual recipe is its own row
  const rows = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          {" "}
          <img src={photo} />
        </td>
        <td className="content_td">
          <p>{ingredients}</p>
        </td>
        <td className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          {" "}
          <button name="delete" onClick={() => deleteRecipe(index)}>
            Delete
          </button>{" "}
        </td>
      </tr>
    )
  );

  //i useed  th to write each key of the key value pairs as a header
  //in the body you will see my rows varible so that each recipe is designated to its own row

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
