import { btn, heading } from "@/components/primitives"
import Goright from "./components/goright"
import Tick from "./components/tick"

const Pricing = () => {
    return (
        <section id="pricing">
            <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
                <div className="pt-12 md:pt-20">
                    <div className="mx-auto max-w-3xl pb-8 text-center">
                        <h2 className={heading({level: "h2"}) + " font-orbiter"}>Press Coverage Made Easy.</h2>
                        <p className="mt-2 text-xl text-gray-500">Top CEOs aren't sifting through emails – they have assistants for that.<br/>Get your personal PR Assistant for $1/day starting today.</p>
                    </div>
                    <div>
                        <div className="m-auto mb-8 flex max-w-[10rem] justify-center lg:mb-14">
                            <div className="relative flex w-full rounded-full bg-gray-100 p-1">
                                <span className="pointer-events-none absolute inset-0 m-1" aria-hidden="true">
                                    <span className="absolute inset-0 w-1/2 transform rounded-full bg-orange-500 shadow-sm transition duration-150 ease-in-out translate-x-0"></span>
                                </span>
                                <button className="font-cabinet-grotesk relative h-8 flex-1 text-sm font-bold transition duration-150 ease-in-out text-white">Monthly</button>
                                <button className="font-cabinet-grotesk relative h-8 flex-1 text-sm font-bold transition duration-150 ease-in-out text-gray-900">Annual</button>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-sm items-start gap-8 pt-4 lg:max-w-none lg:grid-cols-3 lg:gap-6">
                            <div className="bg-slate-50  relative flex h-full flex-col rounded p-6 pb-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div className="mb-6">
                                    <div className="font-orbiter mb-1 text-xl font-bold">Core</div>
                                    <div className="font-orbiter mb-2 inline-flex items-baseline font-bold text-gray-900">
                                        <span className="text-3xl">$</span><span className="text-5xl">19</span>
                                        <span>/mo</span>
                                    </div>
                                    <div className="mb-6 text-gray-500">Essential PR toolkit for every busy professional.</div>
                                    <a className={btn() + " group inline-flex w-full items-center bg-gray-900 text-white hover:bg-gray-800"} href="https://app.presspulse.ai/start?plan=core">
                                        Start Free Trial
                                        <span className="ml-2 tracking-normal text-orange-400 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                                            <Goright />
                                        </span>
                                    </a>
                                </div>
                                <div className="font-cabinet-grotesk mb-4 font-bold">Features include:</div>
                                <ul className="grow space-y-3 text-gray-500">
                                    <li className="flex items-center"><Tick /><span>Hyper-personalized opportunities</span></li>
                                    <li className="flex items-center"><Tick /><span>Notification every morning</span></li>
                                    <li className="flex items-center"><Tick /><span>24/7 opportunity monitoring</span></li>
                                    <li className="flex items-center"><Tick /><span>Domain authority data</span></li>
                                    <li className="flex items-center"><Tick /><span>Supports HARO &amp; Connectively</span></li>
                                    <li className="flex items-center"><Tick /><span>7 day free trial, no CC required</span></li>
                                    <li className="flex items-center"><Tick /><span>Risk-free 30 day publicity guarantee</span></li>
                                </ul>
                            </div>
                            <div className="relative flex h-full flex-col rounded bg-orange-50 p-6 pb-12 aos-init aos-animate" data-aos="fade-up">
                                <div className="mb-6">
                                    <div className="font-orbiter mb-1 text-xl font-bold">Pro</div>
                                    <div className="font-orbiter mb-2 inline-flex items-baseline font-bold text-gray-900">
                                        <span className="text-3xl">$</span><span className="text-5xl">29</span><span>/mo</span>
                                    </div>
                                    <div className="mb-6 text-gray-500">Maximize your PR success with unmatched speed and precision.</div>
                                    <a className={btn() + " group inline-flex w-full items-center bg-orange-500 text-white hover:bg-orange-600"} href="https://app.presspulse.ai/start?plan=pro">
                                        Start Free Trial
                                        <span className="ml-2 tracking-normal text-white transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                                            <Goright />
                                        </span>
                                    </a>
                                </div>
                                <div className="font-cabinet-grotesk mb-4 font-bold">Features include:</div>
                                <ul className="grow space-y-3 text-gray-500">
                                    <li className="flex items-center"><Tick /><span>Everything in Pro</span></li>
                                    <li className="flex items-center"><Tick /><span>5 or more profiles in any niche</span></li>
                                    <li className="flex items-center"><Tick /><span>White-label notifications</span></li>
                                    <li className="flex items-center"><Tick /><span>Custom onboarding</span></li>
                                    <li className="flex items-center"><Tick /><span>Priority support</span></li>
                                </ul>
                            </div>
                            <div className=" bg-slate-50 relative flex h-full flex-col rounded p-6 pb-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div className="mb-6">
                                    <div className="font-orbiter mb-1 text-xl font-bold">Core</div>
                                    <div className="font-orbiter mb-2 inline-flex items-baseline font-bold text-gray-900">
                                        <span className="text-3xl">$</span><span className="text-5xl">19</span>
                                        <span>/mo</span>
                                    </div>
                                    <div className="mb-6 text-gray-500">Essential PR toolkit for every busy professional.</div>
                                    <a className={btn() + " group inline-flex w-full items-center bg-gray-900 text-white hover:bg-gray-800"} href="https://app.presspulse.ai/start?plan=core">
                                        Start Free Trial
                                        <span className="ml-2 tracking-normal text-orange-400 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                                            <Goright />
                                        </span>
                                    </a>
                                </div>
                                <div className="font-cabinet-grotesk mb-4 font-bold">Features include:</div>
                                <ul className="grow space-y-3 text-gray-500">
                                    <li className="flex items-center"><Tick /><span>Hyper-personalized opportunities</span></li>
                                    <li className="flex items-center"><Tick /><span>Notification every morning</span></li>
                                    <li className="flex items-center"><Tick /><span>24/7 opportunity monitoring</span></li>
                                    <li className="flex items-center"><Tick /><span>Domain authority data</span></li>
                                    <li className="flex items-center"><Tick /><span>Supports HARO &amp; Connectively</span></li>
                                    <li className="flex items-center"><Tick /><span>7 day free trial, no CC required</span></li>
                                    <li className="flex items-center"><Tick /><span>Risk-free 30 day publicity guarantee</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing