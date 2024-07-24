import { useState } from "react";
import Button from "../ui/buttons/Button";
import InputError from "../error/InputError";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [invalid, setInvalid] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || name.trim() === "") {
      return setInvalid({
        field: "name",
        msg: "Sorry, please insert a name here",
      });
    } else if (!email || email.trim() === "") {
      return setInvalid({ field: "email", msg: "Sorry, invalid format here" });
    } else if (!message || message.trim() === "") {
      return setInvalid({
        field: "message",
        msg: "Sorry, please enter a message",
      });
    } else {
      setInvalid(null);
      // Form submission logic here
    }
  };

  return (
    <form
      className="flex flex-col space-y-8 md:w-[445px]"
      onSubmit={submitHandler}
    >
      <div className="relative flex flex-col">
        <input
          name="name"
          placeholder="Name"
          type="text"
          className={`placeholder:uppercase pb-4 px-6 text-[16px] text-white leading-[26px] tracking-[-0.22px] border-b-[1px] bg-transparent ${
            invalid
              ? invalid.field === "name"
                ? " border-b-rose-500"
                : " border-b-green"
              : ""
          }`}
          onChange={handleInputChange}
          value={formData.name}
        />
        {invalid && invalid.field === "name" && (
          <InputError msg={invalid.msg} />
        )}
      </div>

      <div className="relative flex flex-col">
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleInputChange}
          value={formData.email}
          className={`placeholder:uppercase pb-4 px-6 text-[16px] text-white leading-[26px] tracking-[-0.22px] border-b-[1px] bg-transparent ${
            invalid
              ? invalid.field === "email"
                ? " border-b-rose-500"
                : " border-b-green"
              : ""
          }`}
        />
        {invalid && invalid.field === "email" && (
          <InputError msg={invalid.msg} />
        )}
      </div>

      <div className="relative flex flex-col">
        <textarea
          name="message"
          id="message"
          cols={10}
          rows={4}
          onChange={handleInputChange}
          value={formData.message}
          placeholder="Message"
          className={`placeholder:uppercase pb-4 px-6 text-[16px] text-white leading-[26px] tracking-[-0.22px] border-b-[1px] bg-transparent ${
            invalid
              ? invalid.field === "message"
                ? " border-b-rose-500"
                : " border-b-green"
              : ""
          }`}
        ></textarea>
        {invalid && invalid.field === "message" && (
          <InputError msg={invalid.msg} />
        )}
      </div>

      <Button type="submit" className="self-end">
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
