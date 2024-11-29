import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { usePreferences } from "../preferences/hook";
import Card from "./card";

export default function Home() {
  const preferences = usePreferences().get();
  console.log(preferences);
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
