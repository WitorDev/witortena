import getColorForTech from "@/util/getColorForTech";
import * as SiIcons from "react-icons/si";
import { motion } from "motion/react";

type IconAndNameProps = {
  icon: string;
  text: string;
};

export default function IconAndName({ icon, text }: IconAndNameProps) {
  const IconComponent = SiIcons[`Si${icon}` as keyof typeof SiIcons];

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0.1, x: 20 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 },
      }}
      className="flex items-center gap-4 my-4 bg-primary-bg p-4 rounded-lg sm:p-0 sm:bg-background"
    >
      {IconComponent ? (
        <div style={{ color: getColorForTech(icon) }}>
          <IconComponent size={40} />
        </div>
      ) : null}
      <h1 className="text-xl">{text}</h1>
    </motion.div>
  );
}
