import { meal } from './../interfaces/meals';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {
  recommendedMeals: meal[] = [
    {
      mealName: "Apam balik",
      mealImg: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
      mealId: 53049
      },
      {
      mealName: "Apple & Blackberry Crumble",
      mealImg: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
      mealId: 52893
      },
      {
      mealName: "Apple Frangipan Tart",
      mealImg: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
      mealId: 52768
      },
      {
      mealName: "Bakewell tart",
      mealImg: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
      mealId: 52767
      },
      {
      mealName: "Banana Pancakes",
      mealImg: "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
      mealId: 52855
      },
      {
      mealName: "Battenberg Cake",
      mealImg: "https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg",
      mealId: 52894
      },
      {
      mealName: "BeaverTails",
      mealImg: "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
      mealId: 52928
      },
      {
      mealName: "Blackberry Fool",
      mealImg: "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg",
      mealId: 52891
      },
      {
      mealName: "Bread and Butter Pudding",
      mealImg: "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
      mealId: 52792
      },
      {
      mealName: "Budino Di Ricotta",
      mealImg: "https://www.themealdb.com/images/media/meals/1549542877.jpg",
      mealId: 52961
      },
      {
      mealName: "Canadian Butter Tarts",
      mealImg: "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
      mealId: 52923
      },
      {
      mealName: "Carrot Cake",
      mealImg: "https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg",
      mealId: 52897
      },
      {
      mealName: "Cashew Ghoriba Biscuits",
      mealImg: "https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg",
      mealId: 52976
      },
      {
      mealName: "Chelsea Buns",
      mealImg: "https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg",
      mealId: 52898
      },
      {
      mealName: "Chinon Apple Tarts",
      mealImg: "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg",
      mealId: 52910
      },
      {
      mealName: "Choc Chip Pecan Pie",
      mealImg: "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
      mealId: 52856
      },
      {
      mealName: "Chocolate Avocado Mousse",
      mealImg: "https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg",
      mealId: 52853
      },
      {
      mealName: "Chocolate Caramel Crispy",
      mealImg: "https://www.themealdb.com/images/media/meals/1550442508.jpg",
      mealId: 52966
      },
      {
      mealName: "Chocolate Gateau",
      mealImg: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
      mealId: 52776
      },
      {
      mealName: "Chocolate Raspberry Brownies",
      mealImg: "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg",
      mealId: 52860
      },
      {
      mealName: "Chocolate Souffle",
      mealImg: "https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg",
      mealId: 52905
      },
      {
      mealName: "Christmas cake",
      mealImg: "https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg",
      mealId: 52990
      },
      {
      mealName: "Christmas Pudding Flapjack",
      mealImg: "https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg",
      mealId: 52788
      },
      {
      mealName: "Christmas Pudding Trifle",
      mealImg: "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
      mealId: 52989
      },
      {
      mealName: "Classic Christmas pudding",
      mealImg: "https://www.themealdb.com/images/media/meals/1d85821576790598.jpg",
      mealId: 52988
      },
      {
      mealName: "Dundee cake",
      mealImg: "https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg",
      mealId: 52899
      },
      {
      mealName: "Eccles Cakes",
      mealImg: "https://www.themealdb.com/images/media/meals/wtqrqw1511639627.jpg",
      mealId: 52888
      }
  ]
}
