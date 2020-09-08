export function GetDeviceInfo() {
  return {
    system: GetSystem(),
    browser: GetBrowser()
  }
}

function GetSystem() {
  if (navigator) {
      if (-1 !== navigator.platform.indexOf("Win"))
          return "Windows";
      if (-1 !== navigator.platform.indexOf("Mac"))
          return "MacOS";
      if (-1 !== navigator.platform.indexOf("X11"))
          return "UNIX";
      if (-1 !== navigator.platform.indexOf("Linux"))
          return "Linux";
      const ua = navigator.userAgent.toLowerCase();
      if(/iphone|ipad|ipod/i.test(ua)){
          return "iOS"
      }else if(/android/i.test(ua)){
          return 'Android'
      }
    //   if (-1 !== e.indexOf("iphone"))
    //       return "iPhone";
    //   if (-1 !== e.indexOf("ipod"))
    //       return "iPod";
    //   if (-1 !== e.indexOf("ipad"))
    //       return "iPad";
    //   if (-1 !== e.indexOf("android"))
    //       return "Android"
  }
  return "Unknown"
}

function GetBrowser(){
  const ua=navigator.userAgent
  let b='Unknown'
  if(/QQ\/[0-9]+/.test(ua)){
    b='QQ'
  }else if( /QQBrowser/.test(ua) && !(/QQ\//.test(ua) || /MicroMessenger/.test(ua))){
    b='QQBrowser'
  }else if(/MicroMessenger/.test(ua)){
    b='wechat'
  }else if(/baidubrowser/.test(ua)){
    b='baiduBrowser'
  }else if(/UCBrowser/.test(ua)){
    b='UCBrowser'
  }else if(/Chrome\/(\S*) Mobile/.test(ua)){
    b='ChromeMobile'
  }else if(/Chrome\//.test(ua)){
    b='Chrome'
  }else if(/SogouMobileBrowser/.test(ua)){
    b='SogouMobileBrowser'
  }else if(/MiuiBrowser\/(\S*)/.test(ua)){
    b='MiuiBrowser'
  }else if(/HUAWEI/i.test(ua) && !(/baiduboxapp/.test(ua) || /QQBrowser/.test(ua) || /UCBrowser/.test(ua) || /MicroMessenger/.test(ua))){
    b='HuaWeiBrowser'
  }
  return b
}


export function GetDevice() {
  const c =  navigator.userAgent
 const mod = {
      isAndroid: function() {
          return /android/i.test(c)
      },
      isIOS: function() {
          return /(iPhone|iPod|iPad)/.test(c)
      },
      isWinPhone: function() {
          return /Windows Phone ([\d.]+)/.test(c)
      },
      iOSVersion: function() {
         const a = /OS (\d+)_(\d+)/.exec(c);
          return a ? [Number(a[1]), Number(a[2])] : []
      },
      appleWebkitVersion: function() {
         const a = c.match(/ applewebkit\/([0-9.]+)/i);
          return a ? a[1].split(".").map(parseFloat) : []
      },
      baiduBoxVersion: function() {
          if (!this.isBaiduBox())
              return 0;
         let a, h = /([\d+.]+)_(?:diordna|enohpi)_/i, b = /baiduboxapp\/([\d+.]+)/i;
          return h.test(c) ? a = c.match(h)[1].split(".").reverse() : b.test(c) && (a = c.match(b)[1].split(".")),
          a ? a.map(parseFloat) : []
      },
      secrVersion: function() {
          if (!this.isSearchCraft())
              return 0;
         const a = c.match(/ SearchCraft\/([0-9]+_)?([0-9.]+)/i)
            , h = a[2].split(/(iPhone|iPod|iPad)/.test(c) ? "." : ".");
          return h ? h.map(parseFloat) : []
      },
      getChromeVersion: function() {
          if (!this.isChromeDesktop() && !this.isChromeMobile())
              return 0;
         const a = c.match(/ Chrome\/([0-9]+_)?([0-9.]+)/i);
          return a && a[2] ? a[2].split(".").map(parseFloat) : []
      },
      androidVersion: function() {
         const a = c.match(/Android ([0-9.]+);/);
          if (!a)
              return [];
         const h = a[1].split(".").map(parseFloat);
          return h
      },
      isBaiduBox: function() {
          return /baiduboxapp/.test(c)
      },
      isBaiduBoxLite: function() {
          return /lite baiduboxapp/.test(c)
      },
      isBaiduBoxJisu: function() {
          return mod.isAndroid() && /lite baiduboxapp/.test(c) || mod.isIOS() && /info baiduboxapp/.test(c)
      },
      isQQ: function() {
          return /QQBrowser/.test(c)
      },
      isQQApp: function() {
          return /QQ\/[0-9]+/.test(c)
      },
      isWeixinApp: function() {
          return /MicroMessenger/.test(c)
      },
      isQQBrowser: function() {
          return /QQBrowser/.test(c) && !(/QQ\//.test(c) || /MicroMessenger/.test(c))
      },
      isBaiduBrowser: function() {
          return /baidubrowser/.test(c)
      },
      isSearchCraft: function() {
          return /SearchCraft/i.test(c)
      },
      isUC: function() {
          return /UCBrowser/.test(c)
      },
      isChromeDesktop: function() {
          return /Chrome\//.test(c)
      },
      isChromeMobile: function() {
          return /Chrome\/(\S*) Mobile/.test(c)
      },
      isCriOS: function() {
          return /CriOS/.test(c)
      },
      isSogouMobile: function() {
          return /SogouMobileBrowser/.test(c)
      },
      isMiuiBrowser: function() {
          return /MiuiBrowser\/(\S*)/.test(c)
      },
      isHUAWEIBrowser: function() {
          return /HUAWEI/i.test(c) && !(/baiduboxapp/.test(c) || /QQBrowser/.test(c) || /UCBrowser/.test(c) || /MicroMessenger/.test(c))
      },
      isMZBrowser: function() {
          return /MZBrowser/i.test(c)
      },
      isWKWebview: function() {
         const a = mod.appleWebkitVersion();
          return mod.isIOS() && a[0] && a[0] > 600
      },
      isUIWebview: function() {
         const a = mod.appleWebkitVersion();
          return mod.isIOS() && a[0] && a[0] <= 600
      }
  };
  return mod
}