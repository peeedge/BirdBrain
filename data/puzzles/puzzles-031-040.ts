import { puzzle, wiki } from "./builders";

export const PUZZLES_031_040 = [
  puzzle(31, {
    scout: {
      clue: "A 5-foot-6 Kansas State running back who had starred as a returner in San Diego and New Orleans, he arrived in a 2014 trade and made three straight Pro Bowls as the Eagles' punt returner.",
      answer: "Darren Sproles",
      wrong: ["Brian Westbrook", "Wendell Smallwood", "Kenjon Barner"],
      explanation: "Darren Sproles came over from the Saints for a fifth-round pick. He tore his ACL early in the 2017 season, the year the Eagles won Super Bowl LII.",
      sources: [wiki("Darren_Sproles")],
    },
    teammates: {
      athletes: ["Miles Sanders", "Saquon Barkley"],
      shared: "college",
      answer: "Penn State",
      wrong: ["Ohio State", "Pitt", "Rutgers"],
      explanation: "Both ran for Penn State, where Sanders backed up Barkley before the Eagles drafted him in 2019. Barkley came to Philadelphia from the Giants in 2024.",
      sources: [wiki("Miles_Sanders"), wiki("Saquon_Barkley")],
    },
    replay: {
      clue: "Chased into his own end zone by Bruce Smith in a December 1990 game against Buffalo, Randall Cunningham ducks away and heaves the ball downfield, where a receiver runs under it for a 95-yard touchdown.",
      answer: "Fred Barnett",
      wrong: ["Calvin Williams", "Keith Jackson", "Mike Quick"],
      explanation: "Fred Barnett, an Arkansas State product, turned Cunningham's escape into one of the longest touchdown plays in Eagles history.",
      sources: [wiki("Fred_Barnett"), wiki("Randall_Cunningham")],
    },
    timeline: {
      events: [
        ["Roman Gabriel arrives in a trade with the Rams", 1973],
        ["Pete Retzlaff becomes general manager", 1969],
        ["Bill Bergey arrives in a trade with Cincinnati", 1974],
        ["Bill Bradley leads the NFL in interceptions for the first time", 1971],
      ],
      sources: [wiki("Pete_Retzlaff"), wiki("Bill_Bradley_(American_football)"), wiki("Roman_Gabriel"), wiki("Bill_Bergey")],
    },
    overtime: {
      prompt: "In 1939 the Eagles played in the first NFL game ever shown on television. Which team beat them at Ebbets Field?",
      answer: "Brooklyn Dodgers",
      wrong: ["New York Giants", "Pittsburgh Pirates", "Chicago Cardinals"],
      explanation: "The Brooklyn Dodgers won the game, which NBC broadcast to the few television sets then in the New York area.",
      sources: [wiki("Brooklyn_Dodgers_(NFL)"), wiki("History_of_the_Philadelphia_Eagles")],
    },
  }),

  puzzle(32, {
    scout: {
      clue: "A Nebraska tackle taken second overall in 1964, 'the Boomer' was known for punishing blocks in Philadelphia before trades sent him to the Rams and then the Raiders, and he entered the Hall of Fame in 2004.",
      answer: "Bob Brown",
      wrong: ["Jerry Sisemore", "Stan Walters", "Jim Ringo"],
      explanation: "Bob Brown played for the Eagles from 1964 to 1968, then spent two seasons with the Los Angeles Rams and three with the Oakland Raiders.",
      sources: [wiki("Bob_Brown_(offensive_lineman)")],
    },
    teammates: {
      athletes: ["Brent Celek", "Jason Kelce"],
      shared: "college",
      answer: "Cincinnati",
      wrong: ["Louisville", "Miami (Ohio)", "Toledo"],
      explanation: "Celek, a 2007 fifth-round pick, and Kelce, a 2011 sixth-round pick, both came out of Cincinnati and won Super Bowl LII together.",
      sources: [wiki("Brent_Celek"), wiki("Jason_Kelce")],
    },
    replay: {
      clue: "Trailing Vince Lombardi's Packers 13–10 in the fourth quarter of the 1960 NFL Championship Game, the Eagles get a long kickoff return from a rookie, who finishes the drive with a 5-yard touchdown run.",
      answer: "Ted Dean",
      wrong: ["Billy Ray Barnes", "Clarence Peaks", "Tommy McDonald"],
      explanation: "Ted Dean's 58-yard return and touchdown run gave the Eagles a 17–13 lead, which Chuck Bednarik preserved on the final play.",
      sources: [wiki("1960_NFL_Championship_Game")],
    },
    timeline: {
      events: [
        ["Sonny Jurgensen is drafted out of Duke", 1957],
        ["Nick Skorich succeeds Buck Shaw as head coach", 1961],
        ["Jim Trimble becomes head coach", 1952],
        ["Hugh Devore becomes head coach", 1956],
      ],
      sources: [wiki("List_of_Philadelphia_Eagles_head_coaches"), wiki("Sonny_Jurgensen")],
    },
    overtime: {
      prompt: "Who was the first Eagle named Super Bowl MVP?",
      answer: "Nick Foles",
      wrong: ["Jalen Hurts", "Zach Ertz", "Brandon Graham"],
      explanation: "Nick Foles won the award for Super Bowl LII. Jalen Hurts became the second Eagle to win it seven years later, in Super Bowl LIX.",
      sources: [wiki("Super_Bowl_LII"), wiki("Super_Bowl_LIX")],
    },
  }),

  puzzle(33, {
    scout: {
      clue: "A brash BYU quarterback who had won Super Bowl XX with Chicago, he signed as Randall Cunningham's backup in 1990 and took over when Cunningham tore up his knee in the 1991 opener.",
      answer: "Jim McMahon",
      wrong: ["Bubby Brister", "Jeff Kemp", "Ken O'Brien"],
      explanation: "Jim McMahon kept the 1991 Eagles in the playoff race behind the 'Gang Green' defense, though they finished 10–6 and missed the postseason.",
      sources: [wiki("Jim_McMahon"), wiki("1991_Philadelphia_Eagles_season")],
    },
    teammates: {
      athletes: ["Michael Vick", "Claude Humphrey"],
      shared: "team",
      answer: "Atlanta Falcons",
      wrong: ["New York Jets", "Pittsburgh Steelers", "New Orleans Saints"],
      explanation: "Humphrey spent 11 seasons with the Atlanta Falcons before finishing his career with the Eagles, and Vick was Atlanta's No. 1 overall pick in 2001. Vick also played for the Jets and Steelers.",
      sources: [wiki("Claude_Humphrey"), wiki("Michael_Vick")],
    },
    replay: {
      clue: "In the third quarter of Super Bowl LII, an undrafted rookie running back hauls in a 22-yard pass at the back of the end zone, and the officials uphold the touchdown after a long review of whether he got both feet down.",
      answer: "Corey Clement",
      wrong: ["Jay Ajayi", "LeGarrette Blount", "Kenjon Barner"],
      explanation: "Corey Clement's catch put the Eagles up 29–19. He had also taken the direct snap on the 'Philly Special' in the first half.",
      sources: [wiki("Super_Bowl_LII"), wiki("Corey_Clement")],
    },
    timeline: {
      events: [
        ["An NFC Championship Game win over Atlanta", 2005],
        ["An NFC Championship Game loss in St. Louis", 2002],
        ["An NFC Championship Game loss to Carolina at Lincoln Financial Field", 2004],
        ["An NFC Championship Game loss to Tampa Bay in the final game at the Vet", 2003],
      ],
      sources: [
        wiki("2001_Philadelphia_Eagles_season"),
        wiki("2002_Philadelphia_Eagles_season"),
        wiki("2003_Philadelphia_Eagles_season"),
        wiki("2004_Philadelphia_Eagles_season"),
      ],
    },
    overtime: {
      prompt: "Who was the first Black head coach in Eagles history, named NFL Coach of the Year in his first season?",
      answer: "Ray Rhodes",
      wrong: ["Herman Edwards", "Tony Dungy", "Dennis Green"],
      explanation: "Ray Rhodes, formerly the 49ers' defensive coordinator, took over in 1995 and led the Eagles to a 10–6 record and a playoff win.",
      sources: [wiki("Ray_Rhodes")],
    },
  }),

  puzzle(34, {
    scout: {
      clue: "A Colorado cornerback who started on the 1960 title team, he had his No. 40 retired by the Eagles and later became Pat Summerall's partner in the CBS booth.",
      answer: "Tom Brookshier",
      wrong: ["Maxie Baughan", "Jimmy Carr", "Don Burroughs"],
      explanation: "Tom Brookshier's No. 40 is one of the Eagles' retired numbers, and he and Summerall were CBS's lead NFL broadcast team in the 1970s.",
      sources: [wiki("Tom_Brookshier")],
    },
    teammates: {
      athletes: ["Bobby Taylor", "Mike Golic"],
      shared: "college",
      answer: "Notre Dame",
      wrong: ["USC", "Michigan", "Boston College"],
      explanation: "Golic played on the Eagles' defensive line under Buddy Ryan, and Taylor arrived as a second-round pick in 1995. Both played at Notre Dame.",
      sources: [wiki("Mike_Golic"), wiki("Bobby_Taylor_(American_football)")],
    },
    replay: {
      clue: "Named the starter after Donovan McNabb was traded, this quarterback takes a hit from Clay Matthews in the 2010 opener against Green Bay, leaves with a concussion, and Michael Vick comes in.",
      answer: "Kevin Kolb",
      wrong: ["Mike Kafka", "A.J. Feeley", "Nick Foles"],
      explanation: "Kevin Kolb never got the job back. Vick played so well that Andy Reid made him the starter, and Kolb was traded to Arizona the next summer.",
      sources: [wiki("Kevin_Kolb"), wiki("2010_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Jevon Kearse signs as a free agent", 2004],
        ["Claude Humphrey arrives from Atlanta", 1979],
        ["Trent Cole is drafted in the fifth round", 2005],
        ["Clyde Simmons leads the NFL with 19 sacks", 1992],
      ],
      sources: [wiki("Claude_Humphrey"), wiki("Clyde_Simmons"), wiki("Jevon_Kearse"), wiki("Trent_Cole")],
    },
    overtime: {
      prompt: "What is the name of the Eagles' mascot?",
      answer: "Swoop",
      wrong: ["Talon", "Freedom", "Liberty"],
      explanation: "Swoop, a costumed bald eagle, works the sidelines at Lincoln Financial Field.",
      sources: [wiki("Philadelphia_Eagles")],
    },
  }),

  puzzle(35, {
    scout: {
      clue: "The 1995 Defensive Rookie of the Year with the Jets out of tiny Central State in Ohio, this defensive end came to Philadelphia in a 1998 trade and had 15 sacks in 2000.",
      answer: "Hugh Douglas",
      wrong: ["Jevon Kearse", "N.D. Kalu", "Mike Mamula"],
      explanation: "Hugh Douglas left for Jacksonville in 2003 but came back to the Eagles for his final season in 2004.",
      sources: [wiki("Hugh_Douglas_(American_football)")],
    },
    teammates: {
      athletes: ["Zach Ertz", "J.J. Arcega-Whiteside"],
      shared: "college",
      answer: "Stanford",
      wrong: ["California", "USC", "Oregon"],
      explanation: "Ertz was a 2013 second-round pick out of Stanford, and Arcega-Whiteside followed from Stanford as a 2019 second-round pick.",
      sources: [wiki("Zach_Ertz"), wiki("J._J._Arcega-Whiteside")],
    },
    replay: {
      clue: "Late in a November 1960 game at Yankee Stadium, Chuck Bednarik lowers his shoulder into a Giants star after a catch, knocking him out cold and forcing a fumble that seals the Eagles' win.",
      prompt: "Which Giants star did Bednarik knock out?",
      answer: "Frank Gifford",
      wrong: ["Kyle Rote", "Alex Webster", "Charlie Conerly"],
      explanation: "Frank Gifford missed the rest of 1960 and all of 1961. A photo of Bednarik celebrating over him became one of the most famous images in NFL history.",
      sources: [wiki("Frank_Gifford"), wiki("Chuck_Bednarik")],
    },
    timeline: {
      events: [
        ["Jason Kelce retires", 2024],
        ["Jason Kelce's parade speech in a Mummers costume", 2018],
        ["Jason Kelce arrives as a sixth-round pick", 2011],
        ["Jason Kelce faces his brother Travis in the Super Bowl", 2023],
      ],
      sources: [wiki("Jason_Kelce"), wiki("Super_Bowl_LVII")],
    },
    overtime: {
      prompt: "Which team, fresh from the All-America Football Conference, beat the two-time defending champion Eagles 35–10 in its first NFL game, in 1950?",
      answer: "Cleveland Browns",
      wrong: ["San Francisco 49ers", "Baltimore Colts", "New York Yankees"],
      explanation: "Paul Brown's Cleveland Browns stunned the Eagles in Philadelphia and went on to win the 1950 NFL title.",
      sources: [wiki("Cleveland_Browns"), wiki("History_of_the_Philadelphia_Eagles")],
    },
  }),

  puzzle(36, {
    scout: {
      clue: "Better known as a Bears tight end and coach, this Pitt product spent two seasons in Philadelphia after a 1967 trade for quarterback Jack Concannon, then moved on to Dallas.",
      answer: "Mike Ditka",
      wrong: ["Pete Retzlaff", "Gary Ballman", "Fred Hill"],
      explanation: "Mike Ditka won a Super Bowl as a player with Dallas and another as Chicago's head coach, and entered the Hall of Fame in 1988.",
      sources: [wiki("Mike_Ditka")],
    },
    teammates: {
      athletes: ["Nelson Agholor", "Matt Barkley"],
      shared: "college",
      answer: "USC",
      wrong: ["UCLA", "Stanford", "Oregon"],
      explanation: "Barkley, a four-year USC starter, was a 2013 fourth-round pick, and Agholor came out of USC as the 20th pick in 2015.",
      sources: [wiki("Nelson_Agholor"), wiki("Matt_Barkley")],
    },
    replay: {
      clue: "Down 24–14 late in Super Bowl XXXIX, Donovan McNabb finds a backup receiver for a 30-yard touchdown with under two minutes left, but the comeback falls short.",
      answer: "Greg Lewis",
      wrong: ["Todd Pinkston", "Freddie Mitchell", "L.J. Smith"],
      explanation: "Greg Lewis's catch cut New England's lead to 24–21, but the Patriots recovered the onside kick and held on.",
      sources: [wiki("Super_Bowl_XXXIX")],
    },
    timeline: {
      events: [
        ["Cris Carter is released by Buddy Ryan", 1990],
        ["Harold Carmichael's streak of games with a catch ends", 1980],
        ["Tommy McDonald is traded to Dallas", 1964],
        ["Mike Quick is drafted in the first round", 1982],
      ],
      sources: [wiki("Tommy_McDonald_(American_football)"), wiki("Harold_Carmichael"), wiki("Mike_Quick"), wiki("Cris_Carter")],
    },
    overtime: {
      prompt: "Which longtime Eagles special teams coordinator under Andy Reid became Baltimore's head coach in 2008 and won Super Bowl XLVII?",
      answer: "John Harbaugh",
      wrong: ["Ron Rivera", "Sean McDermott", "Brad Childress"],
      explanation: "John Harbaugh coached the Eagles' special teams from 1998 to 2006 and their defensive backs in 2007 before the Ravens hired him.",
      sources: [wiki("John_Harbaugh")],
    },
  }),

  puzzle(37, {
    scout: {
      clue: "A South Carolina State defensive tackle who spent four seasons in Pittsburgh, he signed with the Eagles in 2020, had 11 sacks for the 2022 NFC champions, then left for San Francisco.",
      answer: "Javon Hargrave",
      wrong: ["Fletcher Cox", "Milton Williams", "Jordan Davis"],
      explanation: "Javon Hargrave was part of a 2022 defense that set a franchise record with 70 sacks, and he signed with the 49ers the following March.",
      sources: [wiki("Javon_Hargrave"), wiki("2022_Philadelphia_Eagles_season")],
    },
    teammates: {
      athletes: ["DeSean Jackson", "Nnamdi Asomugha"],
      shared: "college",
      answer: "Cal",
      wrong: ["Stanford", "UCLA", "Oregon"],
      explanation: "Jackson was a second-round pick out of Cal in 2008, and Asomugha, also a Cal product, signed with the Eagles as a free agent from Oakland in 2011.",
      sources: [wiki("DeSean_Jackson"), wiki("Nnamdi_Asomugha")],
    },
    replay: {
      clue: "With 10 seconds left in a January 2019 wild-card game in Chicago, the Bears' kicker, a former Eagle, lines up a 43-yard try. It is tipped at the line, hits the upright, then the crossbar, and falls short.",
      prompt: "Whose kick was the 'Double Doink'?",
      answer: "Cody Parkey",
      wrong: ["Robbie Gould", "Connor Barth", "Eddy Piñeiro"],
      explanation: "Cody Parkey, who had kicked for the Eagles in 2014, saw his try deflected by Treyvon Hester, and the Eagles won 16–15.",
      sources: [wiki("Double_Doink"), wiki("Cody_Parkey")],
    },
    timeline: {
      events: [
        ["Asante Samuel signs from New England", 2008],
        ["Jason Peters arrives in a trade with Buffalo", 2009],
        ["Jeff Garcia takes over for an injured Donovan McNabb", 2006],
        ["Kevin Kolb is drafted in the second round", 2007],
      ],
      sources: [wiki("Jeff_Garcia"), wiki("Kevin_Kolb"), wiki("Asante_Samuel"), wiki("Jason_Peters")],
    },
    overtime: {
      prompt: "What is the name of the Eagles' fight song?",
      answer: "Fly, Eagles Fly",
      wrong: ["Bleed Green", "Gonna Fly Now", "Go, Birds, Go"],
      explanation: "'Fly, Eagles Fly' is sung after every Eagles touchdown and ends with the spelled-out chant 'E-A-G-L-E-S, Eagles!'",
      sources: [wiki("Fly,_Eagles_Fly")],
    },
  }),

  puzzle(38, {
    scout: {
      clue: "A Michigan right tackle who started in Super Bowl XXXIV for Tennessee, he signed with the Eagles in 2000, anchored the right side of the line through 2008, and was later elected to Congress from New Jersey.",
      answer: "Jon Runyan",
      wrong: ["Tra Thomas", "Jermane Mayberry", "Todd Herremans"],
      explanation: "Jon Runyan represented New Jersey's 3rd District in the House of Representatives from 2011 to 2015.",
      sources: [wiki("Jon_Runyan")],
    },
    teammates: {
      athletes: ["Brandon Brooks", "DeMeco Ryans"],
      shared: "team",
      answer: "Houston Texans",
      wrong: ["Tennessee Titans", "Indianapolis Colts", "Jacksonville Jaguars"],
      explanation: "Ryans, Houston's 2006 Defensive Rookie of the Year, was traded to the Eagles in 2012. Brooks started his career with the Houston Texans and signed with the Eagles in 2016.",
      sources: [wiki("DeMeco_Ryans"), wiki("Brandon_Brooks")],
    },
    replay: {
      clue: "With Atlanta at the Eagles' 2-yard line in the final minute of a January 2018 playoff game, Matt Ryan throws to his star receiver in the back of the end zone on fourth down, and the pass falls incomplete.",
      answer: "Julio Jones",
      wrong: ["Mohamed Sanu", "Taylor Gabriel", "Austin Hooper"],
      explanation: "The incompletion to Julio Jones sealed a 15–10 win, the first of Nick Foles's three playoff victories that season.",
      sources: [wiki("2017_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Nick Foles makes his first NFL start", 2012],
        ["Nnamdi Asomugha signs as a free agent", 2011],
        ["Jeremy Maclin is drafted in the first round", 2009],
        ["Kevin Kolb is knocked out of the opener, and Michael Vick takes over", 2010],
      ],
      sources: [wiki("Jeremy_Maclin"), wiki("Kevin_Kolb"), wiki("Nnamdi_Asomugha"), wiki("Nick_Foles")],
    },
    overtime: {
      prompt: "Who was the Eagles' first head coach, from 1933 to 1935?",
      answer: "Lud Wray",
      wrong: ["Bert Bell", "Greasy Neale", "Bo McMillin"],
      explanation: "Lud Wray co-founded the team with Bert Bell, coached its first three seasons, and handed the job to Bell in 1936.",
      sources: [wiki("Lud_Wray"), wiki("List_of_Philadelphia_Eagles_head_coaches")],
    },
  }),

  puzzle(39, {
    scout: {
      clue: "An Olympic medalist sprinter from the University of San Francisco, this Hall of Fame running back was so prized that the Rams once traded nine players for him. He finished his career with the Eagles from 1964 to 1966.",
      answer: "Ollie Matson",
      wrong: ["Timmy Brown", "Tom Woodeshick", "Earl Gros"],
      explanation: "Ollie Matson won two medals at the 1952 Olympics and entered the Pro Football Hall of Fame in 1972.",
      sources: [wiki("Ollie_Matson")],
    },
    teammates: {
      athletes: ["Steve Van Buren", "Jalen Mills"],
      shared: "college",
      answer: "LSU",
      wrong: ["Tulane", "Alabama", "Ole Miss"],
      explanation: "Van Buren ran for LSU before the Eagles drafted him in 1944, and Mills played in LSU's secondary before the Eagles took him in the seventh round in 2016.",
      sources: [wiki("Steve_Van_Buren"), wiki("Jalen_Mills")],
    },
    replay: {
      clue: "In the January 2005 NFC Championship Game against Atlanta, a veteran tight end catches two touchdown passes from Donovan McNabb, but hurts his foot on the second and misses the Super Bowl.",
      answer: "Chad Lewis",
      wrong: ["L.J. Smith", "Freddie Mitchell", "Brian Westbrook"],
      explanation: "Chad Lewis's foot injury ended his season, as the Eagles beat the Falcons 27–10 to reach Super Bowl XXXIX.",
      sources: [wiki("Chad_Lewis"), wiki("2004_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Duce Staley runs for 201 yards in Dallas", 2000],
        ["Wilbert Montgomery is drafted in the sixth round", 1977],
        ["Brian Westbrook leads the NFL in yards from scrimmage", 2007],
        ["Keith Byars is drafted in the first round", 1986],
      ],
      sources: [wiki("Wilbert_Montgomery"), wiki("Keith_Byars"), wiki("Duce_Staley"), wiki("Brian_Westbrook")],
    },
    overtime: {
      prompt: "Who was Andy Reid's blitz-loving defensive coordinator from 1999 until his death in 2009?",
      answer: "Jim Johnson",
      wrong: ["Sean McDermott", "Bill Davis", "Bud Carson"],
      explanation: "Jim Johnson's aggressive defenses helped the Eagles reach five NFC Championship Games. He died of cancer in July 2009.",
      sources: [wiki("Jim_Johnson_(American_football_coach)")],
    },
  }),

  puzzle(40, {
    scout: {
      clue: "A college quarterback at Southwestern Louisiana who became Washington's star returner, he signed with the Eagles in 2000 and retired second only to Jerry Rice in career all-purpose yards.",
      answer: "Brian Mitchell",
      wrong: ["Allen Rossum", "Reno Mahe", "Quintin Demps"],
      explanation: "Brian Mitchell spent three seasons as the Eagles' returner. As a Washington rookie in 1990, he had finished the 'Body Bag Game' at quarterback.",
      sources: [wiki("Brian_Mitchell_(running_back)"), wiki("Body_Bag_Game")],
    },
    teammates: {
      athletes: ["Fletcher Cox", "Darius Slay"],
      shared: "college",
      answer: "Mississippi State",
      wrong: ["Ole Miss", "Alabama", "LSU"],
      explanation: "Cox was a 2012 first-round pick out of Mississippi State, and Slay, another Bulldog, arrived in a 2020 trade with Detroit.",
      sources: [wiki("Fletcher_Cox"), wiki("Darius_Slay")],
    },
    replay: {
      clue: "In October 1999, a Cowboys star receiver lies motionless after being driven into the Veterans Stadium turf, and some fans cheer. The neck injury ends his Hall of Fame career.",
      answer: "Michael Irvin",
      wrong: ["Raghib Ismail", "Deion Sanders", "Emmitt Smith"],
      explanation: "Michael Irvin was taken off on a stretcher and never played again. The cheering became one of the most criticized moments in Philadelphia fan history.",
      sources: [wiki("Michael_Irvin"), wiki("Veterans_Stadium")],
    },
    timeline: {
      events: [
        ["Michael Vick's six-touchdown Monday night in Washington", 2010],
        ["Michael Vick goes first overall to Atlanta", 2001],
        ["Michael Vick leaves for the Jets", 2014],
        ["Michael Vick joins the Eagles as a backup", 2009],
      ],
      sources: [wiki("Michael_Vick")],
    },
    overtime: {
      prompt: "Which Eagles executive was stripped of personnel control by Chip Kelly in 2015, then regained it and built the Super Bowl LII champions?",
      answer: "Howie Roseman",
      wrong: ["Joe Banner", "Tom Donahoe", "Ed Marynowitz"],
      explanation: "Howie Roseman was moved aside in 2015, returned to power after Kelly's firing, and ran the Eagles' football operations for both Super Bowl wins.",
      sources: [wiki("Howie_Roseman"), wiki("Chip_Kelly")],
    },
  }),
];
