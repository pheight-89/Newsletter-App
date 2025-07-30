import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// This option tells the adapter to avoid symlinks
			// by copying files instead, which doesn't require admin rights.
			// This is especially useful for Windows users.
			symlinks: false
		})
	}
};

export default config;
