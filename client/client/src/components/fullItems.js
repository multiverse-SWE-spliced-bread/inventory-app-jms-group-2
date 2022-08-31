import React from 'react';
import {Items} from '../../../../server/seedData/seedData';



export const Items = ({items}) => {
    // the data that will run when a title is clicked
    const clickHandler = (item) => {
        // changes the current page. afaik, the main page is PagesList, so I setCurrentPage(0) in App.js which represents PagesList.
        setAllItems(1)
        // this will make the page data visible
        setItem(item)

    }
    return <>
        {
            items.map((item, idx) => {
                return <h3 key={idx} onClick={() => {
                    clickHandler(item)
                }}>{item.title}</h3>
            })
        }
    </>
} 

//extra - delete when done
// export const Items = ({pages, setCurrentPage, setViewPage}) => {
//     // the data that will run when a title is clicked
//     const clickHandler = (page) => {
//         // changes the current page. afaik, the main page is PagesList, so I setCurrentPage(0) in App.js which represents PagesList.
//         setCurrentPage(1)
//         // this will make the page data visible
//         setViewPage(page)

//     }
//     return <>
//         {
//             pages.map((page, idx) => {
//                 return <h3 key={idx} onClick={() => {
//                     clickHandler(page)
//                 }}>{page.title}</h3>
//             })
//         }
//     </>
// } 