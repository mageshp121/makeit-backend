import sanitize from "sanitize-html";
export const sanitizeData = (data: any) => {
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === "string") {
      data[key] = data[key].replace(/\$/g, ""); // Remove dollar sign ($) from the string
      data[key] = sanitize(data[key], {
        // Removing html tags from string
        allowedTags: [],
        allowedAttributes: {},
      });
    }
  });
};
