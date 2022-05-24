import { UserType } from "../TypeDefs/User";
import { GraphQLList } from "graphql";
import { Users } from "../../Entities/Users";

export const GET_ALL_USERS = {
  name: "getAllUsers",
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};
