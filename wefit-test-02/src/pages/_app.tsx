import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles";
import ShoppingProvider from "@/context/ShopContext";
import Navbar from "@/components/shared/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingProvider>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ShoppingProvider>
  );
}
