import mealsModel from "../../models/Meals/meals.model.js";
import { createAndThrowError } from "../../utils/error.js";

const addRecipeToMeal = async function (userId, date, mealType, recipeId) {
  try {
    const result = await mealsModel.updateOne(
      { by_user: userId, mealDate: new Date(date) }, // Filter by user and date
      {
        $push: { [mealType]: recipeId }, // Add recipe to the meal type array
        $setOnInsert: { by_user: userId, mealDate: new Date(date) }, // Set these fields if inserting a new document
      },
      { upsert: true } // Enable upsert
    );

    return result;
  } catch (error) {
    console.error(error);
    throw createAndThrowError("Unable to add meal to planner", 500);
  }
};
const getMealsByDate = async function (date) {
  try {
    const result = await mealsModel
      .findOne(
        { mealDate: new Date(date) } // Filter by user and date
      )
      .populate({
        path: "breakfast",
        select: "Name AuthorName AggregatedRating",
      })
      .populate({
        path: "lunch",
        select: "Name AuthorName AggregatedRating",
      });

    return result;
  } catch (error) {
    console.error(error);
    throw createAndThrowError("Unable to fetch meal from planner", 500);
  }
};
const removeRecipeFromMeal = async function (userId, date, mealType, recipeId) {
  try {
    const result = await mealsModel.updateOne(
      { by_user: userId, mealDate: new Date(date) }, // Filter by user and date
      {
        $pull: { [mealType]: recipeId }, // Add recipe to the meal type array
      } // Enable upsert
    );

    return result;
  } catch (error) {
    console.error(error);
    throw createAndThrowError("Unable to remove meal from planner", 500);
  }
};

export { addRecipeToMeal, removeRecipeFromMeal, getMealsByDate };
