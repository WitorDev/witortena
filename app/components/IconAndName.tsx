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
    <div className="flex items-center mx-auto md:flex-row flex-col md:mx-0 gap-4 my-4 p-4 rounded-lg sm:p-0 sm:bg-background">
      {IconComponent ? (
        <div className={`${style}`}>
          <IconComponent size={35} />
        </div>
      ) : null}
      <h1 className="">{text}</h1>
    </div>
  );
}
