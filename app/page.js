import Image from "next/image";
import Link from "next/link";

export const API_URL = "https://billions-api.nomadcoders.workers.dev";
export const metadata = {
  title: "Buja list Home",
  description: "Find Buja list",
};
async function getRiches() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}
export default async function Home() {
  const riches = await getRiches();
  return (
    <div className="container">
      <h1 className="mb-8">Buja List</h1>
      <div className="flex flex-wrap gap-3 jc justify-center">
        {riches.map((rich) => (
          <Link
            key={rich.id}
            href={`/person/${rich.id}`}
            className="rounded-md border border-gray-400  mb-5 w-[48%] md:w-[30%] lg:w-[20%] hover:bg-white hover:text-black transition-all"
          >
            <img
              src={rich.squareImage}
              height={300}
              width={300}
              className="rounded-t-md"
            ></img>
            <p className="text-center mt-2 mb-1 font-semibold">{rich.name}</p>
            <p className="text-center mb-2 text-sm opacity-80">
              {rich.industries[0]}, {rich.netWorth}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
