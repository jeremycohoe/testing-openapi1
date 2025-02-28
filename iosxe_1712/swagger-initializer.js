window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "Cisco-IOS-XE-aaa-oper.json", name: "Cisco IOS XE aaa oper" },
{ url: "Cisco-IOS-XE-acl-oper.json", name: "Cisco IOS XE acl oper" },
{ url: "Cisco-IOS-XE-app-hosting-cfg.json", name: "Cisco IOS XE app hosting cfg" },
{ url: "Cisco-IOS-XE-app-hosting-oper.json", name: "Cisco IOS XE app hosting oper" },
{ url: "Cisco-IOS-XE-arp-oper.json", name: "Cisco IOS XE arp oper" },
{ url: "Cisco-IOS-XE-bgp-common-oper.json", name: "Cisco IOS XE bgp common oper" },
{ url: "Cisco-IOS-XE-bgp-oper.json", name: "Cisco IOS XE bgp oper" },
{ url: "Cisco-IOS-XE-bgp-route-oper.json", name: "Cisco IOS XE bgp route oper" },
{ url: "Cisco-IOS-XE-cdp-oper.json", name: "Cisco IOS XE cdp oper" },
{ url: "Cisco-IOS-XE-cellwan-oper.json", name: "Cisco IOS XE cellwan oper" },
{ url: "Cisco-IOS-XE-cfm-oper.json", name: "Cisco IOS XE cfm oper" },
{ url: "Cisco-IOS-XE-checkpoint-archive-oper.json", name: "Cisco IOS XE checkpoint archive oper" },
{ url: "Cisco-IOS-XE-controller-shdsl-oper.json", name: "Cisco IOS XE controller shdsl oper" },
{ url: "Cisco-IOS-XE-controller-vdsl-oper.json", name: "Cisco IOS XE controller vdsl oper" },
{ url: "Cisco-IOS-XE-crypto-oper.json", name: "Cisco IOS XE crypto oper" },
{ url: "Cisco-IOS-XE-crypto-pki-oper.json", name: "Cisco IOS XE crypto pki oper" },
{ url: "Cisco-IOS-XE-device-hardware-oper.json", name: "Cisco IOS XE device hardware oper" },
{ url: "Cisco-IOS-XE-dhcp-oper.json", name: "Cisco IOS XE dhcp oper" },
{ url: "Cisco-IOS-XE-dns-oper.json", name: "Cisco IOS XE dns oper" },
{ url: "Cisco-IOS-XE-eem-oper.json", name: "Cisco IOS XE eem oper" },
{ url: "Cisco-IOS-XE-efp-oper.json", name: "Cisco IOS XE efp oper" },
{ url: "Cisco-IOS-XE-eigrp-oper.json", name: "Cisco IOS XE eigrp oper" },
{ url: "Cisco-IOS-XE-environment-oper.json", name: "Cisco IOS XE environment oper" },
{ url: "Cisco-IOS-XE-fib-oper.json", name: "Cisco IOS XE fib oper" },
{ url: "Cisco-IOS-XE-flow-monitor-oper.json", name: "Cisco IOS XE flow monitor oper" },
{ url: "Cisco-IOS-XE-fw-oper.json", name: "Cisco IOS XE fw oper" },
{ url: "Cisco-IOS-XE-geo-oper.json", name: "Cisco IOS XE geo oper" },
{ url: "Cisco-IOS-XE-gir-oper.json", name: "Cisco IOS XE gir oper" },
{ url: "Cisco-IOS-XE-gnss-oper.json", name: "Cisco IOS XE gnss oper" },
{ url: "Cisco-IOS-XE-hsrp-oper.json", name: "Cisco IOS XE hsrp oper" },
{ url: "Cisco-IOS-XE-im-events-oper.json", name: "Cisco IOS XE im events oper" },
{ url: "Cisco-IOS-XE-install-oper.json", name: "Cisco IOS XE install oper" },
{ url: "Cisco-IOS-XE-interfaces-oper.json", name: "Cisco IOS XE interfaces oper" },
{ url: "Cisco-IOS-XE-ios-common-oper.json", name: "Cisco IOS XE ios common oper" },
{ url: "Cisco-IOS-XE-ios-events-oper.json", name: "Cisco IOS XE ios events oper" },
{ url: "Cisco-IOS-XE-ip-sla-oper.json", name: "Cisco IOS XE ip sla oper" },
{ url: "Cisco-IOS-XE-ipv6-oper.json", name: "Cisco IOS XE ipv6 oper" },
{ url: "Cisco-IOS-XE-isis-oper.json", name: "Cisco IOS XE isis oper" },
{ url: "Cisco-IOS-XE-l2tp-oper.json", name: "Cisco IOS XE l2tp oper" },
{ url: "Cisco-IOS-XE-l2vpn-oper.json", name: "Cisco IOS XE l2vpn oper" },
{ url: "Cisco-IOS-XE-lacp-oper.json", name: "Cisco IOS XE lacp oper" },
{ url: "Cisco-IOS-XE-lisp-oper.json", name: "Cisco IOS XE lisp oper" },
{ url: "Cisco-IOS-XE-lldp-oper.json", name: "Cisco IOS XE lldp oper" },
{ url: "Cisco-IOS-XE-mdt-capabilities-oper.json", name: "Cisco IOS XE mdt capabilities oper" },
{ url: "Cisco-IOS-XE-mdt-cfg.json", name: "Cisco IOS XE mdt cfg" },
{ url: "Cisco-IOS-XE-mdt-oper-v2.json", name: "Cisco IOS XE mdt oper v2" },
{ url: "Cisco-IOS-XE-mdt-oper.json", name: "Cisco IOS XE mdt oper" },
{ url: "Cisco-IOS-XE-mdt-stats-oper.json", name: "Cisco IOS XE mdt stats oper" },
{ url: "Cisco-IOS-XE-memory-oper.json", name: "Cisco IOS XE memory oper" },
{ url: "Cisco-IOS-XE-mlppp-oper.json", name: "Cisco IOS XE mlppp oper" },
{ url: "Cisco-IOS-XE-mpls-forwarding-oper.json", name: "Cisco IOS XE mpls forwarding oper" },
{ url: "Cisco-IOS-XE-mpls-ldp-oper.json", name: "Cisco IOS XE mpls ldp oper" },
{ url: "Cisco-IOS-XE-mpls-te-oper.json", name: "Cisco IOS XE mpls te oper" },
{ url: "Cisco-IOS-XE-mroute-oper.json", name: "Cisco IOS XE mroute oper" },
{ url: "Cisco-IOS-XE-msdp-oper.json", name: "Cisco IOS XE msdp oper" },
{ url: "Cisco-IOS-XE-nat-oper.json", name: "Cisco IOS XE nat oper" },
{ url: "Cisco-IOS-XE-ncch-cfg.json", name: "Cisco IOS XE ncch cfg" },
{ url: "Cisco-IOS-XE-ncch-oper.json", name: "Cisco IOS XE ncch oper" },
{ url: "Cisco-IOS-XE-netconf-diag-oper.json", name: "Cisco IOS XE netconf diag oper" },
{ url: "Cisco-IOS-XE-ntp-oper.json", name: "Cisco IOS XE ntp oper" },
{ url: "Cisco-IOS-XE-ospf-oper.json", name: "Cisco IOS XE ospf oper" },
{ url: "Cisco-IOS-XE-perf-measure-oper.json", name: "Cisco IOS XE perf measure oper" },
{ url: "Cisco-IOS-XE-pim-oper.json", name: "Cisco IOS XE pim oper" },
{ url: "Cisco-IOS-XE-platform-oper.json", name: "Cisco IOS XE platform oper" },
{ url: "Cisco-IOS-XE-platform-software-oper.json", name: "Cisco IOS XE platform software oper" },
{ url: "Cisco-IOS-XE-ppp-oper.json", name: "Cisco IOS XE ppp oper" },
{ url: "Cisco-IOS-XE-process-cpu-oper.json", name: "Cisco IOS XE process cpu oper" },
{ url: "Cisco-IOS-XE-process-memory-oper.json", name: "Cisco IOS XE process memory oper" },
{ url: "Cisco-IOS-XE-qfp-classification-oper.json", name: "Cisco IOS XE qfp classification oper" },
{ url: "Cisco-IOS-XE-qfp-crypto-dp-oper.json", name: "Cisco IOS XE qfp crypto dp oper" },
{ url: "Cisco-IOS-XE-qfp-resource-utilization-oper.json", name: "Cisco IOS XE qfp resource utilization oper" },
{ url: "Cisco-IOS-XE-qfp-stats-oper.json", name: "Cisco IOS XE qfp stats oper" },
{ url: "Cisco-IOS-XE-rg-oper.json", name: "Cisco IOS XE rg oper" },
{ url: "Cisco-IOS-XE-sd-vxlan-oper.json", name: "Cisco IOS XE sd vxlan oper" },
{ url: "Cisco-IOS-XE-sm-events-oper.json", name: "Cisco IOS XE sm events oper" },
{ url: "Cisco-IOS-XE-system-integrity-oper.json", name: "Cisco IOS XE system integrity oper" },
{ url: "Cisco-IOS-XE-trustsec-oper.json", name: "Cisco IOS XE trustsec oper" },
{ url: "Cisco-IOS-XE-tunnel-oper.json", name: "Cisco IOS XE tunnel oper" },
{ url: "Cisco-IOS-XE-uidp-oper.json", name: "Cisco IOS XE uidp oper" },
{ url: "Cisco-IOS-XE-umbrella-oper-dp.json", name: "Cisco IOS XE umbrella oper dp" },
{ url: "Cisco-IOS-XE-umbrella-oper.json", name: "Cisco IOS XE umbrella oper" },
{ url: "Cisco-IOS-XE-utd-common-oper.json", name: "Cisco IOS XE utd common oper" },
{ url: "Cisco-IOS-XE-utd-oper.json", name: "Cisco IOS XE utd oper" },
{ url: "Cisco-IOS-XE-voice-oper.json", name: "Cisco IOS XE voice oper" },
{ url: "Cisco-IOS-XE-vrf-oper.json", name: "Cisco IOS XE vrf oper" },
{ url: "Cisco-IOS-XE-vrrp-oper.json", name: "Cisco IOS XE vrrp oper" },
{ url: "Cisco-IOS-XE-yang-interfaces-cfg.json", name: "Cisco IOS XE yang interfaces cfg" },
{ url: "Cisco-IOS-XE-yang-interfaces-oper.json", name: "Cisco IOS XE yang interfaces oper" },
{ url: "cisco-semver.json", name: "cisco semver" },
{ url: "ietf-inet-types.json", name: "ietf inet types" },
{ url: "ietf-yang-types.json", name: "ietf yang types" },
],    
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
