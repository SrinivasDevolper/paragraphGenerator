const text = [
    `The fact that the Taj Mahal was built with imported marbles makes it unique. Moreover, we can see the fusion of Turkish, Persian, and Mughal architecture, which creates a magnificent design. According to historians, one of the reasons behind the Taj Mahal’s more than 22 years timeline is that Shah Jahan had initially rejected many designs. If you look closely, you will be able to see a slight inward inclination in the pillars. This was done to protect the monument in the event of a natural disaster. Lastly, let’s not forget the subtle contribution of the fountain and the underlying channels that create a mirror image of the Taj Mahal.`,
    `The reason behind this beautiful creation is the sheer love and devotion that the Mughal emperor had for his wife. He could not let the death of his better half go in vain. He wanted the world to know about his love and commitment. Taj Mahal continues to inspire generations after generations. It tells us about the power of love and benevolence.`,
    `The increased levels of competition in the education system these days start as early as the lower primary classes. This has increased the necessity to have good writing and language skills for kids. A good way to begin this is by practising commonly asked essay topics. Here is how you can approach an essay on environment day for classes 1, 2 and 3.`,
    `The environment is everything that surrounds us. It includes natural, living, manufactured, and non-living things. It is imperative to keep our surroundings clean to maintain a healthy and livable environment. Due to industrialisation, deforestation, construction, and increased vehicles on the road, an imbalance in the environment has occurred, and it has become important to reduce environmental pollution to restore the ecosystem.`,
    `Writing an essay can be a complicated task, especially for young children. Hence it lies in the hands of parents and teachers to guide them appropriately to create a strong foundation of writing and vocabulary. Here are certain guidelines on how to write an essay on World Environment Day.
    1.Always start your essay with a short introduction or an introductory paragraph, irrespective of the length.
    2.Maintain good readability and avoid words and sentences that are too complex.
    3.Keep your points straight.
    4.In case of longer articles, make sure to maintain good continuity between your paragraphs.
    5.Use appropriate subheadings and paragraph breaks whenever needed.`,
    `The format of simple sentence lists is the most preferred for lower primary classes. One can write such articles quite easily. Here is how you can write an essay for classes 1 and 2 on World Environment Day.
    1.World Environment Day celebrations take place worldwide.
    2.Over 140 countries are known to participate in this event actively.
    3.The objective of this day is to promote and celebrate the conservation of our environment.
    4.It is observed every year on the 5th of June.
    5.The United Nations declared the 5th of June to be celebrated as World Environment Day in 1972.
    6.Many organisations like schools, colleges, and government and non-government units organise activities like planting saplings on this day.
    7.Many groups also perform activities to promote awareness of the importance of caring for the environment.
    8.In many schools, this event is celebrated in a grand manner.
    9.Many students actively participate in fun activities like cultural and fine arts competitions.
    10.This day is vital to improving the state of our environment.`,
    `The environment is one of the most precious resources given to us by mother nature. With the increasing population, this valuable present is being subjected to severe harm caused by the human race. Multiple steps have been taken up by the concerned organisations to combat the same. One such endeavour which was taken up by the United Nations is World Environment Day. The 5th of June was officially declared to be observed as World Environment Day, and it was celebrated for the first time in the year 1974. The ultimate goal is to create awareness of the importance of conservation and protection of our environment.`,
    `The environment is a precious gift bestowed upon us by mother nature. This gift is being abused to a great degree, especially in recent days. It is important to understand the value of the environment and protect it. To bring about a sense of care and protection towards the environment, many renowned organisations worldwide have started taking up active measures to promote the general awareness of the public towards environmental conservation. One such initiative is the declaration of World Environment Day. The United Nations announced that this day would be celebrated on the 5th of June every year, starting from 1972. Promoting a sense of protection and care for the environment among people is its main purpose. Many institutions like schools, colleges, NGOs, and government organisations take up measures to contribute to the conservation of the environment, like planting saplings and more. It is the responsibility of every individual to participate in such activities regularly and actively.`,
    `The environment has to be cherished and protected by every inhabitant on the planet earth. But, this has not been the case, especially in recent years, resulting in significant damage to the overall state of the environment. For the same reason, many renowned establishments and organisations around the world have started taking up measures to combat this. One such activity is World Environment Day, which is celebrated all over the globe on the 5th of June every year.`,
    `The word environment means surroundings or the condition in which the person, animal, or plant lives or functions. The environment is of utmost importance in the overall living standards and the survival of various life on this planet. In the absence of a good and healthy environment, life will not be as easy and convenient. Hence, it is important as an individual to take it upon oneself to act responsibly and take care of the environment.
    Protecting the precious environment can only be achieved through the individual effort put in by every person on the planet. Therefore, it is important to create such awareness of the conservational activities on this day.`
];
let formCont = document.getElementById("formCont");
let amount = document.getElementById("amount");
let articles = document.getElementById("articlesId");
let submitBTN = document.getElementById("submitBTN");
submitBTN.onclick = function() {
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);
    if (isNaN(value) || value <= 0 || value > 9) {
        articles.innerHTML = `<p class = "result"> ${text[random]} </p>`;
    } else {
        articles.innerHTML = "";
        for (let i = 0; i <= value; i++) {
            articles.innerHTML += `<p class = "result"> ${text.slice(0, i)}</p><br />`;
        }
    }
};