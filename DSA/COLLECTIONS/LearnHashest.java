import java.util.HashSet;
import java.util.Iterator;

public class LearnHashest {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<String>();
        set.add("Nirbhay");
        set.add("Kunal");
        set.add("Nirbhay");
        set.add("Deepak");
        // print all element in hashset
        System.out.println(set);
        // is contains element
        System.out.println(set.contains("Nirbhay"));

        // iterate on hasheset
        Iterator it = set.iterator();

        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
