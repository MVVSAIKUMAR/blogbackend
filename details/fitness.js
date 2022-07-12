const get = (req,res)=>{
    res.send([
        {
            id:6,
            title:"Yoga",
            category:"fitness",
            info:"you must do yoga",
            image:"https://images.sadhguru.org/d/46272/1633197086-1633197085450.jpg",
            description:"Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation. Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being.",
            description1:"Yoga has been around for millennia. According to some records, it was developed in Northern India over 5,000 years ago, and according to data published in 2004 in the journal Alternative Therapies in Health and Medicine, an estimated 15 million American adults have used yoga at least once in their lifetime.",
            description2:"and more than 7.4 million participated in the year prior to when the research was conducted. Individuals interviewed for this research reported that they used yoga for wellness (stressreduction, quality of life), health conditions, and specific ailments like back or neck pain, and 90% felt yoga was very or somewhat helpful."
        },
        {
            id:7,
            title:"Areobics",
            category:"fitness",
            info:"you must do aerobics",
            image:"https://previews.123rf.com/images/lentolo/lentolo1212/lentolo121200041/16756579-aerobics-class-in-einem-gym-italien.jpg",
            description:"Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness).",
            description1:"Aerobic or with oxygen exercises provide cardiovascular conditioning. The American Heart Association recommends a minimum of 30 minutes of cardiovascular exercise 5 to 7 days per week. Don't forget warm-up, cool-down and stretching exercises in your aerobic exercise session.",
            description2:"The intensity is determined by how hard you are working. The intensity of the exercise is determined by what your goals are, what limitations you have, and your current fitness level."
        },
        {
            id:8,
            title:"Exercise",
            category:"fitness",
            info:"exercise is good for health",
            image:"https://familydoctor.org/wp-content/uploads/2016/11/exercise.jpg",
            description:"Examples include brisk walking, jogging, swimming, and biking. Strength, or resistance training, exercises make your muscles stronger. Some examples are lifting weights and using a resistance band. Balance exercises can make it easier to walk on uneven surfaces and help prevent falls.",
            description1:"Whether people engage in light exercise, such as going for a walk, or high intensity activities, for example, uphill cycling or weight training, regular exercise provides a huge range of benefits for the body and mind.",
            description2:"Taking part in exercise of any intensity every day is essential for preventing a range of diseases and other health issues."
        },{
            id:9,
            title:"Sprint",
            category:"fitness",
            info:"sprint, also called dash, in athletics (track and field), a footrace over a short distance.",
            image:"https://s2.reutersmedia.net/resources/r/?m=02&d=20210806&t=2&i=1571227967&w=&fh=545&fw=810&ll=&pl=&sq=&r=2021-08-06T191713Z_41363_MRPRC2RZO9T5T55_RTRMADP_0_OLYMPICS-2020-EDITORS-CHOICE",
            description:"It is used in many sports that incorporate running, typically as a way of quickly reaching a target or goal, or avoiding or catching an opponent.",
            description1:"The 400m oval running track is split into eight lanes, where each lane is 4ft wide. Up to eight athletes compete in a single race. Competitions are conducted in a heats format, where athletes in groups of eight take part in a every race, with winners moving on to the next round, until the final winner is decided.",
            description2:"Sprint races can be of various distances from 50 - 400m. The three formats used for the Olympics are: 100m, 200m and 400m. The 100m and 400m races are also conducted in a relay format where a team of four each run a leg and pass a baton from one runner to the next."
        },{
            id:10,
            title:"Calisthenics",
            category:"fitness",
            info:"Calisthenics are exercises that don't rely on anything but a person's own body weight.",
            image:"https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_17,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/10/15/7e250c55-e482-4db7-a575-4b5fc337f90e/man-handstand-calishenics-park-london",
            description:"Calisthenics or callisthenics is a form of strength training consisting of a variety of movements that exercise large muscle groups, such as standing, grasping, pushing, etc.",
            description1:"Calisthenics were developed in ancient Greece and became popular again in the early 19th century. Today, fitness training of athletes, military personnel, law enforcement officers, and people trying to keep in shape use these exercises for warming up for strenuous sports or to help build up their bodies.",
            description2:"he effects of a calisthenics training intervention on posture, strength and body composition found that calisthenics training is an effective training solution to improve posture, strength and body composition without the use of any major training equipment"
        }
    ])
}

module.exports.apiController = get;