class Book:

    def __init__(self, name, year, author):
        self.name = name
        self.year = year
        self.author = author

    
class Ebook(Book):

    def __init__(self, name, year, author, _format):
        super().__init__(name, year, author)

        self._format = _format


ebo = Ebook('River and the source', 2010, 'Margret ogolla', 'Journal')

print(ebo.name)
print(ebo.year)
print(ebo.author)
print(ebo._format)