type Props = {
    filename?: string;
    children: string;
    showLineNumber?: boolean;
    language?: string;
};
declare const CodeBlock: ({ children, filename, showLineNumber, language }: Props) => import("react/jsx-runtime").JSX.Element;
export default CodeBlock;
