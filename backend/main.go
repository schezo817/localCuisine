package main

import (
	"fmt"
	"math/rand"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"

	"github.com/gin-gonic/gin"
)

type cuisines struct {
	ID              string `json:"id"`
	Prefecture      string `json:"prefecture"`
	Name            string `json:"name"`
	Overview        string `json:"overview"`
	Prefecture_id   string `json:"prefecture_id"`
	Partly_overview string `json:"partly_overview"`
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

	router := gin.Default()
	router.LoadHTMLGlob("./*.html")

	router.Static("/src/css", "./src/css")
	router.Static("/src/js", "./src/js")


	// 県番号を受け取ってデータを返す
	router.POST("/search", func(c *gin.Context) {
		number := c.Query("number")
		var cuisine cuisines
		db.Where("Prefecture_id=?", string(number)).Find(&cuisine)
		fmt.Println(cuisine)

		c.JSON(200, gin.H{
			"id":              cuisine.ID,
			"prefe_name":      cuisine.Prefecture,
			"cuisine_name":    cuisine.Name,
			"overview":        cuisine.Overview,
			"prefe_id":        cuisine.Prefecture_id,
			"partly_overview": cuisine.Partly_overview,
		})

	})

	// ランダムにデータを返す
	router.GET("/gatya", func(c *gin.Context) {
		rand.Seed(time.Now().UnixNano())
		number := rand.Intn(6000) % 1365

		var cuisine cuisines
		fmt.Println(number)
		db.Where("id = ?", number).First(&cuisine)

		c.JSON(200, gin.H{
			"id":              cuisine.ID,
			"prefe_name":      cuisine.Prefecture,
			"cuisine_name":    cuisine.Name,
			"overview":        cuisine.Overview,
			"prefe_id":        cuisine.Prefecture_id,
			"partly_overview": cuisine.Partly_overview,
		})
	})

	// フロントで答え合わせするなら使わない
	// router.POST("/quiz", func(c *gin.Context) {
	// 	a:=c.Query("pred")
	// 	fmt.Println("解答を受け付けました")
	// 	fmt.Println(a)
	// })

	// ランダムにデータを返す
	router.GET("/quiz", func(c *gin.Context) {
		rand.Seed(time.Now().UnixNano())
		number := rand.Intn(6000) % 1365

		var cuisine cuisines
		fmt.Println(number)
		db.Where("id = ?", number).First(&cuisine)

		c.JSON(200, gin.H{
			"id":              cuisine.ID,
			"prefe_name":      cuisine.Prefecture,
			"cuisine_name":    cuisine.Name,
			"overview":        cuisine.Overview,
			"prefe_id":        cuisine.Prefecture_id,
			"partly_overview": cuisine.Partly_overview,
		})
	})

	router.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", gin.H{
			"id": "変数をバックエンドからフロントへ渡しています",
		})
	})
	router.GET("/index.html", func(c *gin.Context) {
		c.HTML(200, "index.html", gin.H{
			"id": "変数をバックエンドからフロントへ渡しています",
		})
	})
	router.GET("/gatya.html", func(c *gin.Context) {
		c.HTML(200, "gatya.html", gin.H{
			"id": "変数をバックエンドからフロントへ渡しています",
		})
	})
	router.GET("/kensaku.html", func(c *gin.Context) {
		c.HTML(200, "kensaku.html", gin.H{
			"id": "変数をバックエンドからフロントへ渡しています",
		})
	})
	router.GET("/quiz.html", func(c *gin.Context) {
		c.HTML(200, "quiz.html", gin.H{
			"id": "変数をバックエンドからフロントへ渡しています",
		})
	})
	defer db.Close()
	router.Run(":8080")
}
