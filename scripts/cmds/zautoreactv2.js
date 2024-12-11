module.exports = {
    config: {
        name: "autoreact2",
		      version: "1.0",
	       	author: "Loid/Zed",
		      countDown: 5,
	       	role: 0,
		      shortDescription: "",
	       	longDescription: "",
		       category: "auto",
    },
	onStart: async function (){},
	onChat: async function ({ event ,api}) {
    if (event.body.toLowerCase().indexOf("Hie") !== -1) return api.setMessageReaction("🤍", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("kmn aso") !== -1) return api.setMessageReaction("💘", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("Sex") !== -1) return api.setMessageReaction("🤬", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("Assalamu Alaikum") !== -1) return api.setMessageReaction("🥰", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("tnx") !== -1) return api.setMessageReaction("💖", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("thank you") !== -1) return api.setMessageReaction("🤍", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("welcome") !== -1) return api.setMessageReaction("🤍", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("sad") !== -1) return api.setMessageReaction("😔", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("kp") !== -1) return api.setMessageReaction("😿", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("Alhamdulillah") !== -1) return api.setMessageReaction("🤍", event.messageID,event.threadID)
  },
};
