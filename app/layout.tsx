import Providers from './providers'
import { modal } from './wallet-config'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>

        {/* ini penting supaya modal muncul */}
        <modal.AppKit />
      </body>
    </html>
  )
}
