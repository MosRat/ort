import Image from 'next/image';
import { useConfig } from 'nextra-theme-docs';

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
	project: {
		link: 'https://github.com/pykeio/ort'
	},
	chat: {
		link: 'https://discord.gg/uQtsNu2xMa'
	},
	docsRepositoryBase: 'https://github.com/pykeio/ort/blob/main/docs',
	head: function Head() {
		const config = useConfig();

		const pageTitle = config.frontMatter.title || config.title;
		const title = pageTitle ? `${pageTitle} | ort` : 'ort';

		return <>
			<title>{title}</title>

			<meta name='description' content='ort is a community-maintained ONNX Runtime binding for Rust, enabling fast ML inference & training for a wide range of devices.' />
		</>;
	},
	logo: <img src="/assets/banner.png" style={{ height: '34px' }} />,
	darkMode: true,
	nextThemes: {
		defaultTheme: 'system'
	},
	footer: {
		content: <div>
			<p>made with 💜 by <a target="_blank" href="https://pyke.io/" style={{ textDecoration: 'underline', textDecorationColor: '#05c485' }}><span style={{ color: '#2ba9f6' }}>py</span><span style={{ color: '#00c875' }}>ke</span></a> • <a target="_blank" href="https://opencollective.com/pyke-osai" style={{ textDecoration: 'underline' }}>sponsor</a></p>
		</div>
	},
	color: {
		hue: 20,
		saturation: 100
	},
	toc: {
		float: true
	}
};
export default config;
