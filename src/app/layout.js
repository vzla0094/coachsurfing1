import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter'
import {Inter} from "next/font/google";
import {BottomNav} from "@/components/BottomNav";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <AppRouterCacheProvider>
      {children}
      <BottomNav/>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
