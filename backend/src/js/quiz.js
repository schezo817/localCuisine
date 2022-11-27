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
  "cuisine_name": "たこ焼き",
  "overview": "切干し大根をかためにもどし、調味料を加えてゆっくり煮含めた料理。冬の栃木県は空っ風が吹き、晴れた日が何日も続くことから、切干し大根や芋がら（さといもの茎を干したもの）等の乾物がよく作られてきた。切干し大根は、だいこんを細長く薄く切って乾燥させたもので、ビタミンDや繊維が多く、生のだいこんとは違った風味があり、現在でも日常的に好んで食べられている。かつては冬の間などの野菜の少ない時期に、貴重な保存食として食べられてきた。その代表的な調理方法が煮物である。"
},
{
  "prefe_name": "福岡",
  "cuisine_name": "もつ鍋",
  "overview": "切干し大根をかためにもどし、調味料を加えてゆっくり煮含めた料理。冬の栃木県は空っ風が吹き、晴れた日が何日も続くことから、切干し大根や芋がら（さといもの茎を干したもの）等の乾物がよく作られてきた。切干し大根は、だいこんを細長く薄く切って乾燥させたもので、ビタミンDや繊維が多く、生のだいこんとは違った風味があり、現在でも日常的に好んで食べられている。かつては冬の間などの野菜の少ない時期に、貴重な保存食として食べられてきた。その代表的な調理方法が煮物である。"
},
{
  "prefe_name": "愛知",
  "cuisine_name": "ひつまぶし",
  "overview": "切干し大根をかためにもどし、調味料を加えてゆっくり煮含めた料理。冬の栃木県は空っ風が吹き、晴れた日が何日も続くことから、切干し大根や芋がら（さといもの茎を干したもの）等の乾物がよく作られてきた。切干し大根は、だいこんを細長く薄く切って乾燥させたもので、ビタミンDや繊維が多く、生のだいこんとは違った風味があり、現在でも日常的に好んで食べられている。かつては冬の間などの野菜の少ない時期に、貴重な保存食として食べられてきた。その代表的な調理方法が煮物である。"
},
{
  "prefe_name": "東京",
  "cuisine_name": "深川丼",
  "overview": "切干し大根をかためにもどし、調味料を加えてゆっくり煮含めた料理。冬の栃木県は空っ風が吹き、晴れた日が何日も続くことから、切干し大根や芋がら（さといもの茎を干したもの）等の乾物がよく作られてきた。切干し大根は、だいこんを細長く薄く切って乾燥させたもので、ビタミンDや繊維が多く、生のだいこんとは違った風味があり、現在でも日常的に好んで食べられている。かつては冬の間などの野菜の少ない時期に、貴重な保存食として食べられてきた。その代表的な調理方法が煮物である。"
}];


let ary = [];
let ryorilength = 0;

for(i in obj){
  ryorilength ++;
  ary.push(obj[i]);
}
var a=false;
function quizStart(a){
  //JSONデータの長さ分のランダム数
  var rand = Math.floor(Math.random()*ryorilength);
  //key設定
  let key = Object.keys(obj);
  document.getElementById('result1').textContent = '県名'+"："+ ary[rand].prefe_name;
  document.getElementById('result2').textContent = '説明'+"："+ary[rand].overview;
  a=count(a)
  console.log(a);
  if (a){
    document.getElementById('result3').textContent = '正解'+"："+ary[rand].cuisine_name;
  }
  
}

function answer(rand){
  let rand2 = rand;
  window.confirm('正解は'+"："+ary[rand2].cuisine_name+'です。');
}
function count(a){
  return !a

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



