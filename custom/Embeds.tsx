export const createEmbed = (content: string) => {
  const container = document.createElement("div");
  container.innerHTML = content.trim();

  // Get the "blockquote.twitter-tweet" element
  const tweetElement = container.querySelector("blockquote.twitter-tweet");

  if (!tweetElement) {
    return null;
  }

  // Use oEmbed API to generate the embed
  const oembedURL =
    "https://api.twitter.com/1/statuses/oembed.json?omit_script=true&url=" +
    encodeURIComponent(tweetElement.outerHTML);

  fetch(oembedURL)
    .then((response) => response.json())
    .then((oembedData) => {
      const newEmbed = document.createElement("div");
      newEmbed.innerHTML = oembedData.html;
      container.appendChild(newEmbed);
    })
    .catch((error) => {
      console.error("Failed to fetch Twitter oEmbed:", error);
    });

  return container;
};
