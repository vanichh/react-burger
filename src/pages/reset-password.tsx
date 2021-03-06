/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState, FC } from 'react';
import { useSelector, useDispatch } from 'services/types';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { newPassword } from 'services/actions/user';
import styles from './page.module.css';
import { Wrapper } from 'ui/wrapper';
import { Form } from 'ui/form';
import { useInputValue } from 'utils/hooks';

type TIcon = 'ShowIcon' | 'HideIcon';
type TTypeInput = 'password' | 'text';

const initInputValue = { password: '', codeEmail: '' };

const CLASS_NAME_CALL = 'text text_type_main-default text_color_inactive mr-4';

export const ResetPassword: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation<Record<string, string> | undefined>();

  const { successNewPassword, isAuth, passwordReset } = useSelector(
    (store) => store.user
  );
  const { handleValueInput, value } = useInputValue(initInputValue);
  const [icon, setIcon] = useState<TIcon>('ShowIcon');
  const [typeInput, setTypeInput] = useState<TTypeInput>('password');

  const handleShowPassword = () => {
    if (typeInput === 'password') {
      setIcon('HideIcon');
      setTypeInput('text');
    } else {
      setIcon('ShowIcon');
      setTypeInput('password');
    }
  };

  const handleResetPassword = () => {
    dispatch(newPassword(value));
  };

  useEffect(() => {
    if (successNewPassword) {
      history.replace({ pathname: '/' });
    }
  }, [successNewPassword]);

  if (isAuth && !passwordReset) {
    return <Redirect to={state?.from || '/'} />;
  }

  return (
    <Wrapper className={styles.flex_column}>
      <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
      <Form onSubmit={handleResetPassword}>
        <div className='mb-6'>
          <Input
            type={typeInput}
            placeholder={'Введите новый пароль'}
            onChange={handleValueInput}
            value={value.password}
            name={'password'}
            error={false}
            onIconClick={handleShowPassword}
            errorText={'Ошибка'}
            size={'default'}
            icon={icon}
          />
        </div>
        <div className='mb-6'>
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={handleValueInput}
            value={value.codeEmail}
            name={'codeEmail'}
            error={false}
            onIconClick={() => false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>
        <div className='mb-20'>
          <Button type='primary' size='medium'>
            Сохранить
          </Button>
        </div>
      </Form>
      <div className={`${styles.aligin_text} mb-4`}>
        <p className={CLASS_NAME_CALL}>Вспомнили пароль?</p>
        <Link to='/register'>
          <p className='text text_type_main-default'>Войти</p>
        </Link>
      </div>
    </Wrapper>
  );
};
