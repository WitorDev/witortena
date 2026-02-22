import "@/app/markdown.css";

import ReactMarkdown from "react-markdown";

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
  return (
    <div
      className={`${style && "markdown mb-8"} w-full flex justify-center ${className}`}
    >
      <div
        className={`${
          style && "px-4"
        } rounded-lg max-w-screen-xl mx-auto w-full`}
      >
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
