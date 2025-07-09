function normalizeText(text) {
  if (typeof text !== "string") {
    return "";
  }

  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/\s+/g, " ")
    .replace(/‌/g, "");
}
export default normalizeText;
