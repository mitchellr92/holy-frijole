import React, { useReducer } from "react";
import axios from "axios";
import RecipeContext from "./RecipeContext";
import RecipeReducer from "./RecipeReducer";
import {
  GET_RECIPES,
  ADD_RECIPE,
  // DELETE_RECIPE,
  // SET_CURRENT,
  // CLEAR_CURRENT,
  // UPDATE_RECIPE,
  // FILTER_RECIPES,
  // CLEAR_FILTER,
  RECIPE_ERROR,
  SET_CURRENT
  // CLEAR_RECIPES
} from "../types";

const RecipeState = props => {
  const initialState = {
    recipes: null,
    error: null
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  // Get recipes
  const getRecipes = async () => {
    try {
      const res = await axios.get("/api/recipes");

      dispatch({
        type: GET_RECIPES,
        payload: res.data.recipes
      });
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.msg
      });
    }
  };

  // Add recipe
  const addRecipe = async recipe => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/add-recipe", recipe, config);

      dispatch({
        type: ADD_RECIPE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.msg
      });
    }
  };

  // Set current recipe
  const setRecipe = recipe => {
    dispatch({ type: SET_CURRENT, payload: recipe });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        error: state.error,
        getRecipes,
        addRecipe,
        setRecipe
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
