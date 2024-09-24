import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div
      className="
      prose-blockquote:bg-blue-500 
      prose-blockquote:border-blue-500 
      prose-blockquote:bg-blue-600/20
      prose-blockquote:p-2
      prose-blockquote:px-6
      prose-blockquote:not-italic
      prose-blockquote:rounded-r-lg
      prose-li:marker:text-blue-600
    "
    >
      <Component components={components} />
    </div>
  );
}
