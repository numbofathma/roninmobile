import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import Header from '@/components/Header';
import { CDN_URL } from '@/constants';
import { LangVars } from '@/constants/lang';

interface ErrorBlockProps {
  code: string;
  message: string;
  action?: () => void;
  actionText?: string;
}

const ErrorBlock = ({ code, message, action, actionText = 'BACK' }: ErrorBlockProps) => {
  const router = useRouter();
  const { name } = LangVars.Metadata;

  const handleOnClick = () => {
    if (action) {
      action();

      return;
    }

    router.push('/');
  };

  return (
    <div className='relative z-10 flex min-h-[100vh] justify-center'>
      <div className='flex flex-col justify-evenly'>
        <div className='text-center'>
          <Image
            width={128}
            height={128}
            style={{
              opacity: '0.7',
            }}
            src={`${CDN_URL}/static/error.webp`}
            alt={name}
            priority
            className='mx-auto'
          />
          <Header level={1} className='py-10 text-xl md:text-2xl'>
            <span className='text-myRed'>{code}:</span> <span className='text-myBlue'>{message}</span>
          </Header>
        </div>

        <div className='shrink-1 py-5 text-center'>
          <div className='flex justify-center text-center'>
            <CustomButton type='button' className='px-9 py-3' onClick={handleOnClick}>
              {actionText}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorBlock;
