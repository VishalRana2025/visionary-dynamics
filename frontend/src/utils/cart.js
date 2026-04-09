export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const addToCart = (plan) => {
  const cart = getCart();

  const exists = cart.find((item) => item.name === plan.name);

  if (!exists) {
    cart.push(plan);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeFromCart = (name) => {
  const cart = getCart().filter((item) => item.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};