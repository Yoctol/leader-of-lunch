module.exports = async function Menu(context, { next }){
  await context.sendText(`
查看暱稱：「我是誰」
修改暱稱：「叫我\${暱稱}」
查看所有餐廳：「餐廳」
新增餐廳：「新增\${餐廳名稱}」
刪除餐廳：「刪除\${餐廳名稱}」
建立票選活動：「吃」
參與投票：「1」「2」「3」「4」
顯示統計：「走」
`);
}