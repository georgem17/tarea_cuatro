import { useForm } from "react-hook-form";
import "./UserForm.css";


const UserForm = ({onClose, onSend, initialData}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
    if (initialData) onSend({ id: initialData.id, ...data });
    else onSend(data);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(onSend)}>
      <div className="user-menu">
        <h2 className="user-form_title">
          {initialData ? "Edit user" : "New user"}
        </h2>

        <button
          type="button"
          className="user-form_close-btn"
          onClick={() => onClose()}
        >
          X
        </button>
      </div>
      <div className="user-form__inputs">
        <div className="user-form__input_cont">
          <label htmlFor="nameId" className="user-form__label">
            First name
          </label>
          <input
            type="text"
            placeholder="Your name"
            id="nameId"
            {...register("first_name")}
          />
        </div>
        <div className="user-form__input_cont">
          <label htmlFor="lastNameId" className="user-form__label">
            Last name
          </label>
          <input
            type="text"
            placeholder="Your last name"
            id="lastNameId"
            {...register("last_name")}
          />
        </div>
        <div className="user-form__input_cont">
          <label htmlFor="eMailId" className="user-form__label">
            Email
          </label>
          <input
            type="email"
            placeholder="example@mail.com"
            id="emailId"
            {...register("email")}
          />
        </div>
        <div className="user-form__input_cont">
          <label htmlFor="passwordId" className="user-form__label">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            id="passwordId"
            {...register("password")}
          />
        </div>
        <div className="user-form__input_cont">
          <label htmlFor="birthdayId" className="user-form__label">
            Birth date
          </label>
          <input type="date" id="birthdayId" {...register("birthday")} />
        </div>
      </div>

      <button type="submit" className="user-form_submit">
        {initialData ? "Save changes" : "Add new user"}
      </button>
    </form>
  );
};

export default UserForm;