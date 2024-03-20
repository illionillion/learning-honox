import { parse, renderers, transform } from "@markdoc/markdoc";

export const parseMarkdown = (source: string) => {
  const ast = parse(source);
  const content = transform(ast);

  const html = renderers.html(content);
  return html;
};
