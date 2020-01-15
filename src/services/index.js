export const getNumberOfDaysInMonth = (month, year) =>  {
    // devuelve el numero de dias de un mes
    return new Date(year, month, 0).getDate();
};

export const getDayInMonth = (year,month) => {
    // devuelve el numero del primer dia del mes
    //return new Date(year+','+month).getDay();
    //return new Date("2020/01/01").getDay();
    return new Date(""+year+"/"+month+"/01").getDay();
}
