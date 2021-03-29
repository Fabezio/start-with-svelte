import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'cher visiteur',
    appname: 'débuter avec svelte'
  }
})

export default app
