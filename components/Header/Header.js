import Link from "next/link";

export default function Header({ content }) {
  return (
    <>
      <header className="app-headers">
        <nav>
          <div className="logo">
            <span>###</span>
            {content ? content : "Hello"}
          </div>{" "}
          | <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
          <Link href="/games">Games</Link>
        </nav>
      </header>
    </>
  );
}
