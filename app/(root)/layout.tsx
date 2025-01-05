import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "首页",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
    
                {children}
    </>
  );
}
