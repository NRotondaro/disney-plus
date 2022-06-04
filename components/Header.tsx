import Image from 'next/image'
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid'
import {signIn} from 'next-auth/client'

function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-16 items-center bg-primary px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cusror-pointer"
      />
      <div className="ml-10 hidden items-center space-x-6 md:flex">
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <SearchIcon className="h-4" />
          <span className="span">Search</span>
        </a>
        <a className="header-link group">
          <PlusIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group">
          <StarIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="header-link group">
          <img src="/images/movie-icon.svg" className="h-5" />
          <span className="span">Movies</span>
        </a>
        <a className="header-link group">
          <img src="/images/series-icon.svg" className="h-5" />
          <span className="span">Series</span>
        </a>
      </div>
      <button className="hover:bg-white hover:text-black ml-auto rounded border px-4 py-1.5 font-medium uppercase tracking-wide transition duration-200" onClick={() => signIn()}>
        Login
      </button>
    </div>
  )
}

export default Header
