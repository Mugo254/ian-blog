import React from 'react'
import Cards from '../card/cards'

const topstory = [
  {
    image:'https://images.pexels.com/photos/13283879/pexels-photo-13283879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Health',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    description:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded',
  },
]
const TopStories = () => {
  return (
    <div>
      <h2>Top Stories</h2>
      {topstory.map((item, index)=>(
      <Cards image={item.image} title={item.title} text={item.text} description={item.description}/>
      ))}
    </div>
  )
}

export default TopStories