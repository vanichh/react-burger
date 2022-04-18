/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef, useEffect, FC, MutableRefObject } from 'react';
import { useSelector, useDispatch } from 'services/types';
import { updateUser } from 'services/actions/user';
import { Form } from '../form';
import { useInputValue } from 'utils/hooks/use-Input-value';

type TThisHandle = 'name' | 'email' | 'password';
type TIsDisable = Record<TThisHandle, boolean>;
type TRef = Record<TThisHandle, MutableRefObject<HTMLInputElement>>;

export const ProfileEditing: FC = () => {
  const { name, email } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { handleValueInput, value, setValue } = useInputValue<
    Record<TThisHandle, string>
  >({
    name: '',
    email: '',
    password: '',
  });

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

  function handleIsDisableClick(this: TThisHandle) {
    setIsDisable((prev) => ({ ...prev, [this]: false }));
    ref.name.current.focus();
  }

  function handeisDisableBlur(this: TThisHandle) {
    setIsDisable((prev) => ({ ...prev, [this]: true }));

    dispatch(updateUser({ [this]: value[this] }));
  }

  useEffect(() => {
    for (const name in isDisable) {
      if (!isDisable[name as TThisHandle]) {
        ref[name as TThisHandle].current.focus();
      }
    }
  }, [isDisable]);

  useEffect(() => {
    setValue((prev) => ({ ...prev, name: name, email: email }));
  }, [name, email]);

  return (
    <Form>
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
          onIconClick={handleIsDisableClick.bind('name')}
          errorText={'Ой, произошла ошибка'}
          onBlur={handeisDisableBlur.bind('name')}
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
          onIconClick={handleIsDisableClick.bind('email')}
          onBlur={handeisDisableBlur.bind('email')}
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
          onIconClick={handleIsDisableClick.bind('password')}
          onBlur={handeisDisableBlur.bind('password')}
          errorText={'Ой, произошла ошибка'}
          size={'default'}
          ref={ref.password}
        />
      </div>
    </Form>
  );
};
