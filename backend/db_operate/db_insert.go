package main

import (
	"encoding/csv"
	"fmt"
	"io"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
)

type cuisines struct {
	Prefecture string `json:"prefecture"`
	Name       string `json:"name"`
	Overview   string `json:"overview"`
}

func main() {
	err := godotenv.Load("../.env")
	DBMS := os.Getenv("DBMS")
	USER := os.Getenv("CAMP_USER")
	PASS := os.Getenv("PASS")
	PROTOCOL := os.Getenv("PROTOCOL")
	DBNAME := os.Getenv("DBNAME")

	CONNECT := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME + "?charset=utf8&parseTime=true&loc=Asia%2FTokyo"

	db, err := gorm.Open(DBMS, CONNECT)
	
	if err != nil {
		panic(err.Error())
	} else {
		fmt.Println("DB接続成功")
	}

	
	file, err := os.Open("local_cuisine.csv")
	r := csv.NewReader(file) // csv.NewReaderを使ってcsvを読み込む

	row, err := r.Read() // csvを1行ずつ読み込む
	fmt.Println(row)
	// []stringなのでループする
	for {
		row, err = r.Read() // csvを1行ずつ読み込む
		if err == io.EOF {
			break // 読み込むべきデータが残っていない場合，Readはnil, io.EOFを返すため、ここでループを抜ける
		}
		// データベースへの挿入
		db.Create(&cuisines{
			Prefecture: row[1],
			Name:       row[2],
			Overview:   row[3],
		})

		// break
	}
}
