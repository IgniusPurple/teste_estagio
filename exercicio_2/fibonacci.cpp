#include<stdio.h>
#include<math.h>
#include<locale.h>
#include<stdlib.h>

main()
{
 setlocale(LC_ALL,"Portuguese");
 
 int num, fib1 = 0, fib2 = 1, nextFib;
   printf("Informe um n�mero: ");
   scanf("%d", &num);
   while (fib2 <= num) {
      nextFib = fib1 + fib2;
      fib1 = fib2;
      fib2 = nextFib;
   }
   if (fib1 == num || fib2 == num) {
      printf("%d pertence � sequ�ncia de Fibonacci.", num);
   } else {
      printf("%d n�o pertence � sequ�ncia de Fibonacci.", num);
   }
   return 0;
}


