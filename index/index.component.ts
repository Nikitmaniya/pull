import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  feature = 'Hello Angular'

  selectedFeatures: any = [];


  user: any;


  model: any;

  constructor() { }

  ngOnInit(): void {

    this.model =

      [
        {
          "id": 1,
          "num": "001",
          "name": "Bulbasaur",
          "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
          "type": [
            "Grass",
            "Poison"
          ],
          "height": "0.71 m",
          "weight": "6.9 kg",
          "candy": "Bulbasaur Candy",
          "candy_count": 25,
          "egg": "2 km",
          "spawn_chance": 0.69,
          "avg_spawns": 69,
          "spawn_time": "20:00",
          "multipliers": [1.58],
          "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"],


        },

        {

          "id": 2,
          "num": "002",
          "name": "Ivysaur",
          "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
          "type": [
            "Grass",
            "Poison"
          ],
          "height": "0.99 m",
          "weight": "13.0 kg",
          "candy": "Bulbasaur Candy",
          "candy_count": 100,
          "egg": "Not in Eggs",
          "spawn_chance": 0.042,
          "avg_spawns": 4.2,
          "spawn_time": "07:00",
          "multipliers": [
            1.2,
            1.6
          ],
          "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
          ],
        }



      ]


      this.user = [
        { name: 'santhosh', Age: 25, gender: 'male' },
        { name: 'suresh', Age: 25, gender: 'male' },
        { name: 'shiva', Age: 20, gender: 'male' },
        { name: 'Reddy', Age: 26, gender: 'male' }
  
      ];


  }

  onAdd() {
    this.selectedFeatures.push(this.feature);
  }

  onRemove() {
    this.selectedFeatures.pop();
  }


  Submit(data){

    // this.value=data;
    alert(JSON.stringify(data))
  console.log(data)
  }

}
