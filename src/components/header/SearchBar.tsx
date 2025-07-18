import { Input } from 'antd';
import { useTranslations } from 'next-intl';
import { FiSearch } from 'react-icons/fi';
import { IoCameraOutline } from 'react-icons/io5';

interface SearchBarProps {
  variant: 'desktop' | 'mobile';
}

const SearchBar = ({ variant }: SearchBarProps) => {
  const t = useTranslations();
  if (variant === 'desktop') {
    return (
      <Input
        placeholder={t('searchPlaceholder')}
        suffix={
          <div className="row gap-[25px]">
            <IoCameraOutline className="size-[25px] cursor-pointer" />
            <div className="cursor-pointer rounded-[999px] bg-brandBlue p-[12px_25px] transition-all duration-200 hover:bg-blue-400">
              <FiSearch className="size-[25px] text-white" />
            </div>
          </div>
        }
        className="h-[34px] rounded-full border-brandBlue pl-[20px] pr-[8px] outline-brandBlue sm:h-[64px]"
      />
    );
  }
  return (
    <Input
      placeholder={t('searchPlaceholder')}
      suffix={
        <div className="row sm:gap-[8px]">
          <div className="buttonIcon cursor-pointer rounded-[999px] transition-all duration-200 sm:p-[12px_25px]">
            <IoCameraOutline className="size-[22px] cursor-pointer text-black sm:size-[25px]" />
          </div>
          <div className="buttonIcon cursor-pointer rounded-[999px] transition-all duration-200 sm:bg-brandBlue sm:p-[12px_25px] sm:hover:bg-blue-400">
            <FiSearch className="size-[22px] text-black sm:size-[25px] sm:text-white" />
          </div>
        </div>
      }
      className="h-[48px] rounded-full border-brandBlue px-[20px] pr-[8px] outline-brandBlue sm:h-[64px]"
    />
  );
};

export default SearchBar;
