class Paragraph {
    constructor(id, text) {
        this.id = id
        this.text = text
        //upon creation, return element to creator for appending to DOM
        return this.getParagraph()
    }

    //create element, set attributes and return to constructor
    getParagraph = () => {
        const para = $('<p></p>')
        para.text(this.text)
        para.attr('id', `paragraph${this.id}`)
        para.addClass('body-text')

        return para
    }
}
