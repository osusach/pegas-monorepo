import { ArrowUpRightIcon } from "lucide-react";
import { seniorityTags } from "../shared/types";

type Props = {
  title: string;
  company: string;
  content: string;
  type: (typeof seniorityTags)[number];
};
export default function Card(props: Props) {
  return (
    <article className="rounded-xl p-4 space-y-2 bg-sky-600 text-sky-50">
      <h1 className="font-semibold text-xl">{props.title}</h1>
      <h2>{props.company}</h2>
      <p>{props.content}</p>
      <div className="flex justify-end">
        <a
          className="border border-sky-50 p-2 inline-block rounded-full"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowUpRightIcon className="w-8 h-8" />
        </a>
      </div>
    </article>
  );
}
