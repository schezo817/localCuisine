let result = document.getElementById("result");

//JSONを読み込む
/*
async function load(){
  //読み込み
  const data = await fetch('sample.json');
  //解析
  const obj = await data.json();
  //最初のデータだけ表示
  console.log(obj[1]);
}
*/
//仮データ
var obj = [
  {
    kenmei: "大阪",
    ryori: "たこ焼き",
    setumei:
      "美味しいよ食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたいv食べたい食べたい食べたい食べたい",
  },
  {
    kenmei: "福岡",
    ryori: "もつ鍋",
    setumei:
      "うまい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい",
  },
  {
    kenmei: "愛知",
    ryori: "ひつまぶし",
    setumei:
      "食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい",
  },
  {
    kenmei: "東京",
    ryori: "深川丼",
    setumei:
      "匠の技食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい",
  },
];

let ary = [];
let ryorilength = 0;

for (i in obj) {
  ryorilength++;
  ary.push(obj[i]);
}

function gatyaStart() {
  //JSONデータの長さ分のランダム数
  let rand = Math.floor(Math.random() * ryorilength);
  //key設定
  let key = Object.keys(obj);
  let key1 = key[rand];

  document.getElementById("result1").textContent =
    "県名" + ":" + ary[rand].kenmei;
  document.getElementById("result2").textContent =
    "料理名" + ":" + ary[rand].ryori;
  document.getElementById("result3").textContent =
    "説明" + ":" + ary[rand].setumei;
}
/*
//JSONデータの長さ分のランダム数
let rand = Math.floor(Math.random()*ryorilength);
//key設定
let key = Object.keys(obj);
let key1 = key[rand];

document.getElementById('result1').textContent = '県名'+"："+ ary[rand].kenmei;
document.getElementById('result2').textContent = '料理名'+"："+ary[rand].ryori;
document.getElementById('result3').textContent = '説明'+"："+ary[rand].setumei;
*/
