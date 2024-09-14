import { useI18n } from '@/hooks/useI18n';

const Home = () => {
  const { t } = useI18n();

  return (
    <div>
      <p>{t('greeting')}</p>
    </div>
  );
};

export default Home;
