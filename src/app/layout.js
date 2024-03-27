import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter'
import {Inter} from "next/font/google";
import {BottomNav} from "@/components/BottomNav";
import {Container} from "@mui/material";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <html lang="en" style={{height: '100%'}}>
    <body className={inter.className} style={{minHeight: '100%', display: 'flex', flexDirection: 'column'}}>
    <AppRouterCacheProvider>
      <Container sx={{flex: 1}}>
        {children}
      </Container>
      <BottomNav/>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
