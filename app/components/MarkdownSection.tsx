import "@/app/markdown.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

type MarkdownSectionProps = {
  text: string;
  style?: boolean;
  className?: string;
};

export default function MarkdownSection({
  text,
  style,
  className,
}: MarkdownSectionProps) {
  // track duplicate ids
  const idCounts: Record<string, number> = {};

  function createId(children: React.ReactNode): string {
    if (!children) return "";

    const baseId = children
      .toString()
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");

    if (idCounts[baseId] === undefined) {
      idCounts[baseId] = 0;
    } else {
      idCounts[baseId]++;
    }

    return idCounts[baseId] === 0 ? baseId : `${baseId}-${idCounts[baseId]}`;
  }

  return (
    <article
      className={`${style && "markdown mb-8"} w-full flex justify-center ${className}`}
    >
      <div
        className={`${
          style && "px-4"
        } rounded-lg max-w-screen-xl mx-auto w-full`}
      >
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          components={{
            h1: ({ children }) => {
              const id = createId(children);

              return (
                <h1 id={id} className="scroll-mt-28">
                  {children}
                </h1>
              );
            },

            h2: ({ children }) => {
              const id = createId(children);

              return (
                <h2 id={id} className="scroll-mt-28">
                  {children}
                </h2>
              );
            },

            h3: ({ children }) => {
              const id = createId(children);

              return (
                <h3 id={id} className="scroll-mt-28">
                  {children}
                </h3>
              );
            },
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </article>
  );
}
