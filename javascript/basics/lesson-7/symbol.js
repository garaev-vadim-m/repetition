let id1 = Symbol('id');
let female1 = Symbol('female');
console.log(id1.description, '\n', id1, '\n', female1);

let user = {
  name: 'Vadim',
};

user[id1] = 1;
user[female1] = 1;
user[Symbol('age')] = 30;

console.log(user[id1], '\n', user, '\n', user[female1], '\n Ключ уже не считается уникальным -', user[Symbol('age')]);
