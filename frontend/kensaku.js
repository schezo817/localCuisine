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
    kenmei: "愛知県",
    ryori: "エビフライ",
    setumei:
      "おいしい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい",
  },

  {
    kenmei: "東京都",
    ryori: "深川丼",
    setumei:
      "匠の技食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい",
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
