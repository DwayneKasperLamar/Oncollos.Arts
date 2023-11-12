import Button from "../Componets/Button"
import { statistics } from '../constants'
import { bigShoe1 } from "../assets/images"
import { arrowRight } from '../assets/icons'

const Hero = () => {
  return (
   <section
    id="home"
    className="w-full flex x1:flex-row flex-col justify-center  min-h-screen gap-10 max-container border-2">

      <div className="relative x1:w-2/5 flex flex-col justify-center items-start w-f] max-xl: padding-x pt-28 ">
        <p className="text-x1 font-Montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading[82] font-bold" > 

          <span className="x1:bg-white x1:whitespace-nowrap relative z-10 pr-10">
             The New Arrival 
          </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Oncollos</span>Arts
           </h1>
           <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover a diffrent type of paintings and Arts Works in diverse ways and means</p>
          <Button label= "shop now"
          iconURL={arrowRight} />

          <div className="flex justify-starts items-start flex-wrap mt-20 gap-16">

            {statistics.map((stat)=>(
                <div key={stat.label}>
                  <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                  <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                </div>
            ))}

          </div>
      </div>  
                <div className=" flex  	flex-direction: column border-4 border-color-red">
                <img src={ bigShoe1 }
                 alt="shoe collection"
                 width={210}
                 height={200}
                 className="object-contian relative right-30 z-10"/>
              </div>

    </section>

 
  )
}

export default Hero