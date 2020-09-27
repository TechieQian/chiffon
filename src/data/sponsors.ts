// git add -A
// git commit -m "editing sponsors"
// git push origin master

// npm start

const sponsors = [
  {
    link: "http://amazon.com/shop/chiffonthemaltipoo",
    label: "Amazon Store",
    code: null,
  },
  {
    link: "https://www.giftspawt.com/?ref=chiffon",
    label: "Giftspawt: 10% off",
    code: "CHIFFON10",
  },
  {
    link: "https://pinktailco.com/",
    label: "PinkTailCo Accessories: 10% off",
    code: "CHIFFON10",
  },
  {
    link:
      "https://www.parisianpet.com/?Click=6069",
    label: "Parisian Pet: 10% off",
    code: "CHIFFON10",
  },
  {
    link: "http://lucyand.co/",
    label: "Lucy & Co.: 15% off",
    code: "LCCHIFF15",
  },
  {
    link: "https://www.poshpuppyboutique.com/",
    label: "PoshPuppy Boutique: 30% off",
    code: "CHIFFON",
  },
  {
    link: "https://www.etsy.com/shop/WalkWildCo",
    label: "WalkWildCo: 10% off",
    code: "CHIFFON10",
  },
  {
    link: "https://poisepup.com/discount/CHIFFON20",
    label: "PoisePup: 20% off",
    code: "CHIFFON20",
  },
  {
    link: "https://www.yesstyle.com/en/home.html?rco=CHIFFON",
    label: "YesStyle: Dog Clothing and Accessories",
    code: "CHIFFON",
  },
  {
    link: "https://bonneetfilou.com/",
    label: "Bonne et Filou Macarons: 10% off",
    code: "chiffonthemaltipoo",
  },
  {
    link: "https://www.etsy.com/shop/PulelehuaDesigns",
    label: "Pulelehua Designs: 20% off",
    code: "CHIFFON",
  },
  {
    link: "https://www.swagandbrownie.com/",
    label: "Swag and Brownie: 15% off",
    code: "CHIFFON",
  },
  {
    link:
      "https://star.aliexpress.com/share/share.htm?redirectUrl=https%3A%2F%2Fsale.aliexpress.com%2Freferral_register_success.htm%3FinvitationCode%3DK0I5RzQ4akJ5QzNoV2ViMmpnamF4dkJoK3pQTG1jbmtLODBQVDcyQk45Y0ZWR0phL0VQb1dnPT0%26invitationScenario%3DsocialFission%26mb%3Do5ewodaxoQRG8pX%26srcSns%3DCopy%26tid%3Dold_bring_x_101%26businessType%3DsocialFission&image=H78836f65c5ce470ab86e4b5c8a2b42ad5.jpg&businessType=socialFission&templateId=old_bring_x_101&title=GREAT%20NEWS!%20UP%20TO%20US%20%2424%20IN%20COUPONS!",
    label: "Aliexpress: $24 in coupons",
    code: "INAZ9RUS",
  },
];

export interface ISponsor {
  link: string;
  label: string;
  code: null | string;
}

export default sponsors;
