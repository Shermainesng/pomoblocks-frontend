import type { Metadata } from 'next'
import TabComponent from 'src/components/Tabs'
import Wrapper from 'src/components/MainContainer'
 
export const metadata: Metadata = {
  title: 'Pomoblocks',
  description: 'Todolist combined with pomodoro',
}
 


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
        <head>
          {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet"/>
        </head>
        <body>
          <div id="root">
            <Wrapper>
              <TabComponent/>
              {children}
            </Wrapper>
         </div>
        </body>
      </html>
    )
  }