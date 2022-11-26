package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
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
