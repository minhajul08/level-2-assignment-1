// problem - 7

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Friday || day === Day.Saturday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
  
  
  // console.log(getDayType(Day.Friday));   
  // console.log(getDayType(Day.Tuesday)); 