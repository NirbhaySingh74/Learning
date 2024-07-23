import java.util.HashSet;

public class LearnHashest {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<String>();
        set.add("Nirbhay");
        set.add("Kunal");
        set.add("Nirbhay");
        // print all element in hashset
        System.out.println(set);
        // is contains element
        System.out.println(set.contains("Nirbhay"));
    }
}
