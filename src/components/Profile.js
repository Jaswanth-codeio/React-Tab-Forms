export default Profile = ({ data, setData }) => {
  const { name, age, email } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label>name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        ></input>
      </div>
      <div>
        <label>age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        ></input>
      </div>
      <div>
        <label>email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        ></input>
      </div>
    </div>
  );
};
