## 開発環境
- 言語 <br/>
Python and Go<br/>
データ取得　Python<br/>
バックエンド Go <br/>
取得元: 農林水産省<br/>
https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/
<br/>

- データ管理 <br/>
データベース <br/>
MySQl <br/>

## すること
- 郷土料理のデータを取ってくる <br/>
- データベースを作成する <br/>
- ガチャ機能？ <br/>
- 検索機能 <br/>

## 環境構築
```Python
python -m pip install -r requirements.txt
```

## データについて
データ件数 1365 件<br/>
データ使用時は引用文献の記載の必要あり<br/>
コラム名は「料理ID」「県ID」「県名」「料理名」「説明」「部分的説明」<br/>

### データベース
コラムは id prefecture name overview prefecture_id partly_overview<br/>
型は順に　int varchar varchar varchar int varchar<br/>


## サーバー側
フロントへ JSON 渡し<br/>
/search<br/>
POST 県に割り当てた数字を受け取る<br/>
/gacha　<br/>
GET ランダムに郷土料理データを渡す<br/>
/quiz<br/>
GET ランダムに郷土料理データを渡す<br/>
答え合わせはフロント想定<br/>