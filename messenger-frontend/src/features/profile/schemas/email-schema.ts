import formErrorMessages from "@/features/auth/constants/form-error-messages";
import * as zod from "zod";

export const changeEmailSchema = zod.object({
  email: zod.email({
    error: (issue) =>
      !issue.input
        ? formErrorMessages.fieldRequired
        : formErrorMessages.invalidEmail,
  }),
});

export interface ChangeEmailFormValues {
  email: string;
}
