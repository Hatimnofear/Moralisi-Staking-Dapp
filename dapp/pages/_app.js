import "@/styles/globals.css";
import { configureChains, WagmiConfig, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { WagmiProvider } from 'wagmi';

import { 
  arbitrum,
  bsc,
  goerli,
  mainnet,
  polygon,
  sepolia,
  optimism,
  base,
  lineaGoerli,
  lineaTestnet,
  polygonZkEvm,
  polygonZkEvmTestnet,
  polygonZkEvmCardona,
  polygonMumbai, 
        } from 'wagmi/chains';
        
// const arbitrum = {
//   id: 42161,
//   name: 'Arbitrum',
//   rpcUrls: ['https://arbitrum-rpc.com'],
//   chainId: 42161,
//   nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
// };

// const bsc = {
//   id: 56,
//   name: 'Binance Smart Chain',
//   rpcUrls: ['https://bsc-dataseed1.binance.org/'],
//   chainId: 56,
//   nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
// };

// const goerli = {
//   id: 5,
//   name: 'Goerli',
//   rpcUrls: ['https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID'],
//   chainId: 5,
//   nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
// };

// Define other networks similarly...

// const polygonAmoy = {
//   id: 80002,
//   name: 'Polygon Amoy',
//   rpcUrls: ['https://80002.rpc.thirdweb.com/'],
//   chainId: 80002,
//   nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
// };

// arbitrum, bsc, goerli, mainnet, polygon, sepolia, optimism, polygonAmoy
  
export default function App({ Component, pageProps }) {
  const { provider, webSocketProvider } = configureChains(
    [bsc, arbitrum,  goerli, mainnet, polygon, sepolia, optimism ],
    [publicProvider()]
  );

  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
