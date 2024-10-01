import { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const options = {
                method: 'GET',
                url: ' https://api.escuelajs.co/api/v1/products/?categoryId=3',
                // headers: {
                    // 'x-rapidapi-key': '7346ead5admsh72e8f82215d615bp116866jsn2dedd7405460',
                    // 'x-rapidapi-host': 'furniture-and-household-items.p.rapidapi.com'
                // }
            };

            try {
                const response = await axios.request(options);
                // const response = await fetch(options);
                // const result = await response.json();
                // console.log("result",result);
                console.log("Response Data",response.data);
                setCategories(response.data); 
            } catch (error) {
                console.error("Error",error);
            }
        };

        fetchCategories();
    }, []); 

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category.name}</li> 
                ))}
            </ul>
        </div>
    );
};

export default Categories;
