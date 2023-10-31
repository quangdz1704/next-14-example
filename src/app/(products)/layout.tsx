import { Button } from "antd";

export default function LayoutProduct({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blue-300 h-full w-full">
      <Button>{"< "}Back</Button>
      {children}
    </div>
  );
}
