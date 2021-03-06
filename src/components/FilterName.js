import "../stylesheets/_filters.scss";

const FilterName = (props) => {
  const handleChange = (ev) => {
    console.log(ev.type, ev.target.value);
    ev.preventDefault();
    props.handleFilters({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <>
      <label htmlFor="" className="form__container--name">
        Nombre{" "}
      </label>
      <input type="text" className="search" onChange={handleChange} />
    </>
  );
};

export default FilterName;
