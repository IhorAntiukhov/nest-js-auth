"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignUpForm;
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const form_input_1 = __importDefault(require("@/components/ui/form-input"));
const zod_1 = require("@hookform/resolvers/zod");
const link_1 = __importDefault(require("next/link"));
const react_hook_form_1 = require("react-hook-form");
const sign_up_form_schema_1 = require("../schemas/sign-up-form-schema");
const sign_up_1 = __importDefault(require("../actions/sign-up"));
const sonner_1 = require("sonner");
function SignUpForm() {
    const { control, formState: { errors }, handleSubmit, } = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(sign_up_form_schema_1.signUpFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const handleSignUp = handleSubmit(async ({ name, email, password }) => {
        try {
            await (0, sign_up_1.default)({ name, email, password });
            sonner_1.toast.success("User was successfully created!");
        }
        catch (error) {
            sonner_1.toast.error(error.message);
        }
    });
    return (<>
      <card_1.CardHeader className="flex flex-col items-center">
        <card_1.CardTitle>Welcome to Booking App</card_1.CardTitle>
        <card_1.CardDescription className="text-center">
          Create rooms, invite users, and make bookings
        </card_1.CardDescription>
      </card_1.CardHeader>

      <card_1.CardContent>
        <form onSubmit={handleSignUp} className="space-y-5">
          <div className="space-y-3">
            <form_input_1.default name="name" control={control} placeholder="User name" description="Enter your name" type="text" errors={errors}/>

            <form_input_1.default name="email" control={control} placeholder="Email" description="Enter your email" type="email" errors={errors}/>
          </div>

          <div className="space-y-3">
            <form_input_1.default name="password" control={control} placeholder="Password" description="Enter your password" type="password" errors={errors}/>

            <form_input_1.default name="confirmPassword" control={control} placeholder="Password" description="Confirm your password" type="password" errors={errors}/>
          </div>

          <button_1.Button className="w-full">Sign up</button_1.Button>
        </form>
      </card_1.CardContent>

      <card_1.CardFooter>
        <p>
          Already have an account?{" "}
          <link_1.default href="/sign-in" className="font-bold">
            Sign in
          </link_1.default>
        </p>
      </card_1.CardFooter>
    </>);
}
//# sourceMappingURL=sign-up-form.js.map