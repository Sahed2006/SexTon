module.exports = {
    config: {
        name: "autoreact",
		      version: "1.0",
	       	author: "Loid Butter",
		      countDown: 5,
	       	role: 0,
		      shortDescription: "",
	       	longDescription: "",
		       category: "dont know ",
    },
	onStart: async function (){},
	onChat: async function ({ event ,api}) {
		if (event.body.toLowerCase().indexOf("i love you") !== -1) return api.setMessageReaction("🥺", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("good night") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("good morning") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("muwaa") !== -1) return api.setMessageReaction("👀", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("hot") !== -1) return api.setMessageReaction("🤭", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("ummm") !== -1) return api.setMessageReaction("😩", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😢") !== -1) return api.setMessageReaction("😢", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😆") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😂") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("🤣") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
    
   	if (event.body.toLowerCase().indexOf("dhn") !== -1) return api.setMessageReaction("😡", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("good afternoon") !== -1) return api.setMessageReaction("❤", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("good evening") !== -1) return api.setMessageReaction("❤", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("swa") !== -1) return api.setMessageReaction("😡", event.messageID,event.threadID)

    		if (event.body.toLowerCase().indexOf("ok") !== -1) return api.setMessageReaction("🫠", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("basar sobai kmn ase") !== -1) return api.setMessageReaction("💖", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("hlw") !== -1) return api.setMessageReaction("😽", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("hi") !== -1) return api.setMessageReaction("😽", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("hello") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("w8") !== -1) return api.setMessageReaction("⏳", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("pussy") !== -1) return api.setMessageReaction("😠", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("washroom") !== -1) return api.setMessageReaction("💩", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("😏") !== -1) return api.setMessageReaction("😏", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("pak u") !== -1) return api.setMessageReaction("🤬", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("fuck you") !== -1) return api.setMessageReaction("🤬", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("grp faka") !== -1) return api.setMessageReaction("👧", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("kid") !== -1) return api.setMessageReaction("👧", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("i hate you") !== -1) return api.setMessageReaction("😞", event.messageID,event.threadID)
  
    if (event.body.toLowerCase().indexOf("mood off") !== -1) return api.setMessageReaction("😔", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("omg") !== -1) return api.setMessageReaction("😮", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("horney") !== -1) return api.setMessageReaction("🫦", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("romantic") !== -1) return api.setMessageReaction("💋", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("ily") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("i miss you") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("sad") !== -1) return api.setMessageReaction("😔", event.messageID,event.threadID)
    
  }
};
