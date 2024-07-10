package DSA.PATTERN;

public class pattern {
    public static void first(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void second(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void three(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void four(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(i);
            }
            System.out.println();
        }
    }

    public static void five(int n) {
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void six(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= (n + 1) - i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void starPyramid(int n) {
        for (int i = 1; i <= n; i++) {
            // for space
            for (int j = 1; j <= (n - i); j++) {
                System.out.print(" ");
            }
            // for star
            for (int k = 1; k <= (2 * i) - 1; k++) {
                System.out.print("*");
            }
            // for space
            for (int j = 1; j <= (n - i); j++) {
                System.out.print(" ");
            }
            System.out.println();
        }
    }

    public static void invertStarPyramid(int n) {
        for (int i = n; i >= 1; i--) {
            // for space
            for (int j = 1; j <= (n - i); j++) {
                System.out.print(" ");
            }
            // for star
            for (int k = 1; k <= (2 * i) - 1; k++) {
                System.out.print("*");
            }
            // for space
            for (int j = 1; j <= (n - i); j++) {
                System.out.print(" ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        // first(5);
        // second(5);
        // three(5);
        // four(5);
        // five(5);
        // six(5);
        // starPyramid(5);
        invertStarPyramid(5);
    }
}
