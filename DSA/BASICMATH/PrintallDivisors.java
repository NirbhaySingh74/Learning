package DSA.BASICMATH;

public class PrintallDivisors {

    public static void printAllDivisorsofNumber(int num) {
        for (int i = 1; i <= num; i++) {

            if (num % i == 0) {
                System.out.print(i + " ");
            }
        }
    }

    public static void main(String[] args) {
        printAllDivisorsofNumber(40);
    }
}
