var famousPeople = [{
    title: "Field Marshal",
    name: "Erwin Rommel",
    bio: "Popularly known as the Desert Fox, Rommel was a senior commander in the Wehrmacht. He famously held off the Allied forces in Africa for two years before returning to Germany, where he was implicated in a plot against Hitler.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Bundesarchiv_Bild_146-1985-013-07%2C_Erwin_Rommel.jpg",
    lifespan: {
        birth: 1891,
        death: 1944
    }
}, {
    title: "General",
    name: "George S. Patton",
    bio: "Known for his driven personality, self-promotion, and inspirational leadership, Patton drove his troops on long offensive operations against the Wehrmacht in North Africa, Sicily, and France during the latter years of the war.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Pattonphoto.jpg",
    lifespan: {
        birth: 1885,
        death: 1945
    }
}, {
    title: "Chief of General Staff",
    name: "Georgy Zhukov",
    bio: "One of Stalin's top commanders, Zhukov brought discipline and deep planning to his many roles in the Red Army. He famously destroyed the 6th Army at Stalingrad and, in 1945,  led the final attack against Nazi Germany in the Battle of Berlin.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Zhukov-LIFE-1944-1945.jpg",
    lifespan: {
        birth: 1896,
        death: 1974
    }
}];



famousPeople.forEach(function(person, index){
    let $personCard = $("<div>", {class: "card"});
    let $title = $("<div>", {class: "cardTitle", text: person.title});
    let $name = $("<div>", {class: "cardName", text: person.name});
    let $bio = $("<div>", {class: "cardBio", text: person.bio});
    let $image = $("<img>", {class: "cardImg", src: person.image});
    let $lifespan = $("<div>", {class: "cardLifespan", text: (person.lifespan.birth + " - " + person.lifespan.death)});
    $personCard.append($title).append($name).append($lifespan).append($image).append($bio);
    $("#cardHolder").append($personCard);
});

var $selectedCard = {};
var $selectedBio = {};
var $selectedBioText = {};
var $userInput = $("#userInput");

$(".card").click(function(){
    resetState();
    $selectedCard = $(this);
    $selectedCard.addClass("dottedBorder");
    pairBio();
});

function pairBio(){
    $selectedBio = $selectedCard.find(".cardBio");
    $selectedBioText = $selectedBio.text();
    $userInput.focus().val($selectedBioText);
    $userInput.on("keyup", function(e){
        $selectedBio.text($userInput.val());
        console.log("any key", $selectedBio.text());
        if (e.which === 13) {
            $userInput.off().val("");
            resetState();
        }
    })
};

function resetState(){
    $selectedCard = {};
    $selectedBio = {};
    $selectedBioText = "";
    $userInput.off().val("");
    $(".card").removeClass("dottedBorder");
}



