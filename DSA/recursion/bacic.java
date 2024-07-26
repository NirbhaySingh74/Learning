package DSA.recursion;

public class bacic {

    public static void print(int cnt) {

        // Base Condition.
        if (cnt == 3) {
            return;
        }
        System.out.println(cnt);

        // Count incremented.
        cnt = cnt + 1;
        print(cnt);
    }

    public static void main(String[] args) {
        print(0);
    }
}
