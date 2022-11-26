package main

import (
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"

	"github.com/gin-gonic/gin"
)

type cuisines struct {
	Prefecture      string `json:"prefecture"`
	Name            string `json:"name"`
	Overview        string `json:"overview"`
	Prefecture_id   string  `json:"prefecture_id"`
	Partly_overview string `json:"partly_overview"`
	ID              string  `json:"id"`
}

func main() {

	godotenv.Load("./.env")
	DBMS := os.Getenv("DBMS")
	USER := os.Getenv("CAMP_USER")
	PASS := os.Getenv("PASS")
	PROTOCOL := os.Getenv("PROTOCOL")
	DBNAME := os.Getenv("DBNAME")

	CONNECT := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME + "?charset=utf8&parseTime=true&loc=Asia%2FTokyo"

	db, _ := gorm.Open(DBMS, CONNECT)
	var cuisine cuisines
	db.Where("Prefecture_id=?", "1").Find(&cuisine)
	fmt.Println(cuisine.Prefecture)

	router := gin.Default()

	router.POST("/search", func(c *gin.Context) {
		number := c.Query("number")
		fmt.Println("値を受け取りました")
		fmt.Println(number)
	})

	router.GET("/gacha", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"ID":  "1",
			"県名":  "北海道",
			"料理名": "ちゃんちゃん焼き",
			"説明":  "魚",
		})
	})

	// フロントで答え合わせするなら使わない
	// router.POST("/quiz", func(c *gin.Context) {
	// 	a:=c.Query("pred")
	// 	fmt.Println("解答を受け付けました")
	// 	fmt.Println(a)
	// })

	router.GET("/quiz", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"ID":  "1",
			"県名":  "北海道",
			"料理名": "ちゃんちゃん焼き",
			"説明":  "魚",
		})
	})

	router.Run(":8080")
}
