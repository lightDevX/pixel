import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-icon.png";

const Header = () => {
    return (
        <>
            <header class="body-font text-gray-800 w-full h-24 md:h-32 flex items-center fixed z-10 top-0 {{ url()->current() != request()->root() ? 'notHome' : null }}">
                <div class="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <div class="font-bold text-2xl flex items-center logo">
                        <a href="{{ url('/') }}">
                            <Image
                                src={logo}
                                alt="logo"
                                class="h-12 mr-8" />
                        </a>
                    </div>
                    <div class="flex items-center">
                        <nav class="text-base hidden lg:flex items-center">
                            <a href="{{ url('/') }}" class="py-2 px-3 flex text-indigo-500">HOME</a>
                            <li class="relative dropdown list-none hover:text-indigo-500" id="button_moderate">
                                <a class="py-2 px-3 flex items-center" href="javascript:void(false)">
                                    SERVICES
                                    <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                                <ul class="absolute right-0 top-0 min-w-6 mt-10 py-2 rounded-lg shadow-lg bg-white z-10 hidden dropdown-hover:block">
                                    <svg class="block fill-current text-white w-4 h-4 absolute right-0 top-0 mr-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    </svg>
                                    <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        <a href="{{ route('service.service1') }}" class="px-4 py-2 flex">
                                            Clipping Path Services
                                        </a>
                                    </li>
                                    <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        <a href="{{ route('service.service2') }}" class="px-4 py-2 flex">
                                            Color Variants & Color Correction
                                        </a>
                                    </li>
                                    <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        <a href="{{ route('service.service3') }}" class="px-4 py-2 flex">
                                            Drop Shadow Services
                                        </a>
                                    </li>
                                    <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        <a href="{{ route('service.service4') }}" class="px-4 py-2 flex">
                                            Ghost Mannequin Services
                                        </a>
                                    </li>
                                    <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        <a href="{{ route('service.service5') }}" class="px-4 py-2 flex">
                                            Image Masking Services
                                        </a>
                                    </li>
                                    <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        <a href="{{ route('service.service6') }}" class="px-4 py-2 flex">
                                            Jewelry Photo Editing Services
                                        </a>
                                    </li>
                                    <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        <a href="{{ route('service.service7') }}" class="px-4 py-2 flex">
                                            Photo Retouching Services
                                        </a>
                                    </li>
                                    <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        <a href="{{ route('service.service8') }}" class="px-4 py-2 flex">
                                            Product Photo-editing Services
                                        </a>
                                    </li>
                                    <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        <a href="{{ route('service.service9') }}" class="px-4 py-2 flex">
                                            Real Estate Photo Editing Services(HDR)
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <a href="{{ route('price') }}" class="py-2 px-3 flex hover:text-indigo-500">PRICING</a>
                            <a href="{{ route('user.quote') }}" class="py-2 px-3 flex hover:text-indigo-500">GET QUOTE</a>
                            <a href="{{ route('contact') }}" class="py-2 px-3 flex hover:text-indigo-500">CONTACT US</a>
                            {/* @if(Route::has('login'))
                            @auth */}
                            <Link href="{{ isAdmin() ? url('/admin') : url('/user') }}" class="py-2 px-3 flex hover:text-indigo-500"></Link>
                            {/* @else */}
                            <a href="{{ route('login') }}" class="py-2 px-3 flex hover:text-indigo-500"></a>
                            {/* @endauth
                            @endif */}
                        </nav>
                        <button class="lg:hidden focus:outline-none" id="toggle-btn">
                            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            {/* {{-- mobile menu start --}} */}
            <nav class="text-base lg:hidden items-center text-gray-800 body-font overflow-hidden" id="mobile-menu">
                <a href="{{ url('/') }}" class="py-2 px-3 flex text-indigo-500">HOME</a>
                <li class="relative mobile-dropdown list-none hover:text-indigo-500">
                    <a class="py-2 px-3 flex items-center" href="javascript:;">
                        SERVICES
                        <svg class="h-4 w-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <ul class="sub-dropdown border-t border-b text-xs hidden">
                        <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <a href="{{ route('service.service1') }}" class="px-3 py-2 flex">
                                Clipping Path Services
                            </a>
                        </li>
                        <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <a href="{{ route('service.service2') }}" class="px-3 py-2 flex">
                                Color Variants & Color Correction
                            </a>
                        </li>
                        <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <a href="{{ route('service.service3') }}" class="px-3 py-2 flex">
                                Drop Shadow Services
                            </a>
                        </li>
                        <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <a href="{{ route('service.service4') }}" class="px-3 py-2 flex">
                                Ghost Mannequin Services
                            </a>
                        </li>
                        <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <a href="{{ route('service.service5') }}" class="px-3 py-2 flex">
                                Image Masking Services
                            </a>
                        </li>
                        <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <a href="{{ route('service.service6') }}" class="px-3 py-2 flex">
                                Jewelry Photo Editing Services
                            </a>
                        </li>
                        <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <a href="{{ route('service.service7') }}" class="px-3 py-2 flex">
                                Photo Retouching Services
                            </a>
                        </li>
                        <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <a href="{{ route('service.service8') }}" class="px-3 py-2 flex">
                                Product Photo-editing Services
                            </a>
                        </li>
                        <li class="whitespace-no-wrap text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <a href="{{ route('service.service9') }}" class="px-3 py-2 flex">
                                Real Estate Photo Editing Services(HDR)
                            </a>
                        </li>
                    </ul>
                </li>
                <a href="{{ route('price') }}" class="py-2 px-3 flex hover:text-indigo-500">PRICING</a>
                <a href="{{ route('user.quote') }}" class="py-2 px-3 flex hover:text-indigo-500">GET QUOTE</a>
                <a href="{{ route('contact') }}" class="py-2 px-3 flex hover:text-indigo-500">CONTACT US</a>
                {/* @if(Route::has('login')) */}
                {/* @auth */}
                <a href="{{ isAdmin() ? url('/admin') : url('/user') }}" class="py-2 px-3 flex hover:text-indigo-500"></a>
                {/* @else */}
                <a href="{{ route('login') }}" class="py-2 px-3 flex hover:text-indigo-500"></a>
                {/* @endauth
                @endif */}
            </nav>
            <div id="mobile-menu-overlay" class="hidden"></div>
            {/* {{-- mobile menu end --}} */}
        </>
    );
};

export default Header;