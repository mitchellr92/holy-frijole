import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeContext from "../../context/recipes/RecipeContext";

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, getRecipes } = recipeContext;

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, []);

  console.log(recipes);
  return (
    <Fragment>
      <div>
        <Link to="/add-recipe">Add Your Recipe!</Link>
      </div>
      {recipes.map(recipe => (
        <RecipeItem recipe={recipe} />
      ))}
    </Fragment>
  );
};

export default Recipes;
