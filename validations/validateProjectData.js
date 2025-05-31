const validateProjectData = (data) => {
  return (
    data.newDate !== "" &&
    data.zipCode !== "" &&
    data.userFeels != "" &&
    data.temp !== "" &&
    data.weather !== ""
  );
};

module.exports = validateProjectData;
