import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { motion } from "motion/react";
import getColorForTech from "@/util/getColorForTech";

type IconAndNameProps = {
  icon: string;
  text: string;
  description?: string;
  style?: string;
  highlight?: boolean;
};

export default function IconAndName({
  icon,
  text,
  description,
  highlight,

  style = "",
}: IconAndNameProps) {
  const SiIcon = SiIcons[`Si${icon}` as keyof typeof SiIcons];
  const FaIcon = FaIcons[`Fa${icon}` as keyof typeof FaIcons];

  const IconComponent = SiIcon || FaIcon;

  return (
    <motion.div
      // initial={{ opacity: 0, y: 25 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.3 }}
      // viewport={{ once: true, amount: 0.1 }}
      className={`${
        description && "cursor-crosshair"
      } relative group flex items-center border hover:border-secondary-accent justify-center px-4 rounded-lg gap-3 py-2.5 min-w-32 ${
        highlight ? "border-primary-accent" : "border-terciary-bg"
      }`}
    >
      {IconComponent && (
        <div className={style}>
          <IconComponent size={28} style={{ color: getColorForTech(text) }} />
        </div>
      )}

      <span>{text}</span>

      {description && (
        <div
          className="
			hidden group-hover:block
			absolute bottom-full left-1/2 -translate-x-1/2 mb-2
			opacity-0 scale-95
      w-50
			group-hover:opacity-100 group-hover:scale-100
			transition-all duration-200
			pointer-events-none
			bg-quaternary-bg text-white text-sm
			px-3 py-1.5 rounded-md
			whitespace-normal
			z-30
		"
        >
          {description}
        </div>
      )}
    </motion.div>
  );
}
