import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="text-gray-400 bg-gray-800 border-t border-gray-700 body-font overflow-hidden">
                <div className="container px-6 md:px-12 py-24 md:py-32 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <span className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 mr-4"></span>
                            <span className="text-xl">PixeLSense Park</span>
                        </Link>
                        <p className="mt-3 leading-relaxed">Bangladesh Office</p>
                        <hr />
                        <p className="leading-relaxed">House: 57 (4<sup>th</sup>Floor); 1/1, Puran Hospital Lean; Gaibandha <br /> Bangladesh</p><br />
                        <p className="leading-relaxed">Canada Office</p>
                        <hr />
                        <p className="leading-relaxed">9750 82 Ave NW, Edmonton, Alberta, T6E1Y5 <br /> Canada</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">INFORMATION</h2>
                            <nav className="list-none mb-10">
                                <li><Link className="text-gray-500 hover:text-white" href="{{ route('about') }}">About Us</Link></li>
                                <li><Link className="text-gray-500 hover:text-white" href="{{ route('terms') }}">Terms of Service</Link></li>
                                <li><Link className="text-gray-500 hover:text-white" href="{{ route('privacy.policy') }}">Privacy Policy</Link></li>
                                <li><Link className="text-gray-500 hover:text-white" href="{{ url('blog') }}">Blog</Link></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUPPORT</h2>
                            <nav className="list-none mb-10">
                                <li><a className="text-gray-500 hover:text-white">Help & Support</a></li>
                                <li><a className="text-gray-500 hover:text-white">Trust & Safety</a></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-2/4 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICES</h2>
                            <nav className="list-none mb-10">
                                <li><Link href="{{ route('service.service1') }}" className="text-gray-500 hover:text-white">Clipping Path</Link></li>
                                <li><Link href="{{ route('service.service2') }}" className="text-gray-500 hover:text-white">Color Variants</Link></li>
                                <li><Link href="{{ route('service.service3') }}" className="text-gray-500 hover:text-white">Drop Shadow</Link></li>
                                <li><Link href="{{ route('service.service4') }}" className="text-gray-500 hover:text-white">Ghost Mannequin</Link></li>
                                <li><Link href="{{ route('service.service5') }}" className="text-gray-500 hover:text-white">Image Masking</Link></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-2/4 w-full px-4">
                            <nav className="list-none mb-10 mt-8">
                                <li>
                                    <Link href="{{ route('service.service6') }}" className="text-gray-500 hover:text-white">Jewelry Photo Editing</Link>
                                </li>
                                <li>
                                    <Link href="{{ route('service.service7') }}" className="text-gray-500 hover:text-white">Photo Retouching</Link>
                                </li>
                                <li>
                                    <Link href="{{ route('service.service8') }}" className="text-gray-500 hover:text-white">Product Photo-editing</Link>
                                </li>
                                <li>
                                    <Link href="{{ route('service.service9') }}" className="text-gray-500 hover:text-white">Real Estate Photo Edting</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900">
                    <div className="container mx-auto py-4 px-6 md:px-12 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-600 text-sm text-center sm:text-left">&copy; 2017 - {(new Date().getFullYear())} | PixeLSense Park</p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link href="https://www.facebook.com/pixelsensepark" className="text-gray-600" target="_blank">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link href="https://twitter.com/IncPixelsense" className="ml-3 text-gray-600" target="_blank">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link href="https://www.instagram.com/pixelsensepark" className="ml-3 text-gray-600" target="_blank">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/company/pixelsensepark" className="ml-3 text-gray-600" target="_blank">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;