"use server";

import fetchWithCredentials from "@/actions/fetch-with-credentials";

interface CreateMessageProps {
  content: string;
}

export default async function createMessage({ content }: CreateMessageProps) {
  const response = await fetchWithCredentials({
    url: "/messages",
    method: "POST",
    body: {
      content,
    },
    setCookies: true,
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }
}
