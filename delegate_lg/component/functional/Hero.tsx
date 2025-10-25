

function Hero() {
  return (
    <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center text-center text-white bg-[url('/asset/herobanner.svg')]">
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Delegate Any Task from Anywhere</h1>
        <p className="text-lg mb-6 max-w-xl">We connect you with trusted agents in Lagos, Ibadan, Osun, and Abuja to handle your tasks professionally.</p>
   

        <a href="/signup" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">Start Delegation Now</a>
      </div>
    </section>
  );
}

export default Hero;