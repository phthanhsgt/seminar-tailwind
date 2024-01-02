export default function Header() {
    return (
        <header className=" bg-white flex justify-center py-6">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="h-12 w-[150px] cursor-pointer">
                        <svg
                            height="full"
                            width="full"
                            viewBox="0 0 100 30"
                            fill="none"
                            className="lns-logoSvg"
                        >
                            <path
                                d="M30.01 13.43h-9.142l7.917-4.57-1.57-2.72-7.918 4.57 4.57-7.915-2.72-1.57-4.571 7.913V0h-3.142v9.139L8.863 1.225l-2.721 1.57 4.57 7.913L2.796 6.14 1.225 8.86l7.917 4.57H0v3.141h9.141l-7.916 4.57 1.57 2.72 7.918-4.57-4.571 7.915 2.72 1.57 4.572-7.914V30h3.142v-9.334l4.655 8.06 2.551-1.472-4.656-8.062 8.087 4.668 1.571-2.72-7.916-4.57h9.141v-3.14h.001zm-15.005 5.84a4.271 4.271 0 11-.001-8.542 4.271 4.271 0 01.001 8.542z"
                                fill="#565add"
                            ></path>
                            <path
                                d="M38.109 25.973V4.027h4.028v21.946h-4.028zM76.742 11.059h3.846v1.82c.818-1.455 2.727-2.244 4.362-2.244 2.03 0 3.665.88 4.422 2.485 1.18-1.82 2.756-2.485 4.725-2.485 2.756 0 5.39 1.667 5.39 5.668v9.67h-3.906v-8.851c0-1.607-.788-2.82-2.636-2.82-1.727 0-2.757 1.335-2.757 2.942v8.73h-3.996v-8.852c0-1.607-.818-2.82-2.636-2.82-1.757 0-2.787 1.305-2.787 2.942v8.73h-4.027V11.059zM51.24 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.288 7.889-7.824 7.889zm0-12.135a4.25 4.25 0 00-4.244 4.247 4.25 4.25 0 004.244 4.247 4.25 4.25 0 004.243-4.247 4.25 4.25 0 00-4.243-4.247zM67.667 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.29 7.889-7.824 7.889zm0-12.186a4.3 4.3 0 00-4.293 4.296 4.3 4.3 0 004.293 4.296 4.3 4.3 0 004.293-4.296 4.3 4.3 0 00-4.293-4.296z"
                                fill="#000"
                            ></path>
                        </svg>
                    </div>
                    <div className="flex items-center gap-8">
                        <ul className="hidden xl:flex gap-8">
                            <li className="group cursor-pointer relative before:content-[''] before:block before:top-0 before:left-0 before:h-[20px] before:w-full before:absolute before:translate-y-[100%]">
                                <p>
                                    Use Cases{' '}
                                    <span>
                                        <svg
                                            width="12px"
                                            height="12px"
                                            className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 2048 2048"
                                        >
                                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                                        </svg>
                                    </span>
                                </p>
                                <div className="z-10 mt-2 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 hidden group-hover:block">
                                    <ul
                                        className="py-2 text-sm text-gray-700"
                                        aria-labelledby="dropdownDefaultButton"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Earnings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>For Business</li>
                            <li>Resources</li>
                            <li>Company</li>
                            <li>Pricing</li>
                            <li>Sign In</li>
                        </ul>
                        <div className="flex justify-between items-center gap-4">
                            <a
                                href=""
                                className="bg-primary text-white p-4 rounded-full shadow-button hover:drop-shadow-lg"
                            >
                                Get Loom For Free
                            </a>
                            <a
                                href=""
                                className="bg-secondary rounded-full p-4 text-[#4b42ad] hover:drop-shadow-lg"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
