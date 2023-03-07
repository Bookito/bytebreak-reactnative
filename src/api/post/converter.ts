import moment from "moment";
import { Post } from "./type";

export const sortAndFormat = (list: Post[]): Post[] => {
  const dateFormatter = "MM/DD/YYYY";

  list.sort((a: Post, b: Post) => {
    const dateA =
      moment(a.publishedDate, "YYYY-MM-DDTHH:mm:ss.SSSZ").unix() || 0;
    const dateB =
      moment(b.publishedDate, "YYYY-MM-DDTHH:mm:ss.SSSZ").unix() || 0;

    return dateB - dateA;
  });

  list.forEach((item: Post) => {
    item.publishedDate = moment(
      item.publishedDate,
      "YYYY-MM-DDTHH:mm:ss.SSSZ"
    ).format(dateFormatter);
  });

  return list;
};
