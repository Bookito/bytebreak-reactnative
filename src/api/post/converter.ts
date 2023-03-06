import { Post } from "./type";

export const sortAndFormat = (list: Post[]): Post[] => {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  list.sort((a: Post, b: Post) => {
    const dateA = new Date(a.publishedDate).getTime();
    const dateB = new Date(b.publishedDate).getTime();

    return dateB - dateA;
  });

  list.forEach((item: Post) => {
    const publishedDate = new Date(item.publishedDate);
    item.publishedDate = dateFormatter.format(publishedDate);
  });

  return list;
};
