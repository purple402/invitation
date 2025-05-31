import { useState, useCallback, useEffect } from 'react';

import BaseContainer from '@components/base/BaseContainer';

import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './CarouselButton';
import ImageArray from './PhotoList.js';

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
            {ImageArray.map((item, index) => (
              <div className="embla__slide" key={`photo-${index}`}>
                <div className="embla__slide__image">
                  <img src={item.src} alt="photo" />
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {ImageArray.map((item, index) => (
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
