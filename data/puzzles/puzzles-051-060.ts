import { puzzle, wiki } from "./builders";

export const PUZZLES_051_060 = [
  puzzle(51, {
    scout: {
      clue: "A fifth-round pick out of Cincinnati in 2007, this tough tight end spent his entire 11-season career in Philadelphia and retired after the Super Bowl LII win.",
      answer: "Brent Celek",
      wrong: ["L.J. Smith", "Zach Ertz", "Trey Burton"],
      explanation: "Brent Celek played through several injuries over his career and caught passes from every Eagles starter from Donovan McNabb to Carson Wentz.",
      sources: [wiki("Brent_Celek")],
    },
    teammates: {
      athletes: ["Jason Peters", "Shawn Andrews"],
      shared: "college",
      answer: "Arkansas",
      wrong: ["Arkansas State", "LSU", "Ole Miss"],
      explanation: "Andrews was a first-round pick out of Arkansas in 2004 and made two Pro Bowls at guard. Peters, a former Arkansas tight end, arrived in 2009.",
      sources: [wiki("Shawn_Andrews_(American_football)"), wiki("Jason_Peters")],
    },
    replay: {
      clue: "When Carson Wentz is knocked out by a helmet-to-helmet hit from Jadeveon Clowney in the first quarter of a January 2020 wild-card game, a 40-year-old backup makes his playoff debut.",
      answer: "Josh McCown",
      wrong: ["Nate Sudfeld", "Nick Foles", "Cody Kessler"],
      explanation: "Josh McCown played the rest of the game against Seattle despite tearing a hamstring, but the Eagles lost 17–9.",
      sources: [wiki("Josh_McCown"), wiki("2019_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Nick Foles signs with Jacksonville", 2019],
        ["Nick Foles throws seven touchdown passes in Oakland", 2013],
        ["Nick Foles re-signs with the Eagles as a backup", 2017],
        ["Nick Foles is traded to the Rams for Sam Bradford", 2015],
      ],
      sources: [wiki("Nick_Foles")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat 22–10 in the wild-card round to open their Super Bowl LIX run?",
      answer: "Green Bay Packers",
      wrong: ["Los Angeles Rams", "Washington Commanders", "Tampa Bay Buccaneers"],
      explanation: "The Eagles beat the Green Bay Packers at Lincoln Financial Field, then knocked off the Rams and Commanders on the way to New Orleans.",
      sources: [wiki("2024_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(52, {
    scout: {
      clue: "The NFL's leading rusher for Dallas in 2014, this Oklahoma running back signed with the rival Eagles in 2015, struggled in Chip Kelly's offense, and was traded to Tennessee after one season.",
      answer: "DeMarco Murray",
      wrong: ["Ryan Mathews", "LeSean McCoy", "Darren Sproles"],
      explanation: "DeMarco Murray ran for 1,845 yards with Dallas in 2014, then rebounded from his Philadelphia season with a Pro Bowl year for the Titans.",
      sources: [wiki("DeMarco_Murray")],
    },
    teammates: {
      athletes: ["Ricky Watters", "Byron Maxwell"],
      shared: "team",
      answer: "Seattle Seahawks",
      wrong: ["San Francisco 49ers", "Miami Dolphins", "Denver Broncos"],
      explanation: "Watters left the Eagles for the Seattle Seahawks in 1998, and Maxwell won a Super Bowl ring in Seattle before signing with the Eagles in 2015. Watters had started with San Francisco; Maxwell was traded to Miami.",
      sources: [wiki("Ricky_Watters"), wiki("Byron_Maxwell")],
    },
    replay: {
      clue: "In the January 2021 season finale against Washington, Doug Pederson pulls Jalen Hurts in the fourth quarter of a close game, and the backup's appearance draws accusations that the Eagles are tanking.",
      answer: "Nate Sudfeld",
      wrong: ["Carson Wentz", "Josh McCown", "Gardner Minshew"],
      explanation: "Nate Sudfeld's appearance in a 20–14 loss handed Washington the NFC East and knocked the Giants out. Pederson was fired days later.",
      sources: [wiki("Nate_Sudfeld"), wiki("2020_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Freddie Mitchell is a first-round pick", 2001],
        ["Shawn Andrews is a first-round pick", 2004],
        ["Mike Mamula is a first-round pick", 1995],
        ["Corey Simon is a first-round pick", 2000],
      ],
      sources: [wiki("Mike_Mamula"), wiki("Corey_Simon"), wiki("Freddie_Mitchell"), wiki("Shawn_Andrews_(American_football)")],
    },
    overtime: {
      prompt: "What nickname did the Eagles' near-unstoppable quarterback sneak, with teammates shoving Jalen Hurts from behind, become known by?",
      answer: "Tush push",
      wrong: ["Philly Special", "Wildcat", "Fumblerooski"],
      explanation: "The 'tush push', also called the 'Brotherly Shove', became so effective that rival teams pushed the league to ban it.",
      sources: [wiki("Tush_push")],
    },
  }),

  puzzle(53, {
    scout: {
      clue: "A fifth-round pick out of Cincinnati in 2005, this relentless defensive end made two Pro Bowls and left the Eagles in 2015 second only to Reggie White in franchise sacks.",
      answer: "Trent Cole",
      wrong: ["Brandon Graham", "Darryl Tapp", "Juqua Parker"],
      explanation: "Trent Cole had 85.5 sacks in 10 Eagles seasons before finishing his career with the Colts.",
      sources: [wiki("Trent_Cole")],
    },
    teammates: {
      athletes: ["LeSean McCoy", "Mike Ditka"],
      shared: "college",
      answer: "Pitt",
      wrong: ["Penn State", "West Virginia", "Temple"],
      explanation: "Ditka was an All-American end at Pitt before his Hall of Fame career, and McCoy ran for Pitt before the Eagles drafted him in 2009.",
      sources: [wiki("Mike_Ditka"), wiki("LeSean_McCoy")],
    },
    replay: {
      clue: "Clinging to a 20–10 lead late in the last game ever played at Veterans Stadium, the January 2003 NFC Championship Game, a Buccaneers cornerback intercepts Donovan McNabb and runs 92 yards for a touchdown.",
      answer: "Ronde Barber",
      wrong: ["Brian Kelly", "Dwight Smith", "John Lynch"],
      explanation: "Ronde Barber's return sealed Tampa Bay's 27–10 win and sent the Bucs to their first Super Bowl, which they won.",
      sources: [wiki("Ronde_Barber"), wiki("2002_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Jeremiah Trotter leaves for Washington", 2002],
        ["Jon Runyan signs as a free agent", 2000],
        ["Hugh Douglas arrives in a trade with the Jets", 1998],
        ["David Akers joins the Eagles", 1999],
      ],
      sources: [wiki("Hugh_Douglas_(American_football)"), wiki("David_Akers"), wiki("Jon_Runyan"), wiki("Jeremiah_Trotter")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat in the NFC Championship Game to reach their first Super Bowl, after the 1980 season?",
      answer: "Dallas Cowboys",
      wrong: ["Minnesota Vikings", "Atlanta Falcons", "Los Angeles Rams"],
      explanation: "The Eagles beat the Dallas Cowboys 20–7 at a frigid Veterans Stadium, with Wilbert Montgomery running for 194 yards.",
      sources: [wiki("1980_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(54, {
    scout: {
      clue: "A Heisman winner at Georgia who starred in the USFL, he was the centerpiece of a blockbuster trade from Dallas to Minnesota, signed with the Eagles in 1992, and in 1994 scored on a run, a catch and a kickoff return of 90 yards or more.",
      answer: "Herschel Walker",
      wrong: ["Keith Byars", "Heath Sherman", "Charlie Garner"],
      explanation: "Herschel Walker played three seasons for the Eagles before signing with the Giants in 1995.",
      sources: [wiki("Herschel_Walker")],
    },
    teammates: {
      athletes: ["Golden Tate", "Rodney Peete"],
      shared: "team",
      answer: "Detroit Lions",
      wrong: ["Dallas Cowboys", "Seattle Seahawks", "Carolina Panthers"],
      explanation: "Peete started his career with the Detroit Lions before joining the Eagles in 1995, and Tate came from Detroit in a 2018 midseason trade. Peete also played for Dallas and Carolina; Tate had started in Seattle.",
      sources: [wiki("Rodney_Peete"), wiki("Golden_Tate")],
    },
    replay: {
      clue: "In the first quarter of Super Bowl LII, Nick Foles lofts a deep ball, and a receiver who signed as a free agent that year leaps to pull it in over a defender for a 34-yard touchdown.",
      answer: "Alshon Jeffery",
      wrong: ["Torrey Smith", "Nelson Agholor", "Mack Hollins"],
      explanation: "Alshon Jeffery's catch gave the Eagles a 9–3 lead after a missed extra point, in a game they won 41–33.",
      sources: [wiki("Super_Bowl_LII"), wiki("Alshon_Jeffery")],
    },
    timeline: {
      events: [
        ["Leonard Tose nearly moves the team to Phoenix", 1984],
        ["Seth Joyner and Clyde Simmons are drafted", 1986],
        ["Dick Vermeil steps down, citing burnout", 1983],
        ["Tony Franklin kicks a 59-yard field goal against Dallas", 1979],
      ],
      sources: [wiki("Tony_Franklin_(kicker)"), wiki("Dick_Vermeil"), wiki("Leonard_Tose"), wiki("Seth_Joyner")],
    },
    overtime: {
      prompt: "In which stadium did the Eagles lose Super Bowl LVII to Kansas City?",
      answer: "State Farm Stadium",
      wrong: ["Allegiant Stadium", "SoFi Stadium", "Caesars Superdome"],
      explanation: "Super Bowl LVII was played at State Farm Stadium in Glendale, Arizona, home of the Cardinals.",
      sources: [wiki("Super_Bowl_LVII"), wiki("State_Farm_Stadium")],
    },
  }),

  puzzle(55, {
    scout: {
      clue: "A 6-foot-6, roughly 340-pound Georgia defensive tackle who ran a 4.78 40-yard dash at the combine, he was taken 13th overall in 2022 after the Eagles traded up.",
      answer: "Jordan Davis",
      wrong: ["Jalen Carter", "Milton Williams", "Marlon Tuipulotu"],
      explanation: "Jordan Davis anchored Georgia's 2021 national title defense and later played in Super Bowls LVII and LIX.",
      sources: [wiki("Jordan_Davis_(defensive_tackle)")],
    },
    teammates: {
      athletes: ["Josh Sweat", "Landon Dickerson"],
      shared: "college",
      answer: "Florida State",
      wrong: ["Miami", "Clemson", "Florida"],
      explanation: "Sweat was a 2018 fourth-round pick out of Florida State, and Dickerson began his college career there before transferring to Alabama.",
      sources: [wiki("Josh_Sweat"), wiki("Landon_Dickerson")],
    },
    replay: {
      clue: "With the Eagles already far ahead in the third quarter of Super Bowl LIX, Jalen Hurts throws deep, and a slender receiver catches it in stride for a 46-yard touchdown.",
      answer: "DeVonta Smith",
      wrong: ["A.J. Brown", "Jahan Dotson", "Dallas Goedert"],
      explanation: "DeVonta Smith's touchdown helped put the game out of reach in a 40–22 win over Kansas City.",
      sources: [wiki("Super_Bowl_LIX"), wiki("DeVonta_Smith")],
    },
    timeline: {
      events: [
        ["Kadarius Toney's record punt return against the Eagles", 2023],
        ["Rodney Harrison's game-sealing interception of Donovan McNabb", 2005],
        ["Michael Irvin's career-ending injury at the Vet", 1999],
        ["Tom Brady drops a trick-play pass against the Eagles", 2018],
      ],
      sources: [wiki("Michael_Irvin"), wiki("Super_Bowl_XXXIX"), wiki("Super_Bowl_LII"), wiki("Super_Bowl_LVII")],
    },
    overtime: {
      prompt: "In which city did the Eagles lose Super Bowl XXXIX?",
      answer: "Jacksonville",
      wrong: ["Houston", "Tampa", "Miami"],
      explanation: "Super Bowl XXXIX was played at Alltel Stadium in Jacksonville, Florida.",
      sources: [wiki("Super_Bowl_XXXIX")],
    },
  }),

  puzzle(56, {
    scout: {
      clue: "The runner-up to Doug Flutie for the 1984 Heisman, this Ohio State running back was a 1986 first-round pick and became one of the best pass-catching backs of Buddy Ryan's era.",
      answer: "Keith Byars",
      wrong: ["Anthony Toney", "Heath Sherman", "Thomas Sanders"],
      explanation: "Keith Byars played seven seasons in Philadelphia, then moved on to Miami, New England and the Jets.",
      sources: [wiki("Keith_Byars")],
    },
    teammates: {
      athletes: ["Darren Sproles", "Jon Runyan"],
      shared: "team",
      answer: "San Diego Chargers",
      wrong: ["New Orleans Saints", "Tennessee Titans", "Kansas City Chiefs"],
      explanation: "Sproles started his career with the San Diego Chargers, and Runyan finished his there in 2009, when they were teammates. Sproles also played for New Orleans; Runyan had started in Tennessee.",
      sources: [wiki("Darren_Sproles"), wiki("Jon_Runyan")],
    },
    replay: {
      clue: "Kicking without a shoe on his right foot, a rookie from Texas A&M boots a 59-yard field goal against Dallas in 1979, a franchise record that stands until 2017.",
      answer: "Tony Franklin",
      wrong: ["Nick Mike-Mayer", "Paul McFadden", "Horst Muhlmann"],
      explanation: "Tony Franklin's 59-yarder stood as the Eagles' longest field goal until Jake Elliott hit from 61 yards.",
      sources: [wiki("Tony_Franklin_(kicker)")],
    },
    timeline: {
      events: [
        ["Marquez Valdes-Scantling drops a deep ball in a loss to the Eagles", 2023],
        ["Chuck Bednarik knocks Frank Gifford out of a game", 1960],
        ["Julio Jones can't haul in a last-minute pass in a playoff loss to the Eagles", 2018],
        ["Larry Fitzgerald's three-touchdown half in the NFC Championship Game", 2009],
      ],
      sources: [wiki("Frank_Gifford"), wiki("2008_Philadelphia_Eagles_season"), wiki("2017_Philadelphia_Eagles_season"), wiki("2023_Philadelphia_Eagles_season")],
    },
    overtime: {
      prompt: "Which former Broncos head coach became the Eagles' defensive coordinator in 2024 and ran the NFL's top-ranked defense?",
      answer: "Vic Fangio",
      wrong: ["Sean Desai", "Matt Patricia", "Jim Schwartz"],
      explanation: "Vic Fangio's defense allowed the fewest yards in the league and held Patrick Mahomes in check in Super Bowl LIX.",
      sources: [wiki("Vic_Fangio"), wiki("2024_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(57, {
    scout: {
      clue: "A USC quarterback taken fifth overall by the Jets in 2009, he signed with the Eagles as a backup in 2014 and took over when Nick Foles broke his collarbone that November.",
      answer: "Mark Sanchez",
      wrong: ["Matt Barkley", "Michael Vick", "Sam Bradford"],
      explanation: "Mark Sanchez started the rest of 2014 and part of 2015, then was traded to Denver in 2016.",
      sources: [wiki("Mark_Sanchez")],
    },
    teammates: {
      athletes: ["Jeff Garcia", "Mychal Kendricks"],
      shared: "team",
      answer: "Cleveland Browns",
      wrong: ["San Francisco 49ers", "Seattle Seahawks", "Detroit Lions"],
      explanation: "Garcia started for the Cleveland Browns in 2004, two years before he rescued the Eagles' 2006 season, and Kendricks signed with Cleveland in 2018 after six Eagles seasons. Garcia also played for San Francisco and Detroit; Kendricks later joined Seattle.",
      sources: [wiki("Jeff_Garcia"), wiki("Mychal_Kendricks")],
    },
    replay: {
      clue: "In the second quarter of Super Bowl LVII, Jalen Hurts loses the ball while running, and a Chiefs linebacker scoops it up and returns it 36 yards for a touchdown.",
      answer: "Nick Bolton",
      wrong: ["Willie Gay", "Chris Jones", "L'Jarius Sneed"],
      explanation: "Nick Bolton's touchdown tied the game 14–14, but Hurts answered with a touchdown run before halftime.",
      sources: [wiki("Super_Bowl_LVII"), wiki("Nick_Bolton")],
    },
    timeline: {
      events: [
        ["Vic Fangio becomes defensive coordinator", 2024],
        ["Jim Schwartz becomes defensive coordinator", 2016],
        ["Jim Johnson becomes defensive coordinator", 1999],
        ["Jonathan Gannon becomes defensive coordinator", 2021],
      ],
      sources: [wiki("Jim_Johnson_(American_football_coach)"), wiki("Jim_Schwartz"), wiki("Jonathan_Gannon"), wiki("Vic_Fangio")],
    },
    overtime: {
      prompt: "Who was the Eagles' offensive coordinator for Super Bowl LII and left to become the Colts' head coach weeks later?",
      answer: "Frank Reich",
      wrong: ["Shane Steichen", "Mike Groh", "Press Taylor"],
      explanation: "Frank Reich, a former backup quarterback for Buffalo, was hired by Indianapolis after Josh McDaniels backed out of the job.",
      sources: [wiki("Frank_Reich")],
    },
  }),

  puzzle(58, {
    scout: {
      clue: "One of three brothers whose No. 11 was retired at Michigan, this tackle joined the 'Steagles' as a rookie in 1943, anchored the line for the 1948 and 1949 champions, and had his No. 70 retired by the Eagles.",
      answer: "Al Wistert",
      wrong: ["Bucko Kilroy", "Vic Sears", "Vic Lindskog"],
      explanation: "Al Wistert played his entire nine-season career with the Eagles, from 1943 to 1951.",
      sources: [wiki("Al_Wistert")],
    },
    teammates: {
      athletes: ["Wilbert Montgomery", "Kenny Jackson"],
      shared: "coach",
      answer: "Marion Campbell",
      wrong: ["Dick Vermeil", "Buddy Ryan", "Mike McCormack"],
      explanation: "Montgomery's final Eagles season, 1984, was Kenny Jackson's rookie year, and both played for Marion Campbell. Montgomery had also played for Dick Vermeil; Jackson went on to play for Buddy Ryan.",
      sources: [wiki("Marion_Campbell"), wiki("Wilbert_Montgomery")],
    },
    replay: {
      clue: "Up 24–7 in the January 2018 NFC Championship Game against Minnesota, Nick Foles hands off, takes the pitch back on a flea-flicker and throws deep to a receiver for a touchdown.",
      answer: "Torrey Smith",
      wrong: ["Alshon Jeffery", "Nelson Agholor", "Mack Hollins"],
      explanation: "Torrey Smith's catch made it 31–7, and the Eagles won 38–7 to reach Super Bowl LII.",
      sources: [wiki("Torrey_Smith"), wiki("2017_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Mike Ditka arrives in a trade with the Bears", 1967],
        ["Ted Dean scores the winning touchdown in the NFL title game", 1960],
        ["Fans fly a 'Joe Must Go' banner over Franklin Field", 1968],
        ["Ollie Matson joins the Eagles", 1964],
      ],
      sources: [wiki("1960_NFL_Championship_Game"), wiki("Ollie_Matson"), wiki("Mike_Ditka"), wiki("Joe_Kuharich")],
    },
    overtime: {
      prompt: "In which ballpark did the Eagles play their first home games, from 1933 to 1935?",
      answer: "Baker Bowl",
      wrong: ["Shibe Park", "Franklin Field", "Municipal Stadium"],
      explanation: "The Eagles shared the Baker Bowl with the Phillies before moving to Municipal Stadium in 1936.",
      sources: [wiki("Baker_Bowl"), wiki("History_of_the_Philadelphia_Eagles")],
    },
  }),

  puzzle(59, {
    scout: {
      clue: "The 1969 NFL MVP with the Rams, this NC State quarterback came to Philadelphia in a 1973 trade, led the league in passing yards and touchdown passes that season, and was named Comeback Player of the Year.",
      answer: "Roman Gabriel",
      wrong: ["Mike Boryla", "John Reaves", "Pete Liske"],
      explanation: "Roman Gabriel's top target in 1973 was Harold Carmichael, who led the NFL in receptions and receiving yards that year.",
      sources: [wiki("Roman_Gabriel"), wiki("Harold_Carmichael")],
    },
    teammates: {
      athletes: ["Kevin Kolb", "Clyde Simmons"],
      shared: "team",
      answer: "Arizona Cardinals",
      wrong: ["Seattle Seahawks", "Tennessee Titans", "Denver Broncos"],
      explanation: "Simmons followed Buddy Ryan to the Arizona Cardinals in 1994, and Kolb was traded there in 2011 for Dominique Rodgers-Cromartie and a second-round pick.",
      sources: [wiki("Clyde_Simmons"), wiki("Kevin_Kolb")],
    },
    replay: {
      clue: "Deep in debt in December 1984, the Eagles' owner nearly agrees to move the team to Phoenix before the city of Philadelphia offers enough concessions to keep it home.",
      answer: "Leonard Tose",
      wrong: ["Norman Braman", "Jerry Wolman", "Jeffrey Lurie"],
      explanation: "Leonard Tose kept the team in Philadelphia but sold it to Norman Braman a few months later.",
      sources: [wiki("Leonard_Tose")],
    },
    timeline: {
      events: [
        ["Brandon Brooks signs from Houston", 2016],
        ["Darren Sproles arrives in a trade with New Orleans", 2014],
        ["Jay Ajayi arrives in a trade with Miami", 2017],
        ["Sam Bradford arrives in a trade for Nick Foles", 2015],
      ],
      sources: [wiki("Darren_Sproles"), wiki("Sam_Bradford"), wiki("Brandon_Brooks"), wiki("Jay_Ajayi")],
    },
    overtime: {
      prompt: "Shibe Park, the Eagles' home for most of the 1940s and 1950s, was renamed what in 1953?",
      answer: "Connie Mack Stadium",
      wrong: ["Franklin Field", "Baker Bowl", "Municipal Stadium"],
      explanation: "Shibe Park became Connie Mack Stadium in 1953, honoring the longtime owner and manager of the Philadelphia Athletics.",
      sources: [wiki("Shibe_Park")],
    },
  }),

  puzzle(60, {
    scout: {
      clue: "A Tennessee State defensive end who spent 11 seasons in Atlanta, he came to Philadelphia in 1979, added a veteran pass rush to the Super Bowl XV team, and entered the Hall of Fame in 2014.",
      answer: "Claude Humphrey",
      wrong: ["Carl Hairston", "Dennis Harrison", "Charlie Johnson"],
      explanation: "Claude Humphrey retired after the 1981 season, his third with the Eagles.",
      sources: [wiki("Claude_Humphrey")],
    },
    teammates: {
      athletes: ["Alshon Jeffery", "Trey Burton"],
      shared: "team",
      answer: "Chicago Bears",
      wrong: ["Indianapolis Colts", "Green Bay Packers", "Minnesota Vikings"],
      explanation: "Jeffery left the Chicago Bears for the Eagles in 2017, and Burton went the other way, signing with Chicago in 2018 after Super Bowl LII. Burton later played for Indianapolis.",
      sources: [wiki("Alshon_Jeffery"), wiki("Trey_Burton")],
    },
    replay: {
      clue: "In Super Bowl XV, a Raiders linebacker intercepts Ron Jaworski three times, a Super Bowl record.",
      answer: "Rod Martin",
      wrong: ["Ted Hendricks", "Lester Hayes", "Matt Millen"],
      explanation: "Rod Martin's three interceptions helped the Raiders win 27–10, though quarterback Jim Plunkett was named MVP.",
      sources: [wiki("Super_Bowl_XV"), wiki("Rod_Martin")],
    },
    timeline: {
      events: [
        ["Jalen Hurts is named Super Bowl MVP", 2025],
        ["Jalen Hurts finishes second in the Heisman voting at Oklahoma", 2019],
        ["Jalen Hurts runs for three touchdowns in a Super Bowl loss", 2023],
        ["Jalen Hurts starts as a freshman at Alabama", 2016],
      ],
      sources: [wiki("Jalen_Hurts")],
    },
    overtime: {
      prompt: "Who holds the Eagles' career record for sacks?",
      answer: "Reggie White",
      wrong: ["Trent Cole", "Brandon Graham", "Clyde Simmons"],
      explanation: "Reggie White had 124 sacks in eight Eagles seasons, well ahead of second-place Trent Cole.",
      sources: [wiki("Reggie_White")],
    },
  }),
];
