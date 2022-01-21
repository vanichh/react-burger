import styles from './page.module.css';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registrationUser } from 'services/actions/user';
import { Wrapper } from 'components/wrapper';
import { Form } from 'components/form';

type TEvent = React.ChangeEvent<HTMLInputElement>;

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleValueInput = ({ target }: TEvent) => {
    setValue((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleRegisterUser = (e: FormEvent) => {
    e.preventDefault();
    dispatch(registrationUser(value));
  };

  return (
    <Wrapper className={styles.aligin_form}>
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
