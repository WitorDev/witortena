import "@/app/markdown.css";

import ReactMarkdown from "react-markdown";

type MarkdownSectionProps = {
  text: string;
  style?: boolean;
};

export default function MarkdownSection({ text, style }: MarkdownSectionProps) {
  return (
    <div
      className={`${style && "markdown pb-20"}  w-full flex justify-center `}
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
