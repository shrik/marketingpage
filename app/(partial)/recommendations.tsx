import { heading } from "@/components/primitives"

const Recommendations = () => {
    return (
        <section id="features" className="relative">
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        <div className="mx-auto max-w-xl md:col-span-7 md:mt-6 md:w-full md:max-w-none lg:col-span-6 aos-init aos-animate" data-aos="fade-right">
                            <div className="mb-8 md:pr-4 lg:pr-12 xl:pr-16">
                                <h3 className={heading({level: "h3"}) + " mb-3"}>Daily Opportunities for You</h3>
                                <p className="text-lg text-gray-600">Discover tailored media opportunities every day. No matter your industry or skillset, we connect you with the perfect chances to showcase your expertise.</p>
                            </div>
                            <div className="mb-8 md:mb-0">
                                <button className="mb-3 flex items-center rounded border p-5 text-left text-lg transition duration-300 ease-in-out border-transparent bg-gray-200">
                                    <div>
                                        <div className="mb-1 font-bold leading-snug tracking-tight">Alice, Marketing Agency Director</div>
                                        <div className="text-gray-600">Expert in crafting compelling campaigns and strategies that elevate brands and engage audiences.</div>
                                    </div>
                                    <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow">
                                        <svg className="h-3 w-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero"></path>
                                        </svg>
                                    </div>
                                </button>
                                <button className="mb-3 flex items-center rounded border p-5 text-left text-lg transition duration-300 ease-in-out border-gray-200 bg-white shadow-md hover:shadow-lg">
                                    <div>
                                        <div className="mb-1 font-bold leading-snug tracking-tight">Jordan, Tech Startup Founder</div>
                                        <div className="text-gray-600">A visionary startup founder, drives technological innovation and business growth.</div>
                                    </div>
                                    <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow">
                                        <svg className="h-3 w-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero"></path>
                                        </svg>
                                    </div>
                                </button>
                                <button className="mb-3 flex items-center rounded border p-5 text-left text-lg transition duration-300 ease-in-out border-gray-200 bg-white shadow-md hover:shadow-lg">
                                    <div>
                                        <div className="mb-1 font-bold leading-snug tracking-tight">Maya, Dietician &amp; Yoga Coach</div>
                                        <div className="text-md text-gray-600">Maya offers a unique, holistic approach to wellness at her thriving online health center.</div>
                                    </div>
                                    <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow">
                                        <svg className="h-3 w-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="mx-auto mb-8 max-w-xl md:order-1 md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6">
                            <div className="transition-all" style={{ height: '612px' }}>
                                <div className="relative flex flex-col text-center lg:text-right aos-init aos-animate" data-aos="zoom-y-out">
                                    <div className="w-full opacity-100 translate-y-0" >
                                        <div className="relative inline-flex flex-col">
                                            <img alt="Features bg" loading="lazy" width="500" height="375" decoding="async" data-nimg="1" className="mx-auto rounded opacity-30 md:max-w-none" style={{ color: 'transparent' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanet.f4fc78cb.png&w=1080&q=75" />
                                            <img alt="Element 01" loading="lazy" width="500" height="147" decoding="async" data-nimg="1" className="animate-float absolute left-0 w-full transform md:max-w-none" style={{ color: 'transparent', top: '22%' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.e8fd8368.png&w=1080&q=75" />
                                            <img alt="Element 02" loading="lazy" width="500" height="158" decoding="async" data-nimg="1" className="animate-float animation-delay-500 absolute left-0 w-full transform md:max-w-none" style={{ color: 'transparent', top: '39%' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.401832e5.png&w=1080&q=75" />
                                            <img alt="Element 03" loading="lazy" width="500" height="167" decoding="async" data-nimg="1" className="animate-float animation-delay-1000 absolute bottom-0 left-0 w-full transform md:max-w-none" style={{ color: 'transparent', top: '77%' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.eb3e5afe.png&w=1080&q=75"  />
                                        </div>
                                        <div className="mt-20 flex flex-row-reverse">
                                            <a href="https://app.presspulse.ai/demo/alice" target="_blank" className="text-orange-500 underline">View live dashboard for Alice</a>
                                        </div>
                                    </div>
                                    <div className="w-full opacity-0 -translate-y-16" style={{ display: 'none' }}>
                                        <div className="relative inline-flex flex-col">
                                            <img alt="Features bg" loading="lazy" width="500" height="375" decoding="async" data-nimg="1" className="mx-auto rounded opacity-30 md:max-w-none" style={{ color: 'transparent' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanet.f4fc78cb.png&w=1080&q=75" />
                                            <img alt="Element 01" loading="lazy" width="500" height="147" decoding="async" data-nimg="1" className="animate-float absolute left-0 w-full transform md:max-w-none" style={{ color: 'transparent', top: '22%' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.e8fd8368.png&w=1080&q=75" />
                                            <img alt="Element 02" loading="lazy" width="500" height="158" decoding="async" data-nimg="1" className="animate-float animation-delay-500 absolute left-0 w-full transform md:max-w-none" style={{ color: 'transparent', top: '39%' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.401832e5.png&w=1080&q=75" />
                                            <img alt="Element 03" loading="lazy" width="500" height="167" decoding="async" data-nimg="1" className="animate-float animation-delay-1000 absolute bottom-0 left-0 w-full transform md:max-w-none" style={{ color: 'transparent', top: '77%' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.eb3e5afe.png&w=1080&q=75"  />
                                        </div>
                                        <div className="mt-20 flex flex-row-reverse">
                                            <a href="https://app.presspulse.ai/demo/jordan" target="_blank" className="text-orange-500 underline">View live dashboard for Jordan</a>
                                        </div>
                                    </div>
                                    <div className="w-full opacity-0 -translate-y-16" style={{ display: 'none' }} >
                                        <div className="relative inline-flex flex-col">
                                            <img alt="Features bg" loading="lazy" width="500" height="375" decoding="async" data-nimg="1" className="mx-auto rounded opacity-30 md:max-w-none" style={{ color: 'transparent' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanet.f4fc78cb.png&w=1080&q=75" />
                                            <img alt="Element 01" loading="lazy" width="500" height="147" decoding="async" data-nimg="1" className="animate-float absolute left-0 w-full transform md:max-w-none" style={{ color: 'transparent', top: '22%' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.e8fd8368.png&w=1080&q=75" />
                                            <img alt="Element 02" loading="lazy" width="500" height="158" decoding="async" data-nimg="1" className="animate-float animation-delay-500 absolute left-0 w-full transform md:max-w-none" style={{ color: 'transparent', top: '39%' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.401832e5.png&w=1080&q=75" />
                                            <img alt="Element 03" loading="lazy" width="500" height="167" decoding="async" data-nimg="1" className="animate-float animation-delay-1000 absolute bottom-0 left-0 w-full transform md:max-w-none" style={{ color: 'transparent', top: '77%' }} src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.eb3e5afe.png&w=1080&q=75"  />
                                        </div>
                                        <div className="mt-20 flex flex-row-reverse">
                                            <a href="https://app.presspulse.ai/demo/maya" target="_blank" className="text-orange-500 underline">View live dashboard for Maya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommendations