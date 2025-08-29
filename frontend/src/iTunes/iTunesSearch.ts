export async function searchSongs(term: string) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=20&country=JP`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results; // 曲の配列
}