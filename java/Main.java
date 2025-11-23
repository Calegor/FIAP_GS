import helpers.IOUtils;
import models.Profissional;
import services.ConsultaService;

public class Main {

    public static void main(String[] args) {
        ConsultaService consultaService = new ConsultaService();

        System.out.println("Bem-vindo à consulta profissional.");
        System.out.println("Para começarmos, precisamos de alguns dados: \n");

        Profissional profissional = consultaService.adicionarCadastro();

        while (true) {
            System.out.println("""

                    O que você deseja fazer agora?
                      1 - Ver descrição da urgência
                      2 - Ver 3 sugestões de cargos mais modernos
                      3 - Ver tendências de mercado para o seu cargo
                      4 - Ver avanço da IA na sua profissão
                      0 - Sair
                    """);

            int escolha = IOUtils.validarInput("Escolha uma opção: ");

            switch (escolha) {
                case 1 -> System.out.println(consultaService.descUrgencia(profissional));
                case 2 -> System.out.println(consultaService.sugestaoCargo(profissional));
                case 3 -> System.out.println(consultaService.tendenciasMercado(profissional));
                case 4 -> System.out.println(consultaService.avancoIa(profissional));
                case 0 -> {
                    System.out.println("Saindo..");
                    return;
                }
                default -> System.out.println("Escolha inválida, por favor tente novamente.");
            }
        }
    }
}
