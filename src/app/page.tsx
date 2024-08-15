import Social from './Components/socials';

export default function Home() {
  return (
    <main className="flex flex-auto w-screen h-screen space-y-5 bg-gradient-to-tl from-slate-900 to-gray-500">
      <div className="absolute top-0 right-0 p-8">
        <Social />
      </div>
      <div className="flex flex-col items-center justify-between p-24">
        <div className="border-2 border-x-4 border-y-4 shadow-2xl rounded-3xl p-7 bg-black">
          {' '}
          <div className="text-h1">
            Hello
            <p className="text-h3">Portfolio skeleton on build</p>
          </div>
        </div>
      </div>
    </main>
  );
}
