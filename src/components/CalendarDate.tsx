interface CalendarDateProps {
    datetime: string;
    translations: Record<string, string>;
    lang: string;
}

export default function CalendarDate(props: CalendarDateProps) {
    const temp = new Date(props.datetime);
    const month = temp.toLocaleString(props.lang, { month: 'long' });
    const year = temp.getFullYear();

    return (
        props.datetime !== '' ?
        <div className="w-full text-center">
            <div className="bg-red-500 text-white py-1 rounded-t-md">{year}</div>
            <div className="bg-amber-50 text-amber-900 dark:bg-white dark:text-black py-1 rounded-b-md">{month}</div>
        </div> :
        <div className="w-full text-center py-2 rounded-md bg-amber-50 dark:bg-white dark:text-black">
            <div>&nbsp;</div>
            <div className="relative top-1/2 -translate-y-1/2">{props.translations.present}</div>
        </div>
    );
}