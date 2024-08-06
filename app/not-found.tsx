import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <pre>404</pre>
      Ups! resource not found!
      <Link href="/">Return to main page</Link>
    </main>
  );
}
