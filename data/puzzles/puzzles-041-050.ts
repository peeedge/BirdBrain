import { puzzle, wiki } from "./builders";

export const PUZZLES_041_050 = [
  puzzle(41, {
    scout: {
      clue: "Nicknamed 'the Freak' for his size and speed, this Florida pass rusher was the 1999 Defensive Rookie of the Year with Tennessee and signed a big free-agent deal with the Eagles in 2004, the year they reached Super Bowl XXXIX.",
      answer: "Jevon Kearse",
      wrong: ["Hugh Douglas", "Derrick Burgess", "Darwin Walker"],
      explanation: "Jevon Kearse played four seasons in Philadelphia before returning to the Titans in 2008.",
      sources: [wiki("Jevon_Kearse")],
    },
    teammates: {
      athletes: ["Randall Cunningham", "Jeremy Maclin"],
      shared: "team",
      answer: "Baltimore Ravens",
      wrong: ["Minnesota Vikings", "Kansas City Chiefs", "Dallas Cowboys"],
      explanation: "Cunningham finished his career as a Baltimore Ravens backup in 2001, and Maclin played his final season there in 2017. Cunningham also played for Minnesota and Dallas; Maclin also played for Kansas City.",
      sources: [wiki("Randall_Cunningham"), wiki("Jeremy_Maclin")],
    },
    replay: {
      clue: "In the first quarter of Super Bowl XV, Raiders quarterback Jim Plunkett, scrambling, flips a short pass to a running back near the sideline, who runs the rest of the way for an 80-yard touchdown.",
      answer: "Kenny King",
      wrong: ["Mark van Eeghen", "Cliff Branch", "Bob Chandler"],
      explanation: "Kenny King's catch was the longest play in Super Bowl history at the time, and it put the Raiders up 14–0.",
      sources: [wiki("Super_Bowl_XV")],
    },
    timeline: {
      events: [
        ["Frank Reich is hired as the Colts' head coach", 2018],
        ["John Harbaugh is hired as the Ravens' head coach", 2008],
        ["Sean McDermott is hired as the Bills' head coach", 2017],
        ["Ron Rivera is hired as the Panthers' head coach", 2011],
      ],
      note: "All four had been Eagles assistants.",
      sources: [wiki("John_Harbaugh"), wiki("Ron_Rivera"), wiki("Sean_McDermott"), wiki("Frank_Reich")],
    },
    overtime: {
      prompt: "Which team beat the Eagles 29–24 in the January 2002 NFC Championship Game?",
      answer: "St. Louis Rams",
      wrong: ["Tampa Bay Buccaneers", "Carolina Panthers", "Chicago Bears"],
      explanation: "The St. Louis Rams, the 'Greatest Show on Turf', held off Donovan McNabb's Eagles in their dome and went on to lose Super Bowl XXXVI to New England.",
      sources: [wiki("2001_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(42, {
    scout: {
      clue: "A Miami (Ohio) guard who came from Houston as a free agent in 2016, he spoke openly about his anxiety, made three Pro Bowls, and started at right guard for the Super Bowl LII champions.",
      answer: "Brandon Brooks",
      wrong: ["Isaac Seumalo", "Stefen Wisniewski", "Evan Mathis"],
      explanation: "Brandon Brooks missed games over the years because of anxiety-related illness, and his openness helped other players talk about mental health.",
      sources: [wiki("Brandon_Brooks")],
    },
    teammates: {
      athletes: ["Javon Hargrave", "Bubby Brister"],
      shared: "team",
      answer: "Pittsburgh Steelers",
      wrong: ["San Francisco 49ers", "New York Jets", "Denver Broncos"],
      explanation: "Brister was the Pittsburgh Steelers' starter in the late 1980s, and Hargrave played four seasons there before signing with the Eagles. Brister later played for the Jets and Broncos; Hargrave left for San Francisco.",
      sources: [wiki("Bubby_Brister"), wiki("Javon_Hargrave")],
    },
    replay: {
      clue: "With Super Bowl LVII tied 35–35 and under two minutes left, an Eagles cornerback is flagged for holding JuJu Smith-Schuster on third down, letting Kansas City run down the clock for the winning field goal.",
      answer: "James Bradberry",
      wrong: ["Darius Slay", "Avonte Maddox", "C.J. Gardner-Johnson"],
      explanation: "James Bradberry admitted afterward that he had held. Harrison Butker's field goal with eight seconds left won it for Kansas City, 38–35.",
      sources: [wiki("Super_Bowl_LVII"), wiki("James_Bradberry")],
    },
    timeline: {
      events: [
        ["Harold Carmichael enters the Hall of Fame", 2020],
        ["Bob Brown enters the Hall of Fame", 2004],
        ["Tommy McDonald enters the Hall of Fame", 1998],
        ["Claude Humphrey enters the Hall of Fame", 2014],
      ],
      sources: [wiki("Tommy_McDonald_(American_football)"), wiki("Bob_Brown_(offensive_lineman)"), wiki("Claude_Humphrey"), wiki("Harold_Carmichael")],
    },
    overtime: {
      prompt: "Which Patriots receiver was named MVP of Super Bowl XXXIX against the Eagles?",
      answer: "Deion Branch",
      wrong: ["Troy Brown", "David Givens", "Tom Brady"],
      explanation: "Deion Branch tied a Super Bowl record with 11 catches, for 133 yards, in New England's 24–21 win.",
      sources: [wiki("Super_Bowl_XXXIX"), wiki("Deion_Branch")],
    },
  }),

  puzzle(43, {
    scout: {
      clue: "Known as 'Big Play Slay', this Mississippi State cornerback spent seven seasons in Detroit before a 2020 trade, then made Pro Bowls and won Super Bowl LIX in Philadelphia.",
      answer: "Darius Slay",
      wrong: ["James Bradberry", "Avonte Maddox", "Quinyon Mitchell"],
      explanation: "Darius Slay arrived in a trade with the Lions and started for both of the Eagles' Super Bowl teams of the 2020s.",
      sources: [wiki("Darius_Slay")],
    },
    teammates: {
      athletes: ["DeSean Jackson", "Michael Bennett"],
      shared: "team",
      answer: "Tampa Bay Buccaneers",
      wrong: ["Seattle Seahawks", "Washington", "Dallas Cowboys"],
      explanation: "Bennett played four seasons for the Tampa Bay Buccaneers before his Seattle years, and Jackson spent 2017 and 2018 there before returning to the Eagles. Bennett also played for Seattle and Dallas; Jackson for Washington.",
      sources: [wiki("DeSean_Jackson"), wiki("Michael_Bennett_(defensive_lineman,_born_1985)")],
    },
    replay: {
      clue: "In the first quarter of the January 2023 NFC Championship Game, an Eagles edge rusher hits Brock Purdy as he throws, injuring the 49ers rookie's elbow and forcing a fumble.",
      answer: "Haason Reddick",
      wrong: ["Brandon Graham", "Josh Sweat", "Javon Hargrave"],
      explanation: "Haason Reddick's hit left Purdy unable to throw the ball downfield, and the Eagles rolled to a 31–7 win.",
      sources: [wiki("Haason_Reddick"), wiki("2022_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Brian Dawkins signs with Denver", 2009],
        ["Brian Dawkins is drafted in the second round", 1996],
        ["The Eagles retire Brian Dawkins's No. 20", 2012],
        ["Brian Dawkins records a sack, an interception, a forced fumble and a touchdown catch in one game", 2002],
      ],
      sources: [wiki("Brian_Dawkins")],
    },
    overtime: {
      prompt: "Who was named MVP of Super Bowl LVII, the Eagles' 38–35 loss to Kansas City?",
      answer: "Patrick Mahomes",
      wrong: ["Travis Kelce", "Isiah Pacheco", "Harrison Butker"],
      explanation: "Patrick Mahomes played through a high ankle sprain and threw three touchdown passes.",
      sources: [wiki("Super_Bowl_LVII")],
    },
  }),

  puzzle(44, {
    scout: {
      clue: "A Texas quarterback turned safety, this 1969 draft pick led the NFL in interceptions in both 1971 and 1972.",
      answer: "Bill Bradley",
      wrong: ["Randy Logan", "Herman Edwards", "Nate Ramsey"],
      explanation: "Bill Bradley, nicknamed 'Super Bill', had 34 career interceptions for the Eagles, tied for the franchise record.",
      sources: [wiki("Bill_Bradley_(American_football)")],
    },
    teammates: {
      athletes: ["Brian Dawkins", "Seth Joyner"],
      shared: "team",
      answer: "Denver Broncos",
      wrong: ["Arizona Cardinals", "Green Bay Packers", "Kansas City Chiefs"],
      explanation: "Dawkins spent his last three seasons with the Denver Broncos, and Joyner won Super Bowl XXXIII there in his final season. Joyner had also played for Arizona and Green Bay.",
      sources: [wiki("Brian_Dawkins"), wiki("Seth_Joyner")],
    },
    replay: {
      clue: "In the second quarter of Super Bowl LII, the Patriots run a trick play with receiver Danny Amendola throwing, but the wide-open target lets the ball slip through his hands.",
      prompt: "Who dropped the pass?",
      answer: "Tom Brady",
      wrong: ["Rob Gronkowski", "Chris Hogan", "James White"],
      explanation: "Tom Brady's drop came shortly before the Eagles ran their own trick play, the 'Philly Special', for a touchdown.",
      sources: [wiki("Super_Bowl_LII")],
    },
    timeline: {
      events: [
        ["Josh McCown makes his playoff debut at age 40", 2020],
        ["Sheldon Brown flattens Reggie Bush in a playoff game", 2007],
        ["Haason Reddick's strip-sack of Brock Purdy", 2023],
        ["Asante Samuel's pick-six in a playoff win at Minnesota", 2009],
      ],
      sources: [wiki("Sheldon_Brown_(American_football)"), wiki("Asante_Samuel"), wiki("Josh_McCown"), wiki("Haason_Reddick")],
    },
    overtime: {
      prompt: "Saquon Barkley sat out the 2024 regular-season finale rather than chase whose NFL single-season rushing record of 2,105 yards?",
      answer: "Eric Dickerson",
      wrong: ["Adrian Peterson", "Barry Sanders", "Terrell Davis"],
      explanation: "Eric Dickerson ran for 2,105 yards for the Rams in 1984. Barkley finished with 2,005 after resting in the last game.",
      sources: [wiki("Eric_Dickerson"), wiki("Saquon_Barkley")],
    },
  }),

  puzzle(45, {
    scout: {
      clue: "A Cal cornerback who had been a shutdown star in Oakland, he was the biggest name in the Eagles' 2011 free-agent haul, but the 'Dream Team' flopped and he was released after two seasons.",
      answer: "Nnamdi Asomugha",
      wrong: ["Dominique Rodgers-Cromartie", "Asante Samuel", "Brandon Boykin"],
      explanation: "Nnamdi Asomugha signed a five-year deal in 2011, but the Eagles went 8–8 that season and released him in 2013.",
      sources: [wiki("Nnamdi_Asomugha")],
    },
    teammates: {
      athletes: ["Carson Wentz", "Trent Cole"],
      shared: "team",
      answer: "Indianapolis Colts",
      wrong: ["Washington", "Houston Texans", "Jacksonville Jaguars"],
      explanation: "Cole signed with the Indianapolis Colts after the Eagles released him in 2015, and Wentz was traded there in 2021. Wentz later played for Washington.",
      sources: [wiki("Trent_Cole"), wiki("Carson_Wentz")],
    },
    replay: {
      clue: "After Donovan McNabb tears his ACL in November 2006, a 36-year-old backup takes over, wins five straight starts to close the regular season, and leads the Eagles to the NFC East title.",
      answer: "Jeff Garcia",
      wrong: ["A.J. Feeley", "Koy Detmer", "Kevin Kolb"],
      explanation: "Jeff Garcia also won a playoff game against the Giants before the Eagles lost at New Orleans.",
      sources: [wiki("Jeff_Garcia"), wiki("2006_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Darius Slay arrives in a trade with Detroit", 2020],
        ["Nate Sudfeld replaces Jalen Hurts in the season finale", 2021],
        ["Alshon Jeffery signs as a free agent", 2017],
        ["Michael Bennett arrives in a trade with Seattle", 2018],
      ],
      sources: [wiki("Alshon_Jeffery"), wiki("Michael_Bennett_(defensive_lineman,_born_1985)"), wiki("Darius_Slay"), wiki("Nate_Sudfeld")],
    },
    overtime: {
      prompt: "In 2023 the Eagles brought back alternate jerseys in which color, their primary color until 1995?",
      answer: "Kelly green",
      wrong: ["Midnight green", "Forest green", "Silver"],
      explanation: "The Eagles wore kelly green until switching to midnight green in 1996, and fans campaigned for years to bring the old color back.",
      sources: [wiki("Philadelphia_Eagles")],
    },
  }),

  puzzle(46, {
    scout: {
      clue: "The son of a Hall of Fame defensive end, this Virginia pass rusher won back-to-back Super Bowls with New England and the Eagles, and donated his entire 2017 salary to education charities.",
      answer: "Chris Long",
      wrong: ["Derek Barnett", "Vinny Curry", "Brandon Graham"],
      explanation: "Chris Long, son of Howie Long, also forced the interception that Patrick Robinson returned for a touchdown in the January 2018 NFC Championship Game.",
      sources: [wiki("Chris_Long")],
    },
    teammates: {
      athletes: ["Jevon Kearse", "DeMarco Murray"],
      shared: "team",
      answer: "Tennessee Titans",
      wrong: ["Dallas Cowboys", "Houston Texans", "Jacksonville Jaguars"],
      explanation: "Kearse starred for the Tennessee Titans before and after his Eagles years, and Murray was traded there after one season in Philadelphia. Murray had started his career in Dallas.",
      sources: [wiki("Jevon_Kearse"), wiki("DeMarco_Murray")],
    },
    replay: {
      clue: "In a January 2009 wild-card game at Minnesota, an Eagles cornerback picks off Tarvaris Jackson and returns it for a touchdown in a 26–14 win.",
      answer: "Asante Samuel",
      wrong: ["Sheldon Brown", "Lito Sheppard", "Quintin Mikell"],
      explanation: "Asante Samuel had signed from New England the previous spring, and the win started a run to the NFC Championship Game.",
      sources: [wiki("Asante_Samuel"), wiki("2008_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["DeSean Jackson is released and signs with Washington", 2014],
        ["DeSean Jackson is drafted in the second round", 2008],
        ["DeSean Jackson is traded back to the Eagles from Tampa Bay", 2019],
        ["DeSean Jackson's walk-off punt return against the Giants", 2010],
      ],
      sources: [wiki("DeSean_Jackson")],
    },
    overtime: {
      prompt: "Who replaced the retired Jason Kelce as the Eagles' starting center in 2024?",
      answer: "Cam Jurgens",
      wrong: ["Landon Dickerson", "Isaac Seumalo", "Tyler Steen"],
      explanation: "Cam Jurgens, a 2022 second-round pick out of Nebraska, had spent two years as Kelce's understudy.",
      sources: [wiki("Cam_Jurgens")],
    },
  }),

  puzzle(47, {
    scout: {
      clue: "The first overall pick in 2010 by the Rams, this Oklahoma quarterback came to Philadelphia in a 2015 trade for Nick Foles, started one season under Chip Kelly, then was dealt to Minnesota a week before the 2016 opener.",
      answer: "Sam Bradford",
      wrong: ["Mark Sanchez", "Chase Daniel", "Carson Wentz"],
      explanation: "Sam Bradford's trade to the Vikings, for a first-round pick, cleared the way for rookie Carson Wentz to start right away.",
      sources: [wiki("Sam_Bradford")],
    },
    teammates: {
      athletes: ["Terrell Owens", "David Akers"],
      shared: "team",
      answer: "San Francisco 49ers",
      wrong: ["Dallas Cowboys", "Detroit Lions", "Buffalo Bills"],
      explanation: "Owens spent eight seasons with the San Francisco 49ers before joining the Eagles, and Akers kicked for San Francisco after leaving Philadelphia in 2011. Owens also played for Dallas and Buffalo; Akers finished in Detroit.",
      sources: [wiki("Terrell_Owens"), wiki("David_Akers")],
    },
    replay: {
      clue: "With the Eagles down 24–21 and trying one last drive in the final minute of Super Bowl XXXIX, a Patriots safety intercepts Donovan McNabb to end the game.",
      answer: "Rodney Harrison",
      wrong: ["Tedy Bruschi", "Asante Samuel", "Eugene Wilson"],
      explanation: "Rodney Harrison's second interception of the game sealed New England's third Super Bowl title in four years.",
      sources: [wiki("Super_Bowl_XXXIX"), wiki("Rodney_Harrison")],
    },
    timeline: {
      events: [
        ["Rich Kotite becomes the Jets' head coach", 1995],
        ["Andy Reid becomes the Chiefs' head coach", 2013],
        ["Buddy Ryan becomes the Cardinals' head coach", 1994],
        ["Ray Rhodes becomes the Packers' head coach", 1999],
      ],
      sources: [wiki("Buddy_Ryan"), wiki("Rich_Kotite"), wiki("Ray_Rhodes"), wiki("Andy_Reid")],
    },
    overtime: {
      prompt: "Which backup quarterback, signed in 2011, called that year's star-studded Eagles roster a 'Dream Team'?",
      answer: "Vince Young",
      wrong: ["Mike Kafka", "Kevin Kolb", "Michael Vick"],
      explanation: "Vince Young's 'Dream Team' line followed the Eagles all season as they started 4–8 and finished 8–8.",
      sources: [wiki("Vince_Young"), wiki("2011_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(48, {
    scout: {
      clue: "Undrafted out of Arkansas as a tight end, this mammoth tackle became a Pro Bowler in Buffalo, arrived in a 2009 trade, and protected the blind side for over a decade, though a torn ACL kept him out of Super Bowl LII.",
      answer: "Jason Peters",
      wrong: ["Tra Thomas", "Jordan Mailata", "Lane Johnson"],
      explanation: "Jason Peters played 12 seasons for the Eagles, through 2020, and was one of the best left tackles of his era.",
      sources: [wiki("Jason_Peters")],
    },
    teammates: {
      athletes: ["Hugh Douglas", "Nick Foles"],
      shared: "team",
      answer: "Jacksonville Jaguars",
      wrong: ["New York Jets", "Chicago Bears", "Houston Texans"],
      explanation: "Douglas spent 2003 with the Jacksonville Jaguars between his Eagles stints, and Foles signed there in 2019 after his Super Bowl run. Douglas had started with the Jets; Foles also played for Chicago.",
      sources: [wiki("Hugh_Douglas_(American_football)"), wiki("Nick_Foles")],
    },
    replay: {
      clue: "In the January 2009 NFC Championship Game in Arizona, a Cardinals receiver catches three first-half touchdown passes from Kurt Warner as the Eagles fall behind 24–6.",
      answer: "Larry Fitzgerald",
      wrong: ["Anquan Boldin", "Steve Breaston", "Edgerrin James"],
      explanation: "The Eagles rallied to lead 25–24 in the fourth quarter, but Larry Fitzgerald's Cardinals scored late and won 32–25.",
      sources: [wiki("Larry_Fitzgerald"), wiki("2008_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Kelly green alternate jerseys return", 2023],
        ["Haason Reddick signs as a free agent", 2022],
        ["Javon Hargrave signs as a free agent", 2020],
        ["DeVonta Smith is drafted 10th overall", 2021],
      ],
      sources: [wiki("Javon_Hargrave"), wiki("DeVonta_Smith"), wiki("Haason_Reddick"), wiki("Philadelphia_Eagles")],
    },
    overtime: {
      prompt: "Which defensive coordinator of the Eagles' Super Bowl LVII team left to become the Arizona Cardinals' head coach?",
      answer: "Jonathan Gannon",
      wrong: ["Vic Fangio", "Sean Desai", "Jim Schwartz"],
      explanation: "Jonathan Gannon was hired by Arizona days after Super Bowl LVII, following two seasons running the Eagles' defense.",
      sources: [wiki("Jonathan_Gannon")],
    },
  }),

  puzzle(49, {
    scout: {
      clue: "Born in London, this Boise State running back came from Miami in a midseason trade in 2017 and added a burst to the backfield of the eventual Super Bowl champions.",
      answer: "Jay Ajayi",
      wrong: ["LeGarrette Blount", "Corey Clement", "Wendell Smallwood"],
      explanation: "Jay Ajayi had been a Pro Bowler with the Dolphins in 2016, and the Eagles got him for a fourth-round pick.",
      sources: [wiki("Jay_Ajayi")],
    },
    teammates: {
      athletes: ["Reggie White", "Haason Reddick"],
      shared: "team",
      answer: "Carolina Panthers",
      wrong: ["Green Bay Packers", "Arizona Cardinals", "New York Jets"],
      explanation: "White played his final season, 2000, for the Carolina Panthers, and Reddick spent 2021 there before signing with the Eagles. White had starred for Green Bay; Reddick also played for Arizona and the Jets.",
      sources: [wiki("Reggie_White"), wiki("Haason_Reddick")],
    },
    replay: {
      clue: "Early in the fourth quarter of Super Bowl LVII, a Kansas City receiver fields an Eagles punt and races 65 yards, the longest punt return in Super Bowl history, setting up a go-ahead touchdown.",
      answer: "Kadarius Toney",
      wrong: ["Skyy Moore", "JuJu Smith-Schuster", "Mecole Hardman"],
      explanation: "Kadarius Toney's return set up a touchdown, and the Chiefs never trailed again on the way to a 38–35 win.",
      sources: [wiki("Super_Bowl_LVII"), wiki("Kadarius_Toney")],
    },
    timeline: {
      events: [
        ["Pete Pihos enters the Hall of Fame", 1970],
        ["Reggie White enters the Hall of Fame", 2006],
        ["Steve Van Buren enters the Hall of Fame", 1965],
        ["Chuck Bednarik enters the Hall of Fame", 1967],
      ],
      sources: [wiki("Steve_Van_Buren"), wiki("Chuck_Bednarik"), wiki("Pete_Pihos"), wiki("Reggie_White")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat 38–7 in the divisional round in January 2023, on the way to Super Bowl LVII?",
      answer: "New York Giants",
      wrong: ["Dallas Cowboys", "Tampa Bay Buccaneers", "Minnesota Vikings"],
      explanation: "The Eagles beat the New York Giants for the third time that season, then routed San Francisco in the NFC Championship Game.",
      sources: [wiki("2022_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(50, {
    scout: {
      clue: "An eighth-round pick out of UTEP in 1986, this outside linebacker was a 'Gang Green' leader, followed Buddy Ryan to Arizona in 1994, and won a Super Bowl ring with Denver in his final season.",
      answer: "Seth Joyner",
      wrong: ["Byron Evans", "William Thomas", "Jessie Small"],
      explanation: "Seth Joyner played eight seasons for the Eagles, from 1986 to 1993, before reuniting with Buddy Ryan in Arizona.",
      sources: [wiki("Seth_Joyner")],
    },
    teammates: {
      athletes: ["Troy Vincent", "Keith Jackson"],
      shared: "team",
      answer: "Miami Dolphins",
      wrong: ["Green Bay Packers", "Buffalo Bills", "New York Jets"],
      explanation: "Jackson left for the Miami Dolphins as a free agent in 1992, the same year Miami drafted Vincent. Jackson later won a title with Green Bay; Vincent finished his career in Buffalo and Washington.",
      sources: [wiki("Troy_Vincent"), wiki("Keith_Jackson_(tight_end)")],
    },
    replay: {
      clue: "Trailing 21–17 late in a November 2023 Monday night rematch of Super Bowl LVII at Arrowhead, Patrick Mahomes hits a wide-open receiver in stride deep downfield, and the ball goes right through his hands.",
      answer: "Marquez Valdes-Scantling",
      wrong: ["Rashee Rice", "Skyy Moore", "Justin Watson"],
      explanation: "Marquez Valdes-Scantling's drop helped the Eagles hold on for a 21–17 win in Kansas City, improving to 9–1.",
      sources: [wiki("Marquez_Valdes-Scantling"), wiki("2023_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Al Wistert's rookie season, with the 'Steagles'", 1943],
        ["The Eagles lose the NFL title game to the Chicago Cardinals", 1947],
        ["Bert Bell takes over as head coach", 1936],
        ["The Eagles lose the first televised NFL game", 1939],
      ],
      sources: [wiki("Bert_Bell"), wiki("Al_Wistert"), wiki("History_of_the_Philadelphia_Eagles")],
    },
    overtime: {
      prompt: "Which offensive coordinator, who called plays for Jalen Hurts in 2022, left to become the Colts' head coach in 2023?",
      answer: "Shane Steichen",
      wrong: ["Brian Johnson", "Frank Reich", "Kellen Moore"],
      explanation: "Shane Steichen was hired by Indianapolis in February 2023, and quarterbacks coach Brian Johnson took over as the Eagles' coordinator.",
      sources: [wiki("Shane_Steichen")],
    },
  }),
];
