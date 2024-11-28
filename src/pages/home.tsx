import { ArrowUpRightIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-sm p-2">
      <div className="h-screen flex flex-col justify-center items-center">
        <Card
          title="Software Engineer Backend (Growth Platform) - Merpay"
          company="Mercari"
          content="Develop and operate marketing tools, coupons, point rewarding systems, etc. used for the growth of not limited to Merpay but for the entire Mercari Group in the Japan Region (Mercari, Mercoin, Mercari Shops, Mercari Hallo, etc.)."
          type="JUNIOR"
        />
        <div className="flex justify-between p-4 text-zinc-500 w-full">
          <ThumbsDownIcon className="h-8 w-8" />
          <ThumbsUpIcon className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}

type Props = {
  title: string;
  company: string;
  content: string;
  type: "INTERNSHIP" | "NEW-GRAD" | "JUNIOR";
};
function Card(props: Props) {
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
