export function generateUsers(numberOfUsers:number){
    return Array.from({length:numberOfUsers},(_,i)=>({
        defaultText:'US',
        userName: `user${i}`,
        imgUrl:`https://picsum.photos/seed/${i}/200/200`

    }))
}