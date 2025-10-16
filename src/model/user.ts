import * as z from "zod";

export const ZUser = z.object({
  name: z.string().min(1, {error: "Must not be empty."}),
  email: z.email("Enter a valid email address."),
  password: z.string().min(8, {error: "Must be at least 8 characters long."})
});