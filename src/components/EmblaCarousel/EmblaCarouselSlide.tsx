interface EmblaCarouselSlideProps {
    skill: {
        title: string
        body?: string
        icon: string
    }
}

export default function EmblaCarouselSlide(props: EmblaCarouselSlideProps) {
    return (
        <div className="embla__slide flex flex-col items-center gap-2 rounded-lg bg-amber-900/5 dark:bg-white/10 p-4">
            <img src={props.skill.icon} alt={props.skill.icon} className="size-16" />
            <div className="text-lg font-semibold">{props.skill.title}</div>
            {props.skill.body && <div className="text-sm text-start">{props.skill.body}</div>}
        </div>
    )
}