function App() {
  return (
    <main className="flex h-[98%] flex-grow w-screen max-w-[1440px] flex-col items-center justify-center">
      <div className="flex items-center justify-center flex-col max-w-xs gap-6 bg-white px-4 pt-4 pb-10 rounded-[20px]">
        <img
          src="/image-qr-code.png"
          alt="QR Code"
          className="size-72 rounded-[10px]"
        />

        <div className="flex flex-col gap-4 px-4">
          <h1
            style={{
              fontSize: "22px",
              lineHeight: "120%",
              letterSpacing: "0px",
            }}
            className="text-slate-900 font-bold text-center"
          >
            Improve your front-end skills by building projects
          </h1>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
            }}
            className="text-xs text-slate-500 text-center"
          >
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
