function App() {
  return (
    <main className="flex h-full flex-grow w-screen max-w-[1440px] flex-col items-center justify-center">
      <div className="flex items-center justify-center flex-col max-w-xs gap-6 bg-white px-4 pt-4 pb-10 rounded-[20px]">
        <img
          src="/image-qr-code.png"
          alt="QR Code"
          className="size-72 rounded-[10px]"
        />

        <div className="flex flex-col gap-4 px-4">
          <h1 className="text-slate-900 font-bold text-center text-[22px] leading-[120%] tracking-normal">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[15px] leading-[140%] tracking-[0.2px] text-slate-500 text-center">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
