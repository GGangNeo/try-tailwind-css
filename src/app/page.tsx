import Image from "next/image";

export default function Home() {
  return (
    // <main className='text-white Parent bg-slate-900 h-screen flex items-center justify-around'>
    <main className='h-screen p-4 Parent flex items-center justify-around'>
      {/* Box shadow */}
      <div className='inline-block p-4 text-black bg-white border rounded-lg hover:shadow-2xl shadow-orange-500 '>
        <h1 className='text-2xl'>Hello</h1>
        <p className='mb-4'>This is my</p>
        <button className='px-3 py-2 rounded-lg cursor-pointer bg-cyan-500'>
          Say Hello
        </button>
      </div>
    </main>
  );
}
