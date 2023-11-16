import { FilterField, FormLabelLogin } from 'components/Filter/Filter.styled';
import { FormContainer } from 'components/formContainer/formDiv.styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authreducer';
import { Button } from './pages.styled/Pages.styled';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = data => dispatch(registerThunk(data));
  reset();

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormLabelLogin>
        <span>Name</span>
        <FilterField {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </FormLabelLogin>

      <FormLabelLogin>
        <span>Email</span>
        <FilterField {...register('email', { required: true })} type="email" />
        {errors.email && <span>This field is required</span>}
      </FormLabelLogin>

      <FormLabelLogin>
        <span>Password</span>
        <FilterField
          {...register('password', { required: true, minLength: 6 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </FormLabelLogin>

      <Button type="submit">Sign up</Button>
    </FormContainer>
  );
};

export default RegisterPage;
