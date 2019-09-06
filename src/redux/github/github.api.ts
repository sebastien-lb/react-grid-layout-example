import axios from "axios";

export const makeFetchPrCall = async () => {
  const rep = await axios.get(
    "https://api.github.com/repos/sebastien-lb/chiros/pulls?state=all"
  );
  return rep.data;
};
