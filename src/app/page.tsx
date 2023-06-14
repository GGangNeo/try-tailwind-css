import Image from "next/image";

export default function Home() {
  return (
    <main className='text-white Parent bg-slate-900 h-screen '>
      {/* Border  */}
      <div className='border py-4 border-indigo-500'> 1 </div>
      <div className='border-4 py-4 border-yellow-500'> 2 </div>
      <div className='border-8 py-4 border-indigo-500'> 3 </div>
      <div className='border-b-4 py-4 border-yellow-500'> 4 </div>
      <div className='border-l-4 border-b-8 py-4 border-indigo-500'> 5 </div>
      <input
        type='text'
        className='py-8  border-4 border-dashed border-fuchsia-500'
      />
      {/* Divide */}
      <div className=' grid grid-rows-3 divide-y-4 divide-amber-500 divide-dashed'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      {/* outline */}
      <div className='py-4 border-4 w-20 h-20 border-fuchsia-500 outline-4 outline-dashed outline-lime-500 px-4 mx-20'></div>
      {/* ring */}
      <button className='py-4 px-4 mx-4 my-4 ring-4 ring-offset-4 ring-pink-500 ring-inset rounded-lg'>
        {" "}
        Button{" "}
      </button>
    </main>
  );
}
