import axios from 'axios';

export const axiosPut = async (url, obj) => {
  try {
    await axios.put(url, obj);
  } catch (err) {
    console.log(err);
  }
};

export const axiosPost = async (url, obj) => {
  try {
    await axios.post(url, obj);
  } catch (err) {
    console.log(err);
  }
};

export const axiosGetInventory = async (url, setState) => {
  try {
    let res = await axios.get(url);
    setState(res.data);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const axiosGetWarehouse = async (url, setState) => {
  try {
    let res = await axios.get(url);
    setState(res.data.warehouse);
  } catch (err) {
    console.log(err);
  }
};
