import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export type Article = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export const createArticle = async ({
  title,
  content,
}: Pick<Article, "title" | "content">) => {
  const articlesPath = path.join(__dirname, "data", "articles.json");
  const exists = existsSync(articlesPath);

  if (!exists) {
    const articles: Article[] = [];
    writeFileSync(articlesPath, JSON.stringify(articles));
  }

  const articlesJSON = readFileSync(articlesPath, {
    encoding: "utf-8",
  });
  const articles: Article[] = JSON.parse(articlesJSON);
  const id = crypto.randomUUID();
  const created_at = new Date().toISOString();
  const updated_at = created_at;
  const article: Article = { id, title, content, created_at, updated_at };
  articles.push(article);
  writeFileSync(articlesPath, JSON.stringify(articles));

  return article;
};

export const getArticles = async () => {
  const articlesPath = path.join(__dirname, "data", "articles.json");
  const exists = existsSync(articlesPath);

  if (exists) {
    const articlesJSON = readFileSync(articlesPath, {
      encoding: "utf-8",
    });
    return JSON.parse(articlesJSON);
  }

  return [];
};
