import { lightning, wiki } from "./builders";

export const LIGHTNING_061_070 = [
  lightning(61, {
    title: "Which return man?",
    options: ["Brian Mitchell", "Darren Sproles", "DeSean Jackson", "Brian Westbrook"],
    questions: [
      ["Played for the Eagles from 2000 to 2002 after a decade in Washington?", "Brian Mitchell", "Brian Mitchell crossed over from the rival Redskins."],
      ["Arrived in a 2014 trade with New Orleans?", "Darren Sproles", "Darren Sproles came over from the Saints for a fifth-round pick."],
      ["Was a second-round pick out of Cal in 2008?", "DeSean Jackson", "DeSean Jackson was an instant big-play threat as a rookie."],
      ["Played college football at Villanova?", "Brian Westbrook", "Brian Westbrook starred at Villanova before the Eagles drafted him."],
      ["Ranks second in NFL history in all-purpose yards?", "Brian Mitchell", "Only Jerry Rice has more all-purpose yards than Brian Mitchell."],
      ["Made three straight Pro Bowls as an Eagle?", "Darren Sproles", "Darren Sproles made the Pro Bowl in each of his first three Eagles seasons."],
      ["Was released in 2014 and signed with Washington?", "DeSean Jackson", "DeSean Jackson's release stunned Eagles fans."],
      ["Kneeled at the 1-yard line instead of scoring to run out the clock against Dallas in 2007?", "Brian Westbrook", "Brian Westbrook gave up a touchdown to seal the win."],
      ["Played quarterback in college at Southwestern Louisiana?", "Brian Mitchell", "Brian Mitchell was a college quarterback before becoming a return specialist."],
      ["Led the NFL in yards from scrimmage in 2007?", "Brian Westbrook", "Brian Westbrook had more than 2,000 yards from scrimmage in 2007."],
    ],
    sources: [wiki("Brian_Mitchell_(running_back)"), wiki("Darren_Sproles"), wiki("DeSean_Jackson"), wiki("Brian_Westbrook")],
  }),
];
