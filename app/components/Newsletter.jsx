import {Josefin_Sans} from '@next/font/google'

const josefin_sans = Josefin_Sans({subsets: ["latin"], weight: ["400"]})

const Newsletter = () => {
    return (
        <div className={josefin_sans.className}>
            <div className='flex pl-52 p-20 bg-white text-black'>
                <div className='max-w-2xl'>
                    <div className={josefin_sans.className}>
                        <h1 className='text-4xl pb-10'>NEWSLETTER</h1>
                    </div>
                    <div className={josefin_sans.className}>
                        <p className='text-xl'>Discover the latest buzz in our Newsletter Section,
                            delivering crisp updates on news, PR, and important developments. Track global
                            lifestyle developer milestones, catch glimpses of exclusive events, and receive
                            invites to open houses. Join us for a quick dive into a world of impactful
                            updates and stay connected to our vibrant community.</p>
                    </div>
                    <form method="get" action="/IMARAT-Newsletter-Feb-2024.pdf">
                        {/* BUTTON */}
                        <div className='pt-10'>
                            <a
                                href="/IMARAT-Newsletter-Feb-2024.pdf"
                                class="relative inline-flex items-center justify-center p-4 px-8 py-2 overflow-hidden font-medium text-green-950 transition duration-300 ease-out border-2 border-yellow-700 rounded-xl shadow-md group"
                                download>
                                <span
                                    class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-950 group-hover:translate-x-0 ease">
                                    <svg
                                        class="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <span
                                    class="absolute flex items-center justify-center w-full h-full text-green-950 transition-all duration-300 transform group-hover:translate-x-full ease">View</span>
                                <span class="relative invisible">View</span>
                            </a>
                        </div>
                        {/* BUTTON END */}

                    </form>
                </div>
                <div>
                    <img className="pl-20 w-full" src="/email_newsletter.png" alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Newsletter