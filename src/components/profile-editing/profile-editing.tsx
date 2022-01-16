/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef, useEffect } from 'react';

type TEvent = React.ChangeEvent<HTMLInputElement>;
type TthisHandle = 'name' | 'email' | 'password';
type TisDisable = { [index: string]: boolean };

export const ProfileEditing = () => {
  const refInputName = useRef(null);
  const refInputEmail = useRef(null);
  const refInputPassword = useRef(null);

  const ref: {
    [index: string]: HTMLInputElement;
  } = {
    name: refInputName.current,
    email: refInputEmail.current,
    password: refInputPassword.current,
  };

  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isDisable, setIsDisable] = useState<TisDisable>({
    name: true,
    email: true,
    password: true,
  });

  const handleValueInput = ({ target }: TEvent) => {
    setValue(prev => ({ ...prev, [target.name]: target.value }));
  };

  function handleIsDisableClick(this: TthisHandle) {
    setIsDisable(prev => ({
      ...prev,
      [this]: false,
    }));
    refInputName.current.focus();
  }

  useEffect(() => {
    for (let name in isDisable) {
      if (!isDisable[name]) {
        ref[name].focus();
      }
    }
  }, [isDisable]);

  function handeisDisableBlur(this: TthisHandle) {
    setIsDisable(prev => ({
      ...prev,
      [this]: true,
    }));
  }

  return (
    <div>
      <div className='mb-6'>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleValueInput}
          icon={'EditIcon'}
          value={value.name}
          disabled={isDisable.name}
          name={'name'}
          error={false}
          onIconClick={handleIsDisableClick.bind('name')}
          errorText={'Ошибка'}
          onBlur={handeisDisableBlur.bind('name')}
          size={'default'}
          ref={refInputName}
        />
      </div>
      <div className='mb-6'>
        <Input
          type={'text'}
          placeholder={'Логин'}
          onChange={handleValueInput}
          icon={'EditIcon'}
          value={value.email}
          disabled={isDisable.email}
          name={'email'}
          error={false}
          onIconClick={handleIsDisableClick.bind('email')}
          onBlur={handeisDisableBlur.bind('email')}
          errorText={'Ошибка'}
          size={'default'}
          ref={refInputEmail}
        />
      </div>
      <div className='mb-6'>
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={handleValueInput}
          icon={'EditIcon'}
          value={value.password}
          disabled={isDisable.password}
          name={'password'}
          error={false}
          onIconClick={handleIsDisableClick.bind('password')}
          onBlur={handeisDisableBlur.bind('password')}
          errorText={'Ошибка'}
          size={'default'}
          ref={refInputPassword}
        />
      </div>
    </div>
  );
};
