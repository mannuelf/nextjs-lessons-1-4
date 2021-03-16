import NextHead from "next/head";

export default function Head({
  title = "default value",
  description = "",
  author = "",
  keyWords = "",
}) {
  return (
    <NextHead>
      <title>{title ? title : "default value"}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keyWords} />
    </NextHead>
  );
}
