import React from "react";

const Ingredient = recipe => {
  // console.log(recipe);

  const [ingredients] = recipe;

  console.log(ingredients)

  return (
    <div>
      <input type="text" placeholder="Ingredient" name="ingredients" />
    </div>
  );
};

export default Ingredient;
