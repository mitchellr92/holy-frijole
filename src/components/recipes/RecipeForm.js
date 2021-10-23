import React, { useContext, useState, useEffect } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";
import Ingredient from "./Ingredient";

const RecipeForm = () => {
  const recipeContext = useContext(RecipeContext);

  const { addRecipe } = recipeContext;

  const [recipe, setRecipe] = useState({
    teamName: "",
    recipeName: "",
    ingredients: [],
    directions: "",
    cookTime: ""
  });

  const onChange = e => {
    e.preventDefault();
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
    // console.log(e.target.name, e.target.value);
  };

  const { teamName, recipeName, ingredients, directions, cookTime } = recipe;

  // const inputArr = [];

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      ingredients.push("");
    }
    // eslint-disable-next-line
  }, []);

  console.log(ingredients, 'hello');

  // for (let i = 0; i < 10; i++) {
  //   const name = "ingredients" + i;
  //   const value = ingredients[i];
  //   inputArr.push(
  //     <div className="d-flex">
  //       <input
  //         type="text"
  //         placeholder="Ingredient + Amount"
  //         name={name}
  //         value={value}
  //         onChange={onChange}
  //       />
  //     </div>
  //   );
  // }

  const onSubmit = e => {
    e.preventDefault();
    addRecipe(recipe);
  };

  return (
    <div className="w-50 p-3 m-auto border border-danger">
      <form action="" className="d-flex flex-column" onSubmit={onSubmit}>
        <p>Team Name</p>
        <input
          type="text"
          value={teamName}
          name="teamName"
          onChange={onChange}
        />
        <p>Chili Name</p>
        <input
          type="text"
          value={recipeName}
          name="recipeName"
          onChange={onChange}
        />
        <p>Ingredients</p>
        {ingredients.map(ingredient => (
          <div>
            <Ingredient recipe={recipe}/>
          </div>
        ))}
        <p>Directions</p>
        <input
          type="text"
          value={directions}
          name="directions"
          onChange={onChange}
        />
        <p>Cook Time</p>
        <input
          type="text"
          value={cookTime}
          name="cookTime"
          onChange={onChange}
        />
        <input
          type="submit"
          value="Add Recipe"
          className="btn btn-danger btn-block w-100"
        />
      </form>
    </div>
  );
};

export default RecipeForm;
