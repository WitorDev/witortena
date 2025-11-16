import "@/app/markdown.css";

import ReactMarkdown from "react-markdown";

type MarkdownSectionProps = {
  text: string;
};

export default function MarkdownSection({ text }: MarkdownSectionProps) {
  return (
    <div className="markdown border-b-2 border-primary-bg w-full flex justify-center pb-20">
      <div className="max-w-screen-xl px-4 mx-auto w-full">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
