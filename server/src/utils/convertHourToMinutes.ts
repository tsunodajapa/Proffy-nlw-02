export default function convertHourToMinutes(time: string) {
  const [hour, mintes] = time.split(":").map(Number);
  const timesInMinutes = hour * 60 + mintes;
  return timesInMinutes;
}
