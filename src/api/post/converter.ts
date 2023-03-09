import moment from "moment-timezone";
import { Post } from "./type";

const inputFormat = "YYYY-MM-DDTHH:mm:ss.SSSZ";

export const sortAndFormat = (list: Post[]): Post[] => {
  list.sort((a: Post, b: Post) => {
    const dateA = moment(a.publishedDate, inputFormat).unix() || 0;
    const dateB = moment(b.publishedDate, inputFormat).unix() || 0;

    return dateB - dateA;
  });

  return list;
};


