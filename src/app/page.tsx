import Image from "next/image";

export default function Home() {
  return (
    <main className='h-screen text-white  Parent bg-slate-900'>
      {/* layout container */}
      <div className='container px-2 bg-red-500'>
        <h1>Hello</h1>
      </div>
      {/* layout columns */}
      {/* <div className='container px-2 columns-3'> */}
      <div className='container px-2 '>
        <img
          // layout display
          // className='block'
          // layout float
          className='w-6/12 float-right'
          src='https://media.istockphoto.com/id/1401461127/ko/%EC%82%AC%EC%A7%84/%EC%95%8C%EB%A6%BC-%EC%95%8C%EB%A6%BC%EC%9D%B4%EC%9E%88%EB%8A%94-%EC%A0%84%EC%9E%90-%EB%A9%94%EC%9D%BC%EC%97%90-%EC%8A%A4%EB%A7%88%ED%8A%B8-%ED%8F%B0%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%82%AC%EC%97%85%EA%B0%80%EC%9D%98-%EC%86%90.jpg?s=2048x2048&w=is&k=20&c=uNMOAErvp3Wc_5WvqQmaoIiYbWMmypTAziZ057o9SBY='
          alt='No Image'
        ></img>
        <img
          className='w-2/6 float-left'
          src='https://media.istockphoto.com/id/1401461127/ko/%EC%82%AC%EC%A7%84/%EC%95%8C%EB%A6%BC-%EC%95%8C%EB%A6%BC%EC%9D%B4%EC%9E%88%EB%8A%94-%EC%A0%84%EC%9E%90-%EB%A9%94%EC%9D%BC%EC%97%90-%EC%8A%A4%EB%A7%88%ED%8A%B8-%ED%8F%B0%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%82%AC%EC%97%85%EA%B0%80%EC%9D%98-%EC%86%90.jpg?s=2048x2048&w=is&k=20&c=uNMOAErvp3Wc_5WvqQmaoIiYbWMmypTAziZ057o9SBY='
          alt='No Image'
        ></img>
        {/* layout clear */}
        <h1 className='clear-left'>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </h1>
        <h1>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </h1>
      </div>
    </main>
  );
}
