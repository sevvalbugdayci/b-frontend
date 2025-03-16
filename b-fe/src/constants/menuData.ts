export const menuItems = [
  { id: "products", title: "Ürünler", hasSubMenu: true,icon1:"/images/leftarrow.svg", link: "/" },
  { id: "packages", title: "Paketler", hasSubMenu: true, link: "/packages" },
  { id: "about", title: "Biz Kimiz?", hasSubMenu: false, link: "/about" },
  { id: "donation", title: "Bağış Kültürü", hasSubMenu: false, link: "/donation" },
  { id: "test", title: "Regl Testi!", hasSubMenu: false, link: "/test" },
  { id: "custom", title: "Kendi Paketini Oluştur", hasSubMenu: false, link: "/custom-package" },
];

export const products = [
    {title: "beije Ped",image:"/images/beijePed.png",icon1:"/images/hijyenik-standart.svg",icon2:"/images/leftarrow.svg",link:""},
    {title: "beije Günlük Ped",image:"/images/gunlukped.png",icon1:"/images/ped.svg",icon2:"/images/leftarrow.svg",link:""},
    {title: "beije Tampon",image:"/images/tampon.png",icon1:"/images/tampon.svg",icon2:"/images/leftarrow.svg",link:""},
    {title: "Beije Kap",image:"/images/beijeKap.png",icon1:"/images/kap.svg",icon2:"/images/leftarrow.svg",link:""},
    {title: "Isı bandı",image:"/images/beijeKap.png",icon1:"/images/Isıbandı.svg",icon2:"/images/leftarrow.svg",link:""},
    {title: "beije Supplement",image:"/images/beijeKap.png",icon1:"/images/kap.svg",icon2:"/images/leftarrow.svg",link:""}
  ];

export const packages = [
    {title: "Popüler Paketler",image:"/images/popPaketler.png",icon1:"/images/paket.svg",icon2:"/images/leftarrow.svg",link:""},
    {title: "Ped Paketleri",image:"/images/gunlukped.png",icon1:"/images/ped.svg",icon2:"/images/leftarrow.svg",link:""},
    {title: "Günlük Ped Paketleri",image:"/images/tampon.png",icon1:"/images/tampon.svg",icon2:"/images/leftarrow.svg",link:""},
    {title: "Tampon Paketleri",image:"/images/beijeKap.png",icon1:"/images/kap.svg",icon2:"/images/leftarrow.svg",link:""},
    {title: "Deneme Paketi",image:"/images/beijeKap.png",icon1:"/images/sepet.svg",icon2:"/images/leftarrow.svg",link:""},
];

export const filteredProducts = products.map(({title,icon1,link}) => ({title,icon1,link}));
export const filteredPackages = products.map(({title,icon1,link}) => ({title,icon1,link}));
