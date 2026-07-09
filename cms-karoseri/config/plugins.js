module.exports = ({ env }) => {
  // Cek apa yang terbaca oleh sistem
  console.log("=== DEBUG CLOUDINARY CONFIG ===");
  console.log("Name:", env("CLOUDINARY_NAME"));
  console.log("Key:", env("CLOUDINARY_KEY"));
  console.log(
    "Secret:",
    env("CLOUDINARY_SECRET") ? "TERISI" : "KOSONG/UNDEFINED",
  );

  return {
    upload: {
      config: {
        provider: "@strapi/provider-upload-cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  };
};
