interface SignInProps {
    email: string;
    password: string;
}
export default function signIn({ email, password }: SignInProps): Promise<void>;
export {};
