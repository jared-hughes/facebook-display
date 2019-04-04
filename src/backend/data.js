import data from "./data.json";

function getData() {
  return data;
}

function setData(value) {
  throw new Error("Data setting not implemented yet :(");
}

export { getData, setData }
