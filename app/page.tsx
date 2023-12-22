import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        {/* <h1 className={title()}>🚀 Hey, I'm&nbsp; 💻✨</h1>
        <h1 className={title({ color: "yellow" })}>Nithin S. Sabu</h1>
        <br />
        <h1 className={title()}>, a JavaScript fanatic and frontend wizard.</h1> */}
        <h2 className={subtitle({})}>
          🚀 Hey, I&apos;m Nithin S. Sabu, <br />a JavaScript fanatic and
          frontend wizard. 💻✨
        </h2>
        <h2 className={subtitle({ class: "mt-4" })}>
          Welcome to my digital hub where I solve problems with sleek code.
          Explore the world of frontend tech, follow my coding adventures, and
          discover simplicity in innovation.
        </h2>
      </div>
    </section>
  );
}
