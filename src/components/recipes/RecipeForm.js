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

  useEffect(() => {
    console.log("run once");
    for (let i = 0; i < 10; i++) {
      ingredients.push("");
    }
    console.log(ingredients);
    // eslint-disable-next-line
  }, []);

  const inputArr = [];

  for (let i = 0; i < 10; i++) {
    const ingName = "ingredient" + i;
    inputArr.push(
      <div>
        <input
          type="text"
          placeholder="Ingredient"
          name={ingName}
          value={ingredients[i]}
          onChange={onChange}
        />
      </div>
    );
  }

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
        {inputArr}
        {/* {ingredients.map(ingredient => (
          <div>
            <Ingredient ingredient={ingredient} onChange={onChange} />
          </div>
        ))} */}
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
