import { ResultsProps } from '../typings'
import { Thumbnail } from './Thumbnail'

interface Props {
  title: string
  results: ResultsProps[]
}

export const Row = ({ title, results }: Props) => {
  return (
    <div className="relative my-10 mx-auto flex max-w-[1400px] flex-col space-y-2 px-8">
      {results.map((result) => (
        <Thumbnail results={result} key={result.id} />
      ))}
    </div>
  )
}
