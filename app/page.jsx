import Link from "next/link"

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl">well come</h1>
      <Link href="/properties">go to properties page</Link>
    </div>
  );
}

export default Page