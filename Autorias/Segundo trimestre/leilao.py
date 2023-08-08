N = int(input())
lancesP = list()
lancesV = list()

for c in range(0, N):
    C = str(input())
    lancesP.append(C)
    V = int(input())
    lancesV.append(V)


x = lancesV.index(max(lancesV))
print(lancesP[x])
print(lancesV[x])