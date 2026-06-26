import * as zod from "zod";
export declare const signInFormSchema: zod.ZodObject<{
    email: zod.ZodEmail;
    password: zod.ZodString;
}, zod.z.core.$strip>;
export interface SignInFormValues {
    email: string;
    password: string;
}
