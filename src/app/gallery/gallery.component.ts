import { RecommendationComponent } from '../recommendation/recommendation.component';
import { meal } from './../interfaces/meals';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendationComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
  mealList :meal[] = [
      {
      mealName: "Cajun spiced fish tacos",
      mealImg: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      mealId: 52819
      },
      {
      mealName: "Escovitch Fish",
      mealImg: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      mealId: 52944
      },
      {
      mealName: "Fish fofos",
      mealImg: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
      mealId: 53043
      },
      {
      mealName: "Fish pie",
      mealImg: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      mealId: 52802
      },
      {
      mealName: "Fish Soup (Ukha)",
      mealImg: "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",
      mealId: 53079
      },
      {
      mealName: "Fish Stew with Rouille",
      mealImg: "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
      mealId: 52918
      },
      {
      mealName: "Garides Saganaki",
      mealImg: "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
      mealId: 52764
      },
      {
      mealName: "Grilled Portuguese sardines",
      mealImg: "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
      mealId: 53041
      },
      {
      mealName: "Honey Teriyaki Salmon",
      mealImg: "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
      mealId: 52773
      },
      {
      mealName: "Kedgeree",
      mealImg: "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
      mealId: 52887
      },
      {
      mealName: "Kung Po Prawns",
      mealImg: "https://www.themealdb.com/images/media/meals/1525873040.jpg",
      mealId: 52946
      },
      {
      mealName: "Laksa King Prawn Noodles",
      mealImg: "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
      mealId: 52821
      },
      {
      mealName: "Mediterranean Pasta Salad",
      mealImg: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
      mealId: 52777
      },
      {
      mealName: "Mee goreng mamak",
      mealImg: "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg",
      mealId: 53048
      },
      {
      mealName: "Nasi lemak",
      mealImg: "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
      mealId: 53051
      },
      {
      mealName: "Portuguese fish stew (Caldeirada de peixe)",
      mealImg: "https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg",
      mealId: 53045
      },
      {
      mealName: "Recheado Masala Fish",
      mealImg: "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
      mealId: 52809
      },
      {
      mealName: "Salmon Avocado Salad",
      mealImg: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
      mealId: 52960
      },
      {
      mealName: "Salmon Prawn Risotto",
      mealImg: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
      mealId: 52823
      },
      {
      mealName: "Saltfish and Ackee",
      mealImg: "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
      mealId: 52936
      },
      {
      mealName: "Seafood fideuà",
      mealImg: "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
      mealId: 52836
      },
      {
      mealName: "Shrimp Chow Fun",
      mealImg: "https://www.themealdb.com/images/media/meals/1529445434.jpg",
      mealId: 52953
      },
      {
      mealName: "Sledz w Oleju (Polish Herrings)",
      mealImg: "https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg",
      mealId: 53023
      },
      {
      mealName: "Spring onion and prawn empanadas",
      mealImg: "https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg",
      mealId: 53040
      },
      {
      mealName: "Sushi",
      mealImg: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
      mealId: 53065
      },
      {
      mealName: "Three Fish Pie",
      mealImg: "https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg",
      mealId: 52882
      },
      {
      mealName: "Tuna and Egg Briks",
      mealImg: "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
      mealId: 52975
      },
      {
      mealName: "Tuna Nicoise",
      mealImg: "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
      mealId: 52852
      }
  ]
}


