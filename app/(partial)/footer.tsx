const Footer = () => {

    return (
        <footer>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-8 border-t border-gray-200 py-8 sm:grid-cols-12 md:py-12">
                    <div className="sm:col-span-12 lg:col-span-3">
                        <div className="mb-2">
                            <a className="block" aria-label="Cruip" href="/">
                                <div className="flex items-center">
                                    <img alt="PressPulse.ai Logo" loading="lazy" width="200" height="100" decoding="async" data-nimg="1" src="/next.svg" />
                                </div>
                            </a>
                        </div>
                        <div className="text-sm text-gray-600">
                            <span>Made with 🤍 in Toronto, Canada</span>
                        </div>
                        <div className="text-sm text-gray-600">
                            <span>support@presspulse.ai</span>
                        </div>
                    </div>
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="mb-2 font-medium text-gray-800">Legal</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="/terms" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Terms of Service</a>
                            </li>
                            <li className="mb-2">
                                <a href="/privacy" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="mb-2 font-medium text-gray-800">Resources</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="/blog/how-to-create-a-presspulse-bio" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Build a PressPulse Bio</a>
                            </li>
                            <li className="mb-2">
                                <a href="/blog/exploring-haro-new-connectively-system" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Connectively vs. HARO</a>
                            </li>
                            <li className="mb-2">
                                <a href="/blog/what-is-connectively" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">What is Connectively?</a>
                            </li>
                            <li className="mb-2">
                                <a href="/blog/backlink-cost-in-2024" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Backlinks Cost in 2024</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="mb-2 font-medium text-gray-800">Company</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="/" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="/about" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">About us</a>
                            </li>
                            <li className="mb-2">
                                <a href="/blog" className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
                        <h6 className="mb-2 font-medium text-gray-800">Subscribe</h6>
                        <p className="mb-4 text-sm text-gray-600">Get the latest news and articles to your inbox every month.</p>
                        <form>
                            <div className="mb-4 flex flex-wrap">
                                <div className="w-full">
                                    <label className="sr-only block text-sm">Email</label>
                                    <div className="relative flex max-w-xs items-center">
                                        <input
                                            id="newsletter"
                                            type="email"
                                            className="form-input w-full px-3 py-2 pr-12 text-sm text-gray-800 border border-gray-300" // Add border styles here
                                            placeholder="Your email"
                                        />
                                        <button className="absolute inset-0 left-auto" aria-label="Subscribe">
                                            <span className="absolute inset-0 right-auto my-2 -ml-px w-px bg-gray-300" aria-hidden="true"></span>
                                            <svg
                                                className="mx-3 h-3 w-3 shrink-0 fill-current text-orange-600"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero"></path>
                                            </svg>
                                        </button>
                                        <div data-lastpass-icon-root=""></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-200 py-4 md:flex md:items-center md:justify-between md:py-8">
                    <ul className="mb-4 flex md:order-1 md:mb-0 md:ml-4">
                        <li>
                            <a href="https://twitter.com/GlitchPhoton" className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900" aria-label="Twitter">
                                <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="mr-4 text-sm text-gray-600">
                        <p>© Solar Flare Ventures Inc. 2024. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;