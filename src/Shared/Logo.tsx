import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center items-center">
      <Image
        src="/bslogo.png"
        alt="logo"
        width={150}
        height={50}
        className="aspect-video w-40 bg-contain object-scale-down max-h-[50px]"
        priority
      />
    </Link>
  );
};

export default Logo;
