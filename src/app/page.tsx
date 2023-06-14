import Image from "next/image";

export default function Home() {
  return (
    <main className='text-white Parent bg-slate-900 h-screen '>
      <div className='container'>
        {/* visibility */}
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-teal-500'>01</div>
          <div className='bg-teal-500 invisible'>02</div>
          <div className='bg-teal-500'>03</div>
        </div>
        {/* z index */}
        <div className='flex -space-x-3'>
          <div className='z-40 w-16 h-16 rounded-full flex items-center ring-2 bg-lime-500 shadow-lg justify-center'>
            01
          </div>
          <div className='z-30 w-16 h-16 rounded-full flex items-center ring-2 bg-lime-500 shadow-lg justify-center'>
            02
          </div>
          <div className='z-20 w-16 h-16 rounded-full flex items-center ring-2 bg-lime-500 shadow-lg justify-center'>
            03
          </div>
          <div className='z-10 w-16 h-16 rounded-full flex items-center ring-2 bg-lime-500 shadow-lg justify-center'>
            04
          </div>
          <div className='z-0 w-16 h-16 rounded-full flex items-center ring-2 bg-lime-500 shadow-lg justify-center'>
            05
          </div>
        </div>
        {/* object index */}
        <img
          className=' object-none object-left-top w-64 h-64 '
          src='https://images.unsplash.com/photo-1527377667-83c6c76f963f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt='None'
        ></img>
      </div>
    </main>
  );
}
