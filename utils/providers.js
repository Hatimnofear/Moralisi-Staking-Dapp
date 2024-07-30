"use client"
// src/providers.js
// import '@rainbow-me/rainbowkit/styles.css';
// import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
// import { WagmiConfig, createClient, configureChains, chain } from 'wagmi';
// import { publicProvider } from 'wagmi/providers/public';

// const { chains, provider } = configureChains(
//     [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum,chain.baseSepolia, chain.bsc, chain.etherlinkTestnet, chain.goerli, chain.sepolia, chain.base, chain.polygonAmoy, chain.lineaGoerli, chain.lineaTestnet, chain.polygonZkEvm, chain.polygonZkEvmTestnet, chain.polygonZkEvmCardona, ],
//     [publicProvider()]
// );
// const { connectors } = getDefaultWallets({
//     appName: 'My RainbowKit App',
//     chains,
// });

// const wagmiClient = createClient({
//     autoConnect: true,
//     connectors,
//     provider,
// });

import '@rainbow-me/rainbowkit/styles.css'
import {
    RainbowKitProvider,
    getDefaultWallets,
    getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
    walletConnectWallet,
    coinbaseWallet,
    metaMaskWallet,
    coin98Wallet,
    enkryptWallet,
    rabbyWallet,
    ramperWallet,
    rainbowWallet,
    roninWallet,
    tahoWallet,
    uniswapWallet,
} from '@rainbow-me/rainbowkit/wallets';
import {
    arbitrum,
    baseSepolia,
    bsc,
    etherlinkTestnet,
    goerli,
    mainnet,
    polygon,
    sepolia,
    optimism,
    base,
    polygonAmoy,
    lineaGoerli,
    lineaTestnet,
    polygonZkEvm,
    polygonZkEvmTestnet,
    polygonZkEvmCardona,
    polygonMumbai,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

import { WagmiProvider } from 'wagmi';

const { wallets } = getDefaultWallets();

const client = getDefaultConfig({
    appName: 'RainbowKit demo',
    projectId: 'cd3ca07e49f3ad6ef6c2c15f492ea530',
    wallets: [
        ...wallets,
        {
            groupName: 'Other',
            wallets: [argentWallet, trustWallet, ledgerWallet, walletConnectWallet, coinbaseWallet, metaMaskWallet, coin98Wallet, enkryptWallet, rabbyWallet, ramperWallet, rainbowWallet, roninWallet, tahoWallet, uniswapWallet,],
        },
    ],
    chains: [
        arbitrum,
        baseSepolia,
        bsc,
        etherlinkTestnet,
        goerli,
        mainnet,
        polygon,
        sepolia,
        optimism,
        base,
        polygonAmoy,
        lineaGoerli,
        lineaTestnet,
        polygonZkEvm,
        polygonZkEvmTestnet,
        polygonZkEvmCardona,
        polygonMumbai,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    ],
    ssr: true,
});

export const Providers = ({ children }) => (
    <WagmiProvider config={client}>
        <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
);
