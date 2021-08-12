import axios from 'axios';

export const getWarehouses = async () => await axios.get(`/api/warehouses/list/all`);
export const getSingleWarehouse = async (id) => await axios.get(`/api/warehouses/${id}`);
export const addWarehouse = async (warehouse) => await axios.post(`/api/warehouses/`, warehouse);
export const editWarehouse = async (warehouse) => await axios.put(`/api/warehouses/${warehouse.id}`, warehouse);
export const deleteWarehouse = async (id) => await axios.delete(`/api/warehouses/${id}`);

// Inventory axios calls
export const getInventoryItems = async () => await axios.get(`/api/inventories/list`);
export const getItem = async (id) => await axios.get(`/api/inventories/${id}`);
export const addInventoryItem = async (item) => await axios.post(`/api/inventories`, item);
export const editInventoryItem = async (id, item) => await axios.put(`/api/inventories/${id}`, item);
export const deleteInventoryItem = async (id) => await axios.delete(`/api/inventories/${id}`);

export const getWarehouseInventories = async (id) => await axios.get(`/api/inventories/warehouses/${id}`);

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
