const get = (req,res)=>{
    res.send([
        {
            id:1,
            name:"Kerala: God's Own Country",
            info:"visit kerala",
            img:"https://images.unsplash.com/photo-1609828913552-f9138ed9e42d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1788&q=80",
            display_text:"Kerala, the Southernmost state of India is the spice hotspot of the world since ancient times. Kerala is a state which is a biodiversity hotspot in Incredible India. This beautiful land is rightly called God’s Own Country, given to its lush green landscapes and crystal clear beaches that will leave you awestruck",
            para1:"Kerala, southwestern coastal state of India. It is a small state, constituting only about 1 percent of the total area of the country. Kerala stretches for about 360 miles (580 km) along the Malabar Coast, varying in width from roughly 20 to 75 miles (30 to 120 km). It is bordered by the states of Karnataka (formerly Mysore) to the north and Tamil Nadu to the east and by the Arabian Sea to the south and west.",
            para2:"With all elements of nature in it, Kerala leads the country in various aspects like literacy rate, sex ratio, least population growth, and travel & tourism. Kerala is known as Keralam in the Malayalam Language. Kerala has so many breathtaking destinations that anyone who wants to explore new places should visit Kerala once in his/her lifetime and add it to their bucket list."
        },{
            id:2,
            name:"Sikkim: Valley of Rice",
            info:"visit sikkim",
            img:"https://www.tripsavvy.com/thmb/58A3iO4pNLWV-yojm0QbsrmurbM=/2121x1414/filters:fill(auto,1)/GettyImages-606222988-5a823cff1d64040037dfd9a1.jpg",
            display_text:"Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers.",
            para1:"A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkim's capital and largest city is Gangtok. Almost 35% of the state is covered by the Khangchendzonga National Park.",
            para2:"Long a sovereign political entity, Sikkim became a protectorate of India in 1950 and an Indian state in 1975. Its small size notwithstanding, Sikkim is of great political and strategic importance for India because of its location along several international boundaries. Area 2,740 square miles (7,096 square km). Pop. (2011) 607,688."
        },{
            id:3,
            name:"Mumbai: Bambai - Sapno ki Mayanagri",
            info:"visit Mumbai",
            img:"https://traveltoplist.com/wp-content/uploads/2017/02/places-to-visit-in-mumbai-768x417.jpg",
            display_text:"Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva",
            para1:"Mumbai, long the centre of India's cotton textile industry, subsequently developed a highly diversified manufacturing sector that included an increasingly important information technology (IT) component.",
            para2:"The city of Mumbai occupies a peninsular site on Bombay Island, a landmass originally composed of seven islets lying off the Konkan coast of western India. Since the 17th century the islets have been joined through drainage and reclamation projects, as well as through the construction of causeways and breakwaters, to form Bombay Island. East of the island are the sheltered waters of Mumbai (Bombay) Harbour."
        },{
            id:4,
            name:"Madhya Pradesh: Heart of India",
            info:"visit Madhya Pradesh",
            img:"https://tourism.mp.gov.in/images/Gallary/FooterGallery/01082018060705MAHESHWAR%20-%20FORT.jpg",
            display_text:"Madhya Pradesh is known as the “Heart of India” because of a lot many things that it has to offer. It has been home to cultural and spiritual heritage of almost all the religions.",
            para1:"The natural beauty of the state is equally varied. Consisting largely of a plateau, the State has everything, from mighty mountain ranges to meandering rivers to miles of verdant forests. In fact a large part of Madhya Pradesh is under the forest cover, offering a unique and exciting panorama of wildlife.",
            para2:" Let the hands of time which have rested lightly on the chhatris, palaces and forts of Orchha and Gwalior, whisper the tales of medieval India. The temples of Khajuraho are India’s unique gift to the world, representing love and joys of life in a sublime expression."
        },{
            id:5,
            name:"Kalaburagi: Land of Stones",
            info:"Visit Kalburgai",
            img:"https://cdn.s3waas.gov.in/s306997f04a7db92466a2baa6ebc8b872d/uploads/2018/07/2018072516-1024x683.jpg",
            display_text:"Kalaburagi, also known as Gulbarga, is a city in the Indian state of Karnataka. It is the administrative headquarters of the Kalaburagi district and is the largest city in the region of North Karnataka.",
            para1:"The District was under the rule of Nijam s of Hyderabad before independence. The district has a rich background of knowledge and culture. The existence of university at Nagai in Chitapur, Vignaneeshwaras Mitakshara, Nrupatungas Kavirajmarg and the religious and social revolution led by Shivsharanas and the Sufi saint Banda Nawaz are all evidence of it.",
            para2:"The weather in Kalaburagi consists of 3 main seasons. The summer which spans from late February to mid June. It is followed by the south west monsoon which spans from the late June to late September heavy rainfall may go up to 750mm. It is then followed by dry winter weather until mid January."
        }
    ])
}

module.exports.apiController = get;