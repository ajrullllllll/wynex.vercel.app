import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { mainnet, polygon } from 'wagmi/chains'

const projectId = 'ISI_PROJECT_ID_KAMU'

const metadata = {
  name: 'Wynex App',
  description: 'Web3 App',
  url: 'http://localhost:3000',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
  chains: [mainnet, polygon],
  projectId,
  metadata,
})
