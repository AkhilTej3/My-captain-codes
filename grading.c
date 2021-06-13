#include<stdio.h>
int main()
{
    int marks;
    printf("Enter the marks:");
    scanf("%d",&marks);
    if (marks>=85 && marks<=100)
    {
        printf("A grade");
    }
    else
    {
        if(marks>=70 && marks<85)
        {
            printf("B grade");
        }
        else
        {
             if(marks>=55 && marks<70)
             {
                 printf("C grade");
             }
             else
             {
                 if(marks>=40 && marks<55)
                 {
                     printf("D grade");
                 }
                     else
                     {
                         if(marks<40)
                         {
                             printf("GRADE F");
                         }
                     }


             }


        }

    }

}
