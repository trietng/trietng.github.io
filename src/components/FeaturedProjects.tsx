import { marked } from "marked";

interface FeaturedProjectsProps {
    projects: any[];
}

export default function FeaturedProjects(props: FeaturedProjectsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {props.projects.map((project: any) => (
                <div key={project.slug} className="overflow-hidden flex flex-col p-4 rounded-lg bg-amber-50 dark:bg-white dark:text-black">
                    <div className="font-bold">{project.data.name}</div>
                    <div className="mt-2 [&_ul]:list-disc [&_li]:ml-12" dangerouslySetInnerHTML={{__html: marked.parse(project.body)}}/>
                    {project.data.repository.map((repo: string) => (
                        <div key={repo} className="my-1">
                            <a href={repo} className="text-blue-500 hover:underline">{repo}</a>
                        </div>
                    ))}
                    {project.data.demo !== "" && <div className="flex justify-center items-center mt-auto">
                        <a href={project.data.demo} className="text-white rounded-lg py-2 px-4 bg-amber-900 hover:bg-amber-900/50 dark:text-white dark:bg-black dark:hover:bg-black/75">Demo</a>
                    </div>}
                </div>
            ))}
        </div>
    );
}