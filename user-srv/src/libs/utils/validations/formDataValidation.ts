

  import { body } from "express-validator";

  export const RegistrationDataValidation = [
    body("firstName")
      .isString()
      .withMessage("First name must be a string")
      .matches(/^[a-zA-Z]+$/)
      .withMessage("First name must contain only alphabetical characters"),
    body("lastName")
      .isString()
      .withMessage("Last name must be a string")
      .matches(/^[a-zA-Z]+$/)
      .withMessage("Last name must contain only alphabetical characters"),
    body("email")
      .isString()
      .withMessage("Email must be a string")
      .isEmail()
      .withMessage("Email must be in email format"),
    body("password")
      .isString()
      .withMessage("Password must be a string"),
    body("phone")
      .isString()
      .withMessage("Number must be a string")
      .isLength({ min: 10, max: 10 })
      .withMessage("Number must have a length of 10")
      .matches(/^[0-9]+$/)
      .withMessage("Number must contain only numeric characters"),
  ];
