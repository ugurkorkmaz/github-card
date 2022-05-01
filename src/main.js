import App from './App.svelte';

const github = Array.from(document.getElementsByTagName('github'));

github.forEach(el => {
	let username = el.getAttribute('username');
	
	const app = new App({
		target: el,
		props: {
			username: username,
		}
	});
});
export default App