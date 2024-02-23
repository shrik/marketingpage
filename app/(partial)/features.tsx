import { heading } from "@/components/primitives";

const Features = () => {
    return (
        <section className="relative mt-20">
            <div className="pointer-events-none absolute inset-0 top-1/2 bg-gray-900 md:mt-24 lg:mt-0" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 right-0 m-auto h-20 w-px translate-y-1/2 transform bg-gray-200 p-px"></div>
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                        <h2 className={heading({level: "h2"}) + " font-orbiter mb-4" }>Unlock Media Coverage with AI Precision.</h2>
                        <p className="text-xl text-gray-600">Navigating the media landscape with unmatched precision and efficiency.</p>
                    </div>
                    <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                        <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
                            <svg className="-mt-1 mb-2 h-16 w-16 p-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <rect className="fill-current text-orange-600" width="64" height="64" rx="32"></rect>
                                    <g strokeWidth="2">
                                        <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"></path>
                                        <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"></path>
                                        <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"></path>
                                        <path className="stroke-current text-orange-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4 className="font-orbiter mb-1 text-xl font-bold leading-snug tracking-tight">Tailored Opportunities</h4>
                            <p className="h-20 text-center text-gray-600">Our GPT-4 powered AI finds your personalized matches with 96% less spam than HARO emails. </p>
                        </div>
                        <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
                            <svg className="-mt-1 mb-2 h-16 w-16 p-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <rect className="fill-current text-orange-600" width="64" height="64" rx="32"></rect>
                                    <g strokeWidth="2" transform="translate(19.429 20.571)">
                                        <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143"></circle>
                                        <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"></path>
                                        <path className="stroke-current text-orange-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4 className="font-orbiter mb-1 text-xl font-bold leading-snug tracking-tight">Domain Authority Data</h4>
                            <p className="h-20 text-center text-gray-600">Access domain authority data of media outlets for informed and strategic pitching.</p>
                        </div>
                        <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
                            <svg className="-mt-1 mb-2 h-16 w-16 p-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <rect className="fill-current text-orange-600" width="64" height="64" rx="32"></rect>
                                    <g strokeWidth="2">
                                        <path className="stroke-current text-white" d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z"></path>
                                        <path className="stroke-current text-orange-300" d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8"></path>
                                        <path className="stroke-current text-white" d="M34.286 29.714L32 32"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4 className="font-orbiter mb-1 text-xl font-bold leading-snug tracking-tight">FirstMover Notifications™</h4>
                            <p className="h-20 text-center text-gray-600">Pitch before anyone else with our instant notifications on new opportunities.</p>
                        </div>
                        <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
                            <svg className="-mt-1 mb-2 h-16 w-16 p-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <rect className="fill-current text-orange-600" width="64" height="64" rx="32"></rect>
                                    <g strokeWidth="2">
                                        <path className="stroke-current text-orange-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"></path>
                                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8"></path>
                                        <path className="stroke-current text-orange-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429"></path>
                                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4 className="font-orbiter mb-1 text-xl font-bold leading-snug tracking-tight">Multiple Platforms</h4>
                            <p className="h-20 text-center text-gray-600">Seamlessly integrated with HARO and Connectively.us, with more platforms on the horizon.</p>
                        </div>
                        <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
                        <svg className="-mt-1 mb-2 h-16 w-16 p-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect className="fill-current text-orange-600" width="64" height="64" rx="32"></rect><g stroke-width="2"><path class="stroke-current text-orange-300" d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286"></path><path class="stroke-current text-white" stroke-linecap="square" d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286"></path><path className="stroke-current text-orange-300" d="M36.571 32H40"></path><path className="stroke-current text-white" d="M24 32h3.429" stroke-linecap="square"></path></g></g></svg>
                            <h4 className="font-orbiter mb-1 text-xl font-bold leading-snug tracking-tight">AI Pitch Drafting</h4>
                            <p className="h-20 text-center text-gray-600">Generate a draft for your pitch with one click, using AI-driven insights.</p>
                        </div>
                        <div className="relative flex flex-col items-center rounded bg-white p-6 shadow-xl">
                            <svg className="-mt-1 mb-2 h-16 w-16 p-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <rect className="fill-current text-orange-600" width="64" height="64" rx="32"></rect>
                                    <g strokeWidth="2" strokeLinecap="square">
                                        <path className="stroke-current text-white" d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775"></path>
                                        <path className="stroke-current text-orange-300" d="M44.571 43.429H34.286M44.571 37.714H34.286"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4 className="font-orbiter mb-1 text-xl font-bold leading-snug tracking-tight">AI Pitch Drafting</h4>
                            <p className="h-20 text-center text-gray-600">Generate a draft for your pitch with one click, using AI-driven insights.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;