import Image from "next/image";

export default function Home() {
  return (
    // <main className='text-white Parent bg-slate-900 h-screen flex items-center justify-around'>
    <main className='h-screen p-4 Parent flex items-center justify-center'>
      <div className='inline-block p-4 text-black bg-white border rounded-lg '>
        {/* Skew, Transform origin  */}
        <img
          src='https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg'
          alt='Image None'
          className='h-64 w-63 rounded-xl blur-sm brightness-50 contrast-75 hover:blur-none md:filter-none hover:skew-x-6 hover:origin-bottom-left hover:-rotate-12'
        ></img>
        <h1 className='text-2xl opacity-50'>Hello</h1>
        <p className='mb-4 '>This is my</p>
        <span className='relative inline-flex'>
          <span className='flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1 '>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 '></span>
            <span className='relative inline-flex rounded-full h-3 w-3 bg-indigo-500 '></span>
          </span>
          {/* Animation */}
          <button className='px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 transition ease-in-out delay-200 hover:-translate-y-7 hover:scale-110 hover:bg-lime-500 duration-300'>
            Say Hello
          </button>
        </span>
      </div>
      <button
        type='button'
        className='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed'
        disabled
      >
        {/* Spin */}
        <svg
          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            stroke-width='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
        Processing...
      </button>
    </main>
  );
}
