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
            id:6,
            name:"Yoga",
            info:"you must do yoga",
            img:"https://images.sadhguru.org/d/46272/1633197086-1633197085450.jpg",
            display_text:"Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation. Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being.",
            para1:"Yoga has been around for millennia. According to some records, it was developed in Northern India over 5,000 years ago, and according to data published in 2004 in the journal Alternative Therapies in Health and Medicine, an estimated 15 million American adults have used yoga at least once in their lifetime.",
            para2:"and more than 7.4 million participated in the year prior to when the research was conducted. Individuals interviewed for this research reported that they used yoga for wellness (stressreduction, quality of life), health conditions, and specific ailments like back or neck pain, and 90% felt yoga was very or somewhat helpful."
        },{
            id:11,
            name:"VadaPav",
            info:"A vegetarian fast food dish.",
            img:"https://www.cleartrip.com/collections/wp-content/uploads/2019/03/batatavada-559x330.jpg",
            display_text:"If you are not a Mumbaikar, this is something which should not be skipped. Whether it”s for breakfast, lunch or teatime, Batata Vada can go with anything.Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
            para1:"Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
            para2:"The carbohydrate-rich snack catered to the cotton mill workers of what was then known as Girangaon. This potato dumpling (batata vada) placed inside a pav was quick to make, cheap, and much convenient over the batata bhaji and chapati combination, which couldn't be eaten in overcrowded local trains."
        }
    ])
}

module.exports.apiController = get;