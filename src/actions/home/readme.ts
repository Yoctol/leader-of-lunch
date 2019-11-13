import render from '../../views/render';
export default async function Readme(context, { match }) {
  const querySection = match.groups?.section?.trim();

  const documents = [
    {
      section: '用戶功能',
      topics: [
        {
          title: '設定暱稱',
          description: '輸入「叫我{暱稱}」可以設定暱稱。'
        },
        {
          title: '顯示目前暱稱',
          description: '輸入「我誰」可以查看你目前的暱稱。'
        },
      ]
    },
    {
      section: '餐廳功能',
      topics: [
        {
          title: '新增餐廳',
          description: '輸入「新增{餐廳名稱}」可以新增餐廳，一次新增多筆時可使用 / 或空白或換行作為分隔符號。'
        },
        {
          title: '刪除餐廳',
          description: '輸入「刪除{餐廳名稱}」可以刪除餐廳，一次刪除多筆時可使用 / 或空白或換行作為分隔符號。'
        },
        {
          title: '顯示所有餐廳',
          description: '輸入「餐廳」可以顯示所有餐廳。'
        },
      ]
    },
    {
      section: '會議功能',
      topics: [
        {
          title: '發起會議',
          description: '只要說「午餐」或「餓了」即可發起午餐會議，每小時只能發起一次會議。午餐隊長會從所有餐廳中挑選 4 家作為選項。'
        },
        {
          title: '參與會議',
          description: '說出投票選項的號碼即可參與會議。'
        },
        {
          title: '顯示會議結果',
          description: '只要說「走」、「出發」或「統計」，就可以看見目前會議的結果。顯示會議結果並不會導致會議結束，會議將會在發起後的一小時自動結束。'
        }
      ]
    },
    {
      section: '進階會議功能',
      topics: [
        {
          title: '新增投票選項',
          description: '輸入「想要{餐廳}」即可新增投票選項，若一小時內沒有發起過會議，午餐隊長將會自動發起一個新的會議，若餐廳不存在，午餐隊長會自動新增餐廳。'
        },
        {
          title: '新增隨機投票選項',
          description: '只要說「吃別的」午餐隊長就會從所有餐廳中，再挑 2 家加入投票選項。'
        },
        {
          title: '取消投票',
          description: '說出「pass」即可取消投票。'
        }
      ]
    }
  ]

  const filteredDocuments = documents.filter((doc)=> doc.section.indexOf(querySection) >= 0)
  if(filteredDocuments.length > 0){
    return render('home/readme', { documents: filteredDocuments });
  }

  return render('home/readme', { documents });
}
