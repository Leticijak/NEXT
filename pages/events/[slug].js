import Layout from '../../components/Layout'

import { useRouter } from 'next/router'

export default function EventPage() {
  const router = useRouter()

  console.log(router)
  return (
    <Layout title='THIS IS SLUG'>
      <h1>Ovo je moja objava</h1>
    </Layout>
  )
}
