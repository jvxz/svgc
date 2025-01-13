import { Typewriter } from "@/components/ui/typewriter";

export default function Page() {
  return (
    <main className="container motion-preset-fade mx-auto my-10 max-w-[600px]">
      <div className="flex flex-col gap-2">
        <Typewriter
          loop={false}
          speed={250}
          cursorChar={""}
          text="svgc"
          className="w-full text-center font-mono text-4xl font-bold"
        />
        <Typewriter
          initialDelay={1150}
          loop={false}
          speed={50}
          cursorChar={""}
          text="Simple icon component generator for React"
          className="w-full text-center"
        />
      </div>
    </main>
  );
}
