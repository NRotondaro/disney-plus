export interface ResultsProps {
  id?: number
  backdrop_path?: string
  poster_path?: string
  overview?: string
  title?: string
  original_name?: string
  media_type?: string
  release_date?: string
  first_air_date?: string
  vote_count?: string
  title?: string
  original_name?: string
  runtime?: number
  genres?: [
    {
      id: number
      name: string
    }
  ]
  videos?: {
    results: [
      {
        key: string
        type: string
      }
    ]
  }
}
