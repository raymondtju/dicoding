import hapi from "@hapi/hapi";
import routes from "./routes.js";

export const data = [];

const init = async () => {
  const server = hapi.server({
    port: 9000,
    host: 'localhost'
  });

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();