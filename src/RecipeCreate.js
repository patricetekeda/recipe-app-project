import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
//intial form to set the reset the form after it's been used

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    comment: "",
    ingredients: "",
    preparation: "",
  };
//use state to hold the form data
  const [formData, setFormData] = useState({...initialFormState})


//this function pushes form data into the form data state
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //this moves the conent  of formData to our recipe array and then resets our form to ensure it is blank and ready for the next recipe
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };
  
//this is where we are building our form 
//tbody is everythibg below the header
//tr holds our form even though the form is technically wrapped around the whole table
//td conatin each input 
//input use attributes to call our handlechange func and send our form entries to form data
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
        
          <tr>
            <td> 
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value= {formData.name}
              />
            </td>
            <td>
            <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value= {formData.cuisine}
              />
            </td>
            <td>
            <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value= {formData.photo}
              />
            </td>
            <td>
            <textarea
              id="ingredients"
              name="ingredients"
              placeholder="Ingredients"
              onChange={handleChange}
              value= {formData.ingredients}
            />
            </td>
            <td>
            <textarea
              id="preparation"
              name="preparation"
              placeholder="preparation"
              onChange={handleChange}
              value= {formData.preparation}
            />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
