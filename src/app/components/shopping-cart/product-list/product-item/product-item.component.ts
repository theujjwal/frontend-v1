import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Comment } from 'src/app/models/comment';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/service/messenger.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;
  commentModel: any = {};
  allComments: any = [];

  show_comment_section: Boolean;
  show_all_comment: Boolean;

  constructor(private msg: MessengerService,
    private empService: EmployeeService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.show_comment_section = this.show_all_comment = false;
  }

  toggleShowAllComments() {
    this.show_all_comment = !this.show_all_comment;
  }

  toggleCommentSection() {
    // alert('clicked');
    this.show_comment_section = !this.show_comment_section;
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
  }

  isLoggedIn(): Boolean {
    return this.empService.isLoggedIn();
  }

  likeProduct(): void {
    this.productService.likeProduct(this.productItem.offerId).subscribe((resp) => {
      console.log(resp);
      this.productItem.likes = resp.body.likes;
    }, (err) => {
      console.warn(err);
    })
  }

  getAllLikes(): String {
    var msg = '';

    this.productItem.likes.forEach((like) => {
      msg += like.empId + '\n';
    });

    return msg;
  }

  addCommment(): void {

    var today = new Date();
    var todayDateString = '';
    todayDateString += (today.getDate() <= 9) ? `0${today.getDate()}` : `${today.getDate()}`;
    todayDateString += (today.getMonth() < 9) ? `-0${today.getMonth() + 1}` : `-${today.getMonth() + 1}`;
    todayDateString += `-${today.getUTCFullYear()}`;

    var newComment = new Comment(this.empService.getEmpId(), todayDateString, 0, this.productItem.offerId, this.commentModel.comment);

    console.log('Adding new comments' + JSON.stringify(newComment));

    this.productService.commentOnProduct(newComment).subscribe(
      (resp) => {
        alert('Comment added');
      }, (err) => {
        alert(JSON.stringify(err));
      }
    )
  }

  getAllComments() {
    if (this.show_all_comment == false) {
      this.productService.fetchAllcomments(this.productItem.offerId).subscribe(
        (r) => {
          this.allComments = r.body;
        }
      )
    }
    this.toggleShowAllComments();
  }

}
