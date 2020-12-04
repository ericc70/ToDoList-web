class CommentsElement extends HTMLElement{
connectedCallback (){

    this.innerHTML = 'Bonjour tout le monde'
}

}
console.log('lu')
customElements.define('post-comments', CommentsElement)
