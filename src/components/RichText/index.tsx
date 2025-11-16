import { serializeLexical } from "./serialize";

const RichText: React.FC<{ content: any; enableGutter?: boolean }> = ({ content }) => {
  if (!content) {
    return null;
  }

  return <div className="mdx">{content && serializeLexical({ nodes: content?.root?.children })}</div>;
};

export default RichText;
