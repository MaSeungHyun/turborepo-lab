import { IconButton } from "@repo/ui/IconButton";
import Image from "next/image";
import Link from "next/link";

export default function ProfileBadge() {
  return (
    <section className="mt-5 flex w-full justify-center gap-4">
      {SOCIAL_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            shape="rect"
            className="size-10 border-none bg-background p-2 hover:bg-background"
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={24}
              height={24}
              className="size-5"
            />
          </IconButton>
        </Link>
      ))}
    </section>
  );
}

const SOCIAL_LINKS = [
  {
    href: "https://github.com/MaSeungHyun",
    src: "/github.svg",
    alt: "github",
  },
  {
    href: "https://ma-carong.tistory.com/",
    src: "/tistory.svg",
    alt: "tistory",
  },
  {
    href: "https://blog.naver.com/tpdlqj0514",
    src: "/naver.svg",
    alt: "naver",
  },
  {
    href: "https://www.instagram.com/ma.caron_g/",
    src: "/instagram.svg",
    alt: "instagram",
  },
] as const;
