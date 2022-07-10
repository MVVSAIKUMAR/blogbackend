const get = (req,res)=>{
    res.send([{
        id:11,
        name:"VadaPav",
        info:"A vegetarian fast food dish.",
        img:"https://www.cleartrip.com/collections/wp-content/uploads/2019/03/batatavada-559x330.jpg",
        display_text:"If you are not a Mumbaikar, this is something which should not be skipped. Whether it”s for breakfast, lunch or teatime, Batata Vada can go with anything.Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
        para1:"Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
        para2:"The carbohydrate-rich snack catered to the cotton mill workers of what was then known as Girangaon. This potato dumpling (batata vada) placed inside a pav was quick to make, cheap, and much convenient over the batata bhaji and chapati combination, which couldn't be eaten in overcrowded local trains."
    },{
        id:12,
        name:"Puran poli",
        info:"Puran puri, Puran poli, Holige, Obbattu, or Bobbattu, is an Indian sweet flatbread that originates from Southern India.",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Maharashtrian_Puran_Poli.jpg/1200px-Maharashtrian_Puran_Poli.jpg",
        display_text:"Karnataka. It is a special dish served in the state of Karnataka on all occasions, especially during Yugadi/Ugadi.I have vivid memories of my grandmother, making piles of these golden soft-cooked Poli for our large extended family of uncles, aunts, and cousins. The best part of these elaborate meals was everyone helping out in the kitchen with various chores while having fun preparing the meal. The ghee-laden Poli’s are served with saffron and cardamom-infused milk along with other mouthwatering sides.",
        para1:"Holi - the festival of color, the celebration of the victory of good over evil, marks the arrival of spring. Holi, is a popular Hindu festival celebrated over 2-5 days in India. On the evening of the first day, public bonfires are made, called Holika Dahan. On the next day (or 5th day in some states) people play with colors",
        para2:"Diwali- which translates to a row of lights, is the main Hindu festival celebrated in autumn."
    },{
        id:13,
        name:"Naan",
        info:"Naan is a leavened, oven-baked flatbread. You normally serve Naan with all meals.",
        img:"https://www.blueosa.com/wp-content/uploads/2020/07/garlic-naam.jpg",
        display_text:"This bread is the perfect combination of chewy and crispy, buttery and garlicky. It’s exactly what every Indian dish needs to complement the otherwise bright and intense flavors.Its name comes from the Persian word for bread. Naan was originally made in two versions at the Imperial Court in Delhi - naan-e-tunuk (light bread) and naan-e-tanuri ",
        para1:"Its name comes from the Persian word for bread. Naan was originally made in two versions at the Imperial Court in Delhi - naan-e-tunuk (light bread) and naan-e-tanuri ",
        para2:"The form naan has a widespread distribution, having been borrowed in a range of languages spoken in Central Asia and the Indian subcontinent, where it usually refers to a kind of flatbread (tandyr nan). The spelling naan has been recorded as being first attested in 1979, but dates back at least to 1975, and has since become the normal English spelling."
    },{
        id:14,
        name:"Tandoori Chicken",
        info:"The chicken is marinated in yogurt and seasoned with the spice mixture tandoori masala.",
        img:"https://www.licious.in/blog/wp-content/uploads/2021/01/shutterstock_400329463-min-1.jpg",
        display_text:"Tandoori chicken is a popular North Indian dish consisting of roasted chicken prepared with yogurt and spices. The name comes from the type of cylindrical clay oven, a tandoor, in which the dish is traditionally prepared.Sounds unbelievable, but historians are said to have found the first evidence of a meat preparation which looked like Tandoori Chicken in the ruins of Harappa.",
        para1:"Sounds unbelievable, but historians are said to have found the first evidence of a meat preparation which looked like Tandoori Chicken in the ruins of Harappa.",
        para2:"Ancient Sanskrit treatise Sushruta Samhita mentions meat marinated with mustard powder and fragrant spices being cooked in clay ovens."
    },{
        id:15,
        name:"Momo",
        info:"Momos are made with maida (refined flour) which is the starchy part of the grain after the removal of its fibrous bran.",
        img:"https://im.indiatimes.in/media/content/2019/Aug/momos_1565010575_725x725.jpg",
        display_text:"Dumpling or Momo, as it is more popularly known has become quite a staple among the street food bandwagon of India.Momo is a type of steamed dumpling with some form of filling. Momo has become a traditional delicacy in Nepal, Tibet, as well as among Nepalese and Tibetan communities in Bhutan, as well as people of the Indian regions of Darjeeling, Ladakh, Sikkim, Assam, Uttarakhand, Himachal Pradesh and Arunachal Pradesh.",
        para1: "Momo is a type of steamed dumpling with some form of filling. Momo has become a traditional delicacy in Nepal, Tibet, as well as among Nepalese and Tibetan communities in Bhutan, as well as people of the Indian regions of Darjeeling, Ladakh, Sikkim, Assam, Uttarakhand, Himachal Pradesh and Arunachal Pradesh.",
        para2:"Momos from the NortheastShillong is one place where it’s easy to get some of the most delicious dumplings as compared to the other states. Expect meaty fillings in creamy, light shells with spicy chutney to go with it"
    }
])
}

module.exports.apiController = get;