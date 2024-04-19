import Image from "next/image";
import NavBar from "./components/navigation/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <p>oe le test</p>
        <Link href="/about">About</Link>
        <Link href="/api">API</Link>
      </div>
    </>
  );
}
