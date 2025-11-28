export default Interests = ({ data, setData }) => {
  const { interests } = data;
  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => e.target.name !== i),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          ></input>
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          ></input>
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="JavaScript"
            checked={interests.includes("JavaScript")}
            onChange={handleDataChange}
          ></input>
          JavaScript
        </label>
      </div>
    </div>
  );
};
