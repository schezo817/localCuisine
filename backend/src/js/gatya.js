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
    prefe_name: "大阪",
    cuisine_name: "たこ焼き",
    overview:
      "切干し大根をかためにもどし、調味料を加えてゆっくり煮含めた料理。冬の栃木県は空っ風が吹き、晴れた日が何日も続くことから、切干し大根や芋がら（さといもの茎を干したもの）等の乾物がよく作られてきた。切干し大根は、だいこんを細長く薄く切って乾燥させたもので、ビタミンDや繊維が多く、生のだいこんとは違った風味があり、現在でも日常的に好んで食べられている。かつては冬の間などの野菜の少ない時期に、貴重な保存食として食べられてきた。その代表的な調理方法が煮物である。",
  },
  {
    prefe_name: "福岡",
    cuisine_name: "もつ鍋",
    overview:
      "「鮭のチャンチャン焼き」は、秋から冬にかけてとれるサケと旬の野菜を蒸し焼きにして味噌で味付けした料理。石狩地方の漁師町が発祥といわれているが、いまでは全国的にも有名となり、平成19年（2007年）には「石狩鍋」、「ジンギスカン」とともに、「農山漁村の郷土料理百選（農林水産省主催）」に選ばれている。",
  },
  {
    prefe_name: "愛知",
    cuisine_name: "ひつまぶし",
    overview:
      "「ニシン漬け」は、北海道のニシン産業の歴史を伝える郷土料理である。江戸時代後期から明治時代にかけて、北海道の特に日本海側ではニシン漁業が隆盛を極めた。春になると、ニシンの大群が産卵のため沿岸に押し寄せると海が真っ白に染まる「群来（くき）」がみられるほどであった。ニシンの漁獲量は明治時代にピークを迎え、一時期、100万トン近くの水揚げ量があったが、昭和30年代ごろから、群来は急激に減り、ニシンはほとんどとれなくなった。現在は、厚岸湖（あっけしこ）などの湖沼とその周辺に定着しているニシンをとることが多いが、その漁獲量は全盛期には到底およばない。",
  },
  {
    prefe_name: "東京",
    cuisine_name: "深川丼",
    overview:
      "明治17年（1884年）、函館市で店を構える洋食店で提供された「南京そば」というメニューが「日本ではじめてのラーメン」だったという説があるが、詳しい資料などが残っておらず、定かではない。",
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
  console.log(1);
  console.log(params);
  document.getElementById("result1").textContent =
    "県名" + "：" + ary[rand].prefe_name;
  document.getElementById("result2").textContent =
    "料理名" + "：" + ary[rand].cuisine_name;
  document.getElementById("result3").textContent =
    "説明" + "：" + ary[rand].overview;
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
