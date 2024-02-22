import React from 'react';

// youtube comments only 2-level i am amaking for n-levels thats why my own dataset
const commentsData=[
    {
        name:"Diwakar",
        text:"i am a sigma developer who doest not know anything and still can get work done",
        replies:[
            {
                name:"Diwakar",
                text:"i am a sigma developer who doest not know anything and still can get work done",
                replies:[
                    {
                        name:"Diwakar",
                        text:"i am a sigma developer who doest not know anything and still can get work done",
                        replies:[]
                    },{
                        name:"Diwakar",
                        text:"i am a sigma developer who doest not know anything and still can get work done",
                        replies:[]
                    }
                ]
            },  {
                name:"Diwakar",
                text:"i am a sigma developer who doest not know anything and still can get work done",
                replies:[]
            }
        ]
    },
    {
        name:"Diwakar",
        text:"i am a sigma developer who doest not know anything and still can get work done",
        replies:[]
    },
    {
        name:"Diwakar",
        text:"i am a sigma developer who doest not know anything and still can get work done",
        replies:[]
    },
    {
        name:"Diwakar",
        text:"i am a sigma developer who doest not know anything and still can get work done",
        replies:[]
    },
]


const Comment=({data})=>{
    const {name,text,replies}=data;
  
    return(
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
    <img className='w-8 h-8' alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
    <div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>

    </div>

    </div>
    )

}

/// what to do for n-level-comment i.e comment inside comment then inside comment i.e recursion
const CommentsList=({comments})=>{
    return   comments?comments.map((comment,index)=>
       (<div>
       <Comment  key={index} data={comment} />
        <div className='pl-7'>
          <CommentsList comments={comment.replies} />
        </div>
    
       </div> )):null}
       
const CommentContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
             <CommentsList comments={commentsData} />
        </div>
    );
};

export default CommentContainer;




/*   

// for live data for live chats
   
-> websockets    (bidirectional communication between cleinet and server)-> no regular interval or heavy
->api pooling  (get data from server single directional after limited interval)

we need immeediate update in live chat so use web sockets but youtube uses api pooling  but why page not freezing because yotube remove messages from top smartly

*/