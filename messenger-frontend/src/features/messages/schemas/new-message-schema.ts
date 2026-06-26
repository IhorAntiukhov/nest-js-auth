import formErrorMessages from "@/features/auth/constants/form-error-messages";
import * as zod from "zod";

export const newMessageSchema = zod.object({
  content: zod
    .string(formErrorMessages.fieldRequired)
    .nonempty(formErrorMessages.fieldRequired),
});

export interface NewMessageFormValues {
  content: string;
}
