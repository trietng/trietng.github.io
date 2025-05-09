import { marked } from "marked";
import CalendarDate from "./CalendarDate";
import { TbArrowNarrowRight } from "react-icons/tb";

interface WorkExperienceProps {
    workExperiences: any[];
    translations: Record<string, string>;
    lang: string;
}

export default function WorkExperience(props: WorkExperienceProps) {
    return (
        <>  
            {props.workExperiences.map((workExperience: any) => (
                <div className="mt-4 md:flex md:justify-between md:items-center md:gap-x-4" key={workExperience.slug}>
                    <div>
                        <div className="font-bold">{workExperience.data.title}</div>
                        <div>{workExperience.data.company}</div>
                        <div className="mt-2 [&_ul]:list-disc [&_li]:ml-12" dangerouslySetInnerHTML={{__html: marked.parse(workExperience.body)}}></div>
                    </div>
                    <div className="flex justify-around md:justify-center items-center gap-x-4 mt-4 md:mt-0">
                        <div className="w-32">
                            <CalendarDate datetime={workExperience.data.startDate} translations={props.translations} lang={props.lang} />
                        </div>
                        <TbArrowNarrowRight size="6rem"/>
                        <div className="w-32">
                            <CalendarDate datetime={workExperience.data.endDate} translations={props.translations} lang={props.lang} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}