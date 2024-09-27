import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";

export default function Skills() {
    return (
        <EmblaCarousel slides={[1, 2, 3, 4, 5]} options={{ loop: true }} />
    );
}