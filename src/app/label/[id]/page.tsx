import { getBatch } from "@/lib/brewfather";

export default async function Label({ params }: { params: { id: string } }) {
  const batch = await getBatch(params.id);
  console.log(batch);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bgb-lack">
      <div className="bg-white text-black w-[331px] h-[1051px]" id="printarea">
        <div className="h-[351px]">LOGO</div>
        <div className="h-[750px] w-full flex items-center justify-center">
          <p
            className="text-[80pt] rotate-180 block"
            style={{ writingMode: "vertical-rl" }}
          >
            {batch.name}
          </p>
        </div>
      </div>
    </main>
  );
}
