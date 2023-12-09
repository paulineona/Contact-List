import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Add contact to list
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Full Name:
        <input
          name="fullName"
          ref={register({ required: 'Full Name field cannot be blank', maxLength: { value: 30, message: 'Full Name field accept up to 30 in size only' }, pattern: { value: /^[a-zA-Z\s]*$/, message: 'Full Name field accept characters values only' } })}
        />
      </label>
      {errors.fullName && <p>{errors.fullName.message}</p>}

      <label>
        Email Address:
        <input
          name="email"
          ref={register({ required: 'Email Address field cannot be blank', maxLength: { value: 45, message: 'Email Address field accept up to 45 in size only' }, pattern: { value: /\S+@\S+\.\S+/, message: 'Email Address field should have email domain' } })}
        />
      </label>
      {errors.email && <p>{errors.email.message}</p>}

      <label>
        Contact Number:
        <input
          name="contactNumber"
          ref={register({ required: 'Contact Number field cannot be blank', maxLength: { value: 11, message: 'Contact Number field accept up to 11 in size only' }, pattern: { value: /^\d+$/, message: 'Contact Number field accept numeric values only' } })}
        />
      </label>
      {errors.contactNumber && <p>{errors.contactNumber.message}</p>}

      <label>
        Location:
        <select name="location" ref={register({ required: 'Location field cannot be blank' })}>
          <option value="">Select</option>
          <option value="Manila">Manila</option>
          <option value="Cebu">Cebu</option>
        </select>
      </label>
      {errors.location && <p>{errors.location.message}</p>}

      <label>
        Registered Date:
        <input
          type="date"
          name="registeredDate"
          ref={register({ required: 'Registered date field cannot be blank' })}
        />
      </label>
      {errors.registeredDate && <p>{errors.registeredDate.message}</p>}

      <input type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;