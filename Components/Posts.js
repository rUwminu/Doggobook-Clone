import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'

import SinglePost from './SinglePost'

const Posts = ({ posts }) => {
  const [realtimePosts] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc')
  )

  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <SinglePost
              key={post.id}
              name={post.data().name}
              image={post.data().image}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <SinglePost
              key={post.id}
              name={post.name}
              image={post.image}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              postImage={post.postImage}
            />
          ))}
    </div>
  )
}

export default Posts
