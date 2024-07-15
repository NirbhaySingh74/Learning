package DSA.COLLECTIONS;

import java.util.ArrayList;
import java.util.Iterator;

public class LearnArrayList {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        // insert item in list
        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(50);
        list.add(60);
        // System.out.println(list);
        // insert item in specific index
        // list.add(2, 15);
        // System.out.println(list);
        // get item by index
        // System.out.println(list.get(2));
        // remove item by index
        // System.out.println(list.remove(1));
        // remove all the items from list
        // list.clear();
        // know an item present or not list
        // System.out.println(list.contains(20));

        // iterat on arrayList

        // using for loop
        for (int i = 0; i < list.size(); i++) {
            System.out.println("using for loop - " + list.get(i));
        }

        // using foreach loop
        for (Integer item : list) {
            System.out.println("using forEach loop - " + item);
        }

        // using iterator
        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) {
            System.out.println("using iterator - " + it.next());
        }
    }
}
