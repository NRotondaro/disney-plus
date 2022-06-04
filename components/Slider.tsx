import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const Slider = () => {
  return (
    <section className="relative mx-auto mt-4 max-w-screen-2xl shadow-2xl">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="/images/slider-1.jpg" loading="lazy" alt="" />
        </div>
        <div>
          <img src="/images/slider-2.jpg" loading="lazy" alt="" />
        </div>
        <div>
          <img src="/images/slider-3.jpg" loading="lazy" alt="" />
        </div>
        <div>
          <img src="/images/slider-4.jpeg" loading="lazy" alt="" />
        </div>
      </Carousel>
    </section>
  )
}
