const filterData = (data, searchText) => {
    console.log("filter called: " + searchText);
    if (!searchText) {
      return data;
    }
	//sescape regex special char in searchText 
    const escapedSearchText = searchText.replace(
      /[-[\]{}()*+?.,\\^$|#\s]/g,
      "\\$&"
    );
    const globalRegex = new RegExp(escapedSearchText, "gi");
    return data?.filter(
      (user) =>
        globalRegex.test(user.name) ||
        globalRegex.test(user.employeeNumber)
    );
  };
