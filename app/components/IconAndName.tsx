import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

type IconAndNameProps = {
  icon: string;
  text: string;
  style?: string;
  highlight?: boolean;
};

export default function IconAndName({
  icon,
  text,
  highlight,
  style = "",
}: IconAndNameProps) {
  const SiIcon = SiIcons[`Si${icon}` as keyof typeof SiIcons];
  const FaIcon = FaIcons[`Fa${icon}` as keyof typeof FaIcons];

  const IconComponent = SiIcon || FaIcon;

  return (
    <div
      className={`flex items-center border justify-center px-4 rounded-lg  gap-3 py-2.5 min-w-32 ${
        highlight ? "border-primary-accent" : "border-terciary-bg"
      }`}
    >
      {IconComponent && (
        <div className={style}>
          <IconComponent size={28} />
        </div>
      )}
      <span>{text}</span>
    </div>
  );
}
