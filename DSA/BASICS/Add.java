import java.util.Scanner;

class java {
    public static void AddTwoInt() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First number");
        int num = sc.nextInt();
        System.out.println("Enter second number");
        int num2 = sc.nextInt();
        int add = num + num2;
        System.out.println("Add od first and second number = " + add);
    }

    public static void AddTwoBinary() {
        String x = "011011", y = "1010111";
        int num1 = Integer.parseInt(x, 2);
        int num2 = Integer.parseInt(y, 2);
        int sum = num1 + num2;
        String result = Integer.toBinaryString(sum);
        System.out.println("Add of a and y = " + result);
    }

    public static void AddTwoFloat() {
        float x = 10.89f, y = 76.34f;
        int sum = (int) x + (int) y;
        System.out.println("sum of  x and y = " + sum);
    }

    public static boolean checkEvenOrOdd(int x) {
        if (x % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    public static void findLargestAmongThree() {
        int x = 30, y = 40, z = 50;
        if (x > y && x > z) {
            System.out.println("First number is freater number");
        }
        if (y > z) {
            System.out.println("Second number is greater number");
        } else {
            System.out.println("Third number is grater number");
        }
    }

    public static void main(String[] args) {
        int x = 20;
        // AddTwoBinary();
        AddTwoFloat();
    }
}