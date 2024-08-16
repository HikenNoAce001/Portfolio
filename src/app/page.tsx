import Social from './Components/socials';

export default function Home() {
  return (
    <main className="flex flex-auto w-screen h-screen space-y-5 bg-gradient-to-tl from-slate-900 to-gray-500">
      <div className="absolute top-0 right-0 p-7">
        <Social />
      </div>
      <div className="flex flex-col items-center p-24">
        {' '}
        <div className="text-h1 items-center">
          Mohammad Zobair Hossain Fahim
          <p className="text-h3 items-center">Portfolio skeleton on build</p>
        </div>
      </div>
    </main>
  );
}
