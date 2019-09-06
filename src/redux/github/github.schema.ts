import { schema } from "normalizr";

// Define a users schema
export const user = new schema.Entity("user");

export const prSchema = new schema.Entity("pr", {
  user: user,
  requested_reviewers: [user]
});

export const prListSchema = [prSchema];
