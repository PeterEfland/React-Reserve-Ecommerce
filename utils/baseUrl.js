const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://react-reserve-pe.now.sh"
    : "http://localhost:3000";

export default baseUrl;
