import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import { IconType } from "react-icons"; // 1. Import IconType

type IconAndTitleProps = {
  title: String;
};

export default function IconAndTitle({ title }: IconAndTitleProps) {
  const iconSet = title === "Email" ? MdIcons : SiIcons;
  const iconName = title === "Email" ? "MdEmail" : `Si${title}`;

  // 2. Use IconType instead of ReactNode
  const IconComponent: IconType = iconSet[iconName as keyof typeof iconSet];

  return (
    <div className="p-4 w-full flex gap-4 items-center bg-primary-bg mt-8">
      {/* This will now work correctly */}
      {IconComponent && <IconComponent size={50} />}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}
