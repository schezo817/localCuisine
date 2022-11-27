var select = document.getElementById("selectPrefecture");

select.onchange = function () {};
/*
let url = "https://into-the-program.com/wp-json/wp/v2/posts/6129";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
  */

//sample
searchSample = [
  {
    kenmei: "大阪府",
    ryori: "お好み焼き",
    setumei:
      "肉や野菜などの具が入った小麦粉の生地を鉄板で焼き、ソースをかけて食べる料理。「農山漁村の郷土料理百選」では郷土料理ではなく御当地人気料理に分類されている。",
  },
  {
    kenmei: "福岡県",
    ryori: "もつ鍋",
    setumei:
      "牛または豚のもつ（小腸や大腸などの内臓肉、別名「ホルモン」）を主材料とする鍋料理であり、ホルモン鍋（ほるもんなべ）とも呼ばれる。",
  },

  {
    kenmei: "愛知県",
    ryori: "ひつまぶし",
    setumei:
      "蒲焼にしたウナギの身を切り分けた上で、お櫃などに入れたご飯に乗せ（まぶし）たものを、食べる側が茶碗などに取り分けて食べるのが基本的なスタイルであり、これが料理名の由来（由来には異説もあり。後述）となっている。一般的にワサビや刻み海苔・刻みネギなどの薬味、出汁やお茶などが添えられて提供され、それらを食べる側の好みに合わせて取り分けた鰻飯に掛けたり、お茶漬けにすることにより、味の変化を楽しみながら食べることができる。",
  },
  {
    kenmei: "愛知県",
    ryori: "きしめん",
    setumei:
      "幅が広く薄い。ならびにその麺を使用した料理を指す。一般的なうどんとは形が異なり、平たい形状のうどんである。愛知県では「きしめん普及委員会」が発足するなど、愛知県の名物となっている。後述の基準を満たすものは、特に「名古屋きしめん」と表示することが許されている。",
  },

  {
    kenmei: "東京都",
    ryori: "深川丼",
    setumei:
      "深川めし（ふかがわめし）は、アサリ、ハマグリ、アオヤギなどの貝類とネギなどの野菜などを煮込んだ汁物を米飯に掛けたものや、炊き込んだもの。深川丼またはアサリ飯と呼ぶこともある。",
  },
];
cuisinecount = 5;

function searchLocalCuisine() {
  for (currentId = 0; currentId < cuisinecount; currentId++) {
    if (searchSample[currentId].kenmei == select.value) {
      console.log(searchSample[currentId].kenmei);
      document.getElementById("result1").textContent =
        "県名" + ":" + searchSample[currentId].kenmei;
      document.getElementById("result2").textContent =
        "料理名" + ":" + searchSample[currentId].ryori;
      document.getElementById("result3").textContent =
        "説明" + ":" + searchSample[currentId].setumei;
    }
  }
}
