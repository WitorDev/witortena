"use client";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import { IconType } from "react-icons"; // 1. Import IconType
import { motion } from "motion/react";

type IconAndTitleProps = {
  title: String;
};

export default function IconAndTitle({ title }: IconAndTitleProps) {
  const iconSet = title === "Email" ? MdIcons : SiIcons;
  const iconName = title === "Email" ? "MdEmail" : `Si${title}`;

  // 2. Use IconType instead of ReactNode
  const IconComponent: IconType = iconSet[iconName as keyof typeof iconSet];

  return (
    <motion.div
      initial={{ opacity: 0.2, scale: 0.8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="p-4 w-full flex gap-4 items-center bg-primary-bg mt-4 sm:mt-8"
    >
      {/* This will now work correctly */}
      {IconComponent && <IconComponent size={50} />}
      <h2 className="text-lg font-bold">{title}</h2>
    </motion.div>
  );
}
