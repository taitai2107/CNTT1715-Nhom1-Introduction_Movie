// const getAllUser = async () => {
//   const url = "http://localhost:8081/api/v1/auth/getAll";
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// };
// getAllUser();
const handleLogin = async (data) => {
  const url = "http://localhost:8081/api/v1/auth/login/user";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let result = await response.json();
  console.log(result);
};
const Login = () => {
  document.getElementById("login").addEventListener("submit", (event) => {
    event.preventDefault();
    const valueInput = document.getElementById("valueInput").value;
    const password = document.getElementById("password").value;
    const data = {
      valueInput: valueInput,
      password: password,
    };
    handleLogin(data);
  });
};
Login();
