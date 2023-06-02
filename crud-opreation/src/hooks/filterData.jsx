const useFilter = (data, search) => {
  if (search === " ") {
    return data;
  } else {
    const filteredData = data.filter((item) =>
      JSON.stringify(item).includes(search)
    );
    return filteredData;
  }
};
export default useFilter;
