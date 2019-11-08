export default async function render(view, viewModel = {}) {
  return async function PlatformRouter(context) {
    context.viewModel = viewModel;
    try {
      console.log(`try to load ./${view}/${context.platform}`);
      return require(`./${view}/${context.platform}`).default;
    } catch {
      console.log(`try to load ./${view}/text`);
      return require(`./${view}/text`).default;
    }
  };
}
