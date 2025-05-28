import { useState, useCallback, useEffect } from 'react';

import BaseContainer from '@components/base/BaseContainer';

import photo from '@assets/images/cover.jpg';
import photo02 from '@assets/images/photo02.jpg';
import sampleImg from '@assets/images/sample.jpg';

import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './CarouselButton';
const slides = [
  {
    id: 1,
    src: photo,
    date: '2025.03.27',
  },
  {
    id: 2,
    src: photo02,
    date: '2025.03.27',
  },
  {
    id: 3,
    src: sampleImg,
    date: '2025.03.27',
  },
  {
    id: 4,
    src: photo02,
    date: '2025.03.27',
  },
  {
    id: 5,
    src: photo02,
    date: '2025.03.27',
  },
];

import './embla.css';

const PhotoSlide = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <BaseContainer background="white">
      <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {slides.map((item, index) => (
              <div className="embla__slide" key={`photo-${index}`}>
                <img src={item.src} alt="photo" className="embla__slide__image" />
                <span className="embla__slide__date">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {slides.map((item, index) => (
                <Thumb
                  key={`thumb-${index}`}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  image={item.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  );
};

export default PhotoSlide;
