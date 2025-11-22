package helpers;

public class IOUtils {

    // Valida um input de int, repetindo até receber um número válido.
    public static int validarInput(String prompt) {
        while (true) {
            System.out.print(prompt);
            String line = IO.readln();
            try {
                return Integer.parseInt(line.trim());
            } catch (NumberFormatException e) {
                System.out.println("Favor digitar um número.");
            }
        }
    }
}
