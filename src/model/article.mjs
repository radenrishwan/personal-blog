export default class Article {
    constructor(id, thumbnail, title, description,content, author, category, createdAt) {
        this.id = id
        this.thumbnail = thumbnail;
        this.title = title;
        this.description = description
        this.content = content;
        this.author = author;
        this.category = category
        this.createdAt = createdAt;
    }
}