import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AllCostumes from './AllCostumes'
// import SingleCostume from './SingleCostume'
import AllCategories from './category/AllCategories'
import SingleCategory from './category/SingleCategory'

const Routes = () => {
    return (
      <Router>
        <div>
            <hr />
            <p>Buy our costumes!</p>
            <Route path="/categories" exact component={AllCategories} /> 
            <Route path="/categories/:id" component={SingleCategory} />
            {/* <Route path="/costumes" exact component={AllCostumes} />
            <Route path="/costumes/:id" component={SingleCostume} />
             */
            }
        </div>
      </Router>
    );
  }

export default Routes