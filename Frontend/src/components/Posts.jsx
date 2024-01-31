import React from 'react'
import image1 from '../assets/icons/post4.jpg';
import image2 from '../assets/icons/comment.svg';
import image3 from '../assets/icons/share.svg';
import image4 from '../assets/icons/emoji.svg'

const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} months`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} days`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes`;
  }
  return `${Math.floor(seconds)} seconds`;
};
const Posts = () => {
  return (
    <div className="post-list">
      <div className="post">
        <div className="p_d">
          <div className="p_inner">
            <img src={image1} alt="" className="p_p" />
            <a href="">
              <p className='p_name'> SUBIN</p>
            </a>
          </div>
          <i className="fas fa-ellipsis-h threedots"></i>
        </div>
        <div className="p_image">
          <img src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600" alt="post" className="pp_full" />
        </div>
        <div className="reaction_icon">
          <div className="left_i">
            <button className="reactionbtn">
              <i className='fa fa-heart hearticon' style={{ fontSize: '22px', color: 'red' }} ></i>
            </button>
            <button className="reactionbtn">
              <img src={image2} alt="" />
            </button>
            <button className="reactionbtn">
              <img src={image3} alt="" />
            </button>

          </div>
          <div className="right_i">
            <button className='reactionbtn'>
              <i className='fa fa-bookmark' style={{ fontSize: '22px', color: '#12129a' }}></i>
            </button>
          </div>
        </div>
        <h6 className="numlikes">1 likes</h6>
        <span className='posttitle'>nature</span>&nbsp;
        <span className='postbody'>lovely nature</span>
        <br />
        <button type='button' className=' btn viewcommentbtn'>  View all comments</button>
        <div style={{ overflowY: "scroll", maxHeight: '85px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <h6>
              <a href="" className='comment'>
                <img src={image1} alt="" className='commentview' />
                <span style={{ fontWeight: '600' }}>Leo</span>
              </a> &nbsp;
              Nice !!
            </h6>
          </div>
          <p className="postdate">
            {timeSince(new Date())} Ago
          </p>
          <div className="comment_section">
            <div className="input_box">
              <img src={image4} alt="" />
              <input type="text" className='input_c' placeholder='Add a comment ...' />
            </div>
            <div className='c_text'>
              <button>Post</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Posts;