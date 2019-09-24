import React from 'react';
import { Trail } from "react-spring/renderprops";

const posts = [
    { title: "Welcome to this Article web", id: 1 },
    { title: "Introduce your Self to your own self", id: 2 },
    { title: "Learn to Rise", id: 3 },
    { title: "Beauty is top priority", id: 4 }
  ];

const Home = () => {
    return ( 
        <Trail
        items={posts}
        keys={post => post.id}
        from={{ marginLeft: -20, opacity: 0 }}
        to={{ marginLeft: 20, opacity: 1 }}>
            {post => props => (
            <div style={props} className="post">
                <h1 style={{ textAlign:"center" , color: "blue" }}>
                    {post.title}
                </h1> 
            </div>
            )}
      </Trail>
     );
}
 
export default Home;