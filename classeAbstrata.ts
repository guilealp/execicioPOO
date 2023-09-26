abstract class Animal{
    private nome:string;
    private qtdPatas:number;

    constructor(nome:string,qtdPatas: number){
        this.nome =nome;
        this.qtdPatas = qtdPatas;
    }
    abstract fazerBarulho():void;
    apresantar():void{
        console.log("Este é um " + this.nome+" com "+ this.qtdPatas + " patas");
        

    }
}
class Dog extends Animal{
    constructor(){
        super("Cachorro",4);
    }
        fazerBarulho():void {
    
            console.log("o cachorro esta latindo");
            
      }
    }
    class Cat extends Animal{
        constructor(){
            super("gato",4);
        }
            fazerBarulho():void {
        
                console.log("o gato esta miando");
                
          }
        }
        class Bird extends Animal{
            constructor(){
                super("passaro",2);
            }
                fazerBarulho():void {
            
                    console.log("o passaro esta cantando");
                    
              }
            }
const cachorro = new Dog();
cachorro.apresantar();
cachorro.fazerBarulho();

const gato = new Cat();
gato.apresantar();
gato.fazerBarulho();

const passaro = new Bird();
passaro.apresantar();
passaro.fazerBarulho();