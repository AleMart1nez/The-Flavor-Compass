import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_MY_RECIPES = "FILTER_MY_RECIPES";
export const SORT_BY_ORDER = "SORT_BY_ORDER";
export const GET_DIETS = "GET_DIETS";
export const FILTER_BY_DIET = "FILTER_BY_DIET";

// -------------------------------------- RECIPES--------------------------------------------
// ---------------------------------------- GET -------------------------------------------

export const getRecipes = () => (dispatch) => {
  return axios
    .get("/recipes")
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: GET_RECIPES, payload: data });
    })
    .catch((error) => {
      console.log(error);
    });
};

// --------------------------------------- POST -------------------------------------------

export const createRecipe = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/recipes/create", payload);
      return dispatch({ type: CREATE_RECIPE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//  -------------------------------- FILTERS / SORTS ------------------------------------------

export const getRecipeByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/recipes?name=${name}`);
      return dispatch({ type: GET_RECIPE_BY_NAME, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRecipeById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/recipes/${id}`);
      return dispatch({ type: GET_RECIPE_BY_ID, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterMyRecipes = (created) => {
  return {
    type: FILTER_MY_RECIPES,
    payload: created,
  };
};

export const sort = (order) => {
  return {
    type: SORT_BY_ORDER,
    payload: order,
  };
};

export const getDiets = () => (dispatch) => {
  return axios
    .get("/diets")
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: GET_DIETS, payload: data });
    })
    .catch((error) => {
      console.log(error);
    });
};

// ------------------------------------------ FILTER ------------------------------------------

export const filterByDiet = (diet) => {
  return {
    type: FILTER_BY_DIET,
    payload: diet,
  };
};

export default getRecipeById;
