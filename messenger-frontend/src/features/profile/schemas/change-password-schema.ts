import formErrorMessages from "@/features/auth/constants/form-error-messages";
import * as zod from "zod";

const zodObject = {
  currentPassword: zod
    .string(formErrorMessages.fieldRequired)
    .nonempty(formErrorMessages.fieldRequired)
    .min(6, formErrorMessages.passwordTooShort),
  newPassword: zod
    .string(formErrorMessages.fieldRequired)
    .nonempty(formErrorMessages.fieldRequired)
    .min(6, formErrorMessages.passwordTooShort),
  confirmNewPassword: zod
    .string(formErrorMessages.fieldRequired)
    .nonempty(formErrorMessages.fieldRequired),
};

export const changePasswordSchema = zod
  .object(zodObject)
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    error: formErrorMessages.passwordsUnmatch,
    path: ["confirmNewPassword"],
  });

export interface ChangePasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
