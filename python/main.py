from services.consulta_service import ConsultaService
from helpers.IOUtils import validar_input
import time


#inicializa o objeto da classe ConsultaService para as funcionalidades do sistema
consulta_service = ConsultaService()

#inicializa o menu
print("Bem-vindo à consulta profissional.")
#sleep para deixar o menu "orgânico"
time.sleep(1)
print("Para começarmos, precisamos de alguns dados: \n")
while True:
    profissional = consulta_service.adicionar_cadastro()
    break

print(f"Bem vindo ao sistema ARIR, {profissional.nome}!")

while True:
    print("O que você gostaria de consultar hoje?")
    escolha = validar_input("""
          1 - Urgência de requalificação
          2 - Cargos Sugeridos
          3 - Tendências de mercado atuais
          4 - Avanço da Inteligência ArtificialÉ
          0 - Sair
""")

    match escolha:
        
        #breve descrição da urgência do cliente com relação ao mercado moderno e IA.
        case 1:
            print(consulta_service.desc_urgencia(profissional))
        #sugestão de 3 cargos em potencial que são mais modernos e atualizados pro mercado atual.
        case 2:
            print(consulta_service.sugestao_cargo(profissional))
        #tendência de mercado para o cargo do cliente.
        case 3:
            print(consulta_service.tendencias_mercado(profissional))
        #alteração de status
        case 4:
            print(consulta_service.avanco_ia(profissional))
        #sai do menu
        case 0:
            print("Saindo..")
            break
        #captura outras escolhas(int) que não são as providenciadas no menu
        case _:
            print("Escolha inválida, por favor tente novamente.")
            continue