export default function totalPrice(p){
    let total = 0;
    try {
        p.forEach(item => {
           total = total + item.Price*item.amount; 
        });
        return total;
    } catch (error) {
        console.error("Error calculating total:", error)
        return 0;
    }
}