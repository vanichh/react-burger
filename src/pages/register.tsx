import styles from './page.module.css';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'services/types';
import { registrationUser } from 'services/actions/user';
import { Wrapper } from 'ui/wrapper';
import { Form } from 'ui/form';
import { useInputValue } from 'utils/hooks/use-Input-value';

const initInputValue = { name: '', email: '', password: '' };

export const RegisterPage: FC = () => {
  const dispatch = useDispatch();

  const { handleValueInput, value } = useInputValue(initInputValue);

  const handleRegisterUser = (e: FormEvent) => {
    e.preventDefault();
    dispatch(registrationUser(value));
  };

  return (
    <Wrapper className={styles.flex_column}>
      <p className='text text_type_main-medium mb-6'>Регистрация</p>
      <Form onSubmit={handleRegisterUser}>
        <div className='mb-6'>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={handleValueInput}
            value={value.name}
            name={'name'}
            error={false}
            onIconClick={() => false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>
        <div className='mb-6'>
          <Input
            type={'text'}
            placeholder={'E-mail'}
            onChange={handleValueInput}
            value={value.email}
            name={'email'}
            error={false}
            onIconClick={() => false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>
        <div className='mb-6'>
          <PasswordInput
            onChange={handleValueInput}
            value={value.password}
            name={'password'}
          />
        </div>
        <div className='mb-20'>
          <Button type='primary' size='medium'>
            Зарегистрироваться
          </Button>
        </div>
      </Form>
      <div className={styles.aligin_text}>
        <p className='text text_type_main-default text_color_inactive mr-4'>
          Уже зарегистрированы?
        </p>
        <Link to='/login'>
          <p className='text text_type_main-default'>Войти</p>
        </Link>
      </div>
    </Wrapper>
  );
};
