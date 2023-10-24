import Image from 'next/image'

const Home = (): JSX.Element => (
  <main className="flex h-screen text-white flex-col gap-1.5 lg:flex-row lg:gap-0 ">
    <section className="flex flex-1 flex-col items-center justify-center pt-10">
      <h1 className="px-4 text-4xl font-medium text-center md:text-5xl">
        Hi there, this is Space H!
      </h1>
      <p className="text-center pb-0 px-4 pt-3 max-w-lg text-lg md:text-2xl">
        We are coming soon! The tool to keep all information about your team, in
        one single place
      </p>
    </section>
    <section className="flex flex-1 flex-col justify-end min-h-400 relative">
      <Image
        className="object-cover object-center-35"
        alt="astronaut"
        src="/static/images/astronaut.jpg"
        fill
      />
      <div className="flex flex-col max-w-xl mb-10 py-7 gap-4 text-4xl px-4 z-10">
        <Image
          src="/static/icons/quotes.svg"
          alt="quote"
          width={40}
          height={40}
        />
        <p>Go anywhere you want in a Galaxy full of wonders</p>
      </div>
    </section>
  </main>
)

export default Home
