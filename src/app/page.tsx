import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const response = await url.json();
  console.log(response);

  return (
    <main>
      <h1 className="text-6xl text-emerald-800 ">Books Name</h1>
      {response.map((book: any) => (
        <div key={book.id}> {/* Use a unique key for each element */}
          <Link href={`${book.type}`}>
            <h1 className="text-5xl text-lime-500 hover:text-cyan-800">{book.name}</h1>
          </Link>
        </div>
      ))}
    </main>
  );
}
