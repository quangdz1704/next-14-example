import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-300 h-full flex items-center flex-col justify-center">
      <Link
        href={"/"}
        className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        {"<< "} Back
      </Link>
      {children}
    </div>
  );
}
