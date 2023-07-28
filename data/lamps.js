const lamps = [
  {
    id: 75,
    category: "lamps",
    title: "Greta Scalloped Raffia Floor Lamp",
    content:
      "Rising from a brushed brass base, our mixed-material Greta Scalloped Raffia Floor Lamp brings breezy elegance to the bedroom, nursery or playroom. The scalloped, flower-inspired shade is woven of natural raffia and casts a soft light, making it perfect for everything from homework to storytime.",
    image:
      "https://cb.scene7.com/is/image/Crate/GretaSclpRffFloorFlshSSF23/$web_pdp_main_carousel_med$/230329124741/greta-scalloped-raffia-floor-lamp.jpg",
    price: "$249.00",
  },
  {
    id: 76,
    category: "lamps",
    title: "Cosmos Gold Metal Kids Floor Lamp",
    content:
      "The three glowing orbs on this unique kids' floor lamp are suspended by a simple metal frame, ready to cast a warm glow in your bedroom, living room or playroom.",
    image:
      "https://cb.scene7.com/is/image/Crate/CosmosMetalFloorLampGoldSSS23/$web_pdp_main_carousel_med$/220923163241/cosmos-gold-metal-floor-lamp.jpg",
    price: "$269.00",
  },
  {
    id: 77,
    category: "lamps",
    title: "Flo Fluted Violet Kids Floor Lamp",
    content:
      "Whether you're outfitting your nursery or transitioning from toddler to big-kid room, add a touch of sleek, minimalist style in kid-approved color with our Flo Fluted Violet Floor Lamp. The slender metal base in pastel violet is designed to mix and match with any color palette",
    image:
      "https://cb.scene7.com/is/image/Crate/FloFloorLampLtPrplSSS23/$web_pdp_main_carousel_med$/220929171333/flo-scalloped-ceramic-light-purple-floor-lamp.jpg",
    price: "$199.99",
  },
  {
    id: 78,
    category: "lamps",
    title: "Pixi White Metal and Wood Swivel Floor Lamp",
    content:
      "Pixi puts a modern angle on kids' floor lamps. Straight and simple ash wood arms are held in perfect balance above the matching circular base, and the capsule-shaped matter white head swivels left and right so you can illuminate whatever spot needs it most.",
    image:
      "https://cb.scene7.com/is/image/Crate/PixiFloorLampWhiteSSF22/$web_pdp_main_carousel_med$/220330013143/pixi-adjustable-white-metal-and-wood-floor-lamp.jpg",
    price: "$149.97",
  },
  {
    id: 79,
    category: "lamps",
    title: "Meryl Arc Brass Floor Lamp with White Shade",
    content:
      "The Meryl floor lamp goes over and above expectations, suspending a clean drum shade over a sofa or sectional. The two-tier shade in white hangs from a brass-finished arced pole. Streaked in grey, the round white marble base adds a classic touch. The retractable stand offers positioning options for illumination right where you need it.",
    image:
      "https://cb.scene7.com/is/image/Crate/MerylFloorLampBrassSSS21/$web_pdp_main_carousel_med$/210113142254/meryl-arc-brass-floor-lamp-with-white-shade.jpg",
    price: "$399.00",
  },
  {
    id: 80,
    category: "lamps",
    title: "Flores Floor Lamp with Fluted Shade",
    content:
      "Flores rises from a rounded wooden base to support a fluted shade on a slender burnished brass-finished stand. Folded into countless precise accordion pleats, the white shade shapes an angular cone for a surprising, parasol-like look",
    image:
      "https://cb.scene7.com/is/image/Crate/FloresFloorLampSSS21/$web_pdp_main_carousel_med$/201231134526/flores-floor-lamp-with-fluted-shade.jpg",
    price: "$269.00",
  },
  {
    id: 81,
    category: "lamps",
    title: "Weave Greige Floor Lamp",
    content:
      "A tall column of woven paper rattan shapes a textured cylinder shade in a lovely neutral shade somewhere between grey and beige. Stunning on its own, the floor lamp puts its tweedy weave on full view when lit. Contemporary with a nod to mid-century design, the lamp elevates the shade on a four-arm wood stand finished in a complementary shade of dark grey.",
    image: "$159.99",
    price: "$159.99",
  },
  {
    id: 82,
    category: "lamps",
    title: "Landing Wood Floor Lamp",
    content:
      "Rounded blocks wrapped in creamy oak veneer stack to shape a floor lamp with the look of a traditional handcarved sculpture or modern glass sphere lamp. With its curved corners, the square drum shade softly diffuses the light through ivory linen, while the crisp lines of the square black base provide sharp balance.",
    image:
      "https://cb.scene7.com/is/image/Crate/LandingFloorLampSSS21/$web_pdp_main_carousel_med$/201218175642/landing-wood-floor-lamp.jpg",
    price: " $219.94",
  },
  {
    id: 83,
    category: "lamps",
    title: "Noon Natural Wicker Table Lamp by Leanne Ford",
    content:
      "Inspired by vintage bird cages, this striking table lamp constructs an airy enclosure of natural wicker. A breezy weave of rattan surrounds the base, rod and an upright socket in a stack of alternating cylinders that plays on traditional lamp shapes. We love how the table lamp's unconventional silhouette jazzes up a side table or credenza and how the open weave casts intriguing shadows night or day.",
    image:
      "https://cb.scene7.com/is/image/Crate/NoonSingerNatWckrTblLampSSS22/$web_pdp_main_carousel_med$/220304110841/noon-natural-wicker-table-lamp-by-leanne-ford.jpg",
    price: "$349.00",
  },
  {
    id: 84,
    category: "lamps",
    title: "Greta Scalloped Raffia Flush Mount Light",
    content: "$179.00",
    image:
      "Our mixed-material Greta Scalloped Raffia Floor Flush Mount Light brings breezy elegance to the bedroom, nursery or playroom. The scalloped, flower-inspired shade is woven of natural raffia and casts a soft, soothing glow.",
    price:
      "https://cb.scene7.com/is/image/Crate/GretaSclpRffCeilingFlshSSF23/$web_pdp_main_carousel_med$/230329124749/greta-scalloped-raffia-flush-mount-light.jpg",
  },
  {
    id: 85,
    category: "lamps",
    title: "Birdcage Bamboo and Rattan 25'' Kids Ceiling Light by Leanne Ford",
    content:
      "Easy, breezy and beautiful, our birdcage-inspired pendant light brings to mind floaty, free-spirited vibes. Slender bamboo circles the three-tiered iron frame, washed in a dreamy white hue and artfully fastened in place by woven rattan. A warm, dappled glow peeks through the fixture's open spaces, illuminating rooms both big and small. ",
    image:
      "https://cb.scene7.com/is/image/Crate/LFBirdcageWWCeilingLghtSSS22/$web_pdp_main_carousel_med$/211215164352/birdcage-white-washed-ceiling-light-by-leanne-ford.jpg",
    price: "$299.00",
  },
  {
    id: 86,
    category: "lamps",
    title: "Hoyne 21.5'' Brass Pendant Light",
    content:
      "Sized to impress, the large Hoyne pendant lamp crisscrosses in an open-weave of sculptural geometry. Its iron wire sphere is hand-welded and finished in brass for a warm, artisanal look.",
    image:
      "https://cb.scene7.com/is/image/Crate/HoyneBrassPendantOffSHS17/$web_pdp_main_carousel_med$/220913133854/hoyne-brass-pendant.jpg",
    price: "$318.99",
  },
  {
    id: 87,
    category: "lamps",
    title: "Maddox Navy Dome Large Pendant Light with Brass Socket",
    content:
      "Our Maddox collection mixes and matches finishes and features, creating the perfect combination for your home. Steel shades in a variety of shapes, sizes and modern hues pair matte exteriors and glossy white interiors that reflect light beautifully, accented by decorative socket caps and ceiling plates in a range of finishes. ",
    image:
      "https://cb.scene7.com/is/image/Crate/MaddoxNvyDomePndWBrsSktLrgSHF19/$web_pdp_main_carousel_med$/200310144140/maddox-navy-dome-pendant-large-with-brass-socket.jpg",
    price: "$151.99",
  },
  {
    id: 88,
    category: "lamps",
    title: "Rainier Black Conical Pendant Light",
    content:
      "Rainier softens the classic conical pendant by finishing a flared shade with a curve of glass to create a teardrop-like silhouette. The high-contrast pairing of the blackened steel fixture with the white milk glass is graphic, and the frosted glass shade softly diffuses light. We love the linear look of multiple pendants hung above a dining table, kitchen island or down a high-ceilinged hallway.",
    image:
      "https://cb.scene7.com/is/image/Crate/RainierPendantBlkSSS23/$web_pdp_main_carousel_med$/221021113016/rainier-black-conical-pendant-light.jpg",
    price: "$379.00",
  },
  {
    id: 89,
    category: "lamps",
    title: "Arren Brass 3-Light Round Pendant with Round Milk Glass Shades",
    content:
      "Arren suspends a trio of milky-white glass shades from an iron fixture finished in gleaming brass, the pleasingly rounded pendants hanging from a round ceiling plate and adjustable black fabric cords. Boasting clean lines and graceful proportions, the three-light pendant creates a striking cluster of light above a breakfast nook or reading chair",
    image:
      "https://cb.scene7.com/is/image/Crate/ArrenBrs3LtPndtMlkRndShdSSF21/$web_pdp_main_carousel_med$/210903151653/arren-brass-linear-3-light-pendant-with-milk-round-shades.jpg",
    price: "$379.00",
  },
  {
    id: 90,
    category: "lamps",
    title: "Maddox White Faceted Large Pendant Light with Brass Socket",
    content:
      "Our Maddox collection mixes and matches finishes and features, creating the perfect combination for your home. Steel shades in a variety of shapes, sizes and modern hues pair matte exteriors and glossy white interiors that reflect light beautifully, accented by decorative socket caps and ceiling plates in a range of finishes. Strikingly simple with bold geometry and brushed brass details, this large faceted pendant light in matte and shiny white boasts origami-like angles. Hang the adjustable-height ceiling light over a kitchen island, reading nook or dining table for a fascinatingly dimensional look and useful illumination. ",
    image:
      "https://cb.scene7.com/is/image/Crate/MaddoxWhtFctdPndWBrsSktLrgSHF19/$web_pdp_main_carousel_med$/200310172300/maddox-white-faceted-pendant-large-with-brass-socket.jpg",
    price: "$247.99",
  },
  {
    id: 91,
    category: "lamps",
    title: "Arren Black Chandelier Light with Round Silver Glass Shades",
    content:
      "Arren suspends a sextet of mercury glass-like shades from an iron fixture finished in black. The round silver glass orbs radiate around the center, supported by slender rods that curve gracefully. Boasting clean lines and classic proportions, the six-light chandelier offers a delightful presence—and plenty of light—in an entryway, above a dining table or at the top and bottom of a stairway.",
    image:
      "https://cb.scene7.com/is/image/Crate/ArrenBlkChndlrRdSlvShdROS23/$web_pdp_main_carousel_med$/230728070427/ArrenBlkChndlrRdSlvShdROS23.jpg",
    price: "$599.00",
  },
  {
    id: 92,
    category: "lamps",
    title:
      "Arren Brass 5-Light Linear Pendant with Large Round Clear Glass Shades",
    content:
      "Arren suspends a quintet of oversized, bubble-like shades from an iron fixture finished in brass, the clear glass globes hanging from a rectangular ceiling plate and adjustable black fabric cords. Boasting clean lines and graceful proportions, the five-light pendant creates a striking line of light above a long island or table.",
    image:
      "https://cb.scene7.com/is/image/Crate/ArrenBrsLn5LPndLgClrRdShSSS23/$web_pdp_main_carousel_med$/221227085253/arren-brass-5-light-linear-pendant-light-with-large-round-clear-glass-shades.jpg",
    price: "$619.00",
  },
  {
    id: 93,
    category: "lamps",
    title:
      "Arren Brass 3-Light Round Pendant with Teardrop Silver Glass Shades",
    content:
      "Arren suspends a trio of silver glass shades from an iron fixture finished in gleaming brass, the bell-shaped pendants hanging from a round ceiling plate and adjustable black fabric cords. Boasting clean lines and graceful proportions, the three-light pendant creates a striking cluster of light above a breakfast nook or reading chair. Designed by Mark Daniel of Slate Design exclusively for us, this pendant is part of our Arren collection of flexible lighting options with a custom feel.",
    image:
      "https://cb.scene7.com/is/image/Crate/ArrenBrs3LtPndtSlvTrdShdROF21/$web_pdp_main_carousel_med$/230728065451/ArrenBrs3LtPndtSlvTrdShdROF21.jpg",
    price: "$379.00",
  },
  {
    id: 94,
    category: "lamps",
    title: "Lyre Blackened Steel 2-Light Torch Plug In Wall Sconce",
    content:
      "Lyre casts a soft glow on a dining room wall or hallway. The plug-in sconce's fresh take on ambient lighting sets two lamps side by side, each with a petite white linen drum shade on a streamlined blackened steel torch. Alone or in multiples, our exclusive Lyre two-light sconce instantly refreshes your decor.",
    image:
      "https://cb.scene7.com/is/image/Crate/LyreFabTrch2LtScncBlkROS22/$web_pdp_main_carousel_med$/230728082647/LyreFabTrch2LtScncBlkROS22.jpg",
    price: "$126.99",
  },
  {
    id: 95,
    category: "lamps",
    title: "Single Kids Wall Mounted Adjustable Light",
    content:
      "Our adjustable wall light is easy to mount and features a swing arm that allows it to smoothly move from side to side. That means you can always have light nearby, no matter how you feel like lounging. Our plug-in sconce is a Crate & Kids exclusive.",
    image:
      "https://cb.scene7.com/is/image/Crate/Sconce_Single_Adjustable_ON/$web_pdp_main_carousel_med$/230728085815/Sconce_Single_Adjustable_ON.jpg",
    price: "$119.00",
  },
  {
    id: 96,
    category: "lamps",
    title: "Esphera Grey Round Table Lamp",
    content:
      "Bold geometry, natural materials. For our Esphera round table lamp, a terracotta sphere finished in dark grey provides the perfect counterpart to a bright white cylindrical jute shade. The finely finished drum filters light beautifully and contrasts intriguingly with the textured base. A Crate and Barrel exclusive, the grey lamp brings welcome illumination and modern organic style to a side table, nightstand or desk.",
    image:
      "https://cb.scene7.com/is/image/Crate/EspheraRndTableLampGreyROS20/$web_pdp_main_carousel_med$/230728071141/EspheraRndTableLampGreyROS20.jpg",
    price: "$229.00",
  },
  {
    id: 97,
    category: "lamps",
    title: "Onada Mini Curved Wood Table Lamp",
    content:
      "Introduce a bit of movement to your side table with our Onada table lamp. Made of curly maple wood veneer, the lamp's square base swerves with unexpected curves. A rounded rectangle of off-white linen tops off as a light-diffusing shade. A great way to enliven and illuminate your space, the Onada wood table lamp is a Crate & Barrel exclusive.",
    image:
      "https://cb.scene7.com/is/image/Crate/OnadaMiniWoodTblLampROF21/$web_pdp_main_carousel_med$/230728090133/OnadaMiniWoodTblLampROF21.jpg",
    price: "$50.97",
  },
  {
    id: 98,
    category: "lamps",
    title: "Neve Sculptural Table Lamp",
    content:
      "A sculpture that illuminates itself. Inspired by fine art, our table lamp curves an imperfect oval while a pour of reactive glazes in blue and grey adds a sense of fluid motion. An off-white linen drum shade filters light, casting the sculptural table lamp in a glow that highlights its curves. Our exclusive Neve lamp makes a statement on end tables, nightstands and desks.",
    image:
      "https://cb.scene7.com/is/image/Crate/NeveSculpturalTableLampROS20/$web_pdp_main_carousel_med$/230728065253/NeveSculpturalTableLampROS20.jpg",
    price: "$159.99",
  },
  {
    id: 99,
    category: "lamps",
    title: "Humanscale ® Horizon Silver Desk Lamp",
    content:
      "Suitable for home or office, this visually striking desk lamp available in six eye-catching colors produces an even, glare-free plane of warm white illumination, casting just one shadow. Made by Humanscale, the lamp is powered by Thin Film LED technology, the intuitively dimming from full brightness to nightlight, and is engineered with precision-brass ball joints for effortless adjustment. This beautifully designed lamp received a Red Dot Award and the Next Generation Luminaires Award for product design and performance.",
    image:
      "https://cb.scene7.com/is/image/Crate/HorizonSilverDeskLampONF18/$web_pdp_main_carousel_med$/230728090725/HorizonSilverDeskLampONF18.jpg",
    price: "$500.00",
  },
  {
    id: 100,
    category: "lamps",
    title: "Lumi Pets Bunny Night Light",
    content:
      "The LumiPets Bunny Night Light is an adorable, nursery-ready night light that's also amazingly functional. This baby-friendly night light casts a soothing, tranquil glow. It's made from non-toxic silicone, so it's chew-safe and soft to the touch. Tap it to change the color (there's eight to choose from), and charge it using the convenient USB port. Plus, there's a remote that makes it easy to control brightness and set the sleep timer.",
    image:
      "https://cb.scene7.com/is/image/Crate/LumiPetsBunnyNightLightROS20/$web_pdp_main_carousel_med$/230728065254/LumiPetsBunnyNightLightROS20.jpg",
    price: "",
  },
];
