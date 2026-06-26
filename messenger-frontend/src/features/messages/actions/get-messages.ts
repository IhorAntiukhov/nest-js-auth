"use server";

import fetchWithCredentials from "@/actions/fetch-with-credentials";
import MessageItem from "../types/message-item.type";

export default async function getMessages() {
  const response = await fetchWithCredentials({
    url: "/messages",
    method: "GET",
    setCookies: true,
  });

  const body = await response.json();

  if (!response.ok) {
    return { data: null, error: body.message };
  }

  return { data: body as MessageItem[], error: null };
}
