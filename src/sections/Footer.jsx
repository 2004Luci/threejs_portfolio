import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p className='text-white-500'>© 2025 Mit. All rights reserved.</p>
            </div>
            <div className='flex gap-3'>
                <a href="https://github.com/2004Luci/threejs_portfolio" target='_blank' rel='noreferrer'>
                    <div className='sm:social-icon social-icon_small'>
                        <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/mit-sheth-250b71351/" target='_blank' rel='noreferrer'>
                    <div className='sm:social-icon social-icon_small'>
                        <img src="/assets/linkedin.svg" alt="linkedin" className='w-1/2 h-1/2 invert' />
                    </div>
                </a>
                <a href="https://x.com/Mit4Sheth" target='_blank' rel='noreferrer'>
                    <div className='sm:social-icon social-icon_small'>
                        <img src="/assets/x.svg" alt="x" className='w-1/2 h-1/2 invert' />
                    </div>
                </a>
                <a href="https://www.instagram.com/mit_4s/" target='_blank' rel='noreferrer'>
                    <div className='sm:social-icon social-icon_small'>
                        <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' />
                    </div>
                </a>
                <a href="https://www.facebook.com/mit.sheth.560/" target='_blank' rel='noreferrer'>
                    <div className='sm:social-icon social-icon_small'>
                        <img src="/assets/facebook.svg" alt="facebook" className='w-1/2 h-1/2 invert' />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Footer
