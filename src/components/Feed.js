//Feed
import PropTypes from 'prop-types'
import Post from './Post.js'
import './Feed.css'

function Feed({ posts }) {
    return (
        <ul className="feed">
            {posts
                .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
                .map(({ id, user, created_on, content }) => (
                    <li key={id} className="feed-item">
                        <Post user={user} createdOn={created_on}>
                            {content}
                        </Post>
                    </li>
                ))}
        </ul>
    )
}

Feed.propTypes = {
    posts: PropTypes.array,
}

export default Feed