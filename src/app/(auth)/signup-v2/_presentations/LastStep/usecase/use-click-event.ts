import { useCallback, useState } from 'react';

import { useSignupContext } from '../../../_context';
import useRegisterEvent from '../../../_usecase/use-register-event';

const useClickEvent = () => {
  const { form } = useSignupContext();
  const [selectedAge, setSelectedAge] = useState<number>(0);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [_loading, _setLoading] = useState<boolean>(false);

  const { handleOnRegister } = useRegisterEvent();

  const genderSelect = useCallback((gender: string) => {
    setSelectedGender(gender);
  }, []);

  const ageSelect = useCallback((age: number) => {
    setSelectedAge(age);
  }, []);

  const _onSubmit = useCallback(() => {
    _setLoading(true);
    const newFormData = {
      ...form.getValues(),
      age: String(selectedAge),
      gender: selectedGender ? (selectedGender === 'male' ? '0' : '1') : '',
    };
    form.reset(newFormData);
    handleOnRegister(newFormData);
  }, [form, selectedAge, selectedGender, handleOnRegister]);

  return {
    selectedAge,
    selectedGender,
    handleGenderSelect: genderSelect,
    handleAgeSelect: ageSelect,
    onSubmit: _onSubmit,
    loading: _loading,
  };
};

export default useClickEvent;
