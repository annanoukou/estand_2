from connectdb import DataBase


class StreetMarket:

    def getAllStreetMarket(self):
        self.db = DataBase()
        self.conn = self.db.ConnectToDB()
        self.mycursor = self.conn.cursor()
        self.mycursor.execute("SELECT * FROM street_market")
        self.result = self.mycursor.fetchall()
        for x in self.result:
            print(x)
        self.db.CloseConnection()
        return self.result
