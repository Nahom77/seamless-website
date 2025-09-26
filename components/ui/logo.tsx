import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/seamless-logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Seamless Logo" width={122} height={122} />
    </Link>
  );
}
