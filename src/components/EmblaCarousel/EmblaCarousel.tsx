import React, { type PropsWithChildren } from 'react';
import { type EmblaOptionsType } from 'embla-carousel';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';

interface PropType extends PropsWithChildren {
    title: string
    description?: string
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(props.options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    if (!props.children) {
        return null;
    }

    return (
        <section className="embla">
            <div className="text-lg font-semibold text-start">{props.title}</div>
            {props.description && <div className='text-sm'>{props.description}</div>}
            <div className="embla__viewport mt-4" ref={emblaRef}>
                <div className="embla__container mr-2">
                    {props.children}
                </div>
            </div>
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
