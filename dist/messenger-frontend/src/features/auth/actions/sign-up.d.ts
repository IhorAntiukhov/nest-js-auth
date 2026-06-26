interface SignUpProps {
    name: string;
    email: string;
    password: string;
}
export default function signUp({ name, email, password }: SignUpProps): Promise<void>;
export {};
