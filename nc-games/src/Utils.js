import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-marketplace-seminar-2.onrender.com/api",
});

export function getAllItems(cat) {
  return api.get("/items").then(({ data }) => {
    if (cat === "none") {
      const allItems = [...data.items];
      return allItems;
    } else {
      const allItems = [...data.items];
      return allItems.filter((item) => item.category_name === cat);
    }
  });
};

export function postItem(username, id) {
  return api.post(`/users/${username}/orders`, {
    item_id: id
  })
  .then((res) => {
    if(!res.data.items.length) {
      alert('Someone in the cohort has deleted all the bloomin\' items!!!')
    }
    alert(res.data.item.item_name + ' added to basket!')
  }) 
  .catch((err) => {
    alert(err.response.status)
  })
};

export function getUserItems(username) {
  return api.get(`/users/${username}/orders`)
    .then(({data}) => data.items)
    .catch((err) => {
      alert(err.response.status)
    })
}


