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
searchSample = {
  members: [
    {
      kenmei: "大阪府",
      ryori: "たこ焼き",
      setumei:
        "美味しいよ食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたいv食べたい食べたい食べたい食べたい",
    },
    {
      kenmei: "福岡県",
      ryori: "もつ鍋",
      setumei:
        "うまい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい",
    },

    {
      kenmei: "愛知県",
      ryori: "ひつまぶし",
      setumei:
        "食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい",
    },

    {
      kenmei: "東京都",
      ryori: "深川丼",
      setumei:
        "匠の技食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい",
    },
  ],
};

function searchLocalCuisine() {
  currentId = 0;
  while (currentId < 4) {
    if (searchSample[members][currentId][kenmei] == select) {
      document.getElementById("result1").textContent =
        "県名" + "：" + searchSample[members][currentId][kenmei];
      document.getElementById("result2").textContent =
        "料理名" + "：" + searchSample[members][currentId][ryori];
      document.getElementById("result3").textContent =
        "説明" + "：" + searchSample[members][currentId][setumei];
    }
    currentId++;
  }
}
