interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = {
  key: "1",
  value: 1,
};
const pair2: KeyValuePair<number, string> = {
  key: 2,
  value: "2",
};
export {};
