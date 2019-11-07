// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://pete:22512516@reactreserve-1jtue.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "ThisIsTopSecret",
    CLOUDINARY_URL:
      "https://api.cloudinary.com/v1_1/petereflandcloudinary/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
