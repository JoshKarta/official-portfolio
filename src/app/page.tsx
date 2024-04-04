import TaskForm from "@/components/task-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col pt-24">
      <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-4 w-full">
        <div className="p-6">
          <TaskForm />
        </div>
      </div>
    </main>
  );
}
