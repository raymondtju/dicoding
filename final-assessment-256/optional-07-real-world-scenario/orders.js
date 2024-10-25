// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((ac, cr) => ac + cr.price, 0);
  const status = "Menunggu";
  orders.push({
    id: generateUniqueId(), customerName, items, totalPrice, status
  });
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const calc = orders.reduce((ac, cr) => cr.status === "Selesai" && ac + cr.totalPrice, 0);
  return calc;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(orderId) {
  const index = orders.findIndex(order => order.id === orderId);
  if (index !== -1) {
    orders.splice(index, 1);
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
