import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Costume (props) {
    const { 
        costume, view, user 
    } = props
    return (
        <div className={view === "detailed" ? "detailView" : "costume"} role="listitem">
            <div>
                <img src={costume.imageUrl} />
            </div>
            <div className="details">
                <div className="costume-name">
                {
                    view !== "detailed" ?
                        <Link to={`/costumes/${costume.costumeName}/${costume.id}`}>{costume.costumeName}</Link>
                        :
                        costume.costumeName
                }
                </div>
                <div>
                    <span className="old-price">${(costume.price / (1 - costume.discount)).toFixed(2)}</span>
                    <span className="new-price">  ${costume.price}</span>
                </div>
                {
                    view === "detailed" ?
                        (<div>
                            <div>Material: {costume.material}</div>
                            <div>Made In {costume.madeIn}</div>
                            <div>One size fits most adults</div>
                        </div>)
                        :
                        null
                }  
                <div className="links">
                    { 
                        user.userType === 'admin'?
                            (<div>
                                <br />
                                <Link to={`/costumes/${costume.costumeName}/${costume.id}/${costume.categoryId}/admin`}>
                                    Update
                                </Link>
                            </div>) 
                        : 
                        null 
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    costume: ownProps.costume,
    view: ownProps.view,
    user: state.user,
  });
  
export default connect(mapStateToProps, null)(Costume);
