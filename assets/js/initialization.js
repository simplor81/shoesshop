    function createProduct() {
        if (localStorage.getItem('products') == null) {
            let products = [
                {
                    id: 1,
                    status: 1,
                    title: 'ADIDAS X PLRPHASE',
                    img: ['assets/img/adidas/ig4782-giay-adidas-x-plrphase-1.jpg','assets/img/adidas/ig4782-giay-adidas-x-plrphase-2.jpg','assets/img/adidas/ig4782-giay-adidas-x-plrphase-3.jpg','assets/img/adidas/ig4782-giay-adidas-x-plrphase-4.jpg'],
                    category: 'Giày Adidas',
                    size:[35,36,40,42],
                    price: 300000
                },
                {
                    id: 2,
                    status: 1,
                    title: 'ADIDAS SPIRITAIN 2.0',
                    img: ['assets/img/adidas/ih0274-giay-adidas-spiritain-2.0-white-silver-black-1.jpg','assets/img/adidas/ih0274-giay-adidas-spiritain-2.0-white-silver-black-2.jpg','assets/img/adidas/ih0274-giay-adidas-spiritain-2.0-white-silver-black-3.jpg','assets/img/adidas/ih0274-giay-adidas-spiritain-2.0-white-silver-black-4.jpg'],
                    category:  'Giày Adidas',
                    size:[35,36,40,42],
                    price: 250000
                },
                {
                    id: 3,
                    status: 1,
                    title: 'ADIDAS VL COURT 2.0',
                    img: ['assets/img/adidas/jh5064-giay-adidas-vl-court-2.0-1.jpg','assets/img/adidas/jh5064-giay-adidas-vl-court-2.0-2.jpg','assets/img/adidas/jh5064-giay-adidas-vl-court-2.0-3.jpg','assets/img/adidas/jh5064-giay-adidas-vl-court-2.0-4.jpg'],
                    category:  'Giày Adidas',
                    size:[35,36,40,42],
                    price: 200000
                },
                {
                    id: 4,
                    status: 1,
                    title: 'ADIDAS SPIRITAIN 2.0',
                    img: ['assets/img/adidas/jh8027-giay-adidas-spiritain-2.0-1.png','assets/img/adidas/jh8027-giay-adidas-spiritain-2.0-2.png','assets/img/adidas/jh8027-giay-adidas-spiritain-2.0-3.png','assets/img/adidas/jh8027-giay-adidas-spiritain-2.0-4.png'],
                    category:  'Giày Adidas',
                    size:[35,36,40,42],
                    price: 200000
                },
                {
                    id: 551,
                    status: 1,
                    title: 'ADIDAS JOG 2.0 GREY',
                    img: ['assets/img/adidas/js1031-giay-adidas-jog-2.0-grey-1.jpeg','assets/img/adidas/js1031-giay-adidas-jog-2.0-grey-2.jpeg','assets/img/adidas/js1031-giay-adidas-jog-2.0-grey-3.jpeg','assets/img/adidas/js1031-giay-adidas-jog-2.0-grey-4.jpeg'],
                    category: 'Giày Adidas',
                    size:[35,36,40,42],
                    price: 300000
                },
                {
                    id: 6,
                    status: 1,
                    title: 'AIR FORCE 1',
                    img: ['assets/img/nike/dd8959-103-giay-nike-air-force-1-1.jpg','assets/img/nike/dd8959-103-giay-nike-air-force-1-2.jpeg','assets/img/nike/dd8959-103-giay-nike-air-force-1-3.jpg','assets/img/nike/dd8959-103-giay-nike-air-force-1-4.png'],
                    category: 'Giày Nike',
                    size:[35,36,40,42],
                    price: 300000
                },
                {
                    id: 7,
                    status: 1,
                    title: 'AIR FORCE 1 MID LX',
                    img: ['assets/img/nike/dq7666-001-giay-the-thao-nam-nike-air-force-1-mid-07-lx-halloween-1.jpg','assets/img/nike/dq7666-001-giay-the-thao-nam-nike-air-force-1-mid-07-lx-halloween-2.jpg','assets/img/nike/dq7666-001-giay-the-thao-nam-nike-air-force-1-mid-07-lx-halloween-3.jpg','assets/img/nike/dq7666-001-giay-the-thao-nam-nike-air-force-1-mid-07-lx-halloween-4.jpg'],
                    category: 'Giày Nike',
                    size:[35,36,40,42],
                    price: 350000
                },
                {
                    id: 8,
                    status: 1,
                    title: 'NIKE COURT BOROUGH LOW',
                    img: ['assets/img/nike/dz3674-100-giay-nike-air-force-1-1.jpeg','assets/img/nike/dz3674-100-giay-nike-air-force-1-2.jpg','assets/img/nike/dz3674-100-giay-nike-air-force-1-3.jpg','assets/img/nike/dz3674-100-giay-nike-air-force-1-4.jpg'],
                    category:'Giày Nike',
                    size:[35,36,40,42],
                    price: 350000
                },
                {
                    id: 9,
                    status: 1,
                    title: 'NIKE REVOLUTION',
                    img: ['assets/img/nike/fb2208-009-giay-nike-revolution-7-3.jpg','assets/img/nike/fb2208-009-giay-nike-revolution-7-1.jpg','assets/img/nike/fb2208-009-giay-nike-revolution-7-2.jpg','assets/img/nike/fb2208-009-giay-nike-revolution-7-4.jpg'],
                    category: 'Giày Nike',
                    size:[35,36,40,42],
                    price: 400000
                },
                {
                    id: 10,
                    status: 1,
                    title: 'AIR FORCE 1 LX',
                    img: ['assets/img/nike/dr0148-102-giay-nike-air-force-1-lx-1.jpeg','assets/img/nike/dr0148-102-giay-nike-air-force-1-lx-2.jpeg' ,'assets/img/nike/dr0148-102-giay-nike-air-force-1-lx-3.jpeg','assets/img/nike/dr0148-102-giay-nike-air-force-1-lx-5.jpeg'],
                    category: 'Giày Nike',
                    size:[35,36,40,42],
                    price: 450000
                },
                {
                    id: 11,
                    status: 1,
                    title: 'Sandal Nam Bitis BPDEN',
                    img: ['assets/img/sandal/Sandal Nam Bitis BPM002401DEN-1.webp','assets/img/sandal/Sandal Nam Bitis BPM002401DEN-2.webp','assets/img/sandal/Sandal Nam Bitis BPM002401DEN-3.webp','assets/img/sandal/Sandal Nam Bitis BPM002401DEN-4.webp'],
                    category: 'Sandal',
                    size:[34,36,40,42],
                    price: 500000
                },
                {
                    id: 132,
                    status: 1,
                    title: 'Sandal Nam Bitis Hunter',
                    img: ['assets/img/sandal/Sandal Nam Bitis Hunter HEM000900KED-1.webp','assets/img/sandal/Sandal Nam Bitis Hunter HEM000900KED-2.webp','assets/img/sandal/Sandal Nam Bitis Hunter HEM000900KED-3.webp','assets/img/sandal/Sandal Nam Bitis Hunter HEM000900KED-4.webp'],
                    category: 'Sandal',
                    size:[35,36,40,42],
                    price: 510000
                },
                {
                    id: 123,
                    status: 1,
                    title: 'Sandal Nam Bitis Dune',
                    img: ['assets/img/sandal/Sandal Nam Bitis Hunter Sandal - Dune Edition HEM001300TRG-1.webp','assets/img/sandal/Sandal Nam Bitis Hunter Sandal - Dune Edition HEM001300TRG-2.webp','assets/img/sandal/Sandal Nam Bitis Hunter Sandal - Dune Edition HEM001300TRG-3.webp','assets/img/sandal/Sandal Nam Bitis Hunter Sandal - Dune Edition HEM001300TRG-4.webp'],
                    category: 'Sandal',
                    size:[35,36,40,42],
                    price: 500000
                },
                {
                    id: 151,
                    status: 1,
                    title: 'Sandal Caria Leather',
                    img: ['assets/img/sandal/sandals quai chéo Caria Leather & Corduroy-1.jpg','assets/img/sandal/sandals quai chéo Caria Leather & Corduroy-2.webp','assets/img/sandal/sandals quai chéo Caria Leather & Corduroy-3.webp','assets/img/sandal/sandals quai chéo Caria Leather & Corduroy-4.webp'],
                    category: 'Sandal',
                    size:[35,36,40,42],
                    price: 1000000
                    },
                    {
                    id: 150,
                    status: 1,
                    title: 'Sandal Rosetta Knotted Puffy',
                    img: ['assets/img/sandal/sandals Rosetta Knotted Puffy-1.webp','assets/img/sandal/sandals Rosetta Knotted Puffy-2.webp','assets/img/sandal/sandals Rosetta Knotted Puffy-3.jpg','assets/img/sandal/sandals Rosetta Knotted Puffy-4.jpg'],
                    category: 'Sandal',
                    size:[35,36,40,42],
                    price: 500000
                }
            ];

            localStorage.setItem('products', JSON.stringify(products));
        }
    }

    window.onload = createProduct;