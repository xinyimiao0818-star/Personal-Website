import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Personal-Website";
const ownerName = process.env.GITHUB_REPOSITORY_OWNER ?? "xinyimiao0818-star";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: `https://${ownerName}.github.io`,
  base: isGitHubPages ? `/${repoName}` : "/",
  output: "static"
});
