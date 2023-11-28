//destructuring

const userInfo = {
  id: 3435,
  name: {
    firstName: "sabbir",
    middleName: "Hossen",
    lastName: "Persian",
  },
  contactNo: "0287827382",
  address: "uganda",
};
const {
  contactNo,
  name: { middleName },
} = userInfo;

//Arry destructuring

const myfriends = ["abdul", "kabdul", "babul", "tabul"];

const [, , bestfriend, ...rest] = myfriends;
