import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

type IconAndNameProps = {
  icon: string;
  text: string;
  style?: string;
};

export default function IconAndName({
  icon,
  text,
  style = "",
}: IconAndNameProps) {
  const SiIcon = SiIcons[`Si${icon}` as keyof typeof SiIcons];
  const FaIcon = FaIcons[`Fa${icon}` as keyof typeof FaIcons];

  const IconComponent = SiIcon || FaIcon;

  return (
    <div className="flex items-center gap-3 py-2.5">
      {IconComponent && (
        <div className={style}>
          <IconComponent size={35} />
        </div>
      )}
      <span>{text}</span>
    </div>
  );
}
