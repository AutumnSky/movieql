export const people = [
  {
    id: 0,
    name: 'name0',
    age: 10,
    gender: 'female'
  },
  {
    id: 1,
    name: 'name1',
    age: 11,
    gender: 'female'
  },
  {
    id: 2,
    name: 'name2',
    age: 12,
    gender: 'female'
  },
  {
    id: 3,
    name: 'name3',
    age: 13,
    gender: 'female'
  },
  {
    id: 4,
    name: 'name4',
    age: 14,
    gender: 'female'
  },
  {
    id: 5,
    name: 'name5',
    age: 15,
    gender: 'female'
  },
  {
    id: 6,
    name: 'name6',
    age: 16,
    gender: 'female'
  },
  {
    id: 7,
    name: 'name7',
    age: 17,
    gender: 'female'
  }
];

export const getById = (id) => people.filter((person) => person.id === id)[0];
