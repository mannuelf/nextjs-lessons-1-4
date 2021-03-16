import Link from "next/Link";

export default function Header({ content }) {
  return (
    <>
      <header className="app-header">
        <nav>
          <span className="logo">{content}</span> | <Link href="/">Home</Link> |{" "}
          <Link href="/about">About</Link> |{" "}
          <Link href="/latest-news">Latest News</Link>
        </nav>
      </header>
    </>
  );
}
