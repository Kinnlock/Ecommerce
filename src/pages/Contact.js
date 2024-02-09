// Contact.js

import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Message sent! We will get back to you soon.');
    reset();
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'This field is required' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'This field is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="subject">Sujet :</label>
          <input
            type="text"
            id="subject"
            {...register('subject')}
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            {...register('message', { required: 'This field is required' })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
