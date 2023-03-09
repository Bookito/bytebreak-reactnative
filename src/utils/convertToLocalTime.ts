import moment from "moment-timezone";

const TIMEZONE = "Asia/Seoul"; // 전역 시간대 설정 값

export const convertToLocalTime = (publishedDate: string): string => {
    const dateFormat = "Do MMMM YYYY";
    const inputFormat = "YYYY-MM-DDTHH:mm:ss.SSSZ";

    return moment.tz(publishedDate, inputFormat, TIMEZONE).format(dateFormat);
};
