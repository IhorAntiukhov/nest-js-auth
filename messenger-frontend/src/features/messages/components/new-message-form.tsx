"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import { useRouter } from "next/navigation";
import {
  NewMessageFormValues,
  newMessageSchema,
} from "../schemas/new-message-schema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import createMessage from "../actions/create-message";
import { zodResolver } from "@hookform/resolvers/zod";

export default function NewMessageForm() {
  const router = useRouter();

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
      await createMessage({ content });

      toast.success("Message created successfully!");

      router.refresh();
      router.replace("/");
    } catch (error) {
      toast.error((error as Error).message);
    }
  });

  return (
    <Card className="w-full max-w-96">
      <CardHeader>
        <CardTitle>New Message</CardTitle>
      </CardHeader>

      <CardContent>
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
