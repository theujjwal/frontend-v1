export class Comment {
    constructor(
        public commenterId: String,
        public date: String,
        public id: Number,
        public offerId: Number,
        public text: String
    ) {

    }
}
// {
//     "commenterId": "string",
//     "date": "dd-MM-yyyy",
//     "id": 0,
//     "offerId": 0,
//     "text": "string"
//   }