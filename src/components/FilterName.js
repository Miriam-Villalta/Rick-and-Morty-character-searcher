const FilterName = ({ handleFilters }) => {
  const handleChange = (ev) => {
    console.log(ev.type, ev.target.value);
    handleFilters();
  };
  /*{
    value: ev.target.value,
    key: "name",
  }*/
  return (
    <>
      <label htmlFor="">Nombre </label>
      <input type="text" className="search" onChange={handleChange} />
    </>
  );
};

export default FilterName;