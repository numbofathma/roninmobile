import WeAre from '@/fragments/WeAre';
import OurWork from '@/fragments/OurWork';
import ContactForm from '@/fragments/ContactForm';
import { getUserPlatform } from '@/helpers/platform';

const HomePage = async () => {
  const { isMobile } = await getUserPlatform();

  return (
    <div className='container m-auto grid max-w-screen-xl p-6'>
      <div className='relative z-10 flex min-h-[100vh] grid-cols-12 justify-center gap-6'>
        <WeAre isMobile={isMobile} />
      </div>
      <div className='relative z-10 grid-cols-12 gap-6'>
        <OurWork />
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
