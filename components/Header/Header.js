import Link from "next/link";

export default function Header({ content }) {
  return (
    <>
      <header className="app-headers">
        <nav>
          <span className="logo">{content ? content : "Hello"}</span> |{" "}
          <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
          <Link href="/latest-news">Latest News</Link>
        </nav>
      </header>
    </>
  );
}
