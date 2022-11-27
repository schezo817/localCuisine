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
  "prefe_name": "大阪",
  "cuisine_name": "お好み焼き",
  "overview":"肉や野菜などの具が入った小麦粉の生地を鉄板で焼き、ソースをかけて食べる料理。「農山漁村の郷土料理百選」では郷土料理ではなく御当地人気料理に分類されている。"
},
{
  "prefe_name": "福岡",
  "cuisine_name": "もつ鍋",
  "overview": "牛または豚のもつ（小腸や大腸などの内臓肉、別名「ホルモン」）を主材料とする鍋料理であり、ホルモン鍋（ほるもんなべ）とも呼ばれる。"
},
{
  "prefe_name": "愛知",
  "cuisine_name": "ひつまぶし",
  "overview": "蒲焼にしたウナギの身を切り分けた上で、お櫃などに入れたご飯に乗せ（まぶし）たものを、食べる側が茶碗などに取り分けて食べるのが基本的なスタイルであり、これが料理名の由来（由来には異説もあり。後述）となっている。一般的にワサビや刻み海苔・刻みネギなどの薬味、出汁やお茶などが添えられて提供され、それらを食べる側の好みに合わせて取り分けた鰻飯に掛けたり、お茶漬けにすることにより、味の変化を楽しみながら食べることができる。"
},
{
  prefe_name: "愛知県",
  cuisine_name: "きしめん",
  prefe_id: "23",
  overview:
    "幅が広く薄い。ならびにその麺を使用した料理を指す。一般的なうどんとは形が異なり、平たい形状のうどんである。愛知県では「きしめん普及委員会」が発足するなど、愛知県の名物となっている。後述の基準を満たすものは、特に「名古屋きしめん」と表示することが許されている。",
},
{
  "prefe_name": "東京",
  "cuisine_name": "深川丼",
  "overview":"深川めし（ふかがわめし）は、アサリ、ハマグリ、アオヤギなどの貝類とネギなどの野菜などを煮込んだ汁物を米飯に掛けたものや、炊き込んだもの。深川丼またはアサリ飯と呼ぶこともある。"
}];


let ary = [];
let ryorilength = 0;

for(i in obj){
  ryorilength ++;
  ary.push(obj[i]);
}

function gatyaStart(){
  //JSONデータの長さ分のランダム数
  let rand = Math.floor(Math.random()*ryorilength);
  //key設定
  let key = Object.keys(obj);
  let key1 = key[rand];
  
  document.getElementById('result1').textContent = '県名'+"："+ ary[rand].prefe_name;
  document.getElementById('result2').textContent = '料理名'+"："+ary[rand].cuisine_name;
  document.getElementById('result3').textContent = '説明'+"："+ary[rand].overview;
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



