const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Por favor informe um nome!"],
    },
    email: {
      type: String,
      required: [true, "Por favor informe um email!"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Por favor informe um email válido!",
      ],
    },

    password: {
      type: String,
      required: [true, "Por favor informe sua senha!"],
      minLength: [6, "Senha deve ter 6 ou mais caracteres!"],
      maxLength: [23, "Senha deve ter no maximo 23 caracteres!"],
    },
    photo: {
      type: String,
      required: [true, "Por favor adicione sua foto de perfil!"],
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phone: {
      type: String,
      default: "+55",
    },
    bio: {
      type: String,
      default: "Escreva sua Bio aqui!",
      maxLength: [255, "Sua Bio deve ter no maximo 255 caracteres!"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("USer", userSchema);
module.exports = User;
