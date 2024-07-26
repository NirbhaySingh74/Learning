package DSA.recursion;

public class PrintNameNtimes {

    public static void printntimes(int n) {
        if (n == 0) {
            return;
        }
        System.out.println("Nirbhay Singh");
        printntimes(n - 1);
    }

    public static void main(String[] args) {
        printntimes(5);
    }
}
