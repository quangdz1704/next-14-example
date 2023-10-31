import type { Metadata } from "next";
import { Inter, B612, Agbalumo } from "next/font/google";
import "./globals.scss";
import { ConfigProvider } from "antd";
import theme from "../theme";

const inter = Inter({ subsets: ["latin"] });
const b612er = B612({ weight: ["400", "700"], subsets: ["latin"] });
const agbalumo = Agbalumo({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={agbalumo.className}>
        <ConfigProvider theme={theme}>
          <h1 className="w-full flex justify-center font-semibold bg-green-300">
            Root Layout
          </h1>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}