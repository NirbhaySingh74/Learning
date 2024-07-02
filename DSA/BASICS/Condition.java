import java.util.Scanner;

public class Condition {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First Number");
        int firstNum = sc.nextInt();
        System.out.println("Enter Second Number");
        int secondNum = sc.nextInt();

        if (firstNum> secondNum) {
            System.out.println("First Number is greater");
        }
        else{
            System.out.println("Second number is Greater");
        }
    }
}