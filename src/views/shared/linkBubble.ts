export default {
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "相關連結",
        "size": "xl",
        "weight": "bold"
      },
      {
        "type": "separator",
        "margin": "md",
        "color": "#000000"
      },
      {
        "type": "text",
        "text": "覺得做得不錯的話請幫我按 Github 星星",
        "size": "sm",
        "color": "#666666",
        "wrap": true,
        "margin": "lg"
      },
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "午餐隊長原始碼",
          "uri": "https://github.com/Yoctol/leader-of-lunch"
        },
        "style": "primary",
        "color": "#225588",
        "margin": "lg"
      },
      {
        "type": "text",
        "text": "如果有發現 Bug 或者功能建議的話可以填寫以下表格:",
        "size": "sm",
        "color": "#666666",
        "wrap": true,
        "margin": "lg"
      },
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "意見回饋",
          "uri": "https://forms.gle/6c6qizGP1VGT9K8G6"
        },
        "style": "primary",
        "color": "#225588",
        "margin": "lg"
      }
    ]
  }
}
