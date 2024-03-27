import { useState } from 'react';

type FormProps<T> = {
  initialValues: T;
  onSubmit?: (values: T) => void;
};

const useForm = <T extends Record<string, any>>({
  initialValues,
  onSubmit,
}: FormProps<T>) => {
  const [state, setState] = useState(initialValues);

  const setForm = (newValues: Partial<T>) => {
    setState(prevState => ({
      ...prevState,
      ...newValues,
    }));
  };

  const handleSubmit = () => {
    onSubmit?.(state);
  };

  return {
    ...state,
    form: state,
    setForm,
    handleSubmit,
  };
};

export default useForm;
