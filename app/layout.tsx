
export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
        <html>
            <body>
                <main className="min-h-[calc(100vh-190px)]">{children}</main>
            </body>
        </html>
    </>
  );
}
