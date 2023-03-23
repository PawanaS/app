export const getPopulation = async () => {
    try {
      //console.log("fetching data...");
      const response = await fetch(
        `https://datausa.io/api/data?drilldowns=Nation&measures=Population`
        
      );
      console.log(response);
      //parse data in body,wait till that process happens
    //   const data = await response.json();
      //console.log(data);
      return response.json();
    } catch (error) {
      console.error(error);
    }
  };
  