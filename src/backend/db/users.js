import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Jaskirat",
    lastName: "Kaur",
    email: "jkonmail27@gmail.com",
    password: "jaskiratkaur",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
