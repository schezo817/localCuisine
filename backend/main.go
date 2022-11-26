package main

import (
	"github.com/gin-gonic/gin"
	"fmt"
)

func main() {
	router := gin.Default()

	router.POST("/test", func(c *gin.Context) {
		a:=c.PostForm("name")
		fmt.Println(a)
	})

	router.GET("/", func(c *gin.Context) {
    name := c.Query("name")
    fmt.Println(name)
		c.JSON(200, gin.H{
			"ID": "1",
			"県名": "北海道",
			"料理名": "ちゃんちゃん焼き",
			"説明": "魚",
		})
  })

	router.Run(":8080")
}
