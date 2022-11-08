class Library:
    def __init__(self, listOfBooks):
        self.books = listOfBooks
        
    def displayAvailableBooks(self):
        print("Books Present in the library are : ")
        for book in self.books:
            print("\t * "+book)
            
    def borrowBook(self, bookName):
        if bookName in self.books:
            print(f"You have been issued {bookName}")
            self.books.remove(bookName)
            return True
        else:
            print("Sorry, This Book iS already issued")
            return False
    
    def returnBook(self, bookName):
        self.books.append(bookName)
        print("Thanks for returning the book, hope you enjoy")
            

class Student:
   def requestBook(self):
       self.book = input("Enter the of book you want to borrow ")
       return self.book

   def returnBook(self):
       self.book = input("Enter The name of book ")
       return self.book
       

if __name__ == "__main__":
    centralLibrary = Library(["Algo", "Django", "Clrs", "Python", "React"])
    
    student = Student()
    while(True):
        WelComeMsg = '''WelCome To Central Library
        Please Choose a Option :
        1. Listing all the books
        2. Request a book
        3. Return a book
        4. Exit The library'''

        print(WelComeMsg)
        a= int(input("Enter a Choice : "))
        if a==1:
            centralLibrary.displayAvailableBooks()
        elif a==2:
            centralLibrary.borrowBook(student.requestBook())
        elif a==3:
            centralLibrary.returnBook(student.returnBook())
        elif a==4:
            print("Thanks For Choosing Central Library. ")
            exit()
        else:
            print("Invalid Choice !!!! ")