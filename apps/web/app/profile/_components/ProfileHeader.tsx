import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/Avatar";
import { IconButton } from "@repo/ui/IconButton";
import ProfileBadge from "./ProfileBadge";
import Icon from "@repo/ui/Icon";

import profileImg from "@/public/profile.jpg";

const NAME = "ma.caron_g";
const DESCRIPTION =
  "다른 사람이 만든 것을 소비하는 활동보다,\n 내가 생산적인 활동을 하는 시간이 더 많도록 생활화 하자.";

export default function ProfileHeader() {
  return (
    <section className="flex w-full flex-col gap-2">
      <IconButton className="self-end" aria-label="공유">
        <Icon icon="Share" />
      </IconButton>
      <div className="flex flex-col items-center gap-4">
        <Avatar className="size-36">
          <AvatarImage src={profileImg.src} alt="프로필" />
          <AvatarFallback>m</AvatarFallback>
        </Avatar>
        <p className="text-2xl font-bold">{NAME}</p>
        <p className="text-center whitespace-pre-line text-neutral-400">
          {DESCRIPTION}
        </p>
      </div>
      <ProfileBadge />
    </section>
  );
}
