#Autoria 1
#Código referente à tarefa "Estoque" da OBI 2023
#Data de criação: 02/06/2023

l1 = [int(x) for x in input().split()]

linhas = list()
for c in range(0, l1[0]):
    novaLinha = [int(x) for x in input().split()]
    linhas.append(novaLinha[:])
    novaLinha.clear()

pedidos = int(input())
cont = 0
for c in range(0, pedidos):
    pedido = [int(x) for x in input().split()]
    if linhas[pedido[0]-1][pedido[1]-1] > 0:
        linhas[pedido[0]-1][pedido[1]-1] -= 1
        cont += 1
print(cont)
