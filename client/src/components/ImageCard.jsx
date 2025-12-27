

const ImageCard = ({Image,Title,Price,Author,Icon1,Icon2}) => {
  return (
    <div>
        <>
         <div className='rounded-lg bg-white shadow-lg p-2 '> 
            <div className='w-full h-[200px] overflow-hidden rounded-2xl'>
               <img src={Image} alt="Image-01" className='w-53 h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer' />
            </div>
            <p className="font-semibold text-white bg-black w-fit px-5 py-1 rounded-full text-sm">{"@"+ Author.charAt(0).toUpperCase() + Author.slice(1)}</p>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">{Title}</h3>
                    <p className="text-gray-500">Price: ${Price}</p>
                </div>
                <div className="flex gap-5 justify-center items-center">
                 {Icon1}
                 {Icon2}
                </div>
            </div>
            </div>
        
        </>
    </div>
  )
}

export default ImageCard