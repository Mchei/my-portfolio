import Image from "next/image"

const Hero = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12 px-5">
            <div className="col-span-7 place-self-center">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-400 to-white-500 mb-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    Hello, I am Michael!
                </h1>

                <p className="text-white text-lg lg:text-xl mb-6">
                    This protfolio showed some of my previous works and I am looking forward to keep adding into it!

                </p>
                <div>
                    <button className="rounded-full mr-4 px-6 py-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"> Download CV </button>
                </div>
            </div>

            <div className="col-span-5 place-self-center py-7">
                <div className=" mb-5 py-8">
                    <Image 
                    src="/icon.PNG"
                    width={480}
                    height={48}
                    alt="Icon"
                    ></Image>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
