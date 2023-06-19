import Image from "next/image";

export default function Home() {
  return (
    // <main className='text-white Parent bg-slate-900 h-screen flex items-center justify-around'>
    <main className='h-screen p-4 Parent flex items-center justify-evenly'>
      {/* Box shadow */}
      <div className='inline-block p-4 text-black bg-white border rounded-lg hover:shadow-[0_35px_60px_-15px_rgba(255,0,3,0.3)]'>
        <h1 className='text-2xl opacity-50'>Hello</h1>
        <p className='mb-4'>This is my</p>
        <button className='px-3 py-2 rounded-lg cursor-pointer bg-cyan-500'>
          Say Hello
        </button>
      </div>
      <div className='flex -space-x-14'>
        <div className='w-32 h-32 mix-blend-multiply bg-blue-500 rounded-3xl '></div>
        <div className='w-32 h-32 mix-blend-multiply bg-pink-500 rounded-3xl'></div>
      </div>
      {/* Filter visit tailwind css web*/}
      <img
        src='https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg'
        alt='Image None'
        className='h-64 w-63 rounded-xl blur-sm brightness-50 contrast-75 hover:blur-none md:filter-none'
      ></img>
      <div className='relative rotate-45'>
        <div className='absolute inset-6 backdrop-blur-md h-20 w-20 bg-white/30'></div>
        <img
          src='https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg'
          alt='Imgae None'
          className='h-32 w-32 object-cover rounded-lg '
        ></img>
      </div>
    </main>
  );
}
