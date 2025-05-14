const Logger = require("logplease");
const logger = Logger.create("Ejercicio-3");

const { esPar } = require("./numeros");

const numeros = [2, 3, 101, 201, 202, 100];

numeros.forEach((numero) => {
  if (esPar(numero)) {
    logger.info(`El número ${numero} es par`);
  } else {
    logger.error(`El número ${numero} no es par`);
  }
});
