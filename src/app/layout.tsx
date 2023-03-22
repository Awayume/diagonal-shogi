export const metadata = {
  title: '斜め将棋',
  author: 'Awayume',
  description: '対角線上で対戦する将棋',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
