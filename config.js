var gmodLS = {}

/**
 * To get the users avatar and username, a steam web api key is needed.
 * You can get it with your steam account for free here: https://steamcommunity.com/dev/apikey
 * @type {String}
 */
gmodLS.steamWebApiKey = '2BAD6DED55D21CC68C78DDF311FEEF06';

/**
 * A URI path or full URL to the loadingscreen background.
 * Will be centered and streched if needed to the users resolution
 * @type {String}
 */
gmodLS.backgroundImg  = 'https://media.discordapp.net/attachments/704012950935175218/705716151371563098/poster-20-04-10_20-28-47.jpg';

/**
 * If you want music played in background add your music files here.
 * The music files must be in OGG format to be played correctly.
 * @type {Array}
 */
gmodLS.musicFiles = [
    'music/1.ogg',
    'music/2.ogg',
    'music/3.ogg',
    'music/4.ogg',
    'music/5.ogg',
    'music/6.ogg',
    'music/DreamSweetInSea.ogg',
    'music/mk64koopa.ogg',
    'music/muleroblox.ogg',
    'music/qumucocomall.ogg',
    'music/raincoconutmalljazz.ogg',
    'music/rblxwmoonwalk.ogg',
    'music/speedracergame.ogg',
    'music/7.ogg',
];

/**
 * Music volume (Float value, max=1)
 * 0   = off/no music
 * 0.5 = 50% volume
 * 1   = full volume
 * @type {Number}
 */
gmodLS.musicVolume = 0.5;

/**
 * Serverrules - One rule per row
 * @type {Array}
 */
gmodLS.rules = [
    "Prop-killing is fun",
    "Spamming is also fun",
    "There is no Rule 3",
    "Have Fun!",
];
