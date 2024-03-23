export default function Markdown({ content }: { content: string }) {
  return (
    <article
      className='prose w-full rounded bg-cb-blue p-4 text-cb-white lg:prose-xl prose-headings:text-cb-white prose-a:text-cb-pink hover:prose-a:text-cb-pink/75 prose-code:text-cb-mint'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
