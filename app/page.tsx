export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <img
        src="/logo.png"
        alt="WYnex"
        className="w-32 mb-6"
      />

      <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
        WYnex
      </h1>

      <p className="text-gray-400 mt-4 text-center max-w-xl">
        Simple Web3 utility platform focused on wallet tracking,
        testnet tools, and blockchain accessibility.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl">
          Launch App
        </button>

        <button className="border border-blue-500 px-6 py-3 rounded-xl">
          Connect Wallet
        </button>
      </div>
    </main>
  );
}
