import { cn } from "@/utils/common";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import styles from "./styles.module.css";

interface AccountLinkProps {
  label: string;
  className?: string;
}

const AccountLink = ({ label, className = "" }: AccountLinkProps) => (
  <Link
    href="/#"
    className={cn(
      className,
      "cursor-pointer transition-all duration-200",
      styles.buttonIcon
    )}
  >
    <span title={label} className="flex items-center gap-[8px]">
      <FaCircleUser className="xl:size-[32px] sm:size-[28px] size-[24px] text-[#0154C5]" />
      <span className="xl:inline-block hidden font-[500] text-textPrimary">
        {label}
      </span>
    </span>
  </Link>
);

export default AccountLink;
