// * local storage
export let shopcartUai;
if (localStorage.getItem("shopcart-UAI")) {
  shopcartUai = JSON.parse(localStorage.getItem("shopcart-UAI"));
}

export const UAI = (shopcartUai = JSON.parse(
  localStorage.getItem("shopcart-UAI")
));

// export const UAI = JSON.parse(localStorage.getItem("shopcart-UAI"));

export const setUaiToStorage = (data) =>
  localStorage.setItem("shopcart-UAI", JSON.stringify(data));
