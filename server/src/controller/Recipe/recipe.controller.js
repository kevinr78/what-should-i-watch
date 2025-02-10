import { findUser } from "../../services/User/user.service.js";
import {
  addSavedRecipeToUser,
  findOneRecipe,
  getAllRecipes,
  getSavedRecipesByUserId,
  removeSavedRecipeFromUser,
} from "../../services/Recipe/recipe.service.js";
import mongoose from "mongoose";
import userModel from "../../models/User/user.model.js";

const getSavedRecipesByUser = async function (req, res, next) {
  const userId = req.user.id;

  try {
    const user = await userModel.findById(userId);
    console.log(user);
    const saveRecipes = await getSavedRecipesByUserId(
      user._id,
      user.savedRecipes
    );

    res
      .status(200)
      .json({ message: "Saved Recipes", data: saveRecipes, ok: true });
  } catch (error) {
    next(error);
  }
};

const fetchAllRecipes = async function (req, res, next) {
  // fetch all recipes from database
  const userId = req.user.id;
  try {
    const user = await findUser({ _id: userId });
    const recipes = await getAllRecipes();
    res
      .status(200)
      .json({ data: recipes, message: "Fetched all recipes", ok: true });
  } catch (error) {
    next(error);
  }
};
const fetchOneRecipe = async function (req, res, next) {
  // fetch all recipes from database
  const { recipeId } = req.params;

  const userId = req.user.id;
  try {
    const user = await findUser({ _id: userId });
    const recipes = await findOneRecipe(recipeId);
    res
      .status(200)
      .json({ data: recipes, message: "Fetched one recipes", ok: true });
  } catch (error) {
    next(error);
  }
};

const addRecipeToSaved = async function (req, res, next) {
  const { recipeArray } = req.body;

  const newRecipe = recipeArray.map((recipe) => {
    return new mongoose.Types.ObjectId(recipe.recipeId); // Convert to ObjectId
  });

  const userId = req.user.id;
  try {
    const user = await findUser({ _id: userId });
    const recipe = await findOneRecipe(newRecipe);

    const isUpdated = await addSavedRecipeToUser(user._id, recipe);

    res.status(200).json({
      message: "Recipe saved successfully",
      data: isUpdated,
      ok: true,
    });
  } catch (error) {
    next(error);
  }
};
const removeRecipeFromSaved = async function (req, res, next) {
  const { recipeArray } = req.body;
  const newRecipe = recipeArray.map(
    (recipe) => new mongoose.Types.ObjectId(recipe.recipeId)
  );
  const userId = req.user.id;
  try {
    const user = await findUser({ _id: userId });
    const isRemoved = await removeSavedRecipeFromUser(user._id, newRecipe);
    res.status(200).json({
      message: "Recipe removed successfully",
      data: isRemoved,
      ok: true,
    });
  } catch (error) {
    next(error);
  }
};

export {
  addRecipeToSaved,
  fetchAllRecipes,
  getSavedRecipesByUser,
  removeRecipeFromSaved,
  fetchOneRecipe,
};
