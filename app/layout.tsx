import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
import { GlobalStyle } from './lib/GlobalStyle'
import Google from './components/global/Google'
import GoogleBody from './components/global/GoogleBody'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ["500", "600", "700", "800", "900"] 

})

export const metadata: Metadata = {
  title: 'Emagrecentro Tubarão',
  description: 'Elimine de 5% a 10% do seu peso já nas primeiras 5 semanas de maneira saudável e consistente com nosso método exclusivo de 4 fases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Google id='KTJ7RRB' />
        <meta 
          name='google-site-verification' 
          content='Jp5j9cQBBaTug8KLIUo_yvdJe2cuscBaWWkiTn-pu2o'
        />
      </head>
      <body className={montserrat.className}  style={{backgroundColor: "#000"}}>
        <GoogleBody id='KTJ7RRB' />
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
