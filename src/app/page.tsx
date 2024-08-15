import Social from './Components/socials';

export default function Home() {
  return (
    <main className="flex min-h-screen space-y-5 bg-gradient-to-tl from-slate-900 to-gray-500">
      <Social />
      <div className=" flex-col items-center justify-between p-24">
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
