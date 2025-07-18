import { Product } from "@/types";
import { Popover } from "antd";
import { FaShoppingBag } from "react-icons/fa";
import ProductItem from "../ProductItem";
import { cn } from "@/utils/common";
import styles from "./styles.module.css";

interface CartPopoverProps {
  count: number;
  product: Product;
  label?: string;
}

const CartPopover = ({ count, product, label = "Cart" }: CartPopoverProps) => {
  return (
    <Popover title={<ProductItem product={product} className="!w-[214px]" />}>
      <span
        className={cn(
          "flex items-center gap-[8px] cursor-pointer transition-all duration-200",
          styles.buttonIcon
        )}
      >
        <div className="relative">
          <FaShoppingBag className="text-[#0154C5] xl:size-[32px] sm:size-[28px] size-[24px]" />
          <div className="absolute top-[-12px] sm:top-[-16px] right-[-12px] sm:right-[-14px] bg-cartRed  rounded-full size-[20px] sm:size-[24px] flex justify-center items-center">
            <span className="text-[12px] text-center size-[14px] text-white font-[500]">
              {count}
            </span>
          </div>
        </div>
        <span className="xl:inline-block hidden text-[16px] font-[500] text-textPrimary">
          {label}
        </span>
      </span>
    </Popover>
  );
};

export default CartPopover;
