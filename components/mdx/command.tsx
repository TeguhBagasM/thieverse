import React, { useRef, useState } from "react";
import { Clipboard, Check } from "lucide-react";

const Command = ({ command, nested = false }: { command: string; nested?: boolean }) => {
  const [copySuccess, setCopySuccess] = useState<React.ReactNode>(null);
  const commandRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    if (commandRef.current) {
      navigator.clipboard
        .writeText(commandRef.current.innerText.replace(/^\$/, "").trim())
        .then(() => {
          setCopySuccess(<Check className="size-4" />);
          setTimeout(() => setCopySuccess(null), 2000);
        })
        .catch(() => {
          setCopySuccess("Failed to copy");
        });
    }
  };

  return (
    <>
      <div className="relative flex max-h-96 w-auto items-center overflow-y-auto">
        <div ref={commandRef} className="relative w-auto flex-grow">
          <pre className="whitespace-pre-wrap break-words bg-code p-3 text-code-foreground">
            <span className="ml-[2px] select-none text-code-foreground/60" aria-hidden="true">
              $&nbsp;
            </span>
            <span className="font-mono">{command}</span>

            {!nested && (
              <button
                onClick={copyToClipboard}
                aria-label="Copy command"
                className="absolute right-[10px] top-[36px] z-10 rounded-md bg-code-foreground/10 p-1 text-code-foreground transition-colors duration-150"
              >
                {copySuccess ? (
                  <Check className="size-4 text-code-foreground" />
                ) : (
                  <Clipboard className="size-4 text-code-foreground/80" />
                )}
              </button>
            )}
          </pre>
        </div>
      </div>
    </>
  );
};

export { Command };
