import "./globals.css";
import localFont from 'next/font/local';

const akira = localFont({ src: [{
  path: './Akira.woff2',
  style: 'normal',
}
],
variable: ['--font-mango'],
display: 'block'
 })

 export const metadata = {
  title: 'LennyTheDev',
  description: 'Website of Okosa Onyekachukwu Leonard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${akira.className} `} >
        {children}</body>
    </html>
  );
}
