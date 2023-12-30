// src/services/github.js
//TODO: This auth token is temporary and will be removed soon. It is only used for testing purposes.
const auth =
  "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";
const baseUrl = "https://api.github.com";
const owner = "flexadoc";
const repo = "docs";

/**
 * @param {string} string
 */
function toKebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

/**
 * @param {string} repoName
 */
async function initialize(repoName) {
  // Check if the repository exists
  const repoExistsResponse = await fetch(`${baseUrl}/orgs/${owner}/repos`, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${auth}`
    }
  });

  const isEmptyList = await repoExistsResponse.json().then(
    /** @param {any[]} repos */
    (repos) => repos.length === 0
  );

  if (!repoExistsResponse.ok || isEmptyList) {
    // Repository doesn't exist, create it
    await fetch(`${baseUrl}/orgs/${owner}/repos`, {
      method: "POST",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      body: JSON.stringify({ name: repoName })
    });
  }
}

/**
 * @param {string} message
 * @param {string} title
 * @param {string} content
 */
export async function upload(message, title, content) {
  // Make sure our repo exists
  await initialize(repo);

  const filename = toKebabCase(title);
  const path = `${filename}.md`;
  const body = `# ${title}\n\n${content}`;

  // Fetch existing file
  const existingFile = await (
    await fetch(`${baseUrl}/repos/${owner}/${repo}/contents/${path}`, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${auth}`,
        "X-GitHub-Api-Version": "2022-11-28"
      }
    })
  ).json();

  // Update or create file
  await (
    await fetch(`${baseUrl}/repos/${owner}/${repo}/contents/${path}`, {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${auth}`,
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
