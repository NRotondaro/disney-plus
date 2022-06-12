import { PlusIcon, XIcon } from '@heroicons/react/solid'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/client'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Header from '../../components/Header'
import { Hero } from '../../components/Hero'
import { ResultsProps } from '../../typings'

interface Props {
  result: ResultsProps
}

function Movie({ result }: Props) {
  const [session] = useSession()
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  const [showPlayer, setShowPlayer] = useState(false)
  const router = useRouter()

  const index =
    result.videos != null
      ? result.videos?.results.findIndex(
          (element) => element.type === 'Trailer'
        )
      : 0

  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  }, [])

  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-65px)]">
            <Image
              src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-y-28 inset-x-4 z-50 space-y-6 md:inset-y-auto md:inset-x-12 md:bottom-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl">
              {result.title || result.original_name}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="flex items-center justify-center rounded bg-secondary py-2.5 px-6 text-xs text-black hover:bg-gray md:text-base">
                <img
                  className="h-6 md:h-8"
                  src="/images/play-icon-black.svg"
                  alt="play-icon"
                />
                <span className="font-medium uppercase tracking-wide">
                  Play
                </span>
              </button>

              <button
                className="flex items-center justify-center rounded border-secondary bg-black/30 py-2.5 px-6 text-xs text-secondary hover:bg-gray md:text-base"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  className="h-6 md:h-8"
                  src="/images/play-icon-white.svg"
                  alt="play-icon"
                />
                <span className="font-medium uppercase tracking-wide">
                  Trailer
                </span>
              </button>

              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-black/60">
                <PlusIcon className="h-6" />
              </div>

              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-black/60">
                <img src="/images/group-icon.svg" alt="group-icoon" />
              </div>
            </div>

            <p className="text-xs md:text-sm">
              {result.release_date || result.first_air_date} ·{' '}
              {Math.floor(result.runtime! / 60)}h {result.runtime! % 60}m ·{' '}
              {result.genres!.map((genre) => genre.name + ' ')}
            </p>
            <h4 className="max-w-4xl text-sm md:text-lg">{result.overview}</h4>
          </div>

          {showPlayer && (
            <div className="absolute inset-0 z-50 h-full w-full bg-black opacity-50" />
          )}

          <div
            className={`absolute inset-x-[7%] top-3 overflow-hidden rounded transition duration-700 md:inset-x-[13%] ${
              showPlayer ? 'z-50 opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center justify-between bg-black p-3.5 text-secondary">
              <span className="font-semibold">Play Trailer</span>
              <div
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg opacity-50 hover:bg-primary hover:opacity-75"
                onClick={() => setShowPlayer(false)}
              >
                <XIcon className="h-5" />
              </div>
            </div>
            <div className="relative pt-[50%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: '0', left: '0' }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Movie

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const { id } = context.query

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json())

  return {
    props: {
      result: request,
      session,
    },
  }
}
