import React, { useState, useContext, useEffect } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";

const RecipeForm = () => {
  const recipeContext = useContext(RecipeContext);

  const { addRecipe, current } = recipeContext;

  // useEffect(() => {
  //   console.log("run once");
  //   if (current !== null) {
  //     setRecipe(current);
  //   } else {
  //     setRecipe({
  //       teamName: "",
  //       recipeName: "",
  //       ingredients: [],
  //       directions: "",
  //       cookTime: ""
  //     });
  //   }
  // }, [recipeContext, current]);

  const [recipe, setRecipe] = useState({
    teamName: "",
    recipeName: "",
    ingredients: ["", "", "", "", "", "", "", ""],
    directions: "",
    cookTime: ""
  });

  const { teamName, recipeName, ingredients, directions, cookTime } = recipe;

  const onChange = e => {
    e.preventDefault();
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addRecipe(recipe);
  };



  const onClick = () => {
    ingredients.push(
      <li className="ms-5 mb-3">
        <input type="text" />
      </li>
    );

    console.log(ingredients[0]);
  };

  ingredients.push(
    <div className="ms-5 mb-3">
      <input
        type="submit"
        value="Add Ingredient +"
        onClick={onClick}
        className="btn btn-primary btn-block"
      />
    </div>
  );

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
            <li className="ms-5 mb-3">
              <input type="text" value={ingredients[0]} onChange={onChange}/>
            </li>
            <li className="ms-5 mb-3">
              <input type="text" value={ingredients[1]} onChange={onChange}/>
            </li>
            <li className="ms-5 mb-3">
              <input type="text" value={ingredients[2]} onChange={onChange}/>
            </li>
            <li className="ms-5 mb-3">
              <input type="text" value={ingredients[3]} onChange={onChange}/>
            </li>
            <li className="ms-5 mb-3">
              <input type="text" value={ingredients[4]} onChange={onChange}/>
            </li>
            <li className="ms-5 mb-3">
              <input type="text" value={ingredients[5]} onChange={onChange}/>
            </li>
            <li className="ms-5 mb-3">
              <input type="text" value={ingredients[6]} onChange={onChange}/>
            </li>
            <li className="ms-5 mb-3">
              <input type="text" value={ingredients[7]} onChange={onChange}/>
            </li>
          </ol>
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
