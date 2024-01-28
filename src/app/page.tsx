"use server";
import { getBatches } from "@/lib/brewfather";
import Link from "next/link";

export default async function Home() {
  const batches = await getBatches();
  console.log(batches);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        {batches.map((batch: any) => (
          <Batch key={batch._id} batch={batch} />
        ))}
      </div>
    </main>
  );
}

function Batch({ batch }: any) {
  return (
    <div className="bg-gray-900 py-2 px-4 rounded-xl flex justify-between w-96">
      <p>{batch.recipe.name}</p>
      <Link href={`/label/${batch._id}`} className="cursor-pointer">
        Label
      </Link>
    </div>
  );
}
