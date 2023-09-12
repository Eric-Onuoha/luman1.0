
export const orderDates = (date1, date2) => {
    const extractDateInfo = dateString => {
        const [, year, month, day] = dateString.match(/(\d{4})([a-z]+)(\d+)/);
        return {
          year: parseInt(year),
          month: month,
          day: parseInt(day)
        };
      };
    
      const dateInfo1 = extractDateInfo(date1);
      const dateInfo2 = extractDateInfo(date2);
    
      const monthNames = [
        "january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
      ];
    
      const month1 = monthNames.indexOf(dateInfo1.month);
      const month2 = monthNames.indexOf(dateInfo2.month);
    
      if (dateInfo1.year !== dateInfo2.year) {
        return dateInfo1.year - dateInfo2.year;
      }
      if (month1 !== month2) {
        return month1 - month2;
      }
      return dateInfo1.day - dateInfo2.day;
  }

  export const getOrderedDates = (dateArray) => {
    
    const dateCode = [];
    const sortedDates = [];

    const monthNums = {
      "january": "01", 
      "february": "02", 
      "march": "03", 
      "april": "04", 
      "may": "05", 
      "june": "06",
      "july": "07", 
      "august": "08", 
      "september": "09", 
      "october": "10", 
      "november": "11", 
      "december": "12"
    }

    const months = {
      "01": "january", 
      "02": "february", 
      "03": "march", 
      "04": "april", 
      "05": "may", 
      "06": "june",
      "07": "july", 
      "08": "august", 
      "09": "september", 
      "10": "october", 
      "11": "november", 
      "12": "december"
    }

    dateArray.forEach(date => {
      const [fulldate, year, month, day] = date.match(/^(\d{4})([a-zA-Z]+)(\d+)$/); 
      {day.length > 1 ? (
        dateCode.push(year+monthNums[month]+day)
      ) : (
        dateCode.push(year+monthNums[month]+0+day)
      )}
    });

    dateCode.sort((a,b) => (b-a));

    dateCode.forEach(date => {
      const [fulldate, year, month, day1, day2] = date.match(/^(\d{4})(\d{2})(\d{1})(\d{1})$/);
      {day1 == 0 ? (
        sortedDates.push(year+months[month]+day2)
        ): (
        sortedDates.push(year+months[month]+day1+day2)
        )}
    })

    return sortedDates;
  }
  
