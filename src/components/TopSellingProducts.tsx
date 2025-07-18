import { Product } from '@/types';
import { Skeleton } from 'antd';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import ProductItem from './ProductItem';
import { useTranslations } from 'next-intl';

interface TopSellingProductsProps {
  data: Product[];
  loading: boolean;
}

const TopSellingProducts = ({ data, loading }: TopSellingProductsProps) => {
  const t = useTranslations();

  const renderTopSelling = (product: Product) => (
    <ProductItem key={product.id} product={product} isView showHighLight={false} />
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-[24px] font-[600] text-textPrimary">{t('sidebar.topSelling')}</h2>
        <div className="row cursor-pointer gap-[8px]">
          <span className="text-[16px] font-[600] text-highlight">{t('sidebar.viewAll')}</span>
          <MdKeyboardDoubleArrowRight color="#0373F3" className="!text-highlight" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[16px] md:grid-cols-3 xl:grid-cols-4">
        {data.map(renderTopSelling)}
      </div>
      {loading && <Skeleton />}
    </div>
  );
};

export default TopSellingProducts;
