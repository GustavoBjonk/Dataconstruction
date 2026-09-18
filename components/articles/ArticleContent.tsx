interface ArticleContentProps {
  content: string[];
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="max-w-prose">
      {content.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="mt-8 text-xl font-semibold tracking-tight text-slate-900 first:mt-0"
            >
              {block.slice(3)}
            </h2>
          );
        }

        if (block.startsWith("```")) {
          const code = block.replace(/^```[a-z]*\n?/, "").replace(/```$/, "");
          return (
            <pre
              key={index}
              className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-900 p-4 text-xs leading-relaxed text-slate-100"
            >
              <code className="font-mono">{code}</code>
            </pre>
          );
        }

        return (
          <p key={index} className="mt-4 text-base leading-relaxed text-slate-500 first:mt-0">
            {block}
          </p>
        );
      })}
    </div>
  );
}
