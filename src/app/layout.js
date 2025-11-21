// app/layout.js
import './globals.css';

export const metadata = {
  title: 'John Portfolio',
  description: 'John Henley Llamos Portfolio. Showing his creations and other information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* The original <meta> tags are handled by Next.js <head> or metadata export */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}