export const Input = ({ placeholder, classInput, id }) => {
  return (
    <input
      placeholder={`${placeholder}`}
      className={`${classInput}__input`}
      id={`${id}`}
    />
  );
};
