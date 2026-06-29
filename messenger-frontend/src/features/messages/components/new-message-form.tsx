"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import {
  NewMessageFormValues,
  newMessageSchema,
} from "../schemas/new-message-schema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import MessagesContext from "../context/messages-context";
import { useContext } from "react";

export default function NewMessageForm() {
  const { replyToMessage, setReplyToMessage, socket } =
    useContext(MessagesContext)!;

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<NewMessageFormValues>({
    resolver: zodResolver(newMessageSchema),
    defaultValues: {
      content: "",
    },
  });

  const handleNewMessage = handleSubmit(async ({ content }) => {
    try {
      socket.emit("createMessage", { content, parentId: replyToMessage?.id });

      toast.success("Message posted successfully!");
    } catch (error) {
      toast.error((error as Error).message);
    }
  });

  return (
    <Card className="w-full max-w-96">
      <CardHeader>
        <CardTitle>New Message</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        {replyToMessage && (
          <div className="flex justify-between items-center gap-5 w-full">
            <p className="text-muted-foreground text-sm">
              Replying to: {replyToMessage.content}
            </p>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setReplyToMessage(null)}
            >
              X
            </Button>
          </div>
        )}

        <form className="flex flex-col gap-5" onSubmit={handleNewMessage}>
          <FormInput
            name="content"
            control={control}
            placeholder="Message content"
            description="Enter your message"
            type="text"
            errors={errors}
          />

          <Button className="w-full">Post Message</Button>
        </form>
      </CardContent>
    </Card>
  );
}
