import Image from 'next/image'

export const Brands = () => {
  return (
    <section className="mx-auto mt-10 flex max-w-[1400px] flex-col items-center justify-center gap-6 px-8 md:flex-row">
      <div className="brand group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
