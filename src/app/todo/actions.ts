"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  if (!title) return;

  await prisma.todo.create({
    data: {
      title,
    },
  });

  revalidatePath("/todo");
}

export async function deleteTodo(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) return;

  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/todo");
}
