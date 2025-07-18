import { Button, Layout, Popover } from 'antd';
import { IoIosMenu } from 'react-icons/io';
import { SlArrowRight } from 'react-icons/sl';
import CategorySidebar from '../CategorySidebar';
import CategoryContent from '../CategoryContent';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { cn } from '@/utils/common';

interface CategoryMenuButtonProps {
  isOpenCategory: boolean;
  handleOpenCategory: (open: boolean) => void;
  t: (key: string) => string;
}

const CategoryMenuButton = ({ isOpenCategory, handleOpenCategory, t }: CategoryMenuButtonProps) => (
  <Popover
    trigger={['hover']}
    rootClassName="container"
    placement="bottomLeft"
    open={isOpenCategory}
    onOpenChange={handleOpenCategory}
    content={
      <div className="relative">
        <Layout className="container m-auto hidden bg-sidebarBg lg:flex">
          <Sider width={263} className="bg-white h-[calc(100vh-300px)] overflow-auto">
            <CategorySidebar />
          </Sider>
          <Content className="h-[calc(100vh-300px)] overflow-auto">
            <CategoryContent />
          </Content>
        </Layout>
      </div>
    }
    title=""
  >
    <Button type="primary" className="h-[50px] rounded-[8px] border-none bg-buttonBg">
      <IoIosMenu size={24} />
      <span className="mr-[8px] text-[16px] font-[700] leading-[12px]">
        {t('header.menu.category')}
      </span>
      <SlArrowRight
        className={cn(
          isOpenCategory ? 'rotate-90' : 'rotate-[-90deg]',
          'ml-[8px] transition-all duration-300'
        )}
      />
    </Button>
  </Popover>
);

export default CategoryMenuButton;
