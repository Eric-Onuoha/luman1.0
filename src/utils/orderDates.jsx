
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
  
