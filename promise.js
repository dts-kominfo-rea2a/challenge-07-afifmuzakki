const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let totalEmosi = 0;
    let theater1 = await promiseTheaterIXX();
    let theater2 = await promiseTheaterVGC();
    let gabungan = theater1.concat(theater2);
    gabungan.map((theater1) => theater1.hasil === emosi && (totalEmosi += 1));
    console.log(totalEmosi);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
