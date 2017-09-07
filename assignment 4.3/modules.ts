//imported all the modules
import { add } from "./function1";
import { subtract } from "./function2";
import { Person } from "./interface";

//created an object which implements the interface from interface file
const John: Person = {
    name: "John",
    lastname: "Doe",
    greet(): void {
        console.log(`Hello, ${this.name} ${this.lastname}`);
    }
}
//Invoked function imported from function1 file
add(3, 3);
//Invoked function imported from function2 file
subtract(5, 2);
//invoked the greet method on John object
John.greet();
