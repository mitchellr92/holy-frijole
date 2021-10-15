import React, { useState, useContext, useEffect } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";

const IngredientArray = () => {
  const recipeContext = useContext(RecipeContext);

  const [recipe, setRecipe] = useState({
    teamName: "",
    recipeName: "",
    ingredients: [],
    directions: "",
    cookTime: ""
  });

  const { ingredients } = recipe;

  const onChange = e => {
    e.preventDefault();
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  for (let i = 0; i < 10; i++) {
    ingredients.push(
      <li className="ms-5 mb-3">
        <input type="text" onChange={onChange} />
      </li>
    );
  }

  return <ol>{ingredients}</ol>;
};

export default IngredientArray;
