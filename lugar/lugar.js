const axios = require("axios");

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: {
            "x-rapidapi-key": "077d3179a1msh2103a8d00f87b0bp1a328cjsn8d1bd302caa3",
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        },
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng,
    };
};

module.exports = {
    getLugarLatLng,
};