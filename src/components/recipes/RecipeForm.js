import React from "react";

const RecipeForm = () => {
  return (
    <div className="d-flex flex-column w-25 p-3 m-auto border border-danger">
      <p>Team Name</p>
      <input type="text" />
      <p>Chili Name</p>
      <input type="text" />
      <p>Ingredients</p>
      <div>Array</div>
      <p>Directions</p>
      <input type="text" />
      <p>Cook Time</p>
      <input type="text" />
    </div>
  );
};

export default RecipeForm;
