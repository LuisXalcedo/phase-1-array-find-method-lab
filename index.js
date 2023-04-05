function superbowlWin(record) {
  const win = record.find(({ result }) => result === "W") || "N/A";

  return win.year;
}
