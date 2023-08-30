function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const merged1 = merge({ a: 1 }, { b: 2 });
console.log(merged1.a);
console.log(merged1.b);

const merged2 = merge({ name: "Alice" }, { age: 30 });
console.log(merged2.name);
console.log(merged2.age);
export {};
