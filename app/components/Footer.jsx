import {Josefin_Sans} from '@next/font/google'

const josefin_sans = Josefin_Sans({subsets: ["latin"], weight: ["400"]})

const Footer = () => {
    return (
        <div className={josefin_sans.className}>
            <div className='text-black bg-white'>
                {/* IMAGE */}
                <div className=' py-10'>
                    <img className='w-full' src="/footer_imarat.svg" alt="footer"/>
                </div>

                <div>

                    <div className='text-black flex items-center justify-center inset-0 '>
                        {/* LINKS */}
                        <div className='m-5 mx-10 px-10 py-5 '>
                            <ul>
                                <h1 className='text-xl'>About</h1>
                            </ul>
                            <div className='text-sm py-2'>
                                <ul className='py-1'>Our Story</ul>
                                <ul className='py-1'>Careers</ul>
                                <ul className='py-1'>Ecosystem</ul>
                            </div>
                        </div>
                        {/* LINK END */}
                        {/* LINKS */}
                        <div className='m-5 mx-10  px-10 py-5 '>
                            <ul>
                                <h1 className='text-xl'>QUICK LINKS</h1>
                            </ul>
                            <div className='text-sm py-2'>
                                <ul className='py-1'>Projects</ul>
                                <ul className='py-1'>OADD</ul>
                                <ul className='py-1'>Our Offices</ul>
                            </div>
                        </div>
                        {/* LINK END */}
                        {/* LINKS */}
                        <div className='m-5 mx-10 px-10 py-5 '>
                            <ul>
                                <h1 className='text-xl'>CONTACT</h1>
                            </ul>
                            <div className='text-sm py-2'>
                                <ul className='flex py-1'><img className='w-5 mr-2' src="/email.png" alt="mail"/>
                                    <a href="mailto: info@imarat.com.pk">info@imarat.com.pk</a>
                                </ul>
                                <ul className=' flex py-1'><img className='w-5 mr-2' src="/call.png" alt="call"/>
                                    <a href="tel:051 111 707 111">051 111 707 111</a>
                                </ul>
                                <ul className='py-1 opacity-0'>Ecosystem</ul>
                            </div>
                        </div>
                        {/* LINK END */}
                        {/* LINKS */}
                        <div className='m-5 mx-10 px-10 mb-14'>
                            <ul>
                                <h1 className='text-xl'>FOLLOW US</h1>
                            </ul>
                            <div className='text-sm flex py-2'>
                                <a
                                    className='bg-gray-500 p-2 m-1 rounded-full'
                                    href="https://www.instagram.com/imaratpk/"><img src="/instagram.svg" alt="ins"/></a>
                                <a
                                    className='bg-gray-500 p-2 m-1 rounded-full'
                                    href="https://www.facebook.com/imaratpk"><img src="/facebook.svg" alt="fb"/></a>
                                <a
                                    className='bg-gray-500 p-2 m-1 rounded-full'
                                    href="https://www.linkedin.com/company/imaratpk/"><img src="/linkedin.svg" alt="lkdn"/></a>
                                <a className='bg-gray-500 p-2 m-1 rounded-full' href="https://x.com/Imarat_pk"><img src="/x.svg" alt="x"/></a>
                                <a
                                    className='bg-gray-500 p-2 m-1 rounded-full'
                                    href="https://www.youtube.com/channel/UCKhI8PeknmBowjUp18UAUBA"><img src="/youtube.svg" alt="yt"/></a>

                                {/* LINK END */}
                            </div>
                        </div>

                    </div>
                    <div
                        className='bg-green-900 text-yellow-600 flex items-center justify-center pt-6 text-sm'>
                        <p>Copyright 2024. IMARAT. All rights reserved</p>
                    </div>
                    <div
                        className='bg-green-900 text-yellow-600 flex items-center justify-center text-sm'>
                        <p>Terms & Conditions | Privacy Policy | Disclaimer</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Footer