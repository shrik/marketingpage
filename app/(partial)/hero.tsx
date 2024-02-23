import {btn} from '@/components/primitives';
import { Avatar, AvatarGroup } from '@nextui-org/react';

const Hero = () => {
    return (
        <section className='relative flex justify-center'>
            <div className="inline-block text-center justify-center">
				<h1 className="leading-tighter mb-4 text-4xl font-extrabold tracking-tighter md:text-5xl aos-init aos-animate" data-aos="zoom-y-out">
					Get Press Mentions with <br />
					<span className="font-orbiter bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">5-minutes a day.</span>
				</h1>
				<div className="mx-auto max-w-3xl">
					<p className="mb-8 text-xl text-gray-600 aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="150">
						Receive personalized journalist inquiry leads every day.
						<br />Sourced from HARO®
						<span className="align-top text-sm">*</span> and powered by GPT-4.</p>
					<div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center aos-init aos-animate">
						<div className="flex flex-col">
							<div className="block">
								<a className={btn() + " inline-block  mb-4 bg-orange-500 text-white hover:bg-orange-400 sm:mb-0 "} href="https://app.presspulse.ai/start">Start Free Trial</a>
							</div>
							<p className="text-sm text-gray-600">Try free for 7 days, no CC required</p>
						</div>
					</div>
                    <div className='mt-8'>
                        <div className='flex justify-center'>
                            <div className='mt-1 text-center'>
                                <div className='inline-flex -space-x-2'>
                                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-8 h-8 rounded-full ring-2 ring-white" alt="avatar" />
                                    <img src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="w-8 h-8 rounded-full ring-2 ring-white" alt="avatar" />
                                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-8 h-8 rounded-full ring-2 ring-white" alt="avatar" />
                                    <img src="https://i.pravatar.cc/150?u=a04258114e29026302d" className="w-8 h-8 rounded-full ring-2 ring-white" alt="avatar" />
                                    <img src="https://i.pravatar.cc/150?u=a04258114e29026702d" className="w-8 h-8 rounded-full ring-2 ring-white" alt="avatar" />
                                    <img src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-8 h-8 rounded-full ring-2 ring-white" alt="avatar" />
                                </div>
                            </div>
                            <div className="ml-2 flex flex-col">
                                    <div className="inline-flex justify-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-yellow-400"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-yellow-400"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-yellow-400"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-yellow-400"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-yellow-400"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                    <span className="ml-1 text-sm text-gray-500">(4.82/5)</span>
                                    </div>
                                    <div className="text-sm text-gray-500">Trusted by 302 professionals</div>
                                </div>
                        </div>
                    </div>
                    {/* video */}
                    <div className='mt-16'>
                        <div>
                            <div className="relative mb-8 flex justify-center aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="450">
                                <div className="flex cursor-pointer flex-col justify-center">
                                    <img alt="Modal video thumbnail" loading="lazy" width="768" height="432" decoding="async" data-nimg="1"  src="https://www.presspulse.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvideo_cover.6e6558d4.png&w=1920&q=75" />
                                    {/* https://www.presspulse.ai/videos/landing_demo_v2.mp4 */}
                                </div>
                                <button className="group absolute top-full flex -translate-y-1/2 transform cursor-pointer items-center rounded-full bg-white p-4 font-medium shadow-lg">
                                    <svg className="h-6 w-6 shrink-0 fill-current text-gray-400 group-hover:text-blue-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"></path><path d="M10 17l6-5-6-5z"></path></svg>
                                    <span className="ml-3">Watch the full video (48 seconds)</span>
                                </button>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
        </section>
    )
}
export default Hero;
