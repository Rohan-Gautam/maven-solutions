import Link from "next/link";
import Image from "next/image";

export function Logo({light = false}: { light?: boolean }) {
    return <Link href="/" className="group inline-flex h-[40px] items-center gap-2.5" aria-label="Maven Solutions home">
        <Image src="/images/logo/nav-logo.png" alt="Maven Solutions Logo" width={300} height={100}
               className="h-full w-auto object-contain" priority/>
    </Link>;
}
