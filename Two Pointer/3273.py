import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
arr.sort()

x = int(input())

sum_now = 0
answer = 0
start = 0
end = n-1


while start < end:
    sum_now = arr[start] + arr[end]
    if(sum_now < x):
        start += 1
    elif(sum_now == x):
        answer+=1
        start += 1
    elif(sum_now > x):
        end -= 1

print(answer)