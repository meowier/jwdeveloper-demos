jwplayer('player').setup({
  playlist:[{
    file:"https://kpluslive.akamaized.net/live/prod_kplus_pm_hd/prod_kplus_pm_hd.isml/prod_kplus_pm_hd.mpd",
    title:"Sintel",
    description:"This is a DASH stream!",
    type:"dash"
	}],
	dash: 'shaka',
	autostart: true
});
