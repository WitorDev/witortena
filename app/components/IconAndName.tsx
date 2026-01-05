import getColorForTech from "@/util/getColorForTech";
import * as SiIcons from "react-icons/si";
import { motion } from "motion/react";

type IconAndNameProps = {
  icon: string;
  text: string;
  style: string;
};

export default function IconAndName({ icon, text, style }: IconAndNameProps) {
  const IconComponent = SiIcons[`Si${icon}` as keyof typeof SiIcons];

  return (
    <motion.div
      viewport={{ once: true, amount: 0.3 }}
      initial={{ opacity: 0.1, x: 10, y: 50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 1 },
      }}
      className="flex items-center mx-auto md:flex-row flex-col md:mx-0 gap-4 my-4 p-4 rounded-lg sm:p-0 sm:bg-background"
    >
      {IconComponent ? (
        <div className={`${style}`}>
          <IconComponent size={35} />
        </div>
      ) : null}
      <h1 className="">{text}</h1>
    </motion.div>
  );
}
