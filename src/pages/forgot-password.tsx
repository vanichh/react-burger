/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'React';
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import styles from './page.module.css';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'services/types';
import { useSelector } from 'services/types';
import { resetPassword } from 'services/actions/user';
import { Wrapper } from 'components/wrapper/wrapper';
import { Form } from 'components/form';

export const ForgotPasswordPage: FC = () => {
  const { state } = useLocation<{ [key: string]: string } | undefined>();
  const history = useHistory();
  const { passwordReset, isAuth } = useSelector(store => store.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const handleValueInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleForgotPassword = (e: FormEvent) => {
    e.preventDefault();
    dispatch(resetPassword(value));
  };

  useEffect(() => {
    if (passwordReset) {
      history.replace({ pathname: '/reset-password' });
    }
  }, [passwordReset]);

  if (isAuth) {
    return <Redirect to={state?.from || '/'} />;
  }

  return (
    <Wrapper className={styles.flex_column}>
      <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
      <Form onSubmit={handleForgotPassword}>
        <div className='mb-6'>
          <Input
            type={'text'}
            placeholder={'Укажите e-mail'}
            onChange={handleValueInput}
            value={value}
            name={'email'}
            error={false}
            onIconClick={() => false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>
        <div className='mb-20'>
          <Button type='primary' size='medium'>
            Восстановить
          </Button>
        </div>
      </Form>
      <div className={`${styles.aligin_text} mb-4`}>
        <p className='text text_type_main-default text_color_inactive mr-4'>
          Вспомнили пароль?
        </p>
        <Link to='/login'>
          <p className='text text_type_main-default'>Войти</p>
        </Link>
      </div>
    </Wrapper>
  );
};
