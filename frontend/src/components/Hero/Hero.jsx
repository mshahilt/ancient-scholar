import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-800 body-font bg-gray-100 mt-16 px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="lg:flex-grow mt-5 md:mt-0 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-black sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                            What is "History"
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-700">
                            History is a discipline that studies the chronological record of events. It is an umbrella term comprising past events as well as the memory, discovery, collection, organization, presentation, and interpretation of these events.
                        </p>
                        <div className="flex justify-center">
                            <a href="#" className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">Start Exploring</a>
                            <a href="#" className="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Read articles</a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 w-full">
                        <img className="object-cover object-center rounded" alt="hero" src="https://i.etsystatic.com/16659371/r/il/9123f4/3735170951/il_fullxfull.3735170951_8edr.jpg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
