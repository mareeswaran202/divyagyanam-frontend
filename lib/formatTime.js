export function formatTime(time) {
  if (!time) return "";

  const [hours, minutes] = time.split(":");

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}