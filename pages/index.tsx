import type { GetServerSideProps, NextPage } from 'next'
import { getSession, useSession } from 'next-auth/client'
import Head from 'next/head'
import { json } from 'stream/consumers'
import { Brands } from '../components/Brands'
import Header from '../components/Header'
import { Hero } from '../components/Hero'
import { Row } from '../components/Row'
import { Slider } from '../components/Slider'
import { ResultsProps } from '../typings'
import { requests } from '../utils/requests'

interface Props {
  popularMovies: ResultsProps[]
  popularShows: ResultsProps[]
  topRatedMovies: ResultsProps[]
  topRatedShows: ResultsProps[]
}

const Home = ({
  popularMovies,
  popularShows,
  topRatedMovies,
  topRatedShows,
}: Props) => {
  const [session] = useSession()

  return (
    <div>
      <Head>
        <title>Disney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {!session ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen after:absolute after:inset-0 after:z-[-1] after:bg-home after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat">
          <Slider />
          <Brands />
          <Row results={popularMovies} title='Popular Movies' />
          <Row results={popularShows} title='Popular Shows' />
          <Row results={topRatedMovies} title='Top Rated Movies' />
          <Row results={topRatedShows} title='Top Rated Shows' />
        </main>
      )}
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  const [popularMovies, popularShows, topRatedMovies, topRatedShows] =
    await Promise.all([
      fetch(requests.fetchPopularMovies).then((res) => res.json()),
      fetch(requests.fetchPopularSeries).then((res) => res.json()),
      fetch(requests.fetchTopRatedMovies).then((res) => res.json()),
      fetch(requests.fetchTopRatedSeries).then((res) => res.json()),
    ])

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      topRatedMovies: topRatedMovies.results,
      topRatedShows: topRatedShows.results,
    },
  }
}
