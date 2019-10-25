module.exports = async function render(view, viewModel){
  return async function PlatformRouter(context){
    context.viewModel = viewModel;
    try{
      return require(`./${view}.${context.platform}`);
    }catch{
      return require(`./${view}.text`);
    }
  }
}


