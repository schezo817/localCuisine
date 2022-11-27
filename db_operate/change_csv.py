import pandas as pd

df=pd.read_csv("local_cuisine.csv")
dfSample=pd.read_csv("local_cuisine_sample.csv")

prefecture_id=[]
count=0
datapre=""
for data in df["県名"]:
  if datapre!=data:
    count+=1
    prefecture_id.append(count)
  else:
    prefecture_id.append(count)
  datapre=data
  
df["県ID"]=prefecture_id
df["略文"]=dfSample["説明"]

df.to_csv("a.csv",header=True,index=False)