/* eslint-disable react/jsx-no-undef */
import { myProjects } from '../constants/index.js'
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const words = ["Performant", "Accessible", "Secure", "Interactive", "Scalable", "User Friendly", "Responsive", "Maintainable", "Search Optimized", "Usable", "Reliable"];


const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const currentProject = myProjects[selectedProjectIndex]

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction == 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }

    return (
        <>
            <section className='c-space my-20' id='work'>
                <p className='head-text'>My Work</p>
                <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                    <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                        <div className='absolute top-0 right-0'>
                            <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                        </div>
                        <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                            <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                        </div>
                        <div className='flex flex-col gap-5 text-white-600 my-5'>
                            <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
                            <p className='animatedText'>{currentProject.desc}</p>
                            <p className='animatedText'>{currentProject.subdesc}</p>
                        </div>
                        <div className='flex items-center justify-between flex-wrap gap-5'>
                            <div className='flex items-center gap-3 cursor-pointer' >
                                {currentProject.tags.map((tag, index) => (
                                    <div key={index} className='tech-logo' onClick={() => window.open(tag.href, "_blank")} title={tag.name}>
                                        <img src={tag.path} alt={tag.name} />
                                    </div>
                                ))}
                            </div>
                            <a href={currentProject.href} className='flex items-center gap-2 cursor-pointer text-white-600' target='_blank' rel='noreferrer'>
                                <p>Check Live Site</p>
                                <img src="/assets/arrow-up.png" alt="arrow" className='w-3 h-3' />
                            </a>
                        </div>
                        <div className='flex justify-between items-center mt-7'>
                            <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
                                <img src="/assets/left-arrow.png" alt="left arrow" className='w-4 h-4' />
                            </button>
                            <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                                <img src="/assets/right-arrow.png" alt="right arrow" className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                    <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
                        <Canvas>
                            <ambientLight intensity={Math.PI} />
                            <directionalLight position={[10, 10, 5]} />
                            {/*To center the 3d model on the screen*/}
                            <Center>
                                {/* To show something while currently loading */}
                                <Suspense fallback={<CanvasLoader />} />
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Center>
                            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                        </Canvas>
                    </div>
                </div>
            </section>
            <section>
                <div className='c-space my-20 overflow-x-clip'>
                    <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
                        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                            <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left' >
                                {[...new Array(2)].fill(0).map((_, idx) => (<div key={idx}>
                                    {words.map((word, index) => (
                                        <div key={index} className='inline-flex gap-4 items-center'>
                                            <span className='text-gray-900 uppercase font-extrabold text-sm ml-4'>{word}</span>
                                            <img src="/assets/star.svg" alt="icon" className='size-6 text-gray-900 -rotate-12' />
                                        </div>
                                    ))}
                                </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects



// rgb(175, 176, 182)