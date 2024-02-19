// Utility functions for string manipulation

/**
 * Convert a string to kebab case
 * @param {string} inputString
 * @returns {string} - Kebab case string
 */
export function toKebabCase(inputString: string) {
  return inputString
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}
