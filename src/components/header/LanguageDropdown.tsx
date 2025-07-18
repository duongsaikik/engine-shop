import { Dropdown, MenuProps } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './styles.module.css';
import { cn } from '@/utils/common';

interface LanguageDropdownProps {
  locale: string;
  supportedLanguages: string[];
  changeLanguage: (locale: string) => void;
  className?: string;
}

const LanguageDropdown = ({
  locale,
  supportedLanguages,
  changeLanguage,
  className,
}: LanguageDropdownProps) => {
  const t = useTranslations();
  const languageMenu: MenuProps = {
    items: supportedLanguages?.map((loc: string) => ({
      key: loc,
      label: loc.toUpperCase(),
      onClick: () => changeLanguage(loc),
    })),
  };
  return (
    <Dropdown
      menu={languageMenu}
      trigger={['click']}
      className={cn(
        className,
        'cursor-pointer text-textPrimary transition-all duration-200',
        styles.buttonIcon
      )}
    >
      <div title={t('language')} className="row gap-[8px]">
        <Image
          className="size-[24px] cursor-pointer rounded-full sm:size-[30px] xl:size-[36px]"
          src={locale === 'en' ? '/england-flag.png' : '/vietnam-flag.png'}
          width={36}
          height={36}
          alt="flag"
        />
        <span className="hidden cursor-pointer items-center space-x-1 xl:flex">
          <span className="font-[500] text-textPrimary">{locale?.toUpperCase()}</span>
        </span>
      </div>
    </Dropdown>
  );
};

export default LanguageDropdown;
