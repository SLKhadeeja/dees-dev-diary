export function sortByDate(records) {
  return records
    .map(record => {
      const dateString = record.frontmatter.date
        .split("/")
        .reverse()
        .toString();
      const dateTimestamp = Date.parse(dateString);

      record.frontmatter.date = dateTimestamp;

      return record;
    })
    .sort((a, b) => b.frontmatter.date - a.frontmatter.date)
    .map(record => {
      const frontmatterDate = new Date(
        record.frontmatter.date
      ).toLocaleDateString("en-GB");
      record.frontmatter.date = frontmatterDate;

      return record;
    });
}
