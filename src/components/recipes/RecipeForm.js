import React, { useState, useContext, useEffect } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";
import IngredientArray from "./IngredientArray";

const RecipeForm = props => {
  const recipeContext = useContext(RecipeContext);

  const { addRecipe, current } = recipeContext;

  useEffect(() => {
    console.log("run once");
    // if (current !== null) {
    //   setRecipe(current);
    // } else {
    //   setRecipe({
    //     teamName: "",
    //     recipeName: "",
    //     ingredients: [],
    //     directions: "",
    //     cookTime: ""
    //   });
    // }
  }, [recipeContext, current]);

  const onChange = e => {
    e.preventDefault();
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value, recipe);
  };

  const onChange2 = e => {
    e.preventDefault();
    // e.target.name = e.target.value;
    console.log(e.target.name, e.target.value);
  };

  let ingredientsArray = [];

  for (let i = 0; i < 10; i++) {
    ingredientsArray.push("");
  }

  const [recipe, setRecipe] = useState({
    teamName: "",
    recipeName: "",
    ingredients: ingredientsArray,
    directions: "",
    cookTime: ""
  });

  const { teamName, recipeName, ingredients, directions, cookTime } = recipe;

  const onSubmit = e => {
    e.preventDefault();
    addRecipe(recipe);
  };

  const onClick = () => {
    ingredientsArray.push("");
    console.log(recipe);
  };

  console.log(ingredientsArray[0]);

  return (
    <div className="d-flex flex-column">
      <h1 className="m-auto mb-4">Add Your Recipe</h1>
      <form
        className="border rounded border-danger p-5 mb-5 m-auto w-75"
        onSubmit={onSubmit}
      >
        <div className="d-flex">
          <div className="me-5">
            <h4>Team Name</h4>
            <input
              type="text"
              placeholder="Team Name"
              name="teamName"
              value={teamName}
              onChange={onChange}
            />
          </div>
          <div>
            <h4>Recipe Name</h4>
            <input
              type="text"
              placeholder="Recipe Name"
              name="recipeName"
              value={recipeName}
              onChange={onChange}
            />
          </div>
        </div>
        <div>
          <h4>Ingredients</h4>
          <ol className="d-flex flex-wrap border border-danger">
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredientsArray[0]"
              value={ingredientsArray[0]}
              onChange={onChange2}
            />
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              value={ingredientsArray[1]}
              onChange={onChange2}
            />
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              value={ingredientsArray[2]}
              onChange={onChange2}
            />
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              value={ingredientsArray[3]}
              onChange={onChange2}
            />
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              value={ingredientsArray[4]}
              onChange={onChange2}
            />
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              value={ingredientsArray[5]}
              onChange={onChange2}
            />
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              value={ingredientsArray[6]}
              onChange={onChange2}
            />
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              value={ingredientsArray[7]}
              onChange={onChange2}
            />
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              value={ingredientsArray[8]}
              onChange={onChange2}
            />
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              value={ingredientsArray[9]}
              onChange={onChange2}
            />
          </ol>
          <div className="ms-5 mb-3">
            <input
              type="submit"
              value="Add Ingredient +"
              onClick={onClick}
              className="btn btn-primary btn-block"
            />
          </div>
        </div>
        <h4>Directions</h4>
        <div className="input-group">
          <textarea
            className="form-control"
            type="text"
            name="directions"
            placeholder="Directions..."
            value={directions}
            onChange={onChange}
            cols="300"
            rows="12"
          ></textarea>
        </div>
        <div>
          <h4>Cooking Time</h4>
          <input
            type="text"
            name="cookTime"
            placeholder="Cooking Time"
            value={cookTime}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add Recipe"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
