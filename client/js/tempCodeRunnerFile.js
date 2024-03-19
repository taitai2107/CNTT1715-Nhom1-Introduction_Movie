fetch("db.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Dữ liệu JSON đã được lấy từ tệp db.json
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
