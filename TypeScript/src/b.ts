import { z } from "zod";

const profile = z
  .object({
    firstName: z.string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    }),

    lastName: z.string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    }),

    mobileNumber: z.number({
      required_error: "Mobile number is required",
      invalid_type_error: "Mobile number must be a number",
    }),

    confirmMobileNumber: z.number({}),
  })
  .refine((data) => data.mobileNumber === data.confirmMobileNumber, {
    message: "Oops! Phone numbers doesnt match",
  });

const result = profile.safeParse({
  firstName: "Jane",
  lastName: "Doe",
  mobileNumber: "1111111111",
  confirmMobileNumber: "1111111111",
});

console.log(result);
