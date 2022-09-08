'use strict';

const replaces = new  Map([

    ["https://surviv.io/audio/guns/ak47_01.mp3", "/audio/guns/ak47_01.mp3"],
    ["https://surviv.io/audio/guns/ak47_reload_01.mp3", "/audio/guns/ak47_reload_01.mp3"],
    ["https://surviv.io/audio/guns/ak47_switch_01.mp3", "/audio/guns/ak47_switch_01.mp3"],
    ["https://surviv.io/audio/guns/awc_01.mp3", "/audio/guns/awc_01.mp3"],
    ["https://surviv.io/audio/guns/awc_cycle_01.mp3", "/audio/guns/awc_cycle_01.mp3"],
    ["https://surviv.io/audio/guns/awc_reload_01.mp3", "/audio/guns/awc_reload_01.mp3"],
    ["https://surviv.io/audio/guns/awc_switch_01.mp3", "/audio/guns/awc_switch_01.mp3"],
    ["https://surviv.io/audio/guns/bar_01.mp3", "/audio/guns/bar_01.mp3"],
    ["https://surviv.io/audio/guns/bar_reload_01.mp3", "/audio/guns/bar_reload_01.mp3"],
    ["https://surviv.io/audio/guns/bar_switch_01.mp3", "/audio/guns/bar_switch_01.mp3"],
    ["https://surviv.io/audio/guns/blr_01.mp3", "/audio/guns/blr_01.mp3"],
    ["https://surviv.io/audio/guns/blr_cycle_01.mp3", "/audio/guns/blr_cycle_01.mp3"],
    ["https://surviv.io/audio/guns/blr_reload_01.mp3", "/audio/guns/blr_reload_01.mp3"],
    ["https://surviv.io/audio/guns/deagle_01.mp3", "/audio/guns/deagle_01.mp3"],
    ["https://surviv.io/audio/guns/deagle_reload_01.mp3", "/audio/guns/deagle_reload_01.mp3"],
    ["https://surviv.io/audio/guns/deagle_reload_02.mp3", "/audio/guns/deagle_reload_02.mp3"],
    ["https://surviv.io/audio/guns/deagle_switch_01.mp3", "/audio/guns/deagle_switch_01.mp3"],
    ["https://surviv.io/audio/guns/dp28_01.mp3", "/audio/guns/dp28_01.mp3"],
    ["https://surviv.io/audio/guns/dp28_reload_01.mp3", "/audio/guns/dp28_reload_01.mp3"],
    ["https://surviv.io/audio/guns/dp28_switch_01.mp3", "/audio/guns/dp28_switch_01.mp3"],
    ["https://surviv.io/audio/guns/famas_01.mp3", "/audio/guns/famas_01.mp3"],
    ["https://surviv.io/audio/guns/famas_reload_01.mp3", "/audio/guns/famas_reload_01.mp3"],
    ["https://surviv.io/audio/guns/famas_switch_01.mp3", "/audio/guns/famas_switch_01.mp3"],
    ["https://surviv.io/audio/guns/garand_01.mp3", "/audio/guns/garand_01.mp3"],
    ["https://surviv.io/audio/guns/garand_02.mp3", "/audio/guns/garand_02.mp3"],
    ["https://surviv.io/audio/guns/garand_reload_01.mp3", "/audio/guns/garand_reload_01.mp3"],
    ["https://surviv.io/audio/guns/glock_01.mp3", "/audio/guns/glock_01.mp3"],
    ["https://surviv.io/audio/guns/glock_reload_01.mp3", "/audio/guns/glock_reload_01.mp3"],
    ["https://surviv.io/audio/guns/glock_reload_02.mp3", "/audio/guns/glock_reload_02.mp3"],
    ["https://surviv.io/audio/guns/glock_switch_01.mp3", "/audio/guns/glock_switch_01.mp3"],
    ["https://surviv.io/audio/guns/groza_reload_01.mp3", "/audio/guns/groza_reload_01.mp3"],
    ["https://surviv.io/audio/guns/grozas_01.mp3", "/audio/guns/grozas_01.mp3"],
    ["https://surviv.io/audio/guns/hawk12g_02.mp3", "/audio/guns/hawk12g_02.mp3"],
    ["https://surviv.io/audio/guns/hk416_01.mp3", "/audio/guns/hk416_01.mp3"],
    ["https://surviv.io/audio/guns/hk416_reload_01.mp3", "/audio/guns/hk416_reload_01.mp3"],
    ["https://surviv.io/audio/guns/hk416_switch_01.mp3", "/audio/guns/hk416_switch_01.mp3"],
    ["https://surviv.io/audio/guns/l86_01.mp3", "/audio/guns/l86_01.mp3"],
    ["https://surviv.io/audio/guns/l86_reload_01.mp3", "/audio/guns/l86_reload_01.mp3"],
    ["https://surviv.io/audio/guns/m1a1_01.mp3", "/audio/guns/m1a1_01.mp3"],
    ["https://surviv.io/audio/guns/m1a1_reload_01.mp3", "/audio/guns/m1a1_reload_01.mp3"],
    ["https://surviv.io/audio/guns/m9_01.mp3", "/audio/guns/m9_01.mp3"],
    ["https://surviv.io/audio/guns/m9_reload_01.mp3", "/audio/guns/m9_reload_01.mp3"],
    ["https://surviv.io/audio/guns/m9_switch_01.mp3", "/audio/guns/m9_switch_01.mp3"],
    ["https://surviv.io/audio/guns/m39_01.mp3", "/audio/guns/m39_01.mp3"],
    ["https://surviv.io/audio/guns/m39_reload_01.mp3", "/audio/guns/m39_reload_01.mp3"],
    ["https://surviv.io/audio/guns/m39_switch_01.mp3", "/audio/guns/m39_switch_01.mp3"],
    ["https://surviv.io/audio/guns/m93r_01.mp3", "/audio/guns/m93r_01.mp3"],
    ["https://surviv.io/audio/guns/m93r_reload_01.mp3", "/audio/guns/m93r_reload_01.mp3"],
    ["https://surviv.io/audio/guns/m93r_reload_02.mp3", "/audio/guns/m93r_reload_02.mp3"],
    ["https://surviv.io/audio/guns/m93r_switch_01.mp3", "/audio/guns/m93r_switch_01.mp3"],
    ["https://surviv.io/audio/guns/m134_01.mp3", "/audio/guns/m134_01.mp3"],
    ["https://surviv.io/audio/guns/m134_reload_01.mp3", "/audio/guns/m134_reload_01.mp3"],
    ["https://surviv.io/audio/guns/m249_01.mp3", "/audio/guns/m249_01.mp3"],
    ["https://surviv.io/audio/guns/m249_reload_01.mp3", "/audio/guns/m249_reload_01.mp3"],
    ["https://surviv.io/audio/guns/m870_01.mp3", "/audio/guns/m870_01.mp3"],
    ["https://surviv.io/audio/guns/m870_cycle_01.mp3", "/audio/guns/m870_cycle_01.mp3"],
    ["https://surviv.io/audio/guns/m870_pull_01.mp3", "/audio/guns/m870_pull_01.mp3"],
    ["https://surviv.io/audio/guns/m870_reload_01.mp3", "/audio/guns/m870_reload_01.mp3"],
    ["https://surviv.io/audio/guns/m1014_01.mp3", "/audio/guns/m1014_01.mp3"],
    ["https://surviv.io/audio/guns/mac10_01.mp3", "/audio/guns/mac10_01.mp3"],
    ["https://surviv.io/audio/guns/mac10_reload_01.mp3", "/audio/guns/mac10_reload_01.mp3"],
    ["https://surviv.io/audio/guns/mac10_switch_01.mp3", "/audio/guns/mac10_switch_01.mp3"],
    ["https://surviv.io/audio/guns/mk12_01.mp3", "/audio/guns/mk12_01.mp3"],
    ["https://surviv.io/audio/guns/mk12_reload_01.mp3", "/audio/guns/mk12_reload_01.mp3"],
    ["https://surviv.io/audio/guns/mk12_switch_01.mp3", "/audio/guns/mk12_switch_01.mp3"],
    ["https://surviv.io/audio/guns/mosin_01.mp3", "/audio/guns/mosin_01.mp3"],
    ["https://surviv.io/audio/guns/mosin_cycle_01.mp3", "/audio/guns/mosin_cycle_01.mp3"],
    ["https://surviv.io/audio/guns/mosin_reload_01.mp3", "/audio/guns/mosin_reload_01.mp3"],
    ["https://surviv.io/audio/guns/mosin_reload_02.mp3", "/audio/guns/mosin_reload_02.mp3"],
    ["https://surviv.io/audio/guns/mosin_switch_01.mp3", "/audio/guns/mosin_switch_01.mp3"],
    ["https://surviv.io/audio/guns/mp5_01.mp3", "/audio/guns/mp5_01.mp3"],
    ["https://surviv.io/audio/guns/mp5_reload_01.mp3", "/audio/guns/mp5_reload_01.mp3"],
    ["https://surviv.io/audio/guns/mp5_switch_01.mp3", "/audio/guns/mp5_switch_01.mp3"],
    ["https://surviv.io/audio/guns/mp220_01.mp3", "/audio/guns/mp220_01.mp3"],
    ["https://surviv.io/audio/guns/mp220_deploy_01.mp3", "/audio/guns/mp220_deploy_01.mp3"],
    ["https://surviv.io/audio/guns/mp220_reload_01.mp3", "/audio/guns/mp220_reload_01.mp3"],
    ["https://surviv.io/audio/guns/ot38_01.mp3", "/audio/guns/ot38_01.mp3"],
    ["https://surviv.io/audio/guns/ot38_reload_01.mp3", "/audio/guns/ot38_reload_01.mp3"],
    ["https://surviv.io/audio/guns/ot38_reload_02.mp3", "/audio/guns/ot38_reload_02.mp3"],
    ["https://surviv.io/audio/guns/ot38_switch_01.mp3", "/audio/guns/ot38_switch_01.mp3"],
    ["https://surviv.io/audio/guns/pkp_01.mp3", "/audio/guns/pkp_01.mp3"],
    ["https://surviv.io/audio/guns/pkp_reload_01.mp3", "/audio/guns/pkp_reload_01.mp3"],
    ["https://surviv.io/audio/guns/pkp_switch_01.mp3", "/audio/guns/pkp_switch_01.mp3"],
    ["https://surviv.io/audio/guns/qbb97_01.mp3", "/audio/guns/qbb97_01.mp3"],
    ["https://surviv.io/audio/guns/qbb97_reload_01.mp3", "/audio/guns/qbb97_reload_01.mp3"],
    ["https://surviv.io/audio/guns/qbb97_switch_01.mp3", "/audio/guns/qbb97_switch_01.mp3"],
    ["https://surviv.io/audio/guns/saiga_01.mp3", "/audio/guns/saiga_01.mp3"],
    ["https://surviv.io/audio/guns/saiga_reload_01.mp3", "/audio/guns/saiga_reload_01.mp3"],
    ["https://surviv.io/audio/guns/saiga_switch_01.mp3", "/audio/guns/saiga_switch_01.mp3"],
    ["https://surviv.io/audio/guns/scar_01.mp3", "/audio/guns/scar_01.mp3"],
    ["https://surviv.io/audio/guns/scar_reload_01.mp3", "/audio/guns/scar_reload_01.mp3"],
    ["https://surviv.io/audio/guns/scar_switch_01.mp3", "/audio/guns/scar_switch_01.mp3"],
    ["https://surviv.io/audio/guns/scarssr_01.mp3", "/audio/guns/scarssr_01.mp3"],
    ["https://surviv.io/audio/guns/scout_01.mp3", "/audio/guns/scout_01.mp3"],
    ["https://surviv.io/audio/guns/scout_reload_01.mp3", "/audio/guns/scout_reload_01.mp3"],
    ["https://surviv.io/audio/guns/spas12_01.mp3", "/audio/guns/spas12_01.mp3"],
    ["https://surviv.io/audio/guns/spas12_cycle_01.mp3", "/audio/guns/spas12_cycle_01.mp3"],
    ["https://surviv.io/audio/guns/spas12_pull_01.mp3", "/audio/guns/spas12_pull_01.mp3"],
    ["https://surviv.io/audio/guns/spas12_reload_01.mp3", "/audio/guns/spas12_reload_01.mp3"],
    ["https://surviv.io/audio/guns/sv98_01.mp3", "/audio/guns/sv98_01.mp3"],
    ["https://surviv.io/audio/guns/sv98_cycle_01.mp3", "/audio/guns/sv98_cycle_01.mp3"],
    ["https://surviv.io/audio/guns/sv98_reload_01.mp3", "/audio/guns/sv98_reload_01.mp3"],
    ["https://surviv.io/audio/guns/sv98_switch_01.mp3", "/audio/guns/sv98_switch_01.mp3"],
    ["https://surviv.io/audio/guns/svd_01.mp3", "/audio/guns/svd_01.mp3"],
    ["https://surviv.io/audio/guns/svd_reload_01.mp3", "/audio/guns/svd_reload_01.mp3"],
    ["https://surviv.io/audio/guns/ump9_01.mp3", "/audio/guns/ump9_01.mp3"],
    ["https://surviv.io/audio/guns/ump9_reload_01.mp3", "/audio/guns/ump9_reload_01.mp3"],
    ["https://surviv.io/audio/guns/ump9_switch_01.mp3", "/audio/guns/ump9_switch_01.mp3"],
    ["https://surviv.io/audio/guns/vector_01.mp3", "/audio/guns/vector_01.mp3"],
    ["https://surviv.io/audio/guns/vector_reload_01.mp3", "/audio/guns/vector_reload_01.mp3"],
    ["https://surviv.io/audio/guns/vector_switch_01.mp3", "/audio/guns/vector_switch_01.mp3"],
    ["https://surviv.io/audio/guns/vss_01.mp3", "/audio/guns/vss_01.mp3"],
    ["https://surviv.io/audio/guns/vss_reload_01.mp3", "/audio/guns/vss_reload_01.mp3"],
    
    ["https://surviv.io/audio/ambient/menu_music_01.mp3", "/audio/ambient/theme_v2.mp3"],
    ["https://surviv.io/audio/ambient/piano_music_01.mp3", "/audio/ambient/piano_music_01.mp3"],

    ["https://surviv.io/audio/ui/last_man_assigned_01.mp3", "/audio/ui/last_man_assigned_01.mp3"],

    ["https://surviv.io/audio/hits/axe_hit_01.mp3", "/audio/hits/axe_hit_01.mp3"],
    ["https://surviv.io/audio/hits/player_bullet_hit_01.mp3", "/audio/hits/player_bullet_hit_01.mp3"],
    ["https://surviv.io/audio/hits/player_bullet_hit_02.mp3", "/audio/hits/player_bullet_hit_02.mp3"],

    ["https://surviv.io/audio/sfx/log_04.mp3", "/audio/sfx/log_04.mp3"],
    
    ["https://surviv.io/img/main_splash.jpg", "/img/menu_background.png"],
    ["https://surviv.io/assets/loadout-0-100-ba5f1ffa.png", "/img/loadout-0-100-ba5f1ffa.png"]
]);

const ext = {};

ext.onHeadersReceived = ({responseHeaders}) => {
  const o = responseHeaders.find(({name}) => name.toLowerCase() === 'access-control-allow-origin');
  if (o) {
    o.value = '*';
  }
  else {
    responseHeaders.push({
      'name': 'Access-Control-Allow-Origin',
      'value': '*'
    });
  }
  
  return {responseHeaders};
};

ext.onBeforeRequest = (details) => {
  if(replaces.has(details.url)){
    var replaced_url = chrome.extension.getURL(replaces.get(details.url));
    console.log(replaced_url);
    return {redirectUrl: replaced_url };
  }  
};

ext.install = () => {
  ext.remove();
  const extra = ['blocking', 'responseHeaders'];
  if (/Firefox/.test(navigator.userAgent) === false) {
    extra.push('extraHeaders');
  }
  chrome.webRequest.onHeadersReceived.addListener(ext.onHeadersReceived, {
    urls: ['https://surviv.io/*']
  }, extra);
  
  chrome.webRequest.onBeforeRequest.addListener(ext.onBeforeRequest, {
    urls: ['https://surviv.io/*']
  }, ['blocking']);
};
ext.remove = () => {
  chrome.webRequest.onBeforeRequest.removeListener(ext.onBeforeRequest);
  chrome.webRequest.onHeadersReceived.removeListener(ext.onHeadersReceived);
};

ext.install();

