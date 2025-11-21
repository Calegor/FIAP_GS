
#serve para validar um input de int e 'levanta' o erro
def validar_input(prompt: str = "") -> int | Exception:
    while(True):
        try:
            return int(input(prompt))
        except ValueError as e:
            #erro a nível de sistema, preferência ao inglês.
            e.args = "Int conversion failed - user likely inputted a string. "

            print("Favor digitar um número.")
            continue