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

    public static void diamondStarPyramid(int n) {
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

    public static void HalfDiamondStarPattern(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void binaryNumberTrianglePattern(int n) {
        for (int i = 1; i <= n; i++) {
            int start;
            start = (i % 2 != 0) ? 1 : 0;
            for (int j = 1; j <= i; j++) {
                System.out.print(start);
                start = (start == 1) ? 0 : 1;
            }
            System.out.println();

        }
    }

    public static void NumberCrownPattern(int n) {
        for (int i = 1; i <= n; i++) {
            // value
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            // space
            for (int k = 1; k <= (n - i); k++) {
                System.out.print(" ");
            }
            // space again
            for (int k = 1; k <= (n - i); k++) {
                System.out.print(" ");
            }
            // value
            for (int j = i; j >= 1; j--) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void IncreasingNumberTrianglePattern(int n) {
        int start = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(start + " ");
                start++;
            }
            System.out.println();
        }
    }

    public static void IncreasingLetterTrianglePattern(int n) {
        int asciiValue = 65;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                char character = (char) asciiValue;
                System.out.print(character + " ");
                asciiValue++;
            }
            System.out.println();
            asciiValue = 65;
        }
    }

    public static void ReverseLetterTrianglePattern(int n) {
        int asciiValue = 65;
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                char character = (char) asciiValue;
                System.out.print(character + " ");
                asciiValue++;
            }
            System.out.println();
            asciiValue = 65;
        }
    }

    public static void AlphaRampPattern(int n) {
        int asciiValue = 65;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                char character = (char) asciiValue;
                System.out.print(character + " ");
            }
            System.out.println();
            asciiValue++;
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
        // invertStarPyramid(5);
        // diamondStarPyramid(5);
        // HalfDiamondStarPattern(5);
        // binaryNumberTrianglePattern(5);
        // NumberCrownPattern(6);
        // IncreasingNumberTrianglePattern(5);
        // IncreasingLetterTrianglePattern(5);
        // ReverseLetterTrianglePattern(5);
        AlphaRampPattern(5);
    }
}
