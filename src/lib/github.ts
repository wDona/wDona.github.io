export interface Repo {
  name: string;
  html_url: string;
  language: string | null;
  pushed_at: string;
  fork: boolean;
}

// One request per build/dev process, shared by every component that needs repos.
// Returns [] on failure (e.g. rate limit) so callers can simply hide their UI.
let cache: Promise<Repo[]> | undefined;

export function getRepos(): Promise<Repo[]> {
  cache ??= (async () => {
    try {
      const env = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env;
      const token = env?.GITHUB_TOKEN ?? import.meta.env.GITHUB_TOKEN;
      const res = await fetch("https://api.github.com/users/wDona/repos?per_page=100", {
        headers: { "User-Agent": "wdona.dev", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      });
      if (!res.ok) {
        console.error(`GitHub API ${res.status}`);
        cache = undefined; // retry on the next render instead of caching the failure
        return [];
      }
      return ((await res.json()) as Repo[]).filter(r => !r.fork && r.name !== "wDona");
    } catch (e) {
      console.error("Error fetching GitHub repos", e);
      cache = undefined;
      return [];
    }
  })();
  return cache;
}

// Last push to this site's repo; falls back to the build date if the API failed.
// The site is rebuilt on every push to main, so the build date is the same thing.
export async function getLastUpdate(): Promise<Date> {
  const repo = (await getRepos()).find(r => r.name === "wDona.github.io");
  return repo ? new Date(repo.pushed_at) : new Date();
}
