import UserSchema from "./userSchema.js";

export const insertUser = (obj) => {
  return UserSchema(obj).save();
};
