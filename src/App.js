import React from "react";
import PropTypes from "prop-types";

function Food( { name, picture, rating }){
  return (
    <div>
      <h2>I like { name }</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'http://www.realkimchi.com/shopimages/realkimchi/001001000001.jpg?1669457620',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgiopsal',
    image: 'https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2021/10/28/4e06df24f7acc52f449251b387f644981.jpg',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
    rating: 4.6,
  },
];

function App() {
  return(
    <div>
      {foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
