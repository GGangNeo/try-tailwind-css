import Image from "next/image";

export default function Home() {
  return (
    <main className='text-white bg-slate-900 h-screen'>
      <div className='container mx-auto'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 '>
          <div className='p-6 rounded-lg bg-sky-500'>1</div>
          <div className='p-6 rounded-lg bg-sky-500'>2</div>
          <div className='p-6 rounded-lg bg-sky-500'>3</div>
          <div className='p-6 rounded-lg bg-red-500 col-span-2'>4</div>
          <div className='p-6 rounded-lg bg-sky-500'>5</div>
          <div className='p-6 rounded-lg bg-sky-500'>6</div>
          <div className='p-6 rounded-lg bg-violet-500 col-start-3'>7</div>
          <div className='p-6 rounded-lg bg-violet-500 col-start-1 col-end-3'>
            8
          </div>
        </div>
        {/* Auto-cols Using like flex  */}
        <div className='grid grid-flow-col auto-cols-max'>
          <div className='p-6 rounded-lg bg-sky-500'>1</div>
          <div className='p-6 rounded-lg bg-sky-500'>2</div>
          <div className='p-6 rounded-lg bg-sky-500'>3</div>
        </div>
        {/* row-span */}
        <div className='grid gap-4 grid-flow-col grid-rows-4 '>
          <div className='p-6 rounded-lg bg-yellow-500 row-span-2'>1</div>
          <div className='p-6 rounded-lg bg-yellow-500'>2</div>
          <div className='p-6 rounded-lg bg-yellow-500'>3</div>
          <div className='p-6 rounded-lg bg-yellow-500 row-span-2'>4</div>
          <div className='p-6 rounded-lg bg-yellow-500 row-span-3'>5</div>
          <div className='p-6 rounded-lg bg-yellow-500 row-start-2'>6</div>
          <div className='p-6 rounded-lg bg-yellow-500'>7</div>
        </div>
        {/* grid-flow-row-dense reduce empty space */}
        <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-3'>
          <div className='col-span-2 p-6 rounded-lg bg-cyan-500'>1</div>
          <div className='p-6 rounded-lg bg-cyan-500'>2</div>
          <div className='p-6 rounded-lg bg-cyan-500'>4</div>
          <div className='col-span-2 p-6 rounded-lg bg-cyan-500'>5</div>
          <div className='p-6 rounded-lg bg-cyan-500'>6</div>
        </div>
      </div>
    </main>
  );
}
