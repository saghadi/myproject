import React, { useState, useEffect } from 'react';

const Api = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('')
    console.log(search);

    const url = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setData(json);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const handleBuy = (item) => {
        // Here, you can implement logic to handle the buying process
        console.log('Buy clicked for item:', item);
        // For example, you can add the item to a shopping cart state
    };



    return (
        <>
            <section className='product-list'>
                <div className="container">
                    <div className="filter-input-box">
                        <form action="">
                            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Contacts' />
                        </form>
                    </div>
                    <div className="data-container">
                        {data.filter((item) => {
                            return search.toLowerCase() === ''
                                ? item
                                : item.title.toLowerCase().includes(search);
                        }).map(item => (
                            <div className="data-item" key={item.id}>
                                <img src={item.image} alt="" />
                                <div className='title'>Title: {item.title}</div>
                                <div className='description'>Description: {item.description}</div>
                                <div>ID: {item.id}</div>
                                <div>Price: {item.price}</div>
                                <div>Category: {item.category}</div>
                                <button className='buy-btn' onClick={() => handleBuy(item)}>Buy</button>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Api;
