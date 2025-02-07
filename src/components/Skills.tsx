import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import EmblaCarouselSlide from "./EmblaCarousel/EmblaCarouselSlide";

interface Skill {
    title: string;
    body?: string;
    icon: string;
    type: "language" | "framework" | "tool" | "database";
    level: "beginner" | "intermediate" | "advanced";
}

interface SkillsProps {
    translations: Record<string, string>;
    primarySkills: Skill[];
    secondarySkills: Skill[];
}

export default function Skills(props: SkillsProps) {
    return (
        <div className="my-4">
            {props.primarySkills.length > 0 && <EmblaCarousel title={props.translations.primarySkills} description={props.translations.primarySkillsDescription}>
                {props.primarySkills.map((skill, index) => (
                    <EmblaCarouselSlide key={index} skill={skill} />
                ))}
            </EmblaCarousel>}
            {props.secondarySkills.length > 0 && <EmblaCarousel title={props.translations.secondarySkills} description={props.translations.secondarySkillsDescription}>
                {props.secondarySkills.map((skill, index) => (
                    <EmblaCarouselSlide key={index} skill={skill} />
                ))}
            </EmblaCarousel>}
        </div>
    );
}