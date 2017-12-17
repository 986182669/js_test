import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.Random;

public class Test {
    public static void main(String[] args) {
        BufferedImage bfi = new BufferedImage(70,40,BufferedImage.TYPE_INT_RGB);
        Graphics g = bfi.getGraphics();
        Color c = new Color(240,230,140);
        g.setColor(c);
        g.fillRect(0,0,70,40);
       // char ch[] = "qwertyuiopasdgfhjklzxcvbnm1234567890".toCharArray();
        String str = "qwertyuiopasdgfhjklzxcvbnm1234567890";
        StringBuffer sb = new StringBuffer();
        Random r = new Random();
        for (int i = 0; i < 4; i++){
            int index = r.nextInt(str.length());
            g.setColor(new Color(r.nextInt(255),r.nextInt(255),r.nextInt(255),r.nextInt(255)));
            g.drawString(str.charAt(index) + "",i*15+9, 20);
            sb.append(str.charAt(index));
        }
        System.out.println(sb.toString());
    }
}
