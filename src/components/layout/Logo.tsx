interface LogoProps {
    href?: string;
}

export default function Logo(props: LogoProps) {
    return (
        <a className="inline-flex items-center gap-x-2" href={props.href || "/"} id="indexLink">
            <span className="font-bold text-2xl">trietng</span>
        </a>
    );
}