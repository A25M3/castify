
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/lib/language-context';

interface CategoryCardProps {
  id: string;  // Changed from number to string
  name: string;
  imageUrl: string;
  viewers: number;
}

const CategoryCard = ({ id, name, imageUrl, viewers }: CategoryCardProps) => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const isRtl = currentLanguage.direction === 'rtl';

  return (
    <Link to={`/category/${id}`} className="group block">
      <div className="aspect-[4/5] rounded-lg overflow-hidden mb-2">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="font-medium line-clamp-1">{name}</h3>
      <p className="text-sm text-muted-foreground">
        {t('viewers', { count: viewers })}
      </p>
    </Link>
  );
};

export default CategoryCard;
