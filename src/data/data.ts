export const name = [
  'qweqwe',
  '22323',
  'hjhhh',
  '33333',
  '2234',
  'wwwwwwwwwwwwwwwww',
  '444444444444',
];
const age = [3, 4, 6, 7, 8, 9, 0];

export type objType = {
  id: number
  name:string
  age: number
}


export const arr: objType[] = new Array(7).fill(null).map((el, index) => ({
  id: index + 1,
  name: name[index],
  age: age[index],
}));
