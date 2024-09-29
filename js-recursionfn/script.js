function move(x,y,steps){

    if (steps === 0) {
        console.log(`Stoped at (${x} and ${y})`);
        return;
    }
    
    console.log(`(${x}, ${y})and ${steps}`);
    

    move(x , y+1 , steps-1); 
    move(x , y-1 , steps-1);
    move(x+1 , y , steps-1);
    move(x-1, y , steps-1);
}

move(0,0,2)

// function move(step) {
//     if (step === 0) {
//         console.log(step);
//         return;
//     }

//     move(step-1);
//     console.log(step);
    
// }
// move(2);