const lugar = require("./lugar/lugar");
const clima = require("./lugar/clima");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true,
    },
}).argv;

/**
 * ejecutando el comando
 * node app -d "New York"
 */
//lugar.getLugarLatLng(argv.direccion).then((res) => console.log(res));

// clima
//     .getClima(40.75, -74.0)
//     .then(console.log)
//     .catch((err) => console.log(err));

const getInfo = async(direccion) => {
    try {
        const lugarRes = await lugar.getLugarLatLng(direccion);
        const climaRes = await clima.getClima(lugarRes.lat, lugarRes.lng);
        return `El clima de ${lugarRes.direccion} es de ${climaRes}`;
    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${lugarRes.direccion}`);
    }
};

getInfo(argv.direccion).then(console.log).catch(console.log);