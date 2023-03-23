import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="flex flex-col items-center sm:p-2 bg-opacity-0 backdrop-blur-lg drop-shadow-lg bg-gradient-to-b from-red-600 to-indigo-900">
                <section class="mb-10 text-gray-800 text-center lg:text-left">
                    <div class="flex flex-wrap justify-center">
                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
                            <div class="grid lg:grid-cols-2 gap-x-6 items-center">
                                <div class="mb-6 lg:mb-0">
                                    <h2 class="text-3xl font-bold">
                                        Do not miss any updates. <span class="text-black">Subscribe to the newsletter</span>
                                    </h2>
                                </div>
                                <div class="mb-6 md:mb-0">
                                    <div class="md:flex flex-row">
                                        <input type="text" class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter your email"/>
                                        <button type="submit" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true"data-mdb-ripple-color="light">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="flex sm:my-2 md:flex md:justify-end sm:flex sm:justify-end">
                    <div class="flex flex-row">
                        <div class="flex flex-col ">
                            <h2 class="mb-3 text-2xl font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li>
                                    <a href="https://reactjs.org/" class="flex flex-row m-1 hover:underline text-white hover:text-gray-900 dark:hover:text-amber-300">
                                        <svg class="w-6 h-6" aria-label="React" role="img" viewBox="0 0 512 512"><rect rx="15%" fill="#fff"/><circle cx="256" cy="256" r="36" fill="currentColor"/><path stroke="currentColor" stroke-width="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"/></svg>
                                        <span class="ml-2">ReactJs</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" class="flex flex-row m-1 hover:underline text-white hover:text-gray-900 dark:hover:text-amber-300">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path fill-rule="evenodd" d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"/></svg>
                                        <span class="ml-2">TailwindCSS</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col mx-12">
                            <h2 class="mb-3 text-2xl font-semibold text-gray-900 uppercase dark:text-white">Community</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li>
                                    <a href="https://github.com/Sagittarius17" class="flex flex-row m-1 hover:underline text-white hover:text-gray-900 dark:hover:text-amber-300">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                                        <span class="ml-2">Github</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/rAXbNCRKZ6" class="flex flex-row m-1 hover:underline text-white hover:text-gray-900 dark:hover:text-amber-300">
                                        <svg class="w-6 h-6" viewBox="0 0 512 512" fill="currentColor" aria-label="Discord" role="img" version="1.1"><rect width="512" height="512" rx="15%" fill="none"/><path d="m386 137c-24-11-49.5-19-76.3-23.7c-.5 0-1 0-1.2.6c-3.3 5.9-7 13.5-9.5 19.5c-29-4.3-57.5-4.3-85.7 0c-2.6-6.2-6.3-13.7-10-19.5c-.3-.4-.7-.7-1.2-.6c-23 4.6-52.4 13-76 23.7c-.2 0-.4.2-.5.4c-49 73-62 143-55 213c0 .3.2.7.5 1c32 23.6 63 38 93.6 47.3c.5 0 1 0 1.3-.4c7.2-9.8 13.6-20.2 19.2-31.2c.3-.6 0-1.4-.7-1.6c-10-4-20-8.6-29.3-14c-.7-.4-.8-1.5 0-2c2-1.5 4-3 5.8-4.5c.3-.3.8-.3 1.2-.2c61.4 28 128 28 188 0c.4-.2.9-.1 1.2.1c1.9 1.6 3.8 3.1 5.8 4.6c.7.5.6 1.6 0 2c-9.3 5.5-19 10-29.3 14c-.7.3-1 1-.6 1.7c5.6 11 12.1 21.3 19 31c.3.4.8.6 1.3.4c30.6-9.5 61.7-23.8 93.8-47.3c.3-.2.5-.5.5-1c7.8-80.9-13.1-151-55.4-213c0-.2-.3-.4-.5-.4Zm-192 171c-19 0-34-17-34-38c0-21 15-38 34-38c19 0 34 17 34 38c0 21-15 38-34 38zm125 0c-19 0-34-17-34-38c0-21 15-38 34-38c19 0 34 17 34 38c0 21-15 38-34 38z" fill="currentColor"/></svg>
                                        <span class="ml-2">Discord</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-4"/>
                <div class="flex flex-col items-center justify-between sm:flex-col sm:items-center sm:justify-between">
                    <div class="flex sm:mt-3 sm:flex space-x-6 sm:justify-center">
                        <a href="https://instagram.com/shuvendusingha/" class="text-black hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Instagram account</span>
                        </a>
                        <a href="https://twitter.com/shuvendusingha/" class="text-black hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            <span class="sr-only">Twitter account</span>
                        </a>
                        <a href="https://github.com/Sagittarius17" class="text-black hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">GitHub account</span>
                        </a>
                    </div>
                    <div>
                        <a href="#" class="flex items-center m-2 sm:flex-row">
                            <img src='' class="w-6 h-6 mt-2 mr-2 sm:mr-2 sm:mt-2"/>
                            <span class="my-4 mb-2 text-sm sm:justify-center text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://google.com/" class="hover:underline">PortFolio</a>. Sob Rights Amar.</span>
                        </a>
                    </div>
                </div>
            </footer>
            <div class="flex h-10 pr-4 justify-center sm:flex-row sm:items-center bg-black">
                <span class="mx-4 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Powered by</span>
                <a href="https://reactjs.org/" class="mx-1 m-2 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-7 h-7" aria-label="React" role="img" viewBox="0 0 512 512"><rect rx="15%" fill="#fff"/><circle cx="256" cy="256" r="36" fill="currentColor"/><path stroke="currentColor" stroke-width="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"/></svg>
                    <span class="sr-only">reactJs</span>
                </a>
                <a href="https://tailwindcss.com/" class="mx-1 m-2 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-7 h-7" viewBox="0 0 32 32" aria-hidden="true"><path fill-rule="evenodd" d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" fill="currentColor"/></svg>
                    <span class="sr-only">tailwindcss</span>
                </a>
                <a href="https://sass-lang.com/" class="mx-1 m-2 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-7 h-7" aria-label="Sass" role="img" viewBox="0 0 512 512"><rect rx="15%"/><path d="M258,88c-96,33-158,100-152,140s66,72,93,93h0c-35,18-79,45-78,80,2,48,54,33,76,19s44-53,30-94c31-8,58,2,66,8,31,22,15,47,4,51s-4,6,3,4,22-12,22-29c0-43-46-63-103-48-33-35-78-51-76-89,1-14,6-50,95-95s152-27,144,14c-12,62-120,104-158,68-2-4-9-7-5,4,20,50,182,27,189-79C410,79,329,64,258,88ZM172,408c-25,8-24-8-23-14,3-17,17-38,59-59C220,373,193,402,172,408Z" fill="currentcolor"/></svg>
                    <span class="sr-only">sass</span>
                </a>
            </div>
        </div>
    )
}

export default Footer