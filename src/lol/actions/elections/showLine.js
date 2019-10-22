module.exports = async function ElectionsShowLine(context, props){
  const options = context.viewModel.options;

  if(options == null){
    await context.sendText("你還沒吃過午餐，請先吃一波午餐再查看午餐票選結果");
    return
  }

  const result = options.map(o => `${o.name}: ${o.count}`).join('\n')
  const conclusion = `結論：吃${options[0].name}`
  await context.sendText(`本日午餐票選結果：\n${result}\n\n${conclusion}`)
}
