import { btn, heading } from "@/components/primitives";

const Start = () => {
    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                    <div className="rounded bg-gradient-to-tr from-orange-500 to-rose-600 px-8 py-10 shadow-2xl md:px-12 md:py-16 aos-init aos-animate" data-aos="zoom-y-out">
                        <div className="flex flex-col items-center justify-between lg:flex-row"><div className="mb-6 text-center lg:mb-0 lg:mr-16 lg:text-left">
                            <h3 className={heading({level: "h3"}) + " font-orbiter mb-2 text-white"}>Ready to get started?</h3>
                            <p className="text-lg text-white opacity-75">Try PressPulse.ai Risk Free for 7 days. No CC Required.</p>
                            </div>
                            <div>
                            <a className={btn() + " bg-white font-bold text-orange-600" } href="https://app.presspulse.ai/start">Start Free Trial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Start;