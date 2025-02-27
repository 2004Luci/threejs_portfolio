import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const About = () => {

    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('mit4sheth@gmail.com');
        toast('Email Copied to Clipboard!', { theme: "dark" })

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false)
        }, 5000);
    }

    return (
        <section className='c-space my-20 mt-48' id='about'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Mit</p>
                            <p className='grid-subtext'>I am a web developer aspiring to build dynamic and scalable web applications.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] sm:relative sm:left-[25%] lg:left-6 h-fit object-contain brightness-105' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>Skilled in HTML5, CSS3, JavaScript, TypeScript, Bootstrap, and Tailwind CSS, with a strong foundation in front-end development. Currently enhancing my expertise in React, Next.js, MongoDB, and Express to create dynamic and full-stack web applications.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 23.0225, lng: 72.5714,
                                    text: "I'm here!",
                                    color: 'white',
                                    size: 200
                                }]}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>I work remotely across most timezones.</p>
                            <p className='grid-subtext'>I'm based in Ahmedabad, India with remote work available.</p>
                            <a href="/#contact">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My passion for Coding</p>
                            <p className='grid-subtext'>Building and problem-solving through code isn't just what I do — it's what I love. Every challenge is an opportunity to create, innovate, and turn ideas into reality.</p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <ToastContainer theme='dark' />
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>mit4sheth@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
