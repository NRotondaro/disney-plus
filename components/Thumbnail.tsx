import Image from 'next/image'
import { useRouter } from 'next/router'
import { ResultsProps } from '../typings'

interface Props {
  results: ResultsProps
}

export const Thumbnail = ({ results }: Props) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  const router = useRouter()

  return (
    <div
      className="flex min-h-[170px] min-w-[250px] transform cursor-pointer overflow-hidden rounded-lg border-[3px] border-secondary border-opacity-10 shadow-xl transition duration-300 hover:scale-105 hover:border-opacity-80 hover:shadow-2xl md:min-h-[210px] md:min-w-[330px]"
      onClick={() => router.push(`/movie/${results.id}`)}
    >
      <Image
        src={`${BASE_URL}${results.backdrop_path || results.poster_path}`}
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  )
}
