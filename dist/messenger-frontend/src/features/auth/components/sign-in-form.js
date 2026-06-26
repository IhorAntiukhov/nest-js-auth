"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignInForm;
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const form_input_1 = __importDefault(require("@/components/ui/form-input"));
const sign_in_form_schema_1 = require("@/features/auth/schemas/sign-in-form-schema");
const zod_1 = require("@hookform/resolvers/zod");
const link_1 = __importDefault(require("next/link"));
const react_hook_form_1 = require("react-hook-form");
const sign_in_1 = __importDefault(require("../actions/sign-in"));
const sonner_1 = require("sonner");
const navigation_1 = require("next/navigation");
function SignInForm() {
    const router = (0, navigation_1.useRouter)();
    const { control, formState: { errors }, handleSubmit, } = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(sign_in_form_schema_1.signInFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const handleSignIn = handleSubmit(async ({ email, password }) => {
        try {
            await (0, sign_in_1.default)({ email, password });
            sonner_1.toast.success("You successfully logged in!");
            router.refresh();
            router.replace("/");
        }
        catch (error) {
            sonner_1.toast.error(error.message);
        }
    });
    return (<>
      <card_1.CardHeader className="flex flex-col items-center">
        <card_1.CardTitle>Welcome back!</card_1.CardTitle>
        <card_1.CardDescription className="text-center">
          Sign in to your account
        </card_1.CardDescription>
      </card_1.CardHeader>

      <card_1.CardContent>
        <form onSubmit={handleSignIn} className="space-y-3">
          <form_input_1.default name="email" control={control} placeholder="Email" description="Enter your email" type="email" errors={errors}/>

          <form_input_1.default name="password" control={control} placeholder="Password" description="Enter your password" type="password" errors={errors}/>

          <button_1.Button className="w-full">Sign in</button_1.Button>
        </form>
      </card_1.CardContent>

      <card_1.CardFooter>
        <p>
          New to booking?{" "}
          <link_1.default href="/sign-up" className="font-bold">
            Sign up
          </link_1.default>
        </p>
      </card_1.CardFooter>
    </>);
}
//# sourceMappingURL=sign-in-form.js.map