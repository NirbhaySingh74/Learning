package DSA.recursion;

public class Print1toN {

    public static void printonetoN(int n) {
        if (n == 0) {
            return;
        }

        printonetoN(n - 1);
        System.out.println(n);
    }

    public static void main(String[] args) {
        printonetoN(10);
    }
}
