# spring-boot3-react

## 構成

- フロントエンド
    - react

- バックエンド
    - spring-boot

## 環境

- nodejs v24
- vite
- jdk 21

## spring-boot and frontend

```
コマンドプロンプトで実行
mvnw.cmd spring-boot:run

http://localhost:8080/
```

## only spring-boot

```
http://localhost:8080/swagger-ui/index.html
```


## only frontend
```
npm create vite@latest
```

```
インストール
npm install
npm install @reduxjs/toolkit react-redux

開発サーバ起動
npm run dev

http://localhost:5173/
```

```
本番向けビルド
npm run build

プレビュー
npm run preview
```

> [!NOTE]  
> 
> https://redux.js.org/introduction/getting-started  
> 
> Redux ToolkitでReact開発を効率化するテクニック完全ガイド  
> https://ittrip.xyz/react/react-redux-toolkit-efficiency-tips  
> 
> Redux入門者向け初めてのRedux ToolkitとRedux Thunkの非同期処理  
> https://reffect.co.jp/react/redux-toolkit  