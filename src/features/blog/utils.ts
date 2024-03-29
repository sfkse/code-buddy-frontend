export const removeImageStyles = (html: string) => {
  // just keep width and height and Add styles to images to make them responsive
  const regex = /<img[^>]*>/g;
  const newRegex = html.replace(regex, (match) => {
    return match.replace(/(width|height)="[^"]*"/g, "");
  });
  // Add styles to images to make them responsive
  const newHtml = newRegex.replace(
    /<img/g,
    '<img style="max-width: 100%; height: auto;"'
  );

  // Add alt attribute to images
  const newHtmlWithAlt = newHtml.replace(/<img/g, '<img alt="image"');
  return newHtmlWithAlt;
};

export const getImage = (html: string) => {
  const contentWithoutImageStyles = removeImageStyles(html);
  const regex = /<img[^>]*>/g;
  const img = contentWithoutImageStyles.match(regex);
  return img ? img[0] : "";
};

