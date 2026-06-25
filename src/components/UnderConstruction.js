function UnderConstruction() {
  return (
    <div className="bg-primary w-screen max-w-full min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Under Construction
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto">
          I'm working on some exciting updates. Check back soon!
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;
