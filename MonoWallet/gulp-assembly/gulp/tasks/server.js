export const server = () => {
  app.plugins.browsersync.init({
    port: 3000,
    open: false,
    // При index.html
    server: {
      baseDir: `${app.path.build.html}`,
    },
    notify: false,
  });
};
