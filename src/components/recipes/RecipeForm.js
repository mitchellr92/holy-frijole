import React, { useState, useContext, useEffect } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";

const RecipeForm = () => {
  const recipeContext = useContext(RecipeContext);

  const { addRecipe, current } = recipeContext;

  useEffect(() => {
    if (current !== null) {
      setRecipe(current);
    } else {
      setRecipe({
        teamName: "",
        recipeName: "",
        ingredients: [],
        directions: "",
        cookTime: ""
      });
    }
  }, [recipeContext, current]);

  const [recipe, setRecipe] = useState({
    teamName: "",
    recipeName: "",
    ingredients: [],
    directions: "",
    cookTime: ""
  });

  const { teamName, recipeName, ingredients, directions, cookTime } = recipe;

  const onChange = e =>
    setRecipe({ ...recipe, [e.target.value]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addRecipe(recipe);
    } else {
      // updateRecipe(recipe);
    }
  };

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
          <ol className="d-flex flex-wrap">
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
            <li className="ms-5 mb-3">
              <input type="text" />
            </li>
          </ol>
        </div>
        <h4>Directions</h4>
        <div className="input-group">
          <textarea
            className="form-control"
            type="text"
            name="directions"
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
            value={cookTime}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
