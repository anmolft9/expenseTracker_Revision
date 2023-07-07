import UserSchema from "./userSchema.js";

export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

///filter should be an object
export const getOneUser = (filter) => {
  return UserSchema.findOne(filter);
};
