import type { RequestInit } from "next/dist/server/web/spec-extension/request";
interface FetchWithCredentialsProps<T> {
    url: string;
    method: RequestInit["method"];
    body?: T;
    setCookies?: boolean;
}
export default function fetchWithCredentials<T>({ url, method, body, setCookies, }: FetchWithCredentialsProps<T>): Promise<Response>;
export {};
