export default fetchUsers = () => {
  axios
    .get("https://avcs-platform.herokuapp.com/departments", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then((res) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          departments: res.data,
        };
      });
    })
    .catch((error) => console.log(error));
};

// export default fetchUsers = () => {
//   const users = axios.get("https://avcs-platform.herokuapp.com/users", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//     },
//   });
//   const groups = axios.get("https://avcs-platform.herokuapp.com/groups", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//     },
//   });
//   const maritalstatus = axios.get(
//     "https://avcs-platform.herokuapp.com/maritalStatus",
//     {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//       },
//     }
//   );

//   axios
//     .all([users, groups, maritalstatus])
//     .then(
//       axios.spread((...res) => {
//         this.setState((prevState) => {
//           return {
//             ...prevState,
//             users: res[0].data,
//             groups: res[1].data,
//             maritals: res[2].data,
//           };
//         });
//       })
//     )
//     .catch((error) => console.log(error));
// };
