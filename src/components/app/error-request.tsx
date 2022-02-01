import { useSelector } from 'react-redux';
import { RootState } from 'services/store';

export const ErrorRequest: React.FC = () => {
  const textError = useSelector(
    (store: RootState) => store.igridients.errorRequestText
  );
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}>
      <p className='text text_type_main-medium mt-10 mb-10'>
        Произошла ошибка космического маштаба
      </p>
      <p className='text text_type_main-default mt-5 mb-5'>
        Код этой плохой ошибки вы увидите ниже
      </p>
      <p className='text text_type_main-default mt-5 mb-5'>
        {textError.toString()}
      </p>
    </div>
  );
};

