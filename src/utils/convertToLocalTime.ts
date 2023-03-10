import moment from "moment-timezone";

const TIMEZONE = "Asia/Seoul"; // 전역 시간대 설정 값

export const convertToLocalTime = (
  publishedDate: string,
  dateFormat?: string
): string => {
  const inputFormat = "YYYY-MM-DDTHH:mm:ss.SSSZ";

  return moment
    .tz(publishedDate, inputFormat, TIMEZONE)
    .format(dateFormat || "Do MMM YYYY");
};
