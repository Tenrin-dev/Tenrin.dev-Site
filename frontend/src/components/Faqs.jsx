import React, { useEffect } from 'react'
import { useGetFaqsQuery } from '../redux/Api/FaqsApi'

const faq = [
    {
        id:1,
        Question:'Consultation',
        Ans:`Lors de la première consultation, nous discuterons des buts et objectifs de votre entreprise, de votre public cible et de vos efforts de marketing actuels. Cela nous permettra de comprendre vos besoins et d'adapter nos services pour qu'ils répondent au mieux à vos exigences.`,
        active:true
    },
    {
        id:2,
        Question:'Recherche et développement stratégique',
        Ans:`Lors de la première consultation, nous discuterons des buts et objectifs de votre entreprise, de votre public cible et de vos efforts de marketing actuels. Cela nous permettra de comprendre vos besoins et d'adapter nos services pour qu'ils répondent au mieux à vos exigences.`,
        active:false
    },
    {
        id:3,
        Question:'Mise en œuvre',
        Ans:`Lors de la première consultation, nous discuterons des buts et objectifs de votre entreprise, de votre public cible et de vos efforts de marketing actuels. Cela nous permettra de comprendre vos besoins et d'adapter nos services pour qu'ils répondent au mieux à vos exigences.`,
        active:false
    },
    {
      id:4,
      Question:'Suivi et optimisation',
      Ans:`Lors de la première consultation, nous discuterons des buts et objectifs de votre entreprise, de votre public cible et de vos efforts de marketing actuels. Cela nous permettra de comprendre vos besoins et d'adapter nos services pour qu'ils répondent au mieux à vos exigences.`,
      active:false
  },
  {
    id:5,
    Question:'Rapports et communication',
    Ans:`Lors de la première consultation, nous discuterons des buts et objectifs de votre entreprise, de votre public cible et de vos efforts de marketing actuels. Cela nous permettra de comprendre vos besoins et d'adapter nos services pour qu'ils répondent au mieux à vos exigences.`,
    active:false
},
{
  id:6,
  Question:'Amélioration continue',
  Ans:`Lors de la première consultation, nous discuterons des buts et objectifs de votre entreprise, de votre public cible et de vos efforts de marketing actuels. Cela nous permettra de comprendre vos besoins et d'adapter nos services pour qu'ils répondent au mieux à vos exigences.`,
  active:false
},
]

const Faqs = () => {
    const {data,error,isLoading,isFetching,refetch} = useGetFaqsQuery()
    const [items,setItems] = React.useState([])

    useEffect(()=>{
      setItems(data?.data)
    },[data])

    const Toggle = (id)=>{
        setItems((item)=>item.map((i)=>(
            i._id==id ? {...i, active:!i.active} : i
        )))
    }

  return (
    <section id='faqs' className="bg-white">
  <div className="container px-6 lg:w-[80%] md:w-[90%] w-[98%] py-16 mx-auto">
  <div className='flex md:flex-row flex-col item-center gap-10'>
    <div className='flex md:block justify-center'>

    <h1 className="text-xl text-center md:text-left block md:block font-semibold text-gray-100 bg-black px-2 py-1 rounded-lg capitalize lg:text-xl ">Frequently Ask Questions</h1>
    </div>
    {/* <p className="text-black text-sm text-center md:text-left max-w-xl">
    Un guide pas à pas pour atteindre vos objectifs 
    </p> */}
  </div>
    <div className="mt-8 space-y-8 lg:mt-12">
    {items?.map((item,index)=>{
 return (
      <div key={item._id} className={`p-8 ${item.active?'bg-black text-white':'bg-[#F3F3F3]'} rounded-3xl shadow-[0px_2px_1px_1px_black]`} >
        <button onClick={()=>Toggle(item._id)} className="flex items-center justify-between w-full">
        <div className='flex gap-5 items-center'>

          <h3 className=' text-3xl font-extrabold'>0{index+1}</h3>
          <h1 className="font-semibold">{item.question}</h1>
        </div>
          {item?.active ? (
          <span className="text-gray-400 bg-gray-200 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 58 59" fill="none">
  <circle cx={29} cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
  <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
</svg>

          </span>
          ):(

          <span className="text-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 58 59" fill="none">
  <circle cx={29} cy="29.5001" r="28.5" fill="#F3F3F3" stroke="#191A23" />
  <path d="M25.6 41.5801V31.8601H16V26.2201H25.6V16.5001H31.48V26.2201H41.08V31.8601H31.48V41.5801H25.6Z" fill="#191A23" />
</svg>

                    </span>
          )}
        </button>
        {item?.active && (
        <p className="mt-6 text-sm text-white">
         {item.answer}
        </p>
        )}
      </div>
      )
    })}
     
    </div>
  </div>
</section>
  )
}

export default Faqs