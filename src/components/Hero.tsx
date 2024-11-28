import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Full-Stack Developer</h1>
        <p className="text-xl md:text-2xl mb-8">Crafting exceptional web and mobile experiences for over a decade</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-blue-100 transition duration-300">
          View My Work
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </section>
  )
}

