import PropTypes from 'prop-types'
import './Post.css'
import moment from 'moment'

function Post(props) {
    const { user, createdOn, children } = props

    return (
        <div className="post">
            <div className="post-header">
                <span className="post-user">@{user}</span> ·{' '}
                <span className="post-created-on">
                    {moment(createdOn).fromNow()}
                </span>
            </div>
            <div className="post-content">{children}</div>
        </div>
    )
}

Post.propTypes = {
    user: PropTypes.string,
    createdOn: PropTypes.string,
}

export default Post