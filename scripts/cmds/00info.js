const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 2,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " ⩸ 𝗦𝗮𝗵𝗲𝗱 𝗛𝗼𝘀𝘀𝗲𝗻 ⩸ ";
		const ownAge = "『 ⩸ 18+ ⩸ 』";
		const messenger = "https://m.me/61569741011819";
		const authorFB = "https://www.facebook.com/Sumaiya.ily.bbe";
		const authorNumber = "_01739597712";
		const Status = "⩸ 𝐒𝐮𝐦𝐚𝐢𝐲𝐚'𝐬 𝐡𝐮𝐬𝐛𝐚𝐧𝐝 💓 ⩸";
		const urls = [
"https://imgur.com/a/IR3gi0P",
"https://imgur.com/a/suzsihB",
"https://imgur.com/a/CMSIiK6",
"https://imgur.com/a/OntRo9g"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `💫《 ⩸__𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧__⩸ 》💫
\🤖彡𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾彡𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : ${global.GoatBot.config.prefix}
\💙彡𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : ${𝗦𝗮𝗵𝗲𝗱 𝗛𝗼𝘀𝘀𝗲𝗻}
\📝彡𝐴𝑔𝑒  : ${𝟭𝟴}
\💕彡𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: ${𝐒𝐮𝐦𝐚𝐢𝐲𝐚'𝐬 𝐡𝐮𝐬𝐛𝐚𝐧𝐝 💋}
\🌐彡𝑊𝑝 : ${authorNumber}
\🌍彡𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 : ${www.facebook.com/Sumaiya.ily.bbe}
\🗓彡𝐷𝑎𝑡𝑒 : ${date}
\⏰彡𝑁𝑜𝑤 𝑇𝑖𝑚𝑒 : ${time}
\🔰彡𝐴𝑛𝑦 𝐻𝑒𝑙𝑝 𝐶𝑜𝑛𝑡𝑎𝑐𝑡 :⩸__${m.me/Sumaiya.ily.bbe}__⩸
\📛彡𝐵𝑜𝑡 𝐼𝑠 𝑅𝑢𝑛𝑛𝑖𝑛𝑔 𝐹𝑜𝑟 : ${uptimeString}
    𝑻𝒈: https://t.me/Sahed2006
    𝑰𝒏𝒔𝒕𝒂: https://www.instagram.com/minnie.sahed?
    𝑪𝒂𝒑𝑪𝒖𝒕: the_sahed
    𝑻𝒊𝒌𝑻𝒐𝒌: https://www.tiktok.com/@mentalsahed?
    𝒀𝒐𝒖𝑻𝒖𝒃𝒆: https://youtube.com/@techsahed?
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
