import Image from 'next/image'
import {
  HomeIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import { getSession, signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

function Header() {
  const [session] = useSession()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-center bg-primary px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push('/')}
      />
      {session && (
        <div className="ml-10 mt-2 hidden items-center space-x-6 md:flex">
          <a className="header-link group">
            <HomeIcon className="h-4" /> <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <MagnifyingGlassIcon className="h-4" />{' '}
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" /> <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" /> <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" className="h-5" />{' '}
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" className="h-5" />{' '}
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          className="ml-auto rounded  border px-4 py-1.5 font-medium uppercase tracking-wide transition duration-200 hover:bg-white hover:text-black"
          onClick={() => signIn()}
        >
          Login
        </button>
      ) : (
        <img
          src={session?.user?.image || ''}
          alt="profile"
          className="ml-auto h-12 w-12  cursor-pointer rounded-full object-cover"
          onClick={() => signOut()}
        />
      )}
    </header>
  )
}

export default Header
