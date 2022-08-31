import React, { useState, useEffect } from 'react';
import { Inventory } from './Inventory';

export const App = () => {

	//page content
	const [pages, setPages] = useState([]);
	const [currentPageView, setCurrentPageView] = useState(0)
    const [pageView, setPageView] = useState({})

	const currentPageContent = [
		[
		<p key={1} onClick={() =>setCurrentPageView(2)}>View inventory</p> 
		],
	<Page page={pageView} setPageView={setPageView} setCurrentPageView={setCurrentPageView}/>,
	<AddPage setCurrentPageView={setCurrentPageView}/>
	]

	//page errors
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>
			<code>{ currentPageContent2[currentPageView2] }</code>
      			<h1>BAMazon⚡</h1>
				<h2>The (bootleg) Amazon</h2>
				<h3>Explore</h3>	
				<code>{ currentPageContent[currentPageView] }</code>
		</main>
	)
}


