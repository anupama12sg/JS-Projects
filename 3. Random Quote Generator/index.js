const quotes = [
    "Discipline is the bridge between goals and accomplishment.",
    "Success doesn't come from what you do occasionally, it comes from what you do consistently. ",
    "We must all suffer one of two things: the pain of discipline or the pain of regret.",
    "Discipline is choosing between what you want now and what you want most. ",
    "The more disciplined you become, the easier life gets. ",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    "I’m a greater believer in luck, and I find the harder I work the more I have of it. ",
    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
    "Without hard work, nothing grows but weeds. ",
    "Work hard in silence, let your success be your noise. ",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. ",
    "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally. ",
    "Success usually comes to those who are too busy to be looking for it. ",
    "Opportunities don't happen. You create them. ",
    "The only place where success comes before work is in the dictionary.",
    "Success is not final, failure is not fatal. It is the courage to continue that counts.",
    "You are the master of your dreams and the creator of your realities.",
    "You are not just a part of the universe — you are happening to the universe too."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        
        if (usedIndexes.has(randomIdx)) continue
        
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }

}
