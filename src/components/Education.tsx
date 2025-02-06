import { marked } from "marked";
import { withPreposition } from "../models/preposition";
import CalendarDate from "./CalendarDate";

interface EducationProps {
    education: any;
    translations: Record<string, string>;
    lang: string;
}

export default function Education(props: EducationProps) {
    return (
        <div className="mt-4 md:flex md:justify-between md:items-center">
            <div>
                <div className="font-bold">{props.education.school}</div>
                <div>{withPreposition(props.education.degree)} {props.education.major}</div>
                <div className="text-sm mr-4 mt-2" dangerouslySetInnerHTML={{__html: marked.parse(props.education.description)}}></div>
            </div>
            <div className="flex justify-between md:justify-center items-center gap-x-4 mt-4 md:mt-0">
                <div className="text-center mb-2">{props.translations.expectedGraduationDate}</div>
                <div className="w-32">
                    <CalendarDate datetime={props.education.graduationDate} translations={props.translations} lang={props.lang} />
                </div>
            </div>
        </div>
    );
}