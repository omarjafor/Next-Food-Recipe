import Link from "next/link";


export default function Home() {
  return (
    <div className="text-center my-4">
      <h1 className="text-2xl font-bold">Welcome to Food Recipe App</h1>
      <Link href={'recipe'} className="text-lg font-bold text-green-500">Explore Recipe</Link>
    </div>
  );
}
