function getColorForTech(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = Math.floor(Math.abs(Math.sin(hash) * 13328695))
    .toString(16)
    .padStart(6, "0");
  return `#${color}`;
}

export default getColorForTech;
