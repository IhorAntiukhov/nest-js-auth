"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FullMessageItem from "../types/message-item.type";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import MessagesContext from "../context/messages-context";
import { ReplyIcon } from "lucide-react";
import { formatDate } from "@/lib/dates";

export default function MessageItem({
  id,
  content,
  createdAt,
  user,
  isOwnMessage,
  parent,
}: FullMessageItem) {
  const { setReplyToMessage } = useContext(MessagesContext)!;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isOwnMessage ? "You" : user.name}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        {parent && (
          <p className="flex items-center gap-2">
            <span>
              <ReplyIcon />
            </span>{" "}
            {parent.content}
          </p>
        )}

        {content}
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-2">
        <p className="text-gray-500 text-sm">
          {formatDate(createdAt)}
        </p>

        <Button
          variant="ghost"
          onClick={() => setReplyToMessage({ id, content })}
          className="flex items-center gap-2"
        >
          <ReplyIcon />
          Reply
        </Button>
      </CardFooter>
    </Card>
  );
}
