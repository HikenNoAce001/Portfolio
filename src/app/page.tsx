import Social from './Components/socials';

export default function Home() {
  return (
    <main className="relative flex flex-col w-screen h-screen justify-center bg-[#0f172a]">
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
