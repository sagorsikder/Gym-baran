
import CardPart from './CardPart';

const Card = () => {

    const cardInfo = [
        {id:1,title1:'Get that 11 line', title2:'in 30 days',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOzgc8keuJ_F-dTTiClmeLxe4Ze_7b7xxB_neBrJuIUD6ltUT604Uyf70M8QGLXA7ydc&usqp=CAU'},
        {id:2,title1:'14 Days', title2:'sherd challenge',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gZGMZGpirf3ihvNimPLIQq_OpMsr1V-4gA&usqp=CAU'},
        {id:3,title1:'Get flat belly', title2:'in 30 days',image:'https://w7.pngwing.com/pngs/589/632/png-transparent-weight-lifting-fitness-gym-perspective-body-health-sport-training-exercise-workout-thumbnail.png'}
    ]

    return (
        <div className="lg:h-[274px]  w-[90%] mx-auto lg:flex  justify-around items-center bg-[#6462F0] rounded-[30px]">
            {
                cardInfo.map(card=><CardPart key={card.id} info={card}></CardPart>)
            }
        </div>
    );
};

export default Card;