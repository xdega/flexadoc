// src/services/github.js
const baseUrl = "https://api.github.com";
const repo = "flexadoc_documents";

//TODO: This should be refactored to util
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
 * @param {string} token
 * @param {string} repoName
 */
async function initialize(token, repoName) {
  console.log("initialize", token, repoName);
  // Check if the repository exists
  const repoExistsResponse = await fetch(`${baseUrl}/user/repos`, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${token}`
    }
  });

  const isEmptyList = await repoExistsResponse.json().then(
    /** @param {any[]} repos */
    (repos) => repos.length === 0
  );

  if (!repoExistsResponse.ok || isEmptyList) {
    // Repository doesn't exist, create it
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
  }
}

/**
 * @param {string} token
 * @param {string} owner
 * @param {string} title
 * @param {string} content
 */
export async function upload(token, owner, title, content) {
  // Make sure our repo exists
  await initialize(token, repo);

  const filename = toKebabCase(title);
  const path = `${filename}.md`;
  const body = `# ${title}\n\n${content}`;

  // Fetch existing file
  const existingFile = await (
    await fetch(`${baseUrl}/users/${owner}/${repo}/contents/${path}`, {
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
    await fetch(`${baseUrl}/users/${owner}/${repo}/contents/${path}`, {
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
