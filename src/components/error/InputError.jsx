function InputError({ msg }) {
  return (
    <div className="absolute right-0 -bottom-6 text-[12px] self-end text-red z-50">
      {msg}
    </div>
  );
}

export default InputError;
