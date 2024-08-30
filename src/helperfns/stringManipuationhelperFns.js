export function convertStringIntoArrayAndSortAscending(string) {
  if (typeof string === "string") {
    return string.split("").sort(
      (a, b) => a.charCodeAt(0) - b.charCodeAt(0) // this is more verbose - could also say: sort()
    );
  }
  console.log(
    `covertStringIntoArrayAndSortAscending fn expects a string but got a ${typeof inputString}`
  );
  return []; //added this code to provide a fallback and not crash the program during runtime
}
