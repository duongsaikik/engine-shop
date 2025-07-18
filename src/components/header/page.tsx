'use client';

import useScrollDirection from '@/hooks/useScrollDirection';
import { carts } from '@/libs/data';
import { cn } from '@/utils/common';
import { MENU, SUPPORTED_LANGUAGES } from '@/utils/constants';
import NiceModal from '@ebay/nice-modal-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import AccountLink from './AccountLink';
import CartPopover from './CartPopover';
import CategoryMenuButton from './CategoryMenuButton';
import LanguageDropdown from './LanguageDropdown';
import PromoBar from './PromoBar';
import SearchBar from './SearchBar';
import SupportBar from './SupportBar';
import styles from './styles.module.css';

const Header = () => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const { isScrollingDown, targetRef } = useScrollDirection();
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const changeLanguage = useCallback(
    (locale: string) => {
      const currentPath = window.location.pathname.replace(/^\/[a-z]{2}/, '');
      router.push(`/${locale}${currentPath}`);
    },
    [router]
  );

  const handleOpenMenu = useCallback(() => {
    NiceModal.show('sidebar');
  }, []);

  const renderMenu = (item: (typeof MENU)[0]) => {
    return (
      <Link
        key={item.label}
        href="/#"
        className={cn(
          'whitespace-nowrap p-[8px_8px_8px_0] font-[500] text-textPrimary',
          styles.hightLight
        )}
      >
        {t(item.label)}
      </Link>
    );
  };

  return (
    <>
      <header
        ref={targetRef}
        id="header"
        className={cn(
          'sticky top-0 z-[999] w-[100%] bg-white p-0 text-white transition-all duration-300',
          isScrollingDown && 'collapse'
        )}
      >
        <PromoBar />
        <div className="container mx-auto">
          <div className="flex h-[58px] flex-wrap items-center justify-between gap-[12px] px-[12px] py-[8px] sm:h-[82px] sm:py-0 lg:h-[144px] xl:gap-[48px] xl:px-[4px]">
            <div className="flex items-center gap-[12px] lg:hidden">
              <MdOutlineMenu
                size={28}
                className="cursor-pointer text-textPrimary"
                onClick={handleOpenMenu}
              />
            </div>
            <div
              className={cn(
                'fixed left-1/2 top-[36px] -translate-x-1/2 transition-all duration-300 lg:static lg:-translate-x-0',
                isScrollingDown && 'collapse'
              )}
            >
              <Image
                src={'/logo.png'}
                style={{
                  clipPath: 'ellipse(45% 40% at 50% 50%)',
                }}
                width={1700}
                height={883}
                alt="logo"
                className="w-[100px] cursor-pointer sm:w-[160px] lg:w-[278px]"
              />
            </div>
            <div className="hidden flex-1 lg:flex">
              <SearchBar variant="desktop" />
            </div>

            <div className="flex items-center gap-[8px] xl:gap-[26px]">
              <LanguageDropdown
                locale={locale}
                supportedLanguages={SUPPORTED_LANGUAGES as unknown as string[]}
                changeLanguage={changeLanguage}
                className="!hidden items-center justify-center lg:!flex"
              />
              <CartPopover count={12} product={carts[0]} label={t('cart')} />
              <AccountLink label={t('account')} />
            </div>
          </div>
          <div className="block w-full px-[8px] pb-[24px] sm:px-0 lg:hidden">
            <SearchBar variant="mobile" />
          </div>
          <div className="hidden px-[8px] pb-[16px] pt-2 lg:flex">
            <div className="flex w-full flex-wrap items-center justify-between gap-[12px]">
              <div className="flex w-full items-center gap-[24px]">
                <CategoryMenuButton
                  isOpenCategory={isOpenCategory}
                  handleOpenCategory={(open) => setIsOpenCategory(open)}
                  t={t}
                />
                <div className="hidden flex-1 flex-col justify-between lg:flex 2xl:flex-row">
                  <div className="my-[4px] flex items-center gap-[20px] border-b 2xl:border-b-0">
                    {MENU.map(renderMenu)}
                  </div>
                  <SupportBar t={t} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpenCategory && (
        <div
          className="fixed !top-0 left-0 z-[10] h-[100vh] w-[100vw] bg-black/50"
          onMouseEnter={() => setIsOpenCategory(false)}
        />
      )}
    </>
  );
};
export default Header;
