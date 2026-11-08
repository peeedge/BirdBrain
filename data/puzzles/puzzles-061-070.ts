import { puzzle, wiki } from "./builders";

export const PUZZLES_061_070 = [
  puzzle(61, {
    scout: {
      clue: "A Missouri receiver taken 19th overall in 2009, he tore his ACL in 2013 training camp, came back with a career-best season in 2014, then followed Andy Reid to Kansas City.",
      answer: "Jeremy Maclin",
      wrong: ["Riley Cooper", "Jordan Matthews", "DeSean Jackson"],
      explanation: "Jeremy Maclin made his only Pro Bowl after the 2014 season, then signed with the Chiefs.",
      sources: [wiki("Jeremy_Maclin")],
    },
    teammates: {
      athletes: ["Bill Bradley", "Jordan Hicks"],
      shared: "college",
      answer: "Texas",
      wrong: ["Texas A&M", "Texas Tech", "Oklahoma"],
      explanation: "Bradley played quarterback and defensive back at Texas before the Eagles drafted him in 1969, and Hicks was a 2015 third-round pick out of Texas.",
      sources: [wiki("Bill_Bradley_(American_football)"), wiki("Jordan_Hicks_(American_football)")],
    },
    replay: {
      clue: "In the second quarter of Super Bowl LII, a bruising running back who had won two titles with New England bursts up the middle against his old team for a 21-yard touchdown.",
      answer: "LeGarrette Blount",
      wrong: ["Jay Ajayi", "Corey Clement", "Kenjon Barner"],
      explanation: "LeGarrette Blount had won two Super Bowls with the Patriots before signing with the Eagles in 2017.",
      sources: [wiki("Super_Bowl_LII"), wiki("LeGarrette_Blount")],
    },
    timeline: {
      events: [
        ["Ray Rhodes is named NFL Coach of the Year", 1995],
        ["Herschel Walker signs as a free agent", 1992],
        ["Jim McMahon takes over after Randall Cunningham's knee injury", 1991],
        ["Eric Allen returns four interceptions for touchdowns", 1993],
      ],
      sources: [wiki("Jim_McMahon"), wiki("Herschel_Walker"), wiki("Eric_Allen"), wiki("Ray_Rhodes")],
    },
    overtime: {
      prompt: "Who holds the Eagles' career records for receiving yards and touchdown catches?",
      answer: "Harold Carmichael",
      wrong: ["Mike Quick", "Pete Retzlaff", "Zach Ertz"],
      explanation: "Harold Carmichael set both marks over 13 seasons with the Eagles, from 1971 to 1983.",
      sources: [wiki("Harold_Carmichael")],
    },
  }),
];
