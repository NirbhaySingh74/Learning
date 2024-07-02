import java.util.Scanner;

public class Condition {

    public static void whichGreater(int firstNum, int secondNum){
        if (firstNum> secondNum) {
            System.out.println("First Number is greater");
        }
        else{
            System.out.println("Second number is Greater");
        }
    }

    public static void checkSwitch(int day) {
        switch (day) {
            case 1:
                System.out.println("Monday.");
                break;
            case 2:
                System.out.println("Tuesday.");
                break;
            case 3:  // This line will result in a compilation error in Java
                System.out.println("Wednesday");
                break;
            default:
                System.out.println("Invalid day.");
        }
    }
    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        // System.out.println("Enter First Number");
        // int firstNum = sc.nextInt();
        // System.out.println("Enter Second Number");
        // int secondNum = sc.nextInt();
        //  whichGreater(firstNum, secondNum);
       checkSwitch(2);
    }
}