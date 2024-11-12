function createProduct(){
    if(localStorage.getItem('products')=null){
        let products=[{
            id:1,
            status:1,
            title:'ADIDAS X PLRPHASE',
            img:'assets/img/adidas/ig4782-giay-adidas-x-plrphase-1.jpg',
            catetory:['Giày Adidas Nam','Giày Adidas'],
            price:300000
        },
        {
            id:2,
            status:1,
            title:'ADIDAS SPIRITAIN 2.0',
            img:'assets/img/adidas/ih0274-giay-adidas-spiritain-2.0-white-silver-black-1.jpg',
            catetory:['Giày Adidas Nam','Giày Adidas'],
            price:250000
        },
        {
            id:3,
            status:1,
            title:'ADIDAS VL COURT 2.0',
            img:'assets/img/adidas/jh5064-giay-adidas-vl-court-2.0-1.jpg',
            catetory:['Giày Adidas Nữ','Giày Adidas'],
            price:200000
        },
        {
            id:4,
            status:1,
            title:'ADIDAS SPIRITAIN 2.0',
            img:'assets/img/adidas/jh8027-giay-adidas-spiritain-2.0-1.png',
            catetory:['Giày Adidas Nữ','Giày Adidas'],
            price:200000
        },
        {
            id:5,
            status:1,
            title:'ADIDAS JOG 2.0 GREY',
            img:'assets/img/adidas/js1031-giay-adidas-jog-2.0-grey-1.jpeg',
            catetory:['Giày Adidas Nữ','Giày Adidas','Giày Adidas Nam'],
            price:300000
        },
        {
            id:6,
            status:1,
            title:'AIR FORCE 1',
            img:'assets/img/nike/dd8959-103-giay-nike-air-force-1-1.jpg',
            catetory:'Giày Nike',
            price:300000
        },
        {
            id:7,
            status:1,
            title:'AIR FORCE 1 MID LX',
            img:'assets/img/nike/dq7666-001-giay-the-thao-nam-nike-air-force-1-mid-07-lx-halloween-1.jpg',
            catetory:['Giày Nike'],
            price:350000
        },
        {
            id:8,
            status:1,
            title:'NIKE COURT BOROUGH LOW',
            img:'assets/img/nike/dz3674-100-giay-nike-air-force-1-1.jpeg',
            catetory:['Giày Nike'],
            price:350000
        },
        {
            id:9,
            status:1,
            title:'NIKE REVOLUTION',
            img:'assets/img/nike/fb2208-009-giay-nike-revolution-7-3.jpg',
            catetory:['Giày Nike'],
            price:400000
        },
        {
            id:10,
            status:1,
            title:'AIR FORCE 1 LX',
            img:'assets/img/nike/dr0148-102-giay-nike-air-force-1-lx-1.jpeg',
            catetory:['Giày Nike'],
            price:450000
        },
        {
           id:11,
           status:1,
           title:'Sandal Nam Bitis BPDEN',
           img:'assets/img/sandal/Sandal Nam Bitis BPM002401DEN-1.webp',
           catetory:['Sandal'],
           price:500000
        },
        {
            id:12,
            status:1,
            title:'Sandal Nam Bitis Hunter',
            img:'assets/img/sandal/Sandal Nam Bitis Hunter HEM000900KED-1.webp',
            catetory:['Sandal'],
            price:510000
        },
        {
            id:13,
            status:1,
            title:'Sandal Nam Bitis Dune',
            img:'assets/img/sandal/Sandal Nam Bitis Hunter Sandal - Dune Edition HEM001300TRG-1.webp',
            catetory:['Sandal'],
            price:500000
        },
        {
            id:14,
            status:1,
            title:'Sandal Caria Leather & Corduroy',
            img:'assets/img/sandal/sandals quai chéo Caria Leather & Corduroy-1.jpg',
            catetory:['Sandal'],
            price:1000000
        },
        {
            id:15,
            status:1,
            title:'Sandal Rosetta Knotted Puffy',
            img:'assets/img/sandal/sandals Rosetta Knotted Puffy-1.webp',
            catetory:['Sandal'],
            price:500000
        }
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

window.onload = createProduct();
