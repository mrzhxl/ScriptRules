// 最后更新时间: 2024-10-15

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
  "url": "http://connectivitycheck.gstatic.com/generate_204",
  "max-failed-times": 3,
};

// 地区分组通用配置
const regionBaseOption = {
  "type": "url-test",
  "tolerance": 0,
  "include-all": true,
}

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
    "fake-ip-filter": ["*", "+.lan", "+.local", "+.direct", "+.msftconnecttest.com", "+.msftncsi.com"],
    "default-nameserver": ["system"],
    "nameserver": ["223.5.5.5", "119.29.29.29", "180.184.1.1"],
    "nameserver-policy": {
      "geosite:cn": "system",
      "geosite:gfw,geolocation-!cn": ["quic://223.5.5.5", "quic://223.6.6.6", "https://1.12.12.12/dns-query", "https://120.53.53.53/dns-query"]
    }
  };
  // 删除 hosts 配置
  if (config.hasOwnProperty('hosts')) {
    delete config['hosts'];
  }

  // 覆盖 geodata 配置
  config["geodata-mode"] = true;
  config["geox-url"] = {
    "geoip": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
    "geosite": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
    "mmdb": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb",
    "asn": "https://mirror.ghproxy.com/https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb"
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

  // 覆盖策略组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "🚀 手动切换",
      "type": "select",
      "include-all": true,
      "exclude-filter": "(?i)应急|剩余|过期",
      "proxies": ["♻️ 自动切换"],
      "icon": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/Orz-3/mini/master/Color/Static.png"
    },
    {
      ...groupBaseOption,
      "name": "♻️ 自动切换",
      "type": "url-test",
      "tolerance": 50,
      "include-all": true,
      "exclude-filter": "(?i).*\\*.*|应急|剩余|过期",
      "icon": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/Orz-3/mini/master/Color/Urltest.png"
    },
    {
      ...groupBaseOption,
      "name": "💬 AI",
      "type": "select",
      "proxies": ["🚀 手动切换", "🇭🇰 香港节点", "🇺🇸 美国节点", "🇸🇬 狮城节点", "🇯🇵 日本节点", "🇼🇸 台湾节点", "🇰🇷 韩国节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/OpenAI.png"
    },
    {
      ...groupBaseOption,
      "name": "🐱 GitHub",
      "type": "select",
      "proxies": ["🚀 手动切换", "🇭🇰 香港节点", "🇺🇸 美国节点", "🇸🇬 狮城节点", "🇯🇵 日本节点", "🇼🇸 台湾节点", "🇰🇷 韩国节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/GitHub.png"
    },
    {
      ...groupBaseOption,
      "name": "🔍 谷歌服务",
      "type": "select",
      "proxies": ["🚀 手动切换", "🇭🇰 香港节点", "🇺🇸 美国节点", "🇸🇬 狮城节点", "🇯🇵 日本节点", "🇼🇸 台湾节点", "🇰🇷 韩国节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png"
    },
    {
      ...groupBaseOption,
      "name": "🍎 苹果服务",
      "type": "select",
      "proxies": ["🚀 手动切换", "🇭🇰 香港节点", "🇺🇸 美国节点", "🇸🇬 狮城节点", "🇯🇵 日本节点", "🇼🇸 台湾节点", "🇰🇷 韩国节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple_1.png"
    },
    {
      ...groupBaseOption,
      "name": "Ⓜ️ 微软服务",
      "type": "select",
      "proxies": ["🚀 手动切换", "🇭🇰 香港节点", "🇺🇸 美国节点", "🇸🇬 狮城节点", "🇯🇵 日本节点", "🇼🇸 台湾节点", "🇰🇷 韩国节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png"
    },
    {
      ...groupBaseOption,
      "name": "📱 电报消息",
      "type": "select",
      "proxies": ["🚀 手动切换", "🇭🇰 香港节点", "🇺🇸 美国节点", "🇸🇬 狮城节点", "🇯🇵 日本节点", "🇼🇸 台湾节点", "🇰🇷 韩国节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png"
    },
    {
      ...groupBaseOption,
      "name": "🌍 国外网站",
      "type": "select",
      "proxies": ["🚀 手动切换", "🇭🇰 香港节点", "🇺🇸 美国节点", "🇸🇬 狮城节点", "🇯🇵 日本节点", "🇼🇸 台湾节点", "🇰🇷 韩国节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png"
    },
    {
      ...groupBaseOption,
      "name": "🎮 游戏平台",
      "type": "select",
      "proxies": ["🚀 手动切换", "🇭🇰 香港节点", "🇺🇸 美国节点", "🇸🇬 狮城节点", "🇯🇵 日本节点", "🇼🇸 台湾节点", "🇰🇷 韩国节点", "DIRECT"],
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
      "proxies": ["🚀 手动切换", "🇭🇰 香港节点", "🇺🇸 美国节点", "🇸🇬 狮城节点", "🇯🇵 日本节点", "🇼🇸 台湾节点", "🇰🇷 韩国节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png"
    },
    // 地区分组
    {
      ...groupBaseOption,
      ...regionBaseOption,
      "name": "🇭🇰 香港节点",
      "filter": "(?i)🇭🇰|香港|(\b(HK|Hong)\b)",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      ...regionBaseOption,
      "name": "🇺🇸 美国节点",
      "filter": "(?i)🇺🇸|美国|(\b(US|United States)\b)",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png"
    },
    {
      ...groupBaseOption,
      ...regionBaseOption,
      "name": "🇸🇬 狮城节点",
      "filter": "(?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      ...regionBaseOption,
      "name": "🇯🇵 日本节点",
      "filter": "(?i)🇯🇵|日本|东京|(\b(JP|Japan)\b)",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      ...regionBaseOption,
      "name": "🇰🇷 韩国节点",
      "filter": "(?i)🇰🇷|韩国|(\b(KR|Korea)\b)",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png"
    },
    {
      ...groupBaseOption,
      ...regionBaseOption,
      "name": "🇼🇸 台湾节点",
      "filter": "(?i)🇨🇳｜🇼🇸|🇹🇼|台湾|(\b(TW|Tai|Taiwan)\b)",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/China.png"
    }
  ];

  // 覆盖规则集
  config["rule-providers"] = {
    "BanAD": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/BanAD.list",
      "path": "./rule-providers/BanAD.list"
    },
    "BanProgramAD": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/BanProgramAD.list",
      "path": "./rule-providers/BanProgramAD.list"
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
    "BanEasyList": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/BanEasyList.list",
      "path": "./rule-providers/BanEasyList.list"
    },
    "AWAvenueAdsRule": {
      "type": "http",
      "behavior": "domain",
      "format": "yaml",
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/AWAvenueAdsRule.yaml",
      "path": "./rule-providers/AWAvenueAdsRule.yaml"
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
    "Telegram_ip": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/Telegram_ip.list",
      "path": "./rule-providers/Telegram_ip.list"
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
    "ProxyGFW": {
      ...ruleProviderCommon,
      "url": "https://raw.githubusercontent.com/mrzhxl/ScriptRules/main/Clash/Meta/Rules/ProxyGFW.list",
      "path": "./rule-providers/ProxyGFW.list"
    },
  };

  // 覆盖规则
  config["rules"] = [
    "RULE-SET,BanAD,🛑 广告拦截",
    "RULE-SET,BanProgramAD,🛑 广告拦截",
    "RULE-SET,BanEasyListChina,🛑 广告拦截",
    "RULE-SET,BanEasyPrivacy,🛑 广告拦截",
    "RULE-SET,BanEasyList,🛑 广告拦截",
    "RULE-SET,AWAvenueAdsRule,🛑 广告拦截",
    "RULE-SET,OpenAI,💬 AI",
    "RULE-SET,Gemini,💬 AI",
    "RULE-SET,Copilot,💬 AI",
    "RULE-SET,Claude,💬 AI",
    "RULE-SET,Apple,🍎 苹果服务",
    "RULE-SET,YouTube,🔍 谷歌服务",
    "RULE-SET,Google,🔍 谷歌服务",
    "RULE-SET,Telegram,📱 电报消息",
    "RULE-SET,Telegram_ip,📱 电报消息",
    "RULE-SET,Steam,🎮 游戏平台",
    "RULE-SET,Epic,🎮 游戏平台",
    "RULE-SET,Game,🎮 游戏平台",
    "RULE-SET,Github,🐱 GitHub",
    "RULE-SET,OneDrive,Ⓜ️ 微软服务",
    "RULE-SET,Microsoft,Ⓜ️ 微软服务",
    "GEOSITE,cn,DIRECT",
    "GEOIP,CN,DIRECT",    
    "RULE-SET,ProxyGFW,🌍 国外网站",
    "GEOSITE,geolocation-!cn,🌍 国外网站",
    "MATCH,🐟 漏网之鱼"
  ];

  // 返回修改后的配置
  return config;
}
