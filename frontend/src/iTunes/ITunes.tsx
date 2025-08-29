import { useState } from "react";
import { searchSongs } from "./iTunesSearch";

//TypeScriptの型定義
interface Song {
  trackId: number;
  trackName: string;
  artistName: string;
  previewUrl: string;
  artworkUrl100: string;
}

//Reactの関数コンポーネント
export default function ItunesSearch() {
  //状態の宣言
  const [term, setTerm] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);

  //検索処理の関数（入力が空文字なら処理を中止）
  const handleSearch = async () => {
    if (!term) return;
    const results = await searchSongs(term);
    //取得した曲の配列をsongsにセット
    setSongs(results);
  };

  //UIレンダリング
  return (
    <div>
      <h1>iTunes検索</h1>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="曲名やアーティスト名を入力"
        style={{
          width: "200px",
          height: "20px",
          //fontSize: "15px",
          //padding: "50px"
        }}
      />
      <button onClick={handleSearch}>検索</button>

      <ul>
        {songs.map((song) => (
          <li
            key={song.trackId}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              gap: "15px", // アイテム間の余白
            }}
          >
            {/* ジャケ写 */}
            <img
              src={song.artworkUrl100}
              alt={song.trackName}
              width={100}
              height={100}
              style={{ borderRadius: "8px", flexShrink: 0 }}
            />

            {/* 曲名・アーティスト名 */}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1DB954",
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                flex: 1, // 空きスペースを全部使う
              }}
            >
              {song.trackName} -{" "}
              <a
                href={`https://ja.wikipedia.org/wiki/${encodeURIComponent(song.artistName)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1DB954", textDecoration: "underline" }}
              >
                {song.artistName}
              </a>
            </span>

            {/* 再生ボタン */}
            <audio src={song.previewUrl} controls style={{ flexShrink: 0 }} />
          </li>

        ))}
      </ul>
    </div>
  );
}
