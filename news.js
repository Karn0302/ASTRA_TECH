function findnews(data, id) {
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === id){
            return data[i].news;
        }
    }
    return "News not found";
    
}


function limit(data,id){
    for(let i=0;i<id;i++)
    {
        console.log(data[i].news);
    }
}
function lastlimit(data,id){
    for(let i=data.length-id;i<data.length;i++)
    {
        console.log(data[i].news);
    }
}

function search_keyword(data,keyword){
    let k=0;
    for(let i=0;i<data.length;i++)
    {
        if(data[i].news.includes(keyword)){
            console.log(data[i].news);
            k=1;
        }
    }
    if(k==0)
    console.log("No news found with the keyword: " + keyword);
}

function keyword_search(data,keyword){
    const n=[];
    for(let i=0;i<data.length;i++)
    {
        if(data[i].news.toLowerCase().includes(keyword.toLowerCase())){
            n.push(data[i].news);
        }
    }
    if(n.length===0)
        return 0;
    else
        return n;
}
const data = [
    {
        id: 1,
        news: "Scientists discover a new planet similar to Earth",
    },
    {
        id: 2,
        news: "India is preparing for the upcoming World Cup finals",
    },
    {
        id: 3,
        news: "Heavy rainfall causes traffic jams in major cities",
    },
    {
        id: 4,
        news: "Tech companies announce new AI-powered smartphones",
    },
    {
        id: 5,
        news: "Students demand longer holidays after exams",
    },
    {
        id: 6,
        news: "Local startup raises millions in funding",
    },
    {
        id: 7,
        news: "Cricket fans celebrate historic team victory",
    },
    {
        id: 8,
        news: "New electric bikes launched with better battery life",
    },
    {
        id: 9,
        news: "Researchers develop faster charging technology",
    },
    {
        id: 10,
        news: "Movie breaks box office records within two days",
    }
];
// console.log(findnews(data,1));
// limit(data,3);
// lastlimit(data,3);
// search_keyword(data,"is");
// console.log(data.slice(0,2));//without using loop findnews
// console.log(data.slice((data.length-2),data.length));//without using loop limit function
console.log(keyword_search(data,"is"));


