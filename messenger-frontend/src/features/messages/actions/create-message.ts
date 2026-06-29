"use server";

import fetchWithCredentials from "@/actions/fetch-with-credentials";

interface CreateMessageProps {
  content: string;
  parentId?: number;
}

export default async function createMessage({
  content,
  parentId,
}: CreateMessageProps) {
  const response = await fetchWithCredentials({
    url: "/messages",
    method: "POST",
    body: {
      content,
      parentId,
    },
    setCookies: true,
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }
}
