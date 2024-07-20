import java.util.LinkedList;
import java.util.List;

public class LearnLinkList {
    public static void main(String[] args) {
        // create linkedlist
        List<Integer> list = new LinkedList<Integer>();
        // add items into linklist
        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(50);
        // print element from linkedlist
        System.out.println(list);
        // remove element from linklist
        System.out.println(list.remove(1));
        // get element from linklist
        System.out.println(list);
    }
}
