export default async function ReadmeText(context) {
  const documents = context.viewModel.documents
  const text = documents.map((doc)=>{
    const content = doc.topics.map((topic)=>`  ${topic.title}\n  ${topic.description}`).join('\n\n')
    return `${doc.section}\n${content}`
  }).join('\n\n')
  await context.sendText(text);
}
