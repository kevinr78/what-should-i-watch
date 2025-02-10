import userModel from "../../models/User/user.model.js";
import recipeModel from "../../models/Recipe/recipe.model.js";
import { createAndThrowError } from "../../utils/error.js";
import mongoose from "mongoose";

const getAllRecipes = async function () {
  const recipes = await recipeModel.find().limit(50);
  if (!recipes) {
    throw createAndThrowError("Error while fetching recipes", 404);
  }
  return recipes;
};

const findOneRecipe = async function (query = null) {
  let recipe;

  try {
    if (typeof query === "object") {
      recipe = await recipeModel
        .find({
          _id: { $in: query },
        })
        .select("_id");
    } else {
      recipe = await recipeModel.findOne({ _id: query });
    }
  } catch (error) {
    console.log(error);
  }

  if (!recipe) {
    throw createAndThrowError("Unable to find one selected Recipe", 404);
  }
  return recipe;
};

const getSavedRecipesByUserId = async function (userId, savedRecipeArray) {
  console.log(savedRecipeArray);
  const savedRecipes = await recipeModel.find({
    _id: { $in: savedRecipeArray },
  });

  if (!savedRecipes) {
    throw createAndThrowError("Unable to fetch saved Recipes", 404);
  }

  return savedRecipes;
};

const addSavedRecipeToUser = async function (userId, recipeArray) {
  const isUpdated = await userModel.updateOne(
    { _id: userId },
    {
      $push: { savedRecipes: { $each: recipeArray } },
    }
  );
  if (!isUpdated) {
    throw createAndThrowError("Error while saving recipe", 404);
  }
  return isUpdated;
};

const removeSavedRecipeFromUser = async function (userId, recipeId) {
  const updatedSavedArray = await userModel.updateOne(
    { _id: userId },
    {
      $pull: {
        savedRecipes: { $in: recipeId },
      },
    }
  );

  if (!updatedSavedArray || updatedSavedArray.modifiedCount == 0) {
    throw createAndThrowError("Unable to remove recipe", 404);
  }

  return updatedSavedArray;
};

export {
  addSavedRecipeToUser,
  findOneRecipe,
  removeSavedRecipeFromUser,
  getAllRecipes,
  getSavedRecipesByUserId,
};
