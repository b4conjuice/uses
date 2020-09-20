import Page from '@/components/page'
import db from '@/lib/db'
import sanitize from '@/lib/sanitize'

const Home = ({ markdown }) => (
  <Page>
    <main className="flex flex-col flex-grow space-y-4">
      <article
        className="flex-grow p-4 mx-4 my-4 prose bg-white rounded-lg shadow md:mx-auto lg:px-8 lg:py-4 lg:prose-xl md:container lg:max-w-3xl dark:bg-cb-dark-blue"
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    </main>
  </Page>
)

export const getStaticProps = async () => {
  const id = process.env.NOTE_ID
  const doc = await db.collection('notes').doc(id).get()
  const { markdown } = { id: doc.id, ...doc.data() }
  return {
    props: {
      markdown: sanitize(markdown),
    },
    revalidate: 1,
  }
}

export default Home
