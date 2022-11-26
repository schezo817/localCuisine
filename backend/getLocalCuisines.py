# -*- coding: utf-8 -*-

# import
from bs4 import BeautifulSoup
import requests as req
from time import sleep
import re
import csv
from tqdm import tqdm
import warnings
import pandas as pd
from bs4.element import SoupStrainer
import uuid
from time import sleep
warnings.simplefilter("ignore")

# 取得元となる Web ページの URL から soup を返す


def get_soup(url):

    # [必須]サーバー負荷対策
    sleep(2)
    # ページ情報の取得
    response = req.get(url, verify=False)
    response.encoding = response.apparent_encoding
    soup = BeautifulSoup(response.text, "html.parser")

    return soup


soup = get_soup(url="https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/")
a = (soup.find_all("a"))
href_area = []
for data in a:
    href = data.get("href")
    # 正規化表現で取得もあり
    if "/j/keikaku/syokubunka/k_ryouri/search_menu/area/" in href and href not in href_area:
        href_area.append(href)

# 47 都道府県 (各 2 回含まれているようだ)
# print(len(href_area))

dt = soup.find_all("dd")
tmp = []
prefe_names = []
for data in dt[2:]:
    tmp.append(data.get_text())
for data in tmp:
    for data2 in data.split(" "):
        prefe_names.append(data2)

df = pd.DataFrame()
prefe = []
tit = []
text = []
for data in tqdm(zip(href_area, prefe_names)):
    # https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/hokkaido.html
    # 県名 ローマ字五十音順
    soup = get_soup(url="https://www.maff.go.jp"+data[0])

    for data2 in zip(soup.find_all("p", class_="tit"), soup.find_all("p", class_="txt")):
        prefe.append(data[1])
        tit.append(data2[0].get_text())
        text.append(data2[1].get_text())

    # break

df["県名"] = prefe
df["料理名"] = tit
df["説明"] = text
print(df.head())
df.to_csv("local_cuisine.csv")
