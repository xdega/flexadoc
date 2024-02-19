import { toKebabCase } from "../utils/string";

// Service to interface with GitHub API

const baseUrl = "https://api.github.com";

// TODO: This should ultimately come from the user's settings
const repoName = "flexadoc_documents";

async function initialize(token: string) {
  const fetchRepos = async () => {
    try {
      const response = await fetch(`https://api.github.com/user/repos`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json"
        }
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const repos = await fetchRepos();
  const repoNames = repos.map((repository: any) => repository.name);

  // create repo if it does not exist
  repoNames.includes(repoName) ? console.log("Repo Found!") : await createRepo(token);
}

export async function upload(token: string, owner: string, title: string, content: string) {
  // Make sure our repo exists
  await initialize(token);

  const filename = toKebabCase(title);
  const path = `${filename}.md`;
  const body = `# ${title}\n\n${content}`;

  // Fetch existing file
  const existingFile = await (
    await fetch(`${baseUrl}/users/${owner}/${repoName}/contents/${path}`, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28"
      }
    })
  ).json();

  const message = existingFile.sha ? "Update Document" : "Create Document";

  // Update or create file
  await (
    await fetch(`${baseUrl}/repos/${owner}/${repoName}/contents/${path}`, {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      body: JSON.stringify({
        message: message,
        content: btoa(body),
        sha: existingFile.sha
      })
    })
  ).json();
}

async function createRepo(token: string) {
  await fetch(`${baseUrl}/user/repos`, {
    method: "POST",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    body: JSON.stringify({ name: repoName })
  });
  return;
}
