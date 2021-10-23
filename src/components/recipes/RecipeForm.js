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
    console.log(e.target.name, e.target.value);
  };

  const { teamName, recipeName, ingredients, directions, cookTime } = recipe;

  const inputArr = [];

  for (let i = 0; i < 10; i++) {
    inputArr.push("");
  }

  for (let i = 0; i < 10; i++) {
    ingredients.push("");
  }

  useEffect(() => {
    // for (let i = 0; i < 10; i++) {
    //   ingredients.push("hi" + i);
    // }
    // eslint-disable-next-line
  }, []);

  // console.log(ingredients, 'hello');

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
        {inputArr.map((input, index) => (
          <div key={index}>
            <Ingredient
              ingredients={ingredients}
              onChange={onChange}
              index={index}
            />
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
