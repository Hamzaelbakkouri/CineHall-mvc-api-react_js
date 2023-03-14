import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="p-4 bg-[#201D1E] rounded-lg shadow md:px-6 md:py-8 dark:bg-[#201D1E]">
                <div className="sm:flex sm:items-center sm:justify-between">
                    
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-white">© 3 <a href="/" className="hover:underline">CineHall™</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}

export default Footer
