import { convertStringIntoArrayAndSortAscending } from "../helperfns/stringManipuationhelperFns.js";

export const processString = (req, res, next) => {
  const inputString = req.body.data;

  if (!inputString || typeof inputString !== "string") {
    return res.status(400).json({
      success: false,
      message: "Property data in request body is undefined or of wrong type",
    });
  }

  return res.status(200).json({
    word: convertStringIntoArrayAndSortAscending(inputString),
  });
};
