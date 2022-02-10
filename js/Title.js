class Title {
    constructor(id, titleText) {
        this.id = id
        this.titleText = titleText
        //return element to creator for appending to DOM
        return this.getTitle()
    }

    //create element, set attributes and return to constructor
    getTitle = () => {
        const title = $('<span></span>')
        title.text(this.titleText)
        title.attr('id', `title${this.id}`)
        title.addClass('title')

        return title
    }
}
