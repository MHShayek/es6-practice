const person ={name:'Jack william', age:19, gfName:'Erina',phone:23333333, class:4, friends:['karim','jarim']};


const { phone,gfName } = person;
// const gfName = person.gfName;
// const phone =person.phone;


// console.log(gfName, phone);
// console.log(gfName, phone);

const friends =['shah', 'mahj', 'kahj', 'tah', 'lahaj', 'shahaj'];
const [chotoFriend,nextFriends, ...restFriends]= friends;
console.log(restFriends);