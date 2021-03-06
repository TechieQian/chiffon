// git add -A
// git commit -m "editing sponsors"
// git push origin master

// npm start

const sponsors = [
  {
    link: "http://amazon.com/shop/chiffonthemaltipoo",
    label:
      "Amazon Store",
    code: null,
    subtitle: " Check out my favorite items on Amazon! (Paid Link) As an Amazon Associate, I earn from qualifying purchases."
  },
  {
    link: "https://www.etsy.com/shop/MissSophieBowtique",
    label: "Miss Sophie Bowtique: 15% off",
    code: "CHIFFON15",
    subtitle : "Handmade clothing, harness dresses and accessories",
  },
  {
    link: "https://www.giftspawt.com/?ref=chiffon",
    label: "Giftspawt: 10% off",
    code: "CHIFFON10",
    subtitle: "Toys, gift sets and more",
  },
  {
    link: "https://pinktailco.com/",
    label: "PinkTailCo: 10% off",
    code: "CHIFFON10",
    subtitle: "Walk accessories (leashes, collars), bows and bandanas",
  },
  {
    link: "https://www.brklz.com//?ref=bb-xz32gw",
    label: "BRKLZ: 20% off",
    code: "CHIFF",
    subtitle: "Over the collar dog jewelry",
  },
  {
    link: "http://i.refs.cc/k9Il2ZvM?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjo3MjE1OTYyMzl9",
    label: "Unique Opal Co: $5 off coupon; 10% off with code",
    code: "CHIFFON10",
    subtitle: "Custom tutus, dog bandanas and hoodies",
  },
  {
    link: "http://www.poshpuppyboutique.com/discount/CHIFFON",
    label: "PoshPuppy Boutique: 30% off",
    code: "CHIFFON",
    subtitle: "One stop shop with clothing, accessories and more",
  },
  {
    link: "https://www.instagram.com/pawsluxury",
    label: "Paws Luxury: 15% off",
    code: "CHIFFON15",
    subtitle: "Fashion clothing and accessories",
  },
  {
    link: "https://www.parisianpet.com/?Click=6069",
    label: "Parisian Pet: 10% off",
    code: "CHIFFON10",
    subtitle: "Pet clothing (Tees, dresses, sleepwear and more)",
  },
  {
    link: "https://wowwowpetz.com/",
    label: "Wow Wow Petz: 25% off",
    code: "CHIFFON25",
    subtitle: "Pet apparel",
  },
  {
    link: "https://www.etsy.com/shop/Mariposandco",
    label: "Mariposa & Co: 15% off",
    code: "CHIFFON15",
    subtitle: "Bows and bandanas",
  },
  {
    link: "https://pawstanfurballs.com/",
    label: "Pawsta N Furballs: 20% off",
    code: "CHIFFON20",
    subtitle: "Dog tutus and bandanas",
  },
  {
    link: "https://dogcrushboutique.com/",
    label: "Dog Crush Boutique: 10% off",
    code: "CHIFFON15",
    subtitle: "Dog clothing, accessories, and more"
  },
  {
    link: "https://max-bone.bop8.net/kn5Wz",
    label: "Max-Bone: 15% off",
    code: "CHIFFON15",
    subtitle: "Stylish outerwear, walk accessories, food and more",
  },
  {
    link:
      "http://i.refs.cc/3jn5PukK?smile_ref=http://i.refs.cc/3jn5PukK?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjo0MTMxODczOTl9",
    label: "Lucy & Co.: $5 off coupon; 15% off with code",
    code: "LCCHIFF15",
    subtitle: "Outerwear, walk accessories, and more",
  },
  {
    link: "http://rwrd.io/kfdeenw?c",
    label: "Honest Kitchen: $10 off first order of $20+; 10% off with code",
    code: "CHIFFON10",
    subtitle: "Dog food and treats",
  },
  {
    link: "browze.com/?UTM_source=brandbassador_medium=affiliate&ref=bb-xz32gw",
    label: "Browze: 10% off with code",
    code: "DCCHIFFON",
    subtitle: "Home, kitchen, all kinds of supplies for humans and  pets!",
  },
  {
    link: "https://shareasale.com/r.cfm?b=1505106&u=2634834&m=95444&urllink=&afftrack= ",
    label: "Patchwork Pet",
    code: null,
    subtitle: "Toys",
  }, 
  {
    link: "https://shareasale.com/r.cfm?b=1665965&u=2634834&m=103400&urllink=&afftrack= ",
    label: "K9 Wear",
    code: null,
    subtitle: "Harness outfits",
  },
  {
    link:
      "http://i.refs.cc/4AcWbcPu?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjo2MjY0NDQ4Mjh9",
    label: "Rebel Dawg: $15 off coupon",
    code: null,
    subtitle: "Stylish tags",
  },

  {
    link: "https://www.vanderpumppets.com/",
    label: "Vanderpump Pets: 15% off",
    code: "CHIFFON15",
  
  },
  {
    link: "https://www.wagandwonder.com/",
    label: "Wag and Wonder: 10% off",
    code: "CHIFFON10",
    subtitle: "Dog walk accessories"
  },
  {
    link: "https://poisepup.com/discount/CHIFFON20",
    label: "PoisePup: 20% off",
    code: "CHIFFON20",
    subtitle: "Dog walk accessories"
  },
  {
    link: "https://www.yesstyle.com/en/home.html?rco=CHIFFON",
    label: "YesStyle",
    code: "CHIFFON",
  subtitle: "Dog clothing and accessories"
  },
  {
    link:
      "https://star.aliexpress.com/share/share.htm?redirectUrl=https%3A%2F%2Fsale.aliexpress.com%2Freferral_register_success.htm%3FinvitationCode%3DK0I5RzQ4akJ5QzNoV2ViMmpnamF4dkJoK3pQTG1jbmtLODBQVDcyQk45Y0ZWR0phL0VQb1dnPT0%26invitationScenario%3DsocialFission%26mb%3Do5ewodaxoQRG8pX%26srcSns%3DCopy%26tid%3Dold_bring_x_101%26businessType%3DsocialFission&image=H78836f65c5ce470ab86e4b5c8a2b42ad5.jpg&businessType=socialFission&templateId=old_bring_x_101&title=GREAT%20NEWS!%20UP%20TO%20US%20%2424%20IN%20COUPONS!",
    label: "Aliexpress: $24 in coupons",
    code: "INAZ9RUS",
    subtitle: "Dog clothing and accessories"
  },
];

export interface ISponsor {
  link: string;
  label: string;
  subtitle? : string;
  code: null | string;
}

export default sponsors;
