package DSA.recursion;

public class sumofN {

    public static int sumOfN(int n) {
        if (n == 0) {
            return 0;
        } else {
            return n + sumOfN(n - 1);
        }
    }

    public static void main(String[] args) {
        int sum = sumOfN(10);
        System.out.println("sum of first n natural number = " + sum);
    }
}
