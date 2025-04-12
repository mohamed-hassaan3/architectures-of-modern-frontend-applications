import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="flex gap-16 justify-center items-center h-screen">
        <Link href={"/weather"}>
          <Button color={"primary"} size={"md"}>
            Client Side
          </Button>
        </Link>
        <Link href={"/users"}>
          <Button color={"primary"} size={"md"}>
            Server Side
          </Button>
        </Link>
      </main>
    </div>
  );
}
