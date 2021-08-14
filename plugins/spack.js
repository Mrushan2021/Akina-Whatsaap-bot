const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'lgpk', fromMe: true, desc: 'logopack'}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://telegra.ph/file/6a1a8cb148c23fb750095.jpg";
        r_text[1] = "https://telegra.ph/file/6a1a8cb148c23fb750095.jpg";
        r_text[2] = "https://telegra.ph/file/6a1a8cb148c23fb750095.jpg";

        var i = Math.floor(3*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '              🔥 *logopack* 🔥\n\n💠 Command: *.s3d*\n*⭕Description: *It Converts Text with 3D Background*\n\n💠 Command: *.sluxury*\n*⭕Description: *It Converts Text with 3d luxury Background*\n\n💠 Command: *.s8bit*\n*⭕Description: *It Converts Text to 8bit Logo*\n\n*💠 Command: *.sal*\n*⭕Description: *It Converts Text to  logo\n\n💠 Command: *.saveng*\n⭕Description: *It Converts Text to avenger logo*\n\n💠 Command: *.sbneon*\n⭕Description: *It Converts Text to blue Neon*\n\n💠 Command: *.sbrokeh*\n⭕Description: *It Converts Text to brokeh*\n\n💠 Command: *.sbook*\n⭕Description: *It Converts Text to book*\n\n💠 Command: *.sbp*\n⭕Description: *It Converts Text to background pink*\n\n💠 Command: *.sbrand*\n⭕Description: *It Converts Text to brand*\n\n💠 Command: *.sbreak*\n⭕Description: *It Converts Text to breskwall*\n\n💠 Command: *.scandy*\n⭕Description: *It Converts Text to candy logo*\n\n💠 Command: *.scc2*\n⭕Description: *It Converts Text to cofee cup logo*\n\n💠 Command: *.scl*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.scoding*\n⭕Description: *It Converts Text to coding*\n\n💠 Command: *.scrismes*\n⭕Description: *It Converts Text to crismes logo*\n\n💠 Command: *.sd2a*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sdneon*\n⭕Description: *It Converts Text to dark neon*\n\n💠 Command: *.sbrokeh*\n⭕Description: *It Converts Text to brokeh*\n\n💠 Command: *.sdropwater*\n⭕Description: *It Converts Text to drop water*\n\n💠 Command: *.semoj*\n⭕Description: *It Converts emoji to photo*\n\n💠 Command: *.sepep*\n⭕Description: *It Converts Text to ff logo*\n\n💠 Command: *.sff*\n⭕Description: *It Converts Text to ff logo*\n\n💠 Command: *.sflame*\n⭕Description: *It Converts Text to flame*\n\n💠 Command: *.sflower*\n⭕Description: *It Converts Text to flower*\n\n💠 Command: *.sgalaxy*\n⭕Description: *It Converts Text to galaxy logo*\n\n💠 Command: *.sgb*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sglow*\n⭕Description: *It Converts Text to glow*\n\n💠 Command: *.sgplay*\n⭕Description: *It Converts Text to yt gold play button*\n\n💠 Command: *.sgtext*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sharry*\n⭕Description: *It Converts Text to harry logo*\n\n💠 Command: *.shorror*\n⭕Description: *It Converts Text to horror blood*\n\n💠 Command: *.sht*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sleave*\n⭕Description: *It Converts Text to leave logo*\n\n💠 Command: *.slight*\n⭕Description: *It Converts Text to light logo*\n\n💠 Command: *.slion*\n⭕Description: *It Converts Text to lion logo*\n\n💠 Command: *.slogo*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.slol*\n⭕Description: *It Converts Text to lol logo*\n\n💠 Command: *.slr*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.slt*\n⭕Description: *It Converts Text to light text logo*\n\n💠 Command: *.smarval*\n⭕Description: *It Converts Text to marval logo*\n\n💠 Command: *.smm*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.snaruto*\n⭕Description: *It Converts Text to naruto logo*\n\n💠 Command: *.sneon*\n⭕Description: *It Converts Text to neon logo*\n\n💠 Command: *.son3d*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.spaper*\n⭕Description: *It Converts Text to pepar logo*\n\n💠 Command: *.spark*\n⭕Description: *It Converts Text to park logo*\n\n💠 Command: *.sphlogo*\n⭕Description: *It Converts Text to phlogo*\n\n💠 Command: *.spubg*\n⭕Description: *It Converts Text to pubg logo*\n\n💠 Command: *.ssandw*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.ssilk*\n⭕Description: *It Converts Text to silk logo*\n\n💠 Command: *.ssky*\n⭕Description: *It Converts Text to sky logo*\n\n💠 Command: *.ssmoke*\n⭕Description: *It Converts Text to smoke logo*\n\n💠 Command: *.ssn*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sspace*\n⭕Description: *It Converts Text to space logo*\n\n💠 Command: *.ssplay*\n⭕Description: *It Converts Text to yt silver play button*\n\n💠 Command: *.st*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.stfire*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.stlogo*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.stoxic*\n⭕Description: *It Converts Text to toxic logo*\n\n💠 Command: *.suwo*\n⭕Description: *It Converts Text to under water text logo*\n\n💠 Command: *.swatercolourc*\n⭕Description: *It Converts Text to water color logo*\n\n💠 Command: *.swg*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.swolf*\n⭕Description: *It Converts Text to wolf logo*\n\n💠 Command: *.swood*\n⭕Description: *It Converts Text to wood logo*\n\n💠 Command: *.sanony*\n⭕Description: *It Converts Text to anonymons  logo*\n\n*◇─◇◇────◇─ ✿ Akina*\n\n\n*සමහර ලොගෝ වැඩ නෑ.ඒ වරද අපේ බොට්ගේ නොවේ ලොගෝ දෙන සයිට් වල limit එක බැවින් අපිට එයට කරන්න දෙයක් නැත.*'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'lgpk', fromMe: true, desc: 'logopack'}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://telegra.ph/file/6a1a8cb148c23fb750095.jpg";
        r_text[1] = "https://telegra.ph/file/6a1a8cb148c23fb750095.jpg";
        r_text[2] = "https://telegra.ph/file/6a1a8cb148c23fb750095.jpg";
       
        var i = Math.floor(3*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '              🔥 *logopack* 🔥\n\n💠 Command: *.s3d*\n*⭕Description: *It Converts Text with 3D Background*\n\n💠 Command: *.sluxury*\n*⭕Description: *It Converts Text with 3d luxury Background*\n\n💠 Command: *.s8bit*\n*⭕Description: *It Converts Text to 8bit Logo*\n\n*💠 Command: *.sal*\n*⭕Description: *It Converts Text to  logo\n\n💠 Command: *.saveng*\n⭕Description: *It Converts Text to avenger logo*\n\n💠 Command: *.sbneon*\n⭕Description: *It Converts Text to blue Neon*\n\n💠 Command: *.sbrokeh*\n⭕Description: *It Converts Text to brokeh*\n\n💠 Command: *.sbook*\n⭕Description: *It Converts Text to book*\n\n💠 Command: *.sbp*\n⭕Description: *It Converts Text to background pink*\n\n💠 Command: *.sbrand*\n⭕Description: *It Converts Text to brand*\n\n💠 Command: *.sbreak*\n⭕Description: *It Converts Text to breskwall*\n\n💠 Command: *.scandy*\n⭕Description: *It Converts Text to candy logo*\n\n💠 Command: *.scc2*\n⭕Description: *It Converts Text to cofee cup logo*\n\n💠 Command: *.scl*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.scoding*\n⭕Description: *It Converts Text to coding*\n\n💠 Command: *.scrismes*\n⭕Description: *It Converts Text to crismes logo*\n\n💠 Command: *.sd2a*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sdneon*\n⭕Description: *It Converts Text to dark neon*\n\n💠 Command: *.sbrokeh*\n⭕Description: *It Converts Text to brokeh*\n\n💠 Command: *.sdropwater*\n⭕Description: *It Converts Text to drop water*\n\n💠 Command: *.semoj*\n⭕Description: *It Converts emoji to photo*\n\n💠 Command: *.sepep*\n⭕Description: *It Converts Text to ff logo*\n\n💠 Command: *.sff*\n⭕Description: *It Converts Text to ff logo*\n\n💠 Command: *.sflame*\n⭕Description: *It Converts Text to flame*\n\n💠 Command: *.sflower*\n⭕Description: *It Converts Text to flower*\n\n💠 Command: *.sgalaxy*\n⭕Description: *It Converts Text to galaxy logo*\n\n💠 Command: *.sgb*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sglow*\n⭕Description: *It Converts Text to glow*\n\n💠 Command: *.sgplay*\n⭕Description: *It Converts Text to yt gold play button*\n\n💠 Command: *.sgtext*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sharry*\n⭕Description: *It Converts Text to harry logo*\n\n💠 Command: *.shorror*\n⭕Description: *It Converts Text to horror blood*\n\n💠 Command: *.sht*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sleave*\n⭕Description: *It Converts Text to leave logo*\n\n💠 Command: *.slight*\n⭕Description: *It Converts Text to light logo*\n\n💠 Command: *.slion*\n⭕Description: *It Converts Text to lion logo*\n\n💠 Command: *.slogo*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.slol*\n⭕Description: *It Converts Text to lol logo*\n\n💠 Command: *.slr*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.slt*\n⭕Description: *It Converts Text to light text logo*\n\n💠 Command: *.smarval*\n⭕Description: *It Converts Text to marval logo*\n\n💠 Command: *.smm*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.snaruto*\n⭕Description: *It Converts Text to naruto logo*\n\n💠 Command: *.sneon*\n⭕Description: *It Converts Text to neon logo*\n\n💠 Command: *.son3d*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.spaper*\n⭕Description: *It Converts Text to pepar logo*\n\n💠 Command: *.spark*\n⭕Description: *It Converts Text to park logo*\n\n💠 Command: *.sphlogo*\n⭕Description: *It Converts Text to phlogo*\n\n💠 Command: *.spubg*\n⭕Description: *It Converts Text to pubg logo*\n\n💠 Command: *.ssandw*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.ssilk*\n⭕Description: *It Converts Text to silk logo*\n\n💠 Command: *.ssky*\n⭕Description: *It Converts Text to sky logo*\n\n💠 Command: *.ssmoke*\n⭕Description: *It Converts Text to smoke logo*\n\n💠 Command: *.ssn*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.sspace*\n⭕Description: *It Converts Text to space logo*\n\n💠 Command: *.ssplay*\n⭕Description: *It Converts Text to yt silver play button*\n\n💠 Command: *.st*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.stfire*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.stlogo*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.stoxic*\n⭕Description: *It Converts Text to toxic logo*\n\n💠 Command: *.suwo*\n⭕Description: *It Converts Text to under water text logo*\n\n💠 Command: *.swatercolourc*\n⭕Description: *It Converts Text to water color logo*\n\n💠 Command: *.swg*\n⭕Description: *It Converts Text to logo*\n\n💠 Command: *.swolf*\n⭕Description: *It Converts Text to wolf logo*\n\n💠 Command: *.swood*\n⭕Description: *It Converts Text to wood logo*\n\n💠 Command: *.sanony*\n⭕Description: *It Converts Text to anonymons  logo*\n\n*◇─◇◇────◇─ ✿ Akina*\n\n\n*සමහර ලොගෝ වැඩ නෑ.ඒ වරද අපේ බොට්ගේ නොවේ ලොගෝ දෙන සයිට් වල limit එක බැවින් අපිට එයට කරන්න දෙයක් නැත.*'})

    }));
}
