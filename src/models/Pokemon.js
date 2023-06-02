export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.creatorId = data.creatorId
        this.previous = data.previous
        this.next = data.next
    }
}
