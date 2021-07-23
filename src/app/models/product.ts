export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, description = '', price = 0, imageUrl = 'https://content.jdmagicbox.com/comp/jabalpur/d1/9999px761.x761.160908120205.d4d1/catalogue/khandelwal-furniture-and-furnishing-marhatal-jabalpur-furniture-dealers-1kkb0.jpg') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }
  