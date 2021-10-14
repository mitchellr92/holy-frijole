import React from "react";
// import RecipeContext from "../../context/recipes/RecipeContext";

const RecipeItem = ({ recipe }) => {
  // const recipeContext = useContext(RecipeContext);

  const {
    // _id,
    teamName,
    recipeName,
    ingredients,
    directions,
    cookTime
  } = recipe;
  return (
    <div className="recipe border rounded border-danger">
      <h3>
        {teamName} {recipeName}
      </h3>
      <div>{ingredients}</div>
      <div>{directions}</div>
      <div>{cookTime}</div>
    </div>
  );
};

export default RecipeItem;
