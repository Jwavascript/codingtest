import sys


input = sys.stdin.readline
n, m = map(int, input().split())
alist = list(map(int, input().split()))
pfsum = [0] *  (n+1)

for i in range(1, n+1):
    pfsum[i] = pfsum[i-1] + alist[i-1]


start = 0
end = 0
answer = 0

while(start<=end and end<len(pfsum)):
    cur = pfsum[end] - pfsum[start]
    if(cur == m):
        answer += 1
    if(cur<m):
        end+=1
    if(cur >= m):
        start +=1
    

print(answer)
