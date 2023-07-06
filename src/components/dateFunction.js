import { useState } from "react";


export default function GetMonthName({data}){
    // console.log(data)
    const {month} = data;
    // console.log(month)
        const choice = data.month;
        const choice1 = data.day;
        const [month1, setMonth] = useState([])
        switch(choice){
            case 0 : month1.push({mon:"January"}) ;
                     break;
            case 1 : month1.push({mon:"Febraury"}) ;
            break;
            case 2 : month1.push({mon:"March"}) ;
            break;
            case 3 : month1.push({mon: "April"}) ;
            break;
            case 4 : month1.push({mon:"May"}) ;
            break;
            case 5 : month1.push({mon:"June"}) ;
            break;
            case 6 :  month1.push({mon:"July"});
                      break;
            case 7 : month1.push({mon:"August"}) ;
            break;
            case 8 : month1.push({mon:"September"}) ;
            break;
            case 9 : month1.push({mon:"October"}) ;
            break;
            case 10 : month1.push({mon:"November"}) ;
            break;
            case 11 : month1.push({mon:"December"}) ;
            break;
        }

        switch(choice1){
            case 0 : month1.push({day:"Sunday"});
                     break;
            case 1 : month1.push({day:"Monday"});
                     break;
            case 2 : month1.push({day:"Tuesday"});
                     break;
            case 3 : month1.push({day:"Wednesday"});
                     break;
            case 4 : month1.push({day:"Thursday"});
                     break;
            case 5 : month1.push({day:"Friday"});
                     break;
            case 6 : month1.push({day:"Saturday"});
                     break;
        }
    console.log(month1)
    return(
        <>
           {`${month1[1].day}, ${month1[0].mon}` }
        </>
    )
}