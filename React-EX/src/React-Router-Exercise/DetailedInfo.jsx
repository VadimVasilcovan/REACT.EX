import React from 'react'
import { useParams } from 'react-router-dom'
import { usePostData } from './Context/contextData'

export default function DetailedInfo() {
    const { fetchedData } = usePostData();
    const { id } = useParams();

    const post = fetchedData.find(item => item.id.toString() === id);

    return (
        <div key={id}>
            {post?.question}
            <p>Points{post?.points}</p>
        </div>
    )
}
