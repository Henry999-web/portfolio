import './Project.css'
import project1 from '../../image/project1.png'
import { Button } from '@/components/ui/button'
import { Github, Globe } from 'lucide-react'
function Project() {
    const projects = [
        {
            title: "Movie View",
            description: "A dynamic movie browsing platform built with React and TMDB API. Users can explore trending movies, search for specific titles, and view detailed information including ratings, cast, and synopses.",
            image: project1,
            tags: ["React", "TMDB API", "CSS"]
        },
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive admin dashboard for managing products, orders, and customers. Features real-time data visualization, inventory management, and secure authentication.",
            image: project1,
            tags: ["React", "Node.js", "Chart.js"]
        },
        {
            title: "Social Connect",
            description: "A modern social media application allowing users to connect, share posts, and interact in real-time. Includes features like instant messaging, comments, and likes.",
            image: project1,
            tags: ["Next.js", "Socket.io", "Tailwind"]
        }
    ];

    return (
        <section className="project-wrapper">
            <div className="innerWidth px-8 py-24 flexCenter p-container flex-col">
                <div className="text-wrapper w-full mb-12">
                    <div className="line"></div>
                    <div className="text-container">
                        <span className="project-text">Projects</span>
                    </div>
                    <div className="line right"></div>
                </div>

                <div className="flex flex-col gap-12 w-full">
                    {projects.map((project, index) => (
                        <div key={index} className={`project flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse lg:flex-row-reverse' : 'md:flex-row lg:flex-row'} items-center justify-between bg-white text-black p-8 gap-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                            <div className="project-image flex-1 w-full">
                                <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="project-content flex-1 flex flex-col gap-4">
                                <h3 className='text-3xl font-bold uppercase tracking-wide'>{project.title}</h3>
                                <div className="flex gap-2 flex-wrap mb-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-zinc-100 text-zinc-800 text-xs font-semibold rounded-full border border-zinc-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-zinc-600 leading-relaxed text-lg">{project.description}</p>
                                <div className="project-buttons flex gap-4 mt-6">
                                    <Button className='flex items-center gap-2' variant='outline'>
                                        <Github className="w-4 h-4" /> Github
                                    </Button>
                                    <Button className='flex items-center gap-2' variant='default'>
                                        <Globe className="w-4 h-4" /> Demo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project

