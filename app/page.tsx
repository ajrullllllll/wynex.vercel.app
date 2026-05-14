  export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <img
        src="/logo.png"
        alt="WYnex"
        className="w-36 mb-6"
      />

      <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
        WYnex
      </h1>

      <p className="text-gray-400 mt-4 text-center max-w-2xl text-lg">
        Simple Web3 utility platform focused on wallet tracking,
        blockchain analytics, and testnet tools.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl">
          Launch App
        </button>

        <button className="border border-blue-500 px-6 py-3 rounded-2xl">
          Connect Wallet
        </button>
      </div>
<section className="mt-32 grid md:grid-cols-3 gap-6">

  <div className="bg-zinc-900 p-6 rounded-2xl">
    <h2 className="text-2xl font-bold mb-3 text-purple-400">
      Wallet Tracking
    </h2>

    <p className="text-gray-400">
      Monitor wallet balances and onchain activity instantly.
    </p>
  </div>

  <div className="bg-zinc-900 p-6 rounded-2xl">
    <h2 className="text-2xl font-bold mb-3 text-blue-400">
      Testnet Tools
    </h2>

    <p className="text-gray-400">
      Access simple utilities for developers and builders.
    </p>
  </div>

  <div className="bg-zinc-900 p-6 rounded-2xl">
    <h2 className="text-2xl font-bold mb-3 text-purple-400">
      Analytics
    </h2>

    <p className="text-gray-400">
      Explore blockchain data with a lightweight dashboard.
    </p>
  </div>

</section>
      <section className="mt-32 text-center max-w-3xl">
  <h2 className="text-4xl font-bold mb-6">
    About WYnex
  </h2>

  <p className="text-gray-400 text-lg">
    WYnex is a lightweight Web3 utility platform designed
    to simplify blockchain access, wallet tracking,
    and testnet interactions for builders and users.
  </p>
</section>
      <section className="mt-32">
  <h2 className="text-4xl font-bold text-center mb-12">
    Roadmap
  </h2>

  <div className="space-y-6">
    <div className="bg-zinc-900 p-5 rounded-xl">
      ✅ Website Launch
    </div>

    <div className="bg-zinc-900 p-5 rounded-xl">
      🚀 Smart Contract Deployment
    </div>

    <div className="bg-zinc-900 p-5 rounded-xl">
      🔮 Wallet Dashboard Development
    </div>
  </div>
</section>
      <footer className="mt-32 mb-10 text-gray-500">
  © 2025 WYnex. All rights reserved.
</footer>
      
    </main>
  );
}
