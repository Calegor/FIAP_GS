#definição da classe a ser usada
class Profissional():
    def __init__(self, urgencia: int, nome: str, endereco: str, contato: str, profissao: str):
        self.urgencia = urgencia
        self.nome: str = nome
        self.endereco: str = endereco
        self.profissao: str = profissao
        self.contato: str = contato

    #permite que retorne um valor String quando o objeto for printado, ao invés do endereço de memória
    def __repr__(self):
        return f"Nome: {self.nome}, Endereço: {self.endereco}, Contato: {self.contato}, Profissão: {self.endereco}"