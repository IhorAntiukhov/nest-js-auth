import * as zod from "zod";
export declare const signUpFormSchema: zod.ZodObject<{
    name: zod.ZodString;
    email: zod.ZodEmail;
    password: zod.ZodString;
    confirmPassword: zod.ZodString;
}, zod.z.core.$strip>;
export interface SignUpFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
