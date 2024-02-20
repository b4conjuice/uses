import type { InferGetStaticPropsType } from 'next'

import { Main } from '@bacondotbuild/ui'

import Layout from '@/components/layout'
import type { Content } from '@/utils/fetchContent'
import fetchContent from '@/utils/fetchContent'

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <article
            className='prose proselg:prose-xl prose-a:text-cb-pink bg-cb-blue text-cb-white prose-headings:text-cb-white hover:prose-a:text-cb-pink/75 rounded p-4'
            dangerouslySetInnerHTML={{ __html: props.markdown }}
          />
        </div>
      </Main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data: Content = await fetchContent(process.env.CONTENT_URL!)
  return {
    props: {
      markdown: data.markdown,
    },
    revalidate: 1,
  }
}
