package DSA.recursion;

public class PrintNtoone {

    public static void printNtoone(int n) {
        if (n == 0) {
            return;
        }

        System.out.println(n);
        printNtoone(n - 1);
    }

    public static void main(String[] args) {
        printNtoone(10);
    }
}
