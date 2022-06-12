import { ResultsProps } from '../typings'
import { Thumbnail } from './Thumbnail'

interface Props {
  title: string
  results: ResultsProps[]
}

export const Row = ({ title, results }: Props) => {
  return (
    <div className="relative my-10 mx-auto flex max-w-[1400px] flex-col space-y-2 px-8">
      <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
      <div className="-m-2 flex space-x-6 overflow-y-hidden overflow-x-scroll p-2 scrollbar-hide">
        {results.map((result) => (
          <Thumbnail results={result} key={result.id} />
        ))}
      </div>
    </div>
  )
}
