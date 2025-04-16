import Image from 'next/image';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="mb-4">
        <Image
          src="/images/Max.png"
          alt="A image showing maximum"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-400 shadow"
        />
      </div>
      <h1 className="text-3xl font-bold text-gray-800">Hi, I’m Max</h1>
      <p className="text-gray-600 mt-2 max-w-md">
        I blog about web development — especially frontend frameworks like Angular or React.
      </p>
    </section>
  );
}

export default Hero;
