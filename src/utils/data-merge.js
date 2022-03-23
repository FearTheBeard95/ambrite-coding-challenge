function arrayUnion(array1, array2) {
  const map = new Map();
  array1.forEach((item) => map.set(item.name, item));
  array2.forEach((item) =>
    map.set(item.name, { ...map.get(item.name), ...item })
  );
  const mergedArr = Array.from(map.values());
  return mergedArr.map((element, index) => ({
    name: element.name,
    key: index,
    values: Object.keys(element)
      .filter((value) => value !== 'name')
      .map((v) => ({
        key: v,
        value: element[v],
      })),
  }));
}

export default arrayUnion;
