// src/services/github.js
const baseUrl = "https://api.github.com";
const repoName = "flexadoc_documents";

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
 */
async function initialize(token) {
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
  const repoNames = repos.map((/** @type {{ name: any; }} */ repository) => repository.name);
  console.log(repoNames);

  // create repo if it does not exist
  repoNames.includes(repoName) ? console.log("Repo Found!") : createRepo(token);
}

/**
 * @param {string} token
 * @param {string} owner
 * @param {string} title
 * @param {string} content
 */
export async function upload(token, owner, title, content) {
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
    await fetch(`${baseUrl}/users/${owner}/${repoName}/contents/${path}`, {
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

/**
 * @param {string} token
 */
async function createRepo(token) {
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
