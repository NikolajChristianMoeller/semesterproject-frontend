export default function totalItems(p){
    try {
        let total = 0;
        p.forEach(item => {
            total = total + 1*item.amount;            
        });
        return total;  
    } catch (error) {
        console.error("Error:", error);
        return 0;
    }
}