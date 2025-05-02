import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/prisma";
import { createTodo, deleteTodo } from "./actions";

export const dynamic = "force-dynamic";

export default async function TodoPage() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-center text-3xl font-bold">
          Server Components & Server Actions
        </h1>
        <p className="text-center">
          This page fetches todos in a server component and creates/deletes
          todos using server actions. The page is refreshed using{" "}
          <code className="bg-muted rounded-md px-1 py-0.5 font-mono text-sm">
            revalidatePath
          </code>
          .
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Todo List</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={createTodo} className="mb-8">
              <div className="flex gap-2">
                <Input
                  type="text"
                  name="title"
                  placeholder="Add a new todo..."
                  required
                />
                <Button type="submit">Add</Button>
              </div>
            </form>

            <ul className="space-y-2">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <span>{todo.title}</span>
                  <form action={deleteTodo}>
                    <input type="hidden" name="id" value={todo.id} />
                    <Button type="submit" variant="destructive" size="sm">
                      Delete
                    </Button>
                  </form>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
