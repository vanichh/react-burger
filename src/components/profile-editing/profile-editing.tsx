/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef, useEffect, FC, MutableRefObject } from 'react';
import { useSelector, useDispatch } from 'services/types';
import { updateUser } from 'services/actions/user';
import { Form } from '../../ui/form';
import { useInputValue } from 'utils/hooks/use-Input-value';
import styles from './profile-editing.module.css';

type TThisHandle = 'name' | 'email' | 'password';
type TIsDisable = Record<TThisHandle, boolean>;
type TRef = Record<TThisHandle, MutableRefObject<HTMLInputElement>>;

const initInputValue = { name: '', email: '', password: '' };

export const ProfileEditing: FC = () => {
  const { name, email } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { handleValueInput, value, setValue } =
    useInputValue<Record<TThisHandle, string>>(initInputValue);

  const ref: TRef = {
    name: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  const [isDisable, setIsDisable] = useState<TIsDisable>({
    name: true,
    email: true,
    password: true,
  });

  const handleIsDisableClick = (name: TThisHandle) => {
    setIsDisable({ ...isDisable, [name]: false });
    ref.name.current.focus();
  };

  const handeisDisableBlur = (name: TThisHandle) => {
    setIsDisable({ ...isDisable, [name]: true });

    dispatch(updateUser({ [name]: value[name] }));
  };

  useEffect(() => {
    for (const name in isDisable) {
      if (!isDisable[name as TThisHandle]) {
        ref[name as TThisHandle].current.focus();
      }
    }
  }, [isDisable]);

  useEffect(() => {
    setValue((prev) => ({ ...prev, name, email }));
  }, [name, email]);

  const handleUpdUser = () => dispatch(updateUser(value));
  const haldeReserUser = () => setValue((prev) => ({ ...prev, name, email }));

  return (
    <Form style={{ width: 608 }}>
      <div className='mb-6'>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={handleValueInput}
            icon={isDisable.name ? 'EditIcon' : 'CheckMarkIcon'}
            value={value.name}
            disabled={isDisable.name}
            name={'name'}
            error={false}
            onIconClick={() => handleIsDisableClick('name')}
            errorText={'Ой, произошла ошибка'}
            onBlur={() => handeisDisableBlur('name')}
            size={'default'}
            ref={ref.name}
          />
      </div>
      <div className='mb-6'>
        <Input
          type={'text'}
          placeholder={'Логин'}
          onChange={handleValueInput}
          icon={isDisable.email ? 'EditIcon' : 'CheckMarkIcon'}
          value={value.email}
          disabled={isDisable.email}
          name={'email'}
          error={false}
          onIconClick={() => handleIsDisableClick('email')}
          onBlur={() => handeisDisableBlur('email')}
          errorText={'Ой, произошла ошибка'}
          size={'default'}
          ref={ref.email}
        />
      </div>
      <div className='mb-6'>
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={handleValueInput}
          icon={isDisable.password ? 'EditIcon' : 'CheckMarkIcon'}
          value={value.password}
          disabled={isDisable.password}
          name={'password'}
          error={false}
          onIconClick={() => handleIsDisableClick('password')}
          onBlur={() => handeisDisableBlur('password')}
          errorText={'Ой, произошла ошибка'}
          size={'default'}
          ref={ref.password}
        />
      </div>
      <div className={styles.align_btn}>
        <Button type='primary' onClick={haldeReserUser} size='medium'>
          Сбросить
        </Button>
        <Button type='primary' onClick={handleUpdUser} size='medium'>
          Применить
        </Button>
      </div>
    </Form>
  );
};
