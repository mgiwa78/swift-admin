import { format, formatDistanceToNow } from "date-fns";

const formatDate = (date: any) => {
  return format(new Date(date), "dd/MM/yyyy");
};

const formatTime = (date: any) => {
  return format(new Date(date), "hh:mm:ss a");
};

const timeAgo = (date: Date | string | number) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

// Combined Date and Time
const formatDateTime = (date: any) => {
  return `${formatDate(date)} ${formatTime(date)}`;
};

export { formatDate, formatTime, formatDateTime, timeAgo };
