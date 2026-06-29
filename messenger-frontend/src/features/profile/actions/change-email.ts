"use server";

import fetchWithCredentials from "@/actions/fetch-with-credentials";

interface ChangeEmailProps {
  newEmail: string;
}

export default async function changeEmail({ newEmail }: ChangeEmailProps) {
  const response = await fetchWithCredentials({
    url: "/profile/change-email",
    method: "PUT",
    body: { newEmail },
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }
}
