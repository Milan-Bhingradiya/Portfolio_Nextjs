import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getBlogPostBySlug } from "@/services/fireStoreOperations";
import type { ComponentProps } from "react";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary text-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-newprimary2">
          {post?.title}
        </h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
            // ignore error
              // @ts-ignore
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                  // @ts-ignore
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              img: (props: ComponentProps<"img">) => (
                <div className="relative h-64 w-full my-8">
                  <Image
                    src={props.src || ""}
                    alt={props.alt || ""}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ),
            }}
          >
            {post?.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
