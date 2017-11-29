export class Recipe {
 private name = string;
 private description = string;
 private imagePath = string;
 constructor(name = string ,desc = string ,imagePath = string )  {
   this.name = name;
   this.description = desc;
   this.imagePath = imagePath;
 }
}
