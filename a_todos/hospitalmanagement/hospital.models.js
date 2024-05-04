import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    addressLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      rerquired: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    specializeIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
