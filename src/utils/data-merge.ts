function arrayUnion(array1: any[], array2: any[]) {
  const map = new Map();
  array1.forEach((item: { name: string }) => map.set(item.name, item));
  array2.forEach((item: { name: string }) =>
    map.set(item.name, { ...map.get(item.name), ...item })
  );
  let mergedArr = Array.from(map.values());
  mergedArr = mergedArr.map((element, index) => ({
    name: element.name,
    key: index,
    values: Object.keys(element)
      .filter((value) => value !== 'name')
      .map((v) => ({
        key: v,
        value: element[v],
      })),
  }));

  return mergedArr.filter((element) => element.values.length > 0);
}

export default arrayUnion;
