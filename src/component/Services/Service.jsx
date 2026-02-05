import React from 'react'
import { Package, Sparkles } from 'lucide-react'
import { CodingIcon, SeoIcon, WebDevIcon, SecurityIcon } from '../Icons';
import './Service.css'

function Service() {
    return (
        <section className='service-wrapper'>
            <section className="innerWidth relative px-8 py-24 s-container">
                <div className="text-wrapper">
                    <div className="line"></div>
                    <div className="text-container">
                        <span className="service-text">Services</span>
                    </div>
                    <div className="line right"></div>
                </div>
                <div className="mt-16 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 */}
                    <div className="group relative inset-ring-2 inset-ring-background flex h-full w-full max-w-md flex-col rounded-2xl border border-black bg-gradient-to-b from-zinc-900 to-black p-8 transition-all duration-300 hover:border-zinc-700">

                        {/* Icon Container - Matches the sleek rounded style */}
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-100/50 bg-zinc-900 shadow-inner">
                            <CodingIcon className="h-7 w-7 text-white" strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold tracking-tight text-white">
                                Full-Stack Development
                            </h3>
                            <p className="text-base leading-relaxed text-zinc-400">
                                I build complete, scalable digital products from the server to the browser, ensuring seamless functionality and high performance at every layer.
                            </p>
                        </div>


                        {/* Subtle Bottom Glow on Hover */}
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    {/* Card 2 */}
                    <div className="group relative inset-ring-2 inset-ring-background flex h-full w-full max-w-md flex-col rounded-2xl border border-black bg-gradient-to-b from-zinc-900 to-black p-8 transition-all duration-300 hover:border-zinc-700">

                        {/* Icon Container - Matches the sleek rounded style */}
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-100/50 bg-zinc-900 shadow-inner">
                            <WebDevIcon className="h-7 w-7 text-white" strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold tracking-tight text-white">
                                UI/UX Design
                            </h3>
                            <p className="text-base leading-relaxed text-zinc-400">
                                 I craft intuitive, visually stunning interfaces rooted in user research to ensure your brand is both beautiful and easy to navigate.
                            </p>
                        </div>


                        {/* Subtle Bottom Glow on Hover */}
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    {/* Card 3 */}
                    <div className="group relative inset-ring-2 inset-ring-background flex h-full w-full max-w-md flex-col rounded-2xl border border-black bg-gradient-to-b from-zinc-900 to-black p-8 transition-all duration-300 hover:border-zinc-700">

                        {/* Icon Container - Matches the sleek rounded style */}
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-100/50 bg-zinc-900 shadow-inner">
                            <SeoIcon className="h-7 w-7 text-white" strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold tracking-tight text-white">
                                SEO Optimization
                            </h3>
                            <p className="text-base leading-relaxed text-zinc-400">
                                I boost your visibility by engineering sites for peak search engine performance, driving organic traffic and higher conversion rates.
                            </p>
                        </div>


                        {/* Subtle Bottom Glow on Hover */}
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    {/* Card 4 */}
                    <div className="group relative inset-ring-2 inset-ring-background flex h-full w-full max-w-md flex-col rounded-2xl border border-black bg-gradient-to-b from-zinc-900 to-black p-8 transition-all duration-300 hover:border-zinc-700">

                        {/* Icon Container - Matches the sleek rounded style */}
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-100/50 bg-zinc-900 shadow-inner">
                            <SecurityIcon className="h-7 w-7 text-white" strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold tracking-tight text-white">
                                 Website Maintenance
                            </h3>
                            <p className="text-base leading-relaxed text-zinc-400">
                                 I provide proactive support, security updates, and performance tuning to keep your site fast, secure, and always online.
                            </p>
                        </div>


                        {/* Subtle Bottom Glow on Hover */}
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Service