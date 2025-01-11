import { CodeBlock } from "react-code-block";
import { ScrollArea } from "../ui/scroll-area";

function ItemsCodeBlock() {
  return (
    <CodeBlock
      code={`import { CodeBlock } from 'react-code-block';

function CodeBlockDemo({ code, language }) {
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <CodeBlock.LineContent>
          <CodeBlock.Token />
        </CodeBlock.LineContent>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

<CodeBlockDemo code={code} />;
function CodeBlockDemo({ code, language }) {
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <CodeBlock.LineContent>
          <CodeBlock.Token />
        </CodeBlock.LineContent>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

<CodeBlockDemo code={code} />;
function CodeBlockDemo({ code, language }) {
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <CodeBlock.LineContent>
          <CodeBlock.Token />
        </CodeBlock.LineContent>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

<CodeBlockDemo code={code} />;
function CodeBlockDemo({ code, language }) {
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <CodeBlock.LineContent>
          <CodeBlock.Token />
        </CodeBlock.LineContent>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

<CodeBlockDemo code={code} />;

`}
      language="typescript"
    >
      <ScrollArea className="h-full w-full">
        <CodeBlock.Code className="rounded bg-black/90 p-4 text-sm leading-6 tracking-wide dark:bg-black/50">
          <div className="flex items-center gap-4">
            <CodeBlock.LineNumber className="text-xs text-muted-foreground/50" />
            <CodeBlock.LineContent>
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>
      </ScrollArea>
    </CodeBlock>
  );
}

export { ItemsCodeBlock };
