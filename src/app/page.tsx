import Image from "next/image";

export default function Home() {
  return (
    <main className='h-screen text-white  Parent bg-slate-900'>
      <div className='container px-2'>
        {/* Layout position */}
        <div className='relative w-64 h-64 p-8 bg-red-500 rounded-lg'>
          {/* TODO fixed  */}
          <div className='fixed top-0'> Color table</div>
          <div className='absolute top-0 -left-2 w-24 h-24 bg-green-500 rounded-lg'></div>
          <div className='absolute inset-6 w-24 h-24 bg-blue-500 rounded-lg'></div>
        </div>
      </div>
      <div className='container px-2'>
        {/* overflow over-flow-visivle, over-flow-hidden*/}
        <div className='max-w-md overflow-auto'>
          <div className='overflow-x-auto flex'>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
          </div>
          <div className='overflow-y-auto h-72'>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
            <img
              className='flex-none py-6 px-3 first:p1-6 last:pr-6 w-64 h-64 rounded-full'
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1'
              alt='image'
            ></img>
          </div>
        </div>
      </div>
    </main>
  );
}
