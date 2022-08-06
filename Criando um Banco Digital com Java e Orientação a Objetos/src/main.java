public class main {

	public static void main(String[] args) {
		Cliente jessika = new Cliente();
		jessika.setNome("Jessika");
		
		Conta cc = new ContaCorrente(jessika);
		Conta poupanca = new ContaPoupanca(jessika);

		cc.depositar(1000);
		cc.transferir(500, poupanca);
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
	}

}