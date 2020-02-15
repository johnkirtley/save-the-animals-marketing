import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faFrog, faDove } from '@fortawesome/free-solid-svg-icons'

const Info = () => {
    return (
        <div className='grid-container'>
            <div className="feature">
                <FontAwesomeIcon icon={faPaw} />
                <h2>Feature 1</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <a href="#">View Details</a>
            </div>
            <div className="feature">
                <FontAwesomeIcon icon={faFrog} />
                <h2>Feature 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <a href="#">View Details</a>
            </div>
            <div className="feature">
                <FontAwesomeIcon icon={faDove} />
                <h2>Feature 3</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio neque perferendis inventore?</p>
                <a href="#">View Details</a>
            </div>
        </div>
    )
}

export default Info;