"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
module.exports = async (client) => {
    const eventFiles = fs.readdirSync(`./dist/Events/`).filter(file => (file.endsWith(client.config.dev === "src" ? '.ts' : '.js')));
    let cantidad = 0;
    const cargar_dir = (dir) => {
    const archivos_eventos = fs.readdirSync(`./dist/Events/${dir}`).filter((file) => file.endsWith('.js'));
      for(const archivo of archivos_eventos){
        try {
          const evento = require(`../dist/Events/${archivo}`);
          const nombre_evento = archivo.split(".")[0];
          cantidad++
        } catch(e){
          console.log(e)
        }
      }
    }
    console.log(`${cantidad} Eventos Cargados`);
    eventFiles.forEach(file => {
        const event = require(`../Events/${file}`);
        if (event.once) {
            client.once(event.name, async (...args) => await event.execute(...args, client));
        }
        else {
            client.on(event.name, async (...args) => await event.execute(...args, client));
        }
    });
};
