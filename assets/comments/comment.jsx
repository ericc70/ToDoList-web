import {render, unmountComponentAtNode} from 'react-dom'
import React, { useEffect } from 'react'
import { usePaginatedFetch } from './hooks'

function Comments(){
const {items:comments, load, loading } = usePaginatedFetch('/api/tasks')

    useEffect(()=>{load()},[])

    return <div> 
        {loading && 'Chargement...'}
        {JSON.stringify(comments)}
        <button onClick={load}>charger le contenu </button> 
    </div>
}

class CommentsElement extends HTMLElement{
    connectedCallback (){

       render ( <Comments/>, this)
    }

    disconnectCallback (){
        unmountComponentAtNode(this)
    }

}

customElements.define('post-comments', CommentsElement)
