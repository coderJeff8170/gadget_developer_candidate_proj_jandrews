export default class {
    constructor(id, titleText) {
        this.id = id
        this.titleText = titleText

        return this.getTitle()
    }

    getTitle = () => {
        const title = document.createElement('span')
        title.innerText = this.titleText
        title.setAttribute('id', `title${this.id}`)
        title.setAttribute('class', 'title')

        return title
    }
}
