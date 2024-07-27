package DSA.recursion;

public class factorial {

    public static int factorialOfN(int n) {
        if (n == 1) {
            return 1;
        }
        return n * factorialOfN(n - 1);
    }

    public static void main(String[] args) {
        int factorial = factorialOfN(5);
        System.out.println("factorial = " + factorial);
    }
}
