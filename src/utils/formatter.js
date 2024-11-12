const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const formatStatus = (status) => {
  switch (status) {
    case "Pending":
      return "Gözləmədədir";
    case "Approved":
      return "Təsdiqlənib";
    default:
      return "Rədd olunub";
  }
};

const formatPaymentStatus = (status) => {
  switch (status) {
    case "Pending":
      return "Gözləyir";
    case "Approved":
      return "Təsdiqlənib";
    default:
      return "İmtina edilib";
  }
};

const formatType = (type) => {
  switch (type) {
    case "complaint":
      return "Şikayət";
    case "proposal":
      return "Təklif";
    case "card":
      return "Giriş kartı";
    default:
      return "Digər";
  }
};

export { formatDate, formatStatus, formatType, formatPaymentStatus };
