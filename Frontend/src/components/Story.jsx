import React from 'react'


const Story = () => {
  return (
    <div className="story">
        <div className="story-box">
            <div className="story_1">
                <button className="storybtn">
                    <img src="https://i.imgur.com/QpUEcfi.jpg"   alt="" className="story_image" />
                    <p className="story_H"><b>Tom</b></p>
                </button>
            </div>
            <div className="story_1">
                <button className="storybtn">
                    <img src="https://i.imgur.com/QpUEcfi.jpg"   alt="" className="story_image" />
                    <p className="story_H"><b>Tom</b></p>
                </button>
            </div>
            <div className="story_1">
                <button className="storybtn">
                    <img src="https://i.imgur.com/QpUEcfi.jpg"   alt="" className="story_image" />
                    <p className="story_H"><b>Tom</b></p>
                </button>
            </div>
            <div className='story_1'>
                <button className="storybtn">
                    <i className='fa fa-plus-circle story_image'></i>
                    <i className='story_S'> <b>+</b>Add Story</i>
                </button>
            </div>
    </div>
     <i className='  fas fa-chevron-circle-left icon-style2 nav-left' 
    style={{ fontSize: '24px' }}></i>
    <i className=' fas fa-chevron-circle-right icon-style1  nav-right' style={{ fontSize: '24px' }}></i>

    </div>
  )
}

export default Story;