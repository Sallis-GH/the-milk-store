const Checkbox = ({
  setFilter,
  isChecked,
  name,
}: {
  setFilter: Function;
  isChecked: boolean;
  name: string;
}) => {
  if (isChecked) {
    return (
      <>
        <input
          onChange={(e) => setFilter(e)}
          type="checkbox"
          name={name}
          id={name}
          className="mr-2"
          checked
        />
        <label htmlFor={name}>{name}</label>
      </>
    );
  }
  return (
    <>
      <input
        onChange={(e) => {
          setFilter(e);
        }}
        type="checkbox"
        name={name}
        id={name}
        className="mr-2"
      />
      <label htmlFor={name}>{name}</label>
    </>
  );
};

export default Checkbox;
