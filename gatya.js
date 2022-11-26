let result = document.getElementById('result');

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
var obj = [{
  "kenmei": "大阪",
  "ryori": "たこ焼き",
  "setumei": "美味しいよ"
},
{
  "kenmei": "福岡",
  "ryori": "もつ鍋",
  "setumei": "うまい"
},
{
  "kenmei": "愛知",
  "ryori": "ひつまぶし",
  "setumei": "食べたい"
},
{
  "kenmei": "東京",
  "ryori": "深川丼",
  "setumei": "匠の技"
}];


let ary = [];
let ryorilength = 0;

for(i in obj){
  ryorilength ++;
  ary.push(obj[i]);
}

//JSONデータの長さ分のランダム数
let rand = Math.floor(Math.random()*ryorilength);
//key設定
let key = Object.keys(obj);
let key1 = key[rand];

document.getElementById('result').innerHTML = '<p style="text-align: center" class="ryorimei">県名'+"："+ ary[rand].kenmei+'</p>';
document.getElementById('result').innerHTML += '<br><p style="text-align: center">料理名'+"："+ary[rand].ryori+ '</b></p>';
document.getElementById('result').innerHTML += '<br><p style="text-align: center">説明'+"："+ary[rand].setumei+ '</b></p>';




