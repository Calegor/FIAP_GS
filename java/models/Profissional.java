package models;

public class Profissional {

    private int urgencia;
    private String nome;
    private String endereco;
    private String contato;
    private String profissao;

    public Profissional(int urgencia, String nome, String endereco, String contato, String profissao) {
        this.urgencia = urgencia;
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
        this.profissao = profissao;
    }

    public int getUrgencia() {
        return urgencia;
    }

    public void setUrgencia(int urgencia) {
        this.urgencia = urgencia;
    }

    public String getNome() {
        return nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public String getContato() {
        return contato;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    @Override
    public String toString() {
        return "Nome: " + nome +
               ", Endereço: " + endereco +
               ", Contato: " + contato +
               ", Profissão: " + profissao +
               ", Urgência: " + urgencia;
    }
}
