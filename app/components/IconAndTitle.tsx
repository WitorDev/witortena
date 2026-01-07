"use client";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import { IconType } from "react-icons";
import { motion } from "framer-motion"; // 1. Corrected import to framer-motion
import Link from "next/link";
// 2. Removed unused 'Url' import

type IconAndTitleProps = {
  title: string; // 3. Corrected type: 'String' to 'string'
  linkUrl: string; // 4. Simplified type: 'Url' to 'string'
  isEmail?: boolean;
};

export default function IconAndTitle({
  title,
  linkUrl,
  isEmail,
}: IconAndTitleProps) {
  const iconSet = title === "Email" ? MdIcons : SiIcons;
  const iconName = title === "Email" ? "MdEmail" : `Si${title}`;

  const IconComponent: IconType = iconSet[iconName as keyof typeof iconSet];

  // 5. Corrected href logic
  const href = isEmail ? `mailto:${linkUrl}` : linkUrl;

  return (
    <Link href={href} className="sm:w-fit w-full md:w-full" target="_blank">
      <div className="p-4 sm:w-fit w-full md:w-full flex gap-4 rounded-lg hover:bg-terciary-bg cursor-pointer items-center bg-primary-bg lg:mt-8">
        {IconComponent && <IconComponent size={50} />}
        <h2 className="text-lg">{title}</h2>
      </div>
    </Link>
  );
}
