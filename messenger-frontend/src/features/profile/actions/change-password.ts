"use server";

import fetchWithCredentials from "@/actions/fetch-with-credentials";

interface ChangePasswordProps {
  newPassword: string;
}

export default async function changePassword({
  newPassword,
}: ChangePasswordProps) {
  const response = await fetchWithCredentials({
    url: "/profile/change-password",
    method: "PUT",
    body: { newPassword },
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }
}
