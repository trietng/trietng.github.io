import { marked } from "marked";

export default function FeaturedProjects({ projects }: any) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {projects.map((project: any) => (
                <div key={project.slug} className="p-4 rounded-lg shadow- bg-amber-50 dark:bg-white dark:text-black">
                    <div className="font-bold">{project.data.name}</div>
                    <div className="mt-2 prose prose-ul:list-disc prose-li:ml-12" dangerouslySetInnerHTML={{__html: marked.parse(project.body)}}/>
                    <div className="mt-4 flex justify-around items-center gap-x-4">
                        {project.data.repository !== '' && <a href={project.data.repository} className="hover:underline">Repository</a>}
                        <a href={project.data.demo} className="hover:underline">Demo</a>
                    </div>
                </div>
            ))}
        </div>
    );
}