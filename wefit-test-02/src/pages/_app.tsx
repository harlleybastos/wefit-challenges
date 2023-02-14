import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles";
import ShoppingProvider from "@/context/ShopContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ShoppingProvider>
  );
}
