import { btn, heading } from "@/components/primitives";

const Howitworks = () => {
    return (
        <section className="w-full relative">
            <div className="pointer-events-none absolute inset-0 mb-16 bg-gray-100" aria-hidden="true">
            </div>
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
                        <h1 className={heading({level: "h2"}) + " font-orbiter mb-4"}>How Press-Pulse AI works:</h1>
                    </div>
                    <div className="relative pb-12">
                        <div className="absolute left-32 right-32 top-4 -z-10 mt-px hidden h-0.5 bg-gray-200 lg:block" aria-hidden="true">
                        </div>
                        <div className="mx-auto grid max-w-sm items-start gap-12 md:max-w-3xl md:grid-cols-3 lg:max-w-none lg:grid-cols-3">
                            <div className="text-center">
                                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-[15px] font-bold text-white">1</div>
                                <h3 className="font-cabinet-grotesk text-lg font-bold">Setup Your Professional Bio</h3>
                                <div className="text-gray-500">Share your professional background and media requirements so we can find media opportunities that align perfectly with you and your goals.</div>
                            </div>
                            <div className="text-center">
                                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-[15px] font-bold text-white">2</div>
                                <h3 className="font-cabinet-grotesk text-lg font-bold">Press Opportunity Matching</h3>
                                <div className="text-gray-500">Hundreds of media outlets post journal requests online daily seeking expert insights. We analyze these requests to pinpoint opportunities tailored for you.</div></div><div className="text-center">
                                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-[15px] font-bold text-white">3</div><h3 className="font-cabinet-grotesk text-lg font-bold">Engage &amp; Shine</h3>
                                <div className="text-gray-500">Engage with reporters swiftly and secure your media coverage with our daily notifications of matched opportunities and AI pitch drafting.</div></div></div></div><div className="pb-8 text-center md:pb-32">
                        <a className={btn() + " mb-4 w-full bg-orange-500 text-white hover:bg-orange-400 sm:mb-0 sm:w-auto"} href="https://app.presspulse.ai/start">Start Free Trial</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Howitworks;