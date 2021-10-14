import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeContext from "../../context/recipes/RecipeContext";
import RecipeItem from "./RecipeItem";

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, getRecipes } = recipeContext;

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {recipes !== null ? (
        <div>
          <Link to="/add-recipe">Add Your Recipe!</Link>
          <div className="d-flex justify-content-around">
            {recipes.map(recipe => (
              <div className="">
                <RecipeItem key={recipe._id} recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
};

export default Recipes;
