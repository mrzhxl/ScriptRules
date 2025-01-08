// 最后更新时间: 2025-01-08

// 规则集通用配置
const ruleProviderCommon = {
  "behavior": "classical",
  "type": "http",
  "format": "text",
  "interval": 86400
};

// 策略组通用配置
const groupBaseOption = {
  "interval": 300,
  "url": "https://www.gstatic.com/generate_204",
  "max-failed-times": 3,
};

// 地区分组通用配置
const regionBaseOption = {
  // 自动选择
  // "type": "url-test", 
  // 负载均衡
  "type": "load-balance",
  // round-robin 轮训；consistent-hashing 目的地址hash
  "strategy": "round-robin",
  "tolerance": 0,
  "include-all": true,
}

// 代理节点
const proxiesNode = [
  "🚀 手动切换",
  "🇭🇰 香港节点",
  "🇼🇸 台湾节点",
  "🇯🇵 日本节点",
  "🇸🇬 新加坡节点",
  "🇲🇾 马来西亚节点",
  "🇰🇷 韩国节点",
  "🇺🇸 美国节点",
  "🇬🇧 英国节点",
  "DIRECT"
];

// 代理组
proxyGroups = [
  {
    ...groupBaseOption,
    "name": "🚀 手动切换",
    "type": "select",
    "include-all": true,
    "exclude-filter": "(?i)应急|剩余|过期",
    "proxies": ["♻️ 自动切换"],
    "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Static.png"
  },
  {
    ...groupBaseOption,
    "name": "♻️ 自动切换",
    "type": "url-test",
    "tolerance": 50,
    "include-all": true,
    "exclude-filter": "(?i).*\\*.*|应急|剩余|过期",
    "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Urltest.png"
  },
  {
    ...groupBaseOption,
    "name": "🕊 推特服务",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Twitter.png"
  },
  {
    ...groupBaseOption,
    "name": "🤖 AI",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/OpenAI.png"
  },
  {
    ...groupBaseOption,
    "name": "🐱 GitHub",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/GitHub.png"
  },
  {
    ...groupBaseOption,
    "name": "🔍 谷歌服务",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png"
  },
  {
    ...groupBaseOption,
    "name": "🍎 苹果服务",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple_1.png"
  },
  {
    ...groupBaseOption,
    "name": "Ⓜ️ 微软服务",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png"
  },
  {
    ...groupBaseOption,
    "name": "📱 电报消息",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png"
  },
  {
    ...groupBaseOption,
    "name": "🌍 国外网站",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png"
  },
  {
    ...groupBaseOption,
    "name": "🎮 游戏平台",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Game.png"
  },
  {
    ...groupBaseOption,
    "name": "🛑 广告拦截",
    "type": "select",
    "proxies": ["REJECT", "DIRECT"],
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Advertising.png"
  },
  {
    ...groupBaseOption,
    "name": "🐟 漏网之鱼",
    "type": "select",
    "proxies": proxiesNode,
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png"
  },

];

// 节点地区分组
nodeAreaGroup = [
  {
    ...groupBaseOption,
    ...regionBaseOption,
    "name": "🇭🇰 香港节点",
    "filter": "(?i)🇭🇰|香港|HK|Hong",
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png"
  },
  {
    ...groupBaseOption,
    ...regionBaseOption,
    "name": "🇼🇸 台湾节点",
    "filter": "(?i)🇨🇳｜🇼🇸|🇹🇼|台湾|TW|Tai|Taiwan",
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png"
  },
  {
    ...groupBaseOption,
    ...regionBaseOption,
    "name": "🇯🇵 日本节点",
    "filter": "(?i)🇯🇵|日本|东京|JP|Japan",
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png"
  },
  {
    ...groupBaseOption,
    ...regionBaseOption,
    "name": "🇸🇬 新加坡节点",
    "filter": "(?i)🇸🇬|新加坡|狮|SG|Singapore",
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png"
  },
  {
    ...groupBaseOption,
    ...regionBaseOption,
    "name": "🇲🇾 马来西亚节点",
    "filter": "(?i)🇲🇾|马来西亚|马|MY|Malaysia",
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Malaysia.png"
  },
  {
    ...groupBaseOption,
    ...regionBaseOption,
    "name": "🇰🇷 韩国节点",
    "filter": "(?i)🇰🇷|韩国|KR|Korea",
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png"
  },
  {
    ...groupBaseOption,
    ...regionBaseOption,
    "name": "🇺🇸 美国节点",
    "filter": "(?i)🇺🇸|美国|US|United States",
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png"
  },
  {
    ...groupBaseOption,
    ...regionBaseOption,
    "name": "🇬🇧 英国节点",
    "filter": "(?i)🇬🇧|英国|UK|United Kingdom",
    "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_Kingdom.png"
  }
];

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖通用配置
  config["mixed-port"] = "7890";
  config["tcp-concurrent"] = true;
  config["allow-lan"] = true;
  config["ipv6"] = false;
  config["log-level"] = "info";
  config["find-process-mode"] = "strict";
  config["global-client-fingerprint"] = "chrome";


  // 覆盖 dns 配置
  config["dns"] = {
    "enable": true,
    "listen": "127.0.0.1:1053",
    "ipv6": false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": ["*", "+.lan", "+.local", "+.direct"],
    "nameserver": ["223.5.5.5", "119.29.29.29", "180.184.1.1"],
  };

  // 覆盖 geodata 配置
  config["geodata-mode"] = true;
  config["geox-url"] = {
    "geoip": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/geoip/release/geoip.dat",
    "geosite": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
    "mmdb": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/geoip/release/Country.mmdb",
    "asn": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/geoip/release/GeoLite2-ASN.mmdb"  
  };

  // 覆盖 sniffer 配置
  config["sniffer"] = {
    "enable": true,
    "parse-pure-ip": true,
    "sniff": {
      "TLS": {
        "ports": ["443", "8443"]
      },
      "HTTP": {
        "ports": ["80", "8080-8880"],
        "override-destination": true
      },
      "QUIC": {
        "ports": ["443", "8443"]
      }
    }
  };

  // 覆盖 tun 配置
  config["tun"] = {
    "enable": true,
    "stack": "mixed",
    "dns-hijack": ["any:53"]
  };
  
  // 合并策略组和地区分组节点
  config["proxy-groups"] = [...proxyGroups, ...nodeAreaGroup];

  // 覆盖规则集
  config["rule-providers"] = {
    "BanAD": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/BanAD.list",
      "path": "./rule-providers/BanAD.list"
    },
    "BanEasyList": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/BanEasyList.list",
      "path": "./rule-providers/BanEasyList.list"
    },
    "BanEasyListChina": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/BanEasyListChina.list",
      "path": "./rule-providers/BanEasyListChina.list"
    },
    "BanEasyPrivacy": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/BanEasyPrivacy.list",
      "path": "./rule-providers/BanEasyPrivacy.list"
    },
    "BanProgramAD": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/BanProgramAD.list",
      "path": "./rule-providers/BanProgramAD.list"
    },
    "Apple": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Apple.list",
      "path": "./rule-providers/Apple.list"
    },
    "Google": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Google.list",
      "path": "./rule-providers/Google.list"
    },
    "YouTube": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/YouTube.list",
      "path": "./rule-providers/YouTube.list"
    },
    "Telegram": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Telegram.list",
      "path": "./rule-providers/Telegram.list"
    },
    "Steam": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Steam.list",
      "path": "./rule-providers/Steam.list"
    },
    "Epic": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Epic.list",
      "path": "./rule-providers/Epic.list"
    },
    "Game": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Game.list",
      "path": "./rule-providers/Game.list"
    },
    "OpenAI": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/OpenAI.list",
      "path": "./rule-providers/OpenAI.list"
    },
    "Gemini": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Gemini.list",
      "path": "./rule-providers/Gemini.list"
    },
    "Copilot": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Copilot.list",
      "path": "./rule-providers/Copilot.list"
    },
    "Claude": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Claude.list",
      "path": "./rule-providers/Claude.list"
    },
    "OneDrive": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/OneDrive.list",
      "path": "./rule-providers/OneDrive.list"
    },
    "Github": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Github.list",
      "path": "./rule-providers/Github.list"
    },
    "Microsoft": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Microsoft.list",
      "path": "./rule-providers/Microsoft.list"
    },
   "Twitter": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Twitter.list",
      "path": "./rule-providers/Twitter.list"
    }, 
  };

  // 覆盖规则
  config["rules"] = [
    "RULE-SET,BanAD,🛑 广告拦截",
    "RULE-SET,BanEasyList,🛑 广告拦截",
    "RULE-SET,BanEasyListChina,🛑 广告拦截",
    "RULE-SET,BanEasyPrivacy,🛑 广告拦截",
    "RULE-SET,BanProgramAD,🛑 广告拦截",
    "RULE-SET,Twitter,🕊 推特服务",
    "RULE-SET,OpenAI,🤖 AI",
    "RULE-SET,Gemini,🤖 AI",
    "RULE-SET,Copilot,🤖 AI",
    "RULE-SET,Claude,🤖 AI",
    "RULE-SET,Apple,🍎 苹果服务",
    "RULE-SET,YouTube,🔍 谷歌服务",
    "RULE-SET,Google,🔍 谷歌服务",
    "RULE-SET,Telegram,📱 电报消息",
    "RULE-SET,Steam,🎮 游戏平台",
    "RULE-SET,Epic,🎮 游戏平台",
    "RULE-SET,Game,🎮 游戏平台",
    "RULE-SET,Github,🐱 GitHub",
    "RULE-SET,OneDrive,Ⓜ️ 微软服务",
    "RULE-SET,Microsoft,Ⓜ️ 微软服务",
    "GEOSITE,cn,DIRECT",
    "GEOIP,CN,DIRECT",
    "GEOSITE,geolocation-!cn,🌍 国外网站",
    "MATCH,🐟 漏网之鱼"
  ];

  // 返回修改后的配置
  return config;
}
