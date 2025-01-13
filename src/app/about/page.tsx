import { Typewriter } from "@/components/ui/typewriter";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <main className="container motion-preset-fade mx-auto my-10 max-w-[600px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Typewriter
            loop={false}
            speed={250}
            cursorChar={""}
            text="svgc"
            className="w-full text-center font-mono text-5xl font-bold"
          />
          <Typewriter
            initialDelay={1150}
            loop={false}
            speed={50}
            cursorChar={""}
            text="Simple icon component generator for React"
            className="w-full text-center text-xl"
          />
        </div>
        <article className="prose dark:prose-invert prose-neutral">
          <section>
            <h2>What?</h2>
            <p>
              Adding icons to your React project is a pain. svgc makes it a bit
              easier.
            </p>
            <p className="w-full text-center font-mono">
              svgc = svg + component
            </p>
          </section>
          <section>
            <h2>How?</h2>
            <p>
              svgc was made to be as simple as possible. It allows you to
              quickly gather the logos you need for your project into one single
              component, allowing you to get back to work faster.
            </p>
            <p>Here is a simple flow of usage:</p>
            <ol>
              <li>
                <p>Identify the logos you need for your project</p>
              </li>
              <ul>
                <li>
                  <p>
                    I needed some Adobe logos for my project, so I searched for
                    &quot;adobe&quot; and selected the ones I needed. You can
                    search for logos on the{" "}
                    <Link href="/browse">browse page</Link>.
                  </p>
                  <Image
                    src="https://1iaax4on4v.ufs.sh/f/lxJw8KtEJ2Zh6p0u5hShkjSZ9FnUIP1myTc5Rg4l0wKM3o8i"
                    alt="Adobe logos"
                    width={350}
                    height={350}
                    className="rounded"
                  />
                </li>
                <li>
                  <p>
                    The logos I selected are now in the items list. Here, you
                    can select one of the items to open it on the{" "}
                    <Link href="/items">items page</Link>, or delete one. If you
                    have a large amount of items, you can also search for one or
                    clear all of them.
                  </p>
                  <Image
                    src="https://1iaax4on4v.ufs.sh/f/lxJw8KtEJ2ZhPjxgEfiXvUGRnO6elTxMzfJ0KmIq5QkpByA8"
                    alt="Items list"
                    width={350}
                    height={350}
                    className="rounded"
                  />
                </li>
              </ul>
            </ol>
          </section>
        </article>
      </div>
    </main>
  );
}
